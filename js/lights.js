'use strict';

let hemisphereLight = undefined;
let sunLight = undefined;
let greenLight = undefined;
let redLight = undefined;
let blueLight = undefined;

let initLights = function() {
    sunLight = new THREE.DirectionalLight( 0xffffff, 1 );
    sunLight.position.set( 25, 50, -10 );
    scene.add( sunLight );
    redLight = new THREE.PointLight( 0xff0000, 0, 100);
    redLight.position.set( -5, 3, -51 );
    scene.add( redLight );
    greenLight = new THREE.PointLight( 0x00ff00, 0, 100 );
    greenLight.position.set( 0, 3, -51 );
    scene.add( greenLight );
    blueLight = new THREE.PointLight( 0x0000ff, 0, 100 );
    blueLight.position.set( 0, 3, -56 );
    scene.add( blueLight );

    hemisphereLight = new THREE.HemisphereLight( 0xffffff, 0x0000AA, 0.7 );
    scene.add( hemisphereLight );
};
