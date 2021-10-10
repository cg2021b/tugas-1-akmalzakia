import * as THREE from './three/three.module.js'
import { OrbitControls } from './three/OrbitControls.js'
import * as dat from './three/dat.gui.module.js'

// Loading
const textureLoader = new THREE.TextureLoader()

const normalTexture = textureLoader.load('/textures/normalMap.png')

// Debug
const gui = new dat.GUI()

// Canvas
/**
 * @type {HTMLCanvasElement} canvas
 */
const canvas = document.querySelector('canvas.webgl')
const parent = document.querySelector('.canvas-container')
canvas.height = parent.clientHeight
canvas.width = parent.clientWidth

// Scene
const scene = new THREE.Scene()

// Objects
// const geometry = new THREE.SphereBufferGeometry(.5, 64, 64);
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const torusKnotGeometry = new THREE.TorusKnotGeometry(7, 0.8, 60, 8, 10, 12);
const sphereGeometry = new THREE.SphereGeometry(15, 32, 16, 0, 6.3, 0, 3.1);
const cylinderGeometry = new THREE.CylinderGeometry(5.8, 5.4, 11, 11, 1, false, 0, 6.3);
const icosahedronGeometry = new THREE.IcosahedronGeometry(10, 0);
const coneGeometry = new THREE.ConeGeometry(9.4, 11, 10, 3, false, 0, 6.3)
const torusGeometry = new THREE.TorusGeometry(9, 3, 12, 52, 6.3)

// Materials

//boxMaterial
const boxMaterial = new THREE.MeshStandardMaterial()
boxMaterial.metalness = 0.7
boxMaterial.roughness = 0.2
boxMaterial.normalMap = normalTexture;

boxMaterial.color = new THREE.Color(0x292929)

//torusKnot material
const torusKnotMaterial = new THREE.MeshNormalMaterial()

//sphere material
const sphereMaterial = new THREE.MeshPhongMaterial()
sphereMaterial.color = new THREE.Color(0xa2ff)
sphereMaterial.specular = new THREE.Color(0xffffff)
sphereMaterial.normalMap = normalTexture

//cylinder material
const cylinderMaterial = new THREE.MeshToonMaterial()
cylinderMaterial.color = new THREE.Color(0xa2ff)
cylinderMaterial.wireframe = true

//icosahedron material
const icosahedronMaterial = new THREE.MeshPhysicalMaterial()
icosahedronMaterial.color = new THREE.Color(0x292929)
icosahedronMaterial.roughness = 0.5
icosahedronMaterial.metalness = 1
icosahedronMaterial.reflectivity = 0.68
icosahedronMaterial.clearcoat  = 0.5
icosahedronMaterial.clearcoatRoughness = 0.22

//cone material
const coneMaterial = new THREE.MeshDepthMaterial()

//torus material
const torusMaterial = new THREE.MeshLambertMaterial()
torusMaterial.color = new THREE.Color(0xff0404)
torusMaterial.emissive = new THREE.Color(0x343ebc)
torusMaterial.vertexColors = true

// Mesh
const mesh = []

const box = new THREE.Mesh(boxGeometry,boxMaterial)
mesh.push(box);

const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
mesh.push(torusKnot)

torusKnot.scale.set(0.05, 0.05, 0.05)
torusKnot.position.set(-2, 0, 0)

const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
mesh.push(sphere)

sphere.scale.set(0.05, 0.05, 0.05)
sphere.position.set(2, 0, 0)

const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)
mesh.push(cylinder)

cylinder.scale.set(0.1, 0.1, 0.1)
cylinder.position.set(2, 2, 0);

const icosahedron = new THREE.Mesh(icosahedronGeometry,icosahedronMaterial);
mesh.push(icosahedron)

icosahedron.scale.set(0.1, 0.1, 0.1)
icosahedron.position.set(-2, 2, 0)

const cone = new THREE.Mesh(coneGeometry, coneMaterial)
mesh.push(cone)

cone.scale.set(0.1, 0.1, 0.1)
cone.position.set(0, 2, 0)

const torus = new THREE.Mesh(torusGeometry, torusMaterial)
mesh.push(torus)

torus.scale.set(0.1, 0.1, 0.1)
torus.position.set(0, 0, -6)


mesh.forEach((m) => scene.add(m))



// Lights

/**
 * @type {HTMLSelectElement} lightSelector
 */
const lights = []

const pointLightFolder = gui.addFolder('Point Light');

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
lights.push(pointLight)

