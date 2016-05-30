'use strict';

let createCube = function(colorIn, posX, posY, posZ, sizeX, sizeY, sizeZ) {
    let geometry = new THREE.BoxGeometry( sizeX, sizeY, sizeZ );
    let material =  new THREE.MeshLambertMaterial({color: colorIn});
    let cube = new THREE.Mesh( geometry, material );
    cube.position.set(posX, posY, posZ);

    return cube;
};

let moveCube = function(delta) {
    let posX = cube.position.x;
    let posZ = cube.position.z;
    let wanX = cube.wantedposition.x;
    let wanZ = cube.wantedposition.z;
    let deltaX = (wanX - posX);
    let deltaZ = (wanZ - posZ);

    cube.position.x = posX + deltaX * delta * 20;
    cube.position.z = posZ + deltaZ * delta * 20;

    let deltaAbs = Math.abs(deltaZ);
    if (deltaAbs < Math.abs(deltaX)) {
        deltaAbs = Math.abs(deltaX);
    }

    let scaleY = - 4 * Math.pow(deltaAbs,2) + 4 * deltaAbs + 1;

    cube.scale.y = scaleY;
    cube.scale.x = 1 / scaleY;
    cube.scale.z = 1 / scaleY;
    cube.position.y = scaleY*2 - 2;
}

let kazouModeEnabled = false;
let oldHemiIntensity = 0;
let oldSunIntensity = 0;

let startKazouMode = function() {
    if (!kazouModeEnabled) {
        oldSunIntensity = sunLight.intensity;
        oldHemiIntensity = hemisphereLight.intensity;
        sunLight.intensity = 0.2;
        hemisphereLight.intensity = 0;
        blueLight.intensity = 1;
        kazouModeEnabled = true;
        audio.play();
    }
};
let stopKazouMode = function() {
    if (kazouModeEnabled) {
        sunLight.intensity = oldSunIntensity;
        hemisphereLight.intensity = oldHemiIntensity;
        kazouModeEnabled = false;
        redLight.intensity = 0;
        greenLight.intensity = 0;
        blueLight.intensity = 0;
        audio.pause();
    }
}

let totalDanceTime = 0;

let danceCube = function(delta) {

    if (kazouModeEnabled) {
        let f = totalDanceTime*3.14*128/60;

        let scaleY = 1 + Math.sin(f*2)/2;
        cube.scale.y = scaleY;
        cube.scale.x = 1 / (scaleY);
        cube.scale.z = 1 / (scaleY);
        cube.position.y = scaleY*0.6 - 0.5;

        if (f/2 % 3 < 1){
            redLight.intensity = 0;
            greenLight.intensity = 0;
            blueLight.intensity = 1;
        }
        else if (f/2 % 3 < 2){
            redLight.intensity = 0;
            greenLight.intensity = 1;
            blueLight.intensity = 0;
        }
        else if (f/2 % 3 < 3){
            redLight.intensity = 1;
            greenLight.intensity = 0;
            blueLight.intensity = 0;
        }

        totalDanceTime += delta;
    }

}

let checkCubeCollision = function(map,x,z) {
    let xToUse = -x;
    let zToUse = -z;

    if (xToUse < map.length && zToUse < map[xToUse].length && xToUse >= 0 && zToUse >= 0
        && (map[xToUse][zToUse] == 1 || map[xToUse][zToUse] == 3 || map[xToUse][zToUse] == 7
         || map[xToUse][zToUse] == 13 || map[xToUse][zToUse] == 14)) {
        return false;
    }
    else {
        return true;
    }
}

let checkEventEnter = function( map, x, z, oldX, oldZ) {
    let xToUse = Math.abs(x);
    let zToUse = Math.abs(z);
    let oldXToUse = Math.abs(oldX);
    let oldZToUse = Math.abs(oldZ);

    for (let i = 0; i < map.length; i++) {
        if (map[i].x == xToUse && map[i].z == zToUse && map[i].eventEnter != undefined) {
            map[i].eventEnter();
        }
        if (map[i].x == oldXToUse && map[i].z == oldZToUse && map[i].eventExit != undefined) {
            map[i].eventExit();
        }
    }
}
