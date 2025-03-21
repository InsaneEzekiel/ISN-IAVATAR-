
import * as THREE from 'https://cdn.skypack.dev/three';
import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const loader = new GLTFLoader();
loader.load('models/avatar.glb', (gltf) => {
    const model = gltf.scene;
    model.position.set(0, -1, 0);
    scene.add(model);
});

const light = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(light);

camera.position.z = 2;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
