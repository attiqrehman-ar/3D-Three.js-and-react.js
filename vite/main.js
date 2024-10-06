import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// Get the canvas element
const canvas = document.getElementById('canvas'); // Use just 'canvas', not an object

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// Mesh
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: "#468585" });
const dodecahedron = new THREE.Mesh(geometry, material);

const BoxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const BoxMaterial = new THREE.MeshStandardMaterial({ color: '#B4B4B3', emissive: "#B4B4B3" });
const box = new THREE.Mesh(BoxGeometry, BoxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// Light
const light = new THREE.SpotLight(0x006769, 100); // Pass parameters directly
light.position.set(1, 1, 1);
scene.add(light);

// Camera (missing in the original code)
const camera = new THREE.PerspectiveCamera(
  75, // Field of View
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.5;
controls.enableZoom = true;
controls.enablePan = true;

// animation
function animate() {
  requestAnimationFrame(animate);
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  box.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}
// resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/ window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);    
})

animate();