const pointLightHelper1 = new THREE.PointLightHelper(pointLight, 1);
pointLightHelper1.visible = false;
scene.add(pointLightHelper1)

const pointLight2 = new THREE.PointLight(0xff0000, 3)
pointLight2.position.set(-0.86, .53, .27)
pointLight2.intensity = 10
lights.push(pointLight2)

const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 1);
pointLightHelper2.visible = false;
scene.add(pointLightHelper2)

const pointLight3 = new THREE.PointLight(0x4aff, 3)
pointLight3.position.set(2.52, -1.19, -1.65)
pointLight3.intensity = 10
lights.push(pointLight3)

const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, 1)
pointLightHelper3.visible = false;
scene.add(pointLightHelper3)

const pointLightFolder1 = pointLightFolder.addFolder('Point Light 1')
pointLightFolder1.add(pointLight, 'visible')
pointLightFolder1.add(pointLightHelper1, 'visible').name('Helper')

const pointLightFolder2 = pointLightFolder.addFolder('Point Light 2')
pointLightFolder2.add(pointLight2, 'visible')
pointLightFolder2.add(pointLightHelper2, 'visible').name('Helper')

const pointLightFolder3 = pointLightFolder.addFolder('Point Light 3')
pointLightFolder3.add(pointLight3, 'visible')
pointLightFolder3.add(pointLightHelper3,'visible').name('Helper')

const ambientLightFolder = gui.addFolder('Ambient Light')
const ambientLight = new THREE.AmbientLight( 0x404040 , 1);
ambientLight.position.set(0, 4, 0);
lights.push(ambientLight)

ambientLightFolder.add(ambientLight, 'visible')

const hemisphereLightFolder = gui.addFolder('Hemisphere Light')
const hemisphereLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1);
scene.add(hemisphereLight);

const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 5)
hemisphereLightHelper.visible = false
scene.add(hemisphereLightHelper)

hemisphereLightFolder.add(hemisphereLight, 'visible')
hemisphereLightFolder.add(hemisphereLightHelper, 'visible').name('Helper')

const directionalLightFolder = gui.addFolder('Directional Light')
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
directionalLightHelper.visible = false
scene.add(directionalLightHelper)

directionalLightFolder.add(directionalLight, 'visible')
directionalLightFolder.add(directionalLightHelper, 'visible')

const spotLightFolder = gui.addFolder('Spotlight')
const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add( spotLight );

const spotLightHelper = new THREE.SpotLightHelper(spotLight)
spotLightHelper.visible = false
scene.add(spotLightHelper)

spotLightFolder.add(spotLight, 'visible')
spotLightFolder.add(spotLightHelper, 'visible')

lights.forEach((l) => scene.add(l))


/**
 * Sizes
 */
const sizes = {
    width: canvas.width,
    height: canvas.height
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = canvas.width
    sizes.height = canvas.height

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

camera.position.x = 0
camera.position.y = 0
camera.position.z = 10
scene.add(camera)


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = true
controls.autoRotateSpeed = 3

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x090909,1)

/**
 * Animate
 */

// document.addEventListener('mousemove', onDocumentMouseMove)

let mouseX = 0
let mouseY = 0

let targetX = 0
let targetY = 0

const windowX = sizes.width / 2
const windowY = sizes.height / 2

const clock = new THREE.Clock()

// function onDocumentMouseMove (event) {
//     mouseX = (event.clientX - windowX)
//     mouseY = (event.clientY - windowY)
// }

onmousemove = () => {
    mouseX = (event.clientX - windowX)
    mouseY = (event.clientY - windowY)
}

onscroll = () => {
    box.position.y = window.scrollY * .001
}

let speed = 10
let torusOrigin = new THREE.Vector2(torus.position.x, torus.position.y)
function distance(pointA, pointB){
    return Math.sqrt(Math.pow((pointB.x - pointA.x), 2) + Math.pow((pointB.y - pointB.y), 2));
}


const tick = () =>
{
    targetX = mouseX * .001
    targetY = mouseY * .001

    if(distance(torus.position, torusOrigin) > 3){
        speed = -speed
    }

    const elapsedTime = clock.getElapsedTime()

    // Update objects

    mesh.forEach((m) => {
        m.rotation.y = .5 * elapsedTime

        m.rotation.x += .05 * (targetY -m.rotation.x)
        m.rotation.y += .5 * (targetX - m.rotation.y)
        // m.position.z += -.05 * (targetY - m.rotation.x )
    })

    torusKnot.rotation.z += 1

    torus.position.x += 0.01 * speed
    torus.position.y += 0.01 * speed

    // Update Orbital Controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()