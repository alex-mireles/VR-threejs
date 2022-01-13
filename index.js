import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js'
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
const canvas = document.querySelector('canvas.webgl')

import { VRButton } from 'https://unpkg.com/three@0.127.0/examples/jsm/webxr/VRButton.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

animate();

document.body.appendChild( VRButton.createButton( renderer ) );
renderer.xr.enabled = true;

function animate() {

    renderer.setAnimationLoop( render );
}

function render() {
    const time = performance.now() * 0.0002;
    cube.rotation.x = time * 2;
    cube.rotation.y = time * 5;

    renderer.render( scene, camera );
}