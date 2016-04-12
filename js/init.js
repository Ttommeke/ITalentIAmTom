'use strict';

let scene = new THREE.Scene();
let camera = createCamera();

var clock = new THREE.Clock;

let renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0x2ad3d6, 1 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let cube = createCube(0x0000AA, -3,0,-84, 0.8,1.2,0.8);
cube.wantedposition = { x: cube.position.x, z: cube.position.z}
scene.add(cube);

let fontLoader = new THREE.FontLoader();
fontLoader.load( "js/libs/MineCrafter.js", loadFont, undefined, undefined );

initMap();
initLights();

clock.getDelta();
let render = function () {
    requestAnimationFrame( render );

    let delta = clock.getDelta();

    if (delta > 1) {
        delta = 1;
    }

    //let clouds = [];
    //clouds.push( createCube( 0xFFFFFF, 0, 0, -84, 5,5,5) );
    //scene.add(clouds[0]);

    moveCamera(delta);
    moveCube(delta);
    danceCube(delta);
    objectFade(delta, messages );
    objectFade(delta, fadingObjects );
    //moveObjectsLeft(delta * 3, clouds);

    renderer.render(scene, camera);
};

let audio = new Audio('rartyRock.mp3');

render();
