import * as THREE from './three/three.module.js'
import { OrbitControls } from './three/OrbitControls.js'
import { EXRLoader } from './three/loaders/EXRLoader.js'
import * as dat from './three/dat.gui.module.js'
import { GLTFLoader } from './three/loaders/GLTFLoader.js'


// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

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
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

let exrCubeRenderTarget, exrBackground;
let newEnvMap;
let gltfResource;



const gltfLoader = new GLTFLoader();
gltfLoader.load(
    'assets/Drill/Drill_01_4k.gltf',
    function(gltf) {
        gltf.scene.traverse((child) => {
            if(child.isMesh){
                child.geometry.center();
            }
        })
        gltf.scene.scale.set(10, 10, 10);
        scene.add(gltf.scene);

    },

    function(xhr){
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },

    function(error){
        console.log('An error happened');
    }
);

const cubeTextureLoader = new THREE.CubeTextureLoader();
const texture = cubeTextureLoader.load([
    'assets/studio_cube_map/px.png',
    'assets/studio_cube_map/nx.png',
    'assets/studio_cube_map/py.png',
    'assets/studio_cube_map/ny.png',
    'assets/studio_cube_map/pz.png',
    'assets/studio_cube_map/nz.png',

]);

{
    const loader = new THREE.TextureLoader()
    const diffMap = loader.load('assets/rock/textures/aerial_rocks_04_diff_4k.jpg');
    const roughMap = loader.load('assets/rock/textures/aerial_rocks_04_rough_4k.jpg');
    const normalMap = loader.load('assets/rock/textures/aerial_rocks_04_nor_gl_4k.jpg');
    const geo = new THREE.SphereGeometry(1, 32, 16);
    const mat = new THREE.MeshStandardMaterial({
        map: diffMap,
        roughnessMap: roughMap,
        normalMap: normalMap,
        
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
    mesh.position.set(2, 2, 2);
}
scene.background = texture;

const light = new THREE.HemisphereLight( 0x443333, 0x222233, 5);
scene.add(light);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 5
scene.add(camera)

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Raycast
 */


/**
 * Animate
 */

const clock = new THREE.Clock()


const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    // Update Orbital Controls

    controls.update();
    // Render

    renderer.render(scene, camera);
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()