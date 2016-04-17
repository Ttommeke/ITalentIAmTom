let createCamera = function() {
    let camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );

    camera.position.set(7,5,7);

    camera.rotation.order = 'YXZ';
    camera.rotation.y = 3.14 / 7;
    camera.rotation.x = - 3.14 / 5;

    return camera;
};

let moveCamera = function(delta) {
    let oldCamX = camera.position.x - 2.2;
    let oldCamZ = camera.position.z - 5;

    camera.position.x = oldCamX + (cube.position.x - oldCamX) * delta * 2 + 2.2;
    camera.position.z = oldCamZ + (cube.position.z - oldCamZ) * delta * 2 + 5;
}
