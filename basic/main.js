import * as THREE from "three";

// create a scene, that will hold all our elements such as objects, cameras and lights.
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// add a camera so we can view the scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z=5;

// creat and add a cube object

const geometory = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color: '468585', emissive: '468585'});
const cube = new THREE.Mesh(geometory, material);
scene.add(cube);

// add a light
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

//setup the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// render the scene
// animate the scene 

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera); 
}
animate();
