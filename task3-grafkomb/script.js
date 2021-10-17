import * as THREE from './three/three.module.js'
import { OrbitControls } from './three/OrbitControls.js'
import * as dat from './three/dat.gui.module.js'

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );

// Materials

const material = new THREE.MeshBasicMaterial()
material.color = new THREE.Color(0xff0000)

// Mesh
let objects = [];
const maxObject = 50;
const colorList = [
    'red',
    'green',
    'yellow',
    'white',
    'grey',
    'cyan'
]

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const maxArea = 10;
const minArea = -10;
const rangeArea = maxArea - minArea;

function addObjects(){
    const color = colorList[Math.floor(Math.random() * (colorList.length))];
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
        color: color
    })
    const mesh = new THREE.Mesh(geometry, material);

    let x = clamp((Math.random() * rangeArea) - rangeArea/2, minArea, maxArea);
    let y = clamp((Math.random() * rangeArea) - rangeArea/2, minArea, maxArea);
    let z = clamp((Math.random() * rangeArea) - rangeArea/2, minArea, maxArea);

    mesh.position.set(x, y, z);

    objects.push(mesh);
    scene.add(mesh);
    
}

for(let i = 0; i < maxObject; i++){
    addObjects();
}

// Lights

const skyColor = 0xB1E1FF;  // light blue
const groundColor = 0xB97A20;  // brownish orange
const intensity = 1;
const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
scene.add(light);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 9
camera.position.y = 3
camera.position.z = 20
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Raycast
 */

 const raycaster = new THREE.Raycaster();
 const mouse = new THREE.Vector2();
 
 function onMouseMove(event){
     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
 }

 window.addEventListener('mousemove', onMouseMove, false);
 window.addEventListener('click', selectObject);

/**
 * Animate
 */

let hovered;
let selected;

function hover(){
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, false);
    
    if(intersects.length > 0){
        if(hovered != intersects[0].object){
            if(hovered){
                hovered.material.emissive.setHex(hovered.currentHex);
            }

            hovered = intersects[0].object;
            hovered.currentHex = hovered.material.emissive.getHex();
            hovered.material.emissive.setHex(0xff0000);
        }
    }
    else{
        if(hovered){
            hovered.material.emissive.setHex(hovered.currentHex);
        }

        hovered = null;
    }
}

function animateSelect(){
    selected.rotation.x += 0.05;
    selected.rotation.y += 0.01;
    selected.rotation.z += 0.01;
}

function selectObject(){
    const intersects = raycaster.intersectObjects(scene.children, false);
    if(intersects.length == 0){
        return;
    }
    
    if(selected){
        if(selected === intersects[0].object){
            selected = null;
            return;
        }
        const first = selected.material.color.getHex();
        const second = intersects[0].object.material.color.getHex();
        if(matchColor(first, second)){
            calculateScore();
            disposeObject(selected);
            disposeObject(intersects[0].object);
        }
        
        selected = null;
    }
    else{
        selected = intersects[0].object;
    }
}

function matchColor(col1, col2){
    if(col1 === col2){
        return true;
    }
    return false;
}

function disposeObject(obj){
    objects = objects.filter((v) => v !== obj)
    obj.geometry.dispose();
    obj.material.dispose();
    scene.remove(obj);
    renderer.renderLists.dispose();
    console.log(objects.length);
}

const clock = new THREE.Clock()


const scoreElement = document.querySelector('#score');
const highScoreElement = document.querySelector('#highscore');
const basePoint = 100;

let currScore = 0;
let highScore = 0;

function calculateScore(){
    currScore += basePoint + (basePoint * speed * 100);
    scoreElement.innerHTML = currScore;
}

const baseSpeed = 0.002;
const maxSpeed = 0.03;
let speed = 0.002;
let delta = 0;
let inGame = false;

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    // Update Orbital Controls
    controls.update()

    if(objects.length < maxObject){
        inGame = true;
        delta += speed;
        if(delta > 1){
            addObjects();
            console.log(`Objects added, speed = ${speed}`);
            delta = 0;
            if(speed <= maxSpeed){
                speed += baseSpeed;
            }
        }
    }
    else{
        if(inGame){
            if(!alert('Game Over!')) inGame = false; 
        }
        delta = 0;
        speed = baseSpeed;
        if(currScore > highScore){
            highScore = currScore;
            highScoreElement.innerHTML = highScore;
        }

        currScore = 0;
        scoreElement.innerHTML = currScore;

    }

    // Render
    hover()
    if(selected){
        animateSelect(elapsedTime);
    }
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()