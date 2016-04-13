
let WALL_BASE_COLOR = 0xfcc75d;
let TILE_BASE_COLOR = 0xcc9d41;
let BRIDGE_RAIL_COLOR = 0x603a18;
let WATER_COLOR = 0x3690d1;
let GRASS_COLOR = 0x00FF00;
let ROCK_COLOR = 0x776d5e;
let TREE_TRUNK_COLOR = 0x604b18;
let LEAF_COLOR = 0x06b500;

let fadingObjects = [];

let generateMap = function(map) {
    for (let x = 0; x < map.length; x++) {
        for (let z = 0; z < map[x].length; z++) {
            if (map[x][z] == 8) {
                let wallCube = createCube(WALL_BASE_COLOR, -x,0.5,-z, 1,2,1);
                scene.add( wallCube );
            }
            else if (map[x][z] == 9) {
                let waterCube = createCube(WATER_COLOR, -x,-0.2,-z, 3,0.6,3);
                waterCube.material.opacity = 0.4;
                waterCube.material.transparent = true;
                scene.add( waterCube );

                scene.add( createCube(WALL_BASE_COLOR, -x,-0.15,-z, 1,0.7,1) );
                scene.add( createCube(WALL_BASE_COLOR, -x,0.5,-z, 0.3,1,0.3) );
                scene.add( createCube(WALL_BASE_COLOR, -x,1.1,-z, 0.6,0.2,0.6) );
                scene.add( createCube(WALL_BASE_COLOR, -x,1.35,-z, 0.2,0.3,0.2) );
            }
            else if (map[x][z] == 10) {
                let wallCube = createCube(WALL_BASE_COLOR, -x,-0.15,-z, 1,0.7,1);
                scene.add( wallCube );
            }
            else if (map[x][z] == 11) {
                scene.add( createCube(BRIDGE_RAIL_COLOR, -x,-0.15,-z, 0.3,0.7,0.3) );

                if (map[x-1][z] >= 8) {
                    scene.add( createCube(BRIDGE_RAIL_COLOR, -x+0.35,+0.1,-z, 0.35,0.2,0.3) );
                }
                if (map[x+1][z] >= 8) {
                    scene.add( createCube(BRIDGE_RAIL_COLOR, -x-0.35,+0.1,-z, 0.35,0.2,0.3) );
                }
                if (map[x][z-1] >= 8) {
                    scene.add( createCube(BRIDGE_RAIL_COLOR, -x,+0.1,-z+0.35, 0.3,0.2,0.35) );
                }
                if (map[x][z+1] >= 8) {
                    scene.add( createCube(BRIDGE_RAIL_COLOR, -x,+0.1,-z-0.35, 0.3,0.2,0.35) );
                }

            }
            else if (map[x][z] == 12) {
                scene.add( createCube(WALL_BASE_COLOR, -x,-0.15,-z, 1,0.7,1) );
                scene.add( createCube(WALL_BASE_COLOR, -x,1.3,-z, 1,0.4,1) );
            }
            else if (map[x][z] == 13) {
                scene.add( createCube(WALL_BASE_COLOR, -x,1.4,-z, 1,0.2,1) );
            }
            else if (map[x][z] == 14) {
                let cubeB = createCube(BRIDGE_RAIL_COLOR, -x,-1,-z, 1,1,1);
                cubeB.material.transparent = true;
                cubeB.material.opacity = 0;
                fadingObjects.push( cubeB );
                scene.add( cubeB );

                let displayCube = () => { cubeB.material.wantedOpacity = 1; };

                eventMap.push(new eventMapItem( x, z-1, displayCube, undefined));
                eventMap.push(new eventMapItem( x-1, z-1, displayCube, undefined));
                eventMap.push(new eventMapItem( x+1, z-1, displayCube, undefined));
            }
            else if (map[x][z] == 15) {
                for (let i = 0; i < 7; i++) {
                    scene.add( createCube(WATER_COLOR, -x - 0.5 + Math.random(),Math.random(),-z -0.5 + Math.random(), Math.random(),Math.random(),Math.random()) );
                }
            }
            else if (map[x][z] == 4) {
                scene.add( createCube(TREE_TRUNK_COLOR, -x,0.5,-z, 0.5,2,0.5) );
                scene.add( createCube(LEAF_COLOR, -x,2,-z, 1.3,1.3,1.3) );
            }
            else if (map[x][z] == 3) {
                let bigRockCube = createCube(ROCK_COLOR, -x-0.3,-0.43,-z-0.3, 0.3,0.14,0.2);
                scene.add( bigRockCube );
                let smallBigRockCube = createCube(ROCK_COLOR, -x+0.2,-0.45,-z-0.2, 0.2,0.1,0.20);
                scene.add( smallBigRockCube );
                let smallRockCube = createCube(ROCK_COLOR, -x-0.15,-0.46,-z+0.3, 0.12,0.08,0.21);
                scene.add( smallRockCube );
            }

            if (map[x][z] == 14) {
                //displayNothing
            }
            else if (map[x][z] >= 7) {
                let wallCube = createCube(TILE_BASE_COLOR, -x,-1,-z, 1,1,1);
                scene.add( wallCube );
            }
            else if (map[x][z] > 0) {
                let wallCube = createCube(GRASS_COLOR, -x,-1,-z, 1,1,1);
                scene.add( wallCube );
            }
        }
    }
}

let createTotem = function(skill, power, x, z) {
    let skillMessage = createTotemMessage(skill);
    skillMessage.position.set(x - 0.2* skill.length/2 - 0.1, power,z);
    skillMessage.material.opacity = 1;
    scene.add(skillMessage);

    scene.add( createCube(WALL_BASE_COLOR, x, -0.4,z, 1.2,0.2,1.2) );
    scene.add( createCube(WALL_BASE_COLOR, x, -0.2,z, 1,0.1,1) );
    let powerCube = createCube(WATER_COLOR, x, power/2 - 0.2,z, 0.8,power,0.8);
    powerCube.material.transparent = true;
    powerCube.material.opacity = 0.5
    scene.add( powerCube );
    scene.add( createCube(WALL_BASE_COLOR, x, power - 0.2,z, 1,0.4,1) );
};

function eventMapItem(x, z, eventEnter, eventExit) {
    this.x = x;
    this.z = z;
    this.eventEnter = eventEnter;
    this.eventExit = eventExit;
}

let map = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,10,10,10,10, 1, 0, 0, 0, 1, 1, 4, 0, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 1, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,10, 7, 7, 7, 7,10, 1, 1, 3, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 4, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 1, 1, 1, 7, 7, 7, 7, 7, 7, 3, 1, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 1, 7, 7, 1, 1, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1,14,14,14,14,14,14,14, 1, 7, 7, 7, 7, 7, 7, 1, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 7, 7, 1, 1,10, 7, 7, 7, 7,10, 1, 3, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 7, 7, 7, 7, 1, 1, 1, 7, 7, 7, 7, 7, 7, 1,14,14,14,14,14,14,14, 1, 7, 7, 7, 7, 7, 7, 1, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 7, 1, 1, 1, 1,10,10,10,10, 1, 0, 0, 0, 0, 0, 4, 3, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 7, 7, 3, 1, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 7, 7, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 7, 7, 7, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 4, 1, 0, 0],
    [ 8, 8, 8,12,12, 8, 8, 8, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 7, 1, 4, 0, 0, 0, 0, 0, 0, 0, 1, 4, 1, 1, 4, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 3, 4, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [ 8, 7, 7, 7, 7, 7, 7, 8, 0, 1, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 7, 4, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 3, 1, 1, 1, 4, 1, 0, 0, 0, 0, 0, 1, 1],
    [ 8, 7, 7, 7, 7, 7, 7, 8, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 7, 7, 3, 1, 0, 0, 0, 0, 0, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 0, 0, 0, 0, 0],
    [ 8, 7, 7, 7, 7, 7, 7,13, 7, 7, 7, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 7, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 4, 7, 7, 7, 7, 1, 1, 1, 1, 4, 1, 0, 0],
    [ 8, 7, 7, 7, 7, 7, 7,13, 7, 7, 7, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 7, 7, 1, 0, 0, 1, 0, 0, 1, 4, 1, 3, 1, 4, 7, 7, 7, 7, 7, 7, 7, 7, 1, 3, 1, 1, 0, 0],
    [ 8, 7, 7, 7, 7, 7, 7, 8, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 7, 1, 0, 1, 4, 1, 1, 1, 1, 1, 4, 1, 7, 7, 7, 7, 1, 1, 4, 7, 7, 7, 4, 1, 1, 0, 0],
    [ 8, 7, 7, 7, 7, 7, 7, 8, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 7, 7, 7, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 7, 7, 7, 1, 4, 1, 1, 1, 1, 7, 7, 1, 1, 4, 1, 0],
    [ 8, 8, 8,12,12, 8, 8, 8, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 7, 7, 1, 1, 1, 3, 1,15, 1, 1, 1, 4, 7, 7, 7, 3, 1, 1, 1, 4, 1, 1, 7, 7, 7, 3, 1, 1, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 7, 7, 4, 1,15, 1, 1, 1, 1, 1, 3, 7, 7, 7, 1, 1, 4, 1, 0, 0, 1, 1, 1, 7, 7, 1, 1, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4, 1, 7, 7, 7, 7, 1, 1, 1, 1, 1, 7, 7, 7, 7, 1, 4, 0, 1, 0, 0, 0, 0, 1, 1, 7, 7, 1, 1, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 4, 7, 7, 7, 1, 1, 3, 1, 1, 7, 7, 7, 7, 1, 1, 0, 0, 0, 0, 0, 0, 0,11, 7, 7,11, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 4, 0, 0, 0, 0, 0, 0, 0,11, 7, 7,11, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 1, 1,15, 3, 1, 4, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,11, 7, 7,11, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,11, 7, 7,11, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 1, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11, 7, 7,11, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 7, 7, 7, 1, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11, 7, 7,11, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 1, 7, 7,10,10,10, 7, 7, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11, 7, 7,11, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 1, 7,10, 7, 7, 7,10, 7, 7,11,11,11,11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 7, 3, 1, 0],
    [ 0, 0, 0, 0, 0, 0, 1, 7,10, 7, 9, 7,10, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 7, 7, 1, 1, 0],
    [ 0, 0, 0, 0, 0, 0, 1, 7,10, 7, 7, 7,10, 7, 7,11,11,11,11, 7, 7, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 7, 1, 1],
    [ 0, 0, 0, 0, 0, 0, 1, 7, 7,10,10,10, 7, 7, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 7, 7, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 7, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 7, 7, 7, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 7, 7, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 7, 7, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 7, 7, 1, 1, 0, 1, 1, 1,11, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,11, 0, 0, 1, 7, 7, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 4, 1, 0, 0, 1, 1, 7, 7, 7, 1, 1, 1, 1, 1,11, 1, 1, 7, 7, 7, 1, 7, 7, 7, 1, 7, 7, 7, 1, 7, 7, 7, 1, 7, 7, 7, 1, 1,11, 0, 1, 7, 7, 7, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 3, 1, 1, 7, 7, 1, 1, 1, 1, 1,11, 1, 1, 7, 0, 7, 1, 7, 0, 7, 1, 7, 0, 7, 1, 7, 0, 7, 1, 7, 0, 7, 1, 1,11, 1, 3, 7, 7, 1, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 7, 1, 1, 1, 1, 1,11, 1, 1, 7, 7, 7, 1, 7, 7, 7, 1, 7, 7, 7, 1, 7, 7, 7, 1, 7, 7, 7, 1, 1,11, 1, 1, 7, 7, 1, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 7, 7, 7, 1, 1, 1, 1, 0, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1,11, 1, 7, 7, 7, 1, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1,11, 1, 1, 1, 1, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,11, 1, 1, 7, 7, 7, 1, 7, 7, 7, 1, 7, 7, 7, 1, 7, 7, 7, 1, 7, 7, 7, 1, 1,11, 1, 1, 1, 1, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1,11, 1, 1, 7, 0, 7, 1, 7, 0, 7, 1, 7, 0, 7, 1, 7, 0, 7, 1, 7, 0, 7, 1, 1,11, 0, 1, 1, 4, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,11, 1, 1, 7, 7, 7, 1, 7, 7, 7, 1, 7, 7, 7, 1, 7, 7, 7, 1, 7, 7, 7, 1, 1,11, 0, 0, 3, 1, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0,11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,11],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
];

let eventMap = [];

let initMap = function() {
    generateMap(map);
}