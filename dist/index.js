import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js'
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
const canvas = document.querySelector('canvas.webgl')

import { VRButton } from 'https://unpkg.com/three@0.127.0/examples/jsm/webxr/VRButton.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(3, 3, 3);
const material = new THREE.MeshStandardMaterial( { color: 0x00ffaa } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.set(0,5,0);

const cube2 = new THREE.Mesh( geometry, material );
scene.add( cube2 );
cube2.position.set(10,0,0);

const cube3 = new THREE.Mesh( geometry, material );
scene.add( cube3 );
cube3.position.set(-10,0,0);

const axesHelper = new THREE.AxesHelper( 1 );
scene.add( axesHelper );

const light = new THREE.PointLight( 0xffffff, 1, 0 );
light.position.set( 0, 0, 20 );
scene.add( light );

camera.position.z = 10;

animate();

document.body.appendChild( VRButton.createButton( renderer ) );
renderer.xr.enabled = true;

function animate() {

    renderer.setAnimationLoop( render );
}

function render() {
    const time = performance.now() * 0.0002;
    cube.rotation.x = time * 2;
    cube.rotation.y = time * 3;

    cube2.rotation.x = time * 2;
    cube2.rotation.y = time * 3;

    cube3.rotation.x = time * 2;
    cube3.rotation.y = time * 3;

    renderer.render( scene, camera );
}