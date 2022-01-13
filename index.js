import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js'
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
const canvas = document.querySelector('canvas.webgl')

import { VRButton } from 'https://unpkg.com/three@0.127.0/examples/jsm/webxr/VRButton.js';

// Scene
const scene = new THREE.Scene()

const textureLoader = new THREE.TextureLoader()
const myTexture = textureLoader.load('coolTex.jpg')

// Object
const geometry = new THREE.BoxGeometry(3,3,3)
const material = new THREE.MeshBasicMaterial({
    map: myTexture
})
const boxMesh = new THREE.Mesh(geometry,material)
scene.add(boxMesh)
// scene.add(sphereMesh)
boxMesh.position.x = 0
boxMesh.position.y = 0.8
geometry.center()
// Sizes
const sizes = {
    width:window.innerWidth,
    height:window.innerHeight
}

// Renderer gets updated each time window is resized
window.addEventListener('resize', onWindowResize);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}

// Camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)

controls.enableZoom = false;
controls.enableDamping = true

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
})
renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))

document.body.appendChild( VRButton.createButton( renderer ) );
renderer.xr.enabled = true;

controller = renderer.xr.getController( 0 );

renderer.setAnimationLoop( function () {

	renderer.render( scene, camera );

} );