'use strict';

let minecrafterFont = undefined;

let loadFont = function(myFont) {
    minecrafterFont = myFont;

    initMessages();
};

let messages = [];

let createMessage = function(text) {
    let geometry = new THREE.TextGeometry(text, {
            font: minecrafterFont,
            size: 0.4,
            height: 0.2
        });
    let material = new THREE.MeshLambertMaterial({color: 0x6a6a6b});
    material.opacity = 0;
    material.transparent = true;
    let textM = new THREE.Mesh( geometry, material );

    return textM;
};

let createTotemMessage = function(text) {
    let geometry = new THREE.TextGeometry(text, {
            font: minecrafterFont,
            size: 0.2,
            height: 0.1
        });
    let material = new THREE.MeshLambertMaterial({color: 0xb29060});
    let textM = new THREE.Mesh( geometry, material );

    return textM;
};

let objectFade = function(delta, messages) {
    for (let i = 0; i < messages.length; i++) {
        let deltaOpacity = messages[i].material.wantedOpacity - messages[i].material.opacity;

        if (deltaOpacity > 0.05) {
            messages[i].material.opacity += delta;
        }
        else if (deltaOpacity < -0.05) {
            messages[i].material.opacity -= delta;
        }
        else {
            messages[i].material.opacity = Math.round(messages[i].material.opacity);
        }
    }
};

let initMessages = function() {

    messages.push(createMessage('I am Tom!'));
    messages[0].position.set(-20,-0,-8);
    messages[0].rotation.y = 3.14/2;
    scene.add(messages[0]);
    eventMap.push(new eventMapItem( 11, 7, () => { showMessage(0) }, undefined));
    eventMap.push(new eventMapItem( 12, 7, () => { showMessage(0) }, undefined));
    eventMap.push(new eventMapItem( 18, 11, undefined, () => { hideMessage(0); showMessage(1); showMessage(2); }));
    eventMap.push(new eventMapItem( 18, 10, undefined, () => { hideMessage(0); showMessage(1); showMessage(2); }));
    eventMap.push(new eventMapItem( 18, 9, undefined, () => { hideMessage(0); showMessage(1); showMessage(2); }));


    messages.push(createMessage('And this is'));
    messages[1].position.set(-24,1.6,-16);
    scene.add(messages[1]);
    messages.push(createMessage('my mind...'));
    messages[2].position.set(-24,1,-16);
    scene.add(messages[2]);
    //eventMap.push(new eventMapItem( 8, 11, () => { showMessage(1); showMessage(2); }, undefined));
    //eventMap.push(new eventMapItem( 8, 12, () => { showMessage(1); showMessage(2); }, undefined));
    eventMap.push(new eventMapItem( 26, 18, undefined, () => { hideMessage(1); hideMessage(2); }));


    messages.push(createMessage('Spare Time Forest'));
    messages[3].position.set(-24, 1, -63);
    scene.add(messages[3]);
    showMessage(3);

    messages.push(createMessage('Kazou zone'));
    messages[4].position.set(-5, 2, -52);
    scene.add(messages[4]);
    showMessage(4);

    messages.push(createMessage('Experiment'));
    messages[5].position.set(-20, 1.6, -45);
    messages[5].rotation.y = 3.14/2;
    scene.add(messages[5]);
    showMessage(5);
    messages.push(createMessage('zone'));
    messages[6].position.set(-20, 1, -45);
    messages[6].rotation.y = 3.14/2;
    scene.add(messages[6]);
    showMessage(6);

    messages.push(createMessage('In my'));
    messages[7].position.set(-3.5, -0.5, -61);
    messages[7].rotation.x = -3.14/2;
    scene.add(messages[7]);
    showMessage(7);
    messages.push(createMessage('mind'));
    messages[8].position.set(-3.5, -0.5, -60);
    messages[8].rotation.x = -3.14/2;
    scene.add(messages[8]);
    showMessage(8);

    messages.push(createMessage('Leaving the'));
    messages[9].position.set(-5, 0.6, -64);
    messages[9].rotation.y = 3.14/2;
    scene.add(messages[9]);
    showMessage(9);
    messages.push(createMessage('comfort zone'));
    messages[10].position.set(-5, 0, -64);
    messages[10].rotation.y = 3.14/2;
    scene.add(messages[10]);
    showMessage(10);

    messages.push(createMessage('Is'));
    messages[11].position.set(-4.5, -0.5, -84);
    messages[11].rotation.x = -3.14/2;
    scene.add(messages[11]);
    showMessage(11);
    messages.push(createMessage('easy!'));
    messages[12].position.set(-4.5, -0.5, -83);
    messages[12].rotation.x = -3.14/2;
    scene.add(messages[12]);
    showMessage(12);

    messages.push(createMessage('Learn more'));
    messages[13].position.set(-6, 1.3, -100);
    scene.add(messages[13]);
    showMessage(13);
    messages.push(createMessage('about Tom'));
    messages[14].position.set(-6, 0.7, -100);
    scene.add(messages[14]);
    showMessage(14);
    messages.push(createMessage('here!'));
    messages[15].position.set(-6, 0.1, -100);
    scene.add(messages[15]);
    showMessage(15);

    messages.push(createMessage('The end.'));
    messages[16].position.set(-6, 2.2, -100);
    scene.add(messages[16]);
    showMessage(16);

    messages.push(createMessage('Good for building'));
    messages[17].position.set(-6, -0.5, -86);
    messages[17].rotation.x = -3.14/2;
    messages[17].rotation.z = 3.14/2;
    scene.add(messages[17]);
    showMessage(17);

    messages.push(createMessage('new connections!'));
    messages[18].position.set(-5, -0.5, -86);
    messages[18].rotation.x = -3.14/2;
    messages[18].rotation.z = 3.14/2;
    scene.add(messages[18]);
    showMessage(18);


    messages.push(createMessage('(work in progress)'));
    messages[19].position.set(-6, -0.5, -100);
    scene.add(messages[19]);
    showMessage(19);

    eventMap.push(new eventMapItem(2,52,()=>{ startKazouMode(); }, undefined));
    eventMap.push(new eventMapItem(3,52,()=>{ startKazouMode(); }, undefined));
    eventMap.push(new eventMapItem(2,55,()=>{ startKazouMode(); }, undefined));
    eventMap.push(new eventMapItem(3,55,()=>{ startKazouMode(); }, undefined));

    eventMap.push(new eventMapItem(2,51,()=>{ stopKazouMode(); }, undefined));
    eventMap.push(new eventMapItem(3,51,()=>{ stopKazouMode(); }, undefined));
    eventMap.push(new eventMapItem(2,56,()=>{ stopKazouMode(); }, undefined));
    eventMap.push(new eventMapItem(3,56,()=>{ stopKazouMode(); }, undefined));

    createTotem('Skill', 2, -37, -38);
    createTotem('Totems', 2, -34, -38);

    createTotem('Java', 3, -39, -42);
    createTotem('C#', 3, -32, -42);

    createTotem('SPRING', 2, -39, -46);
    createTotem('Javascript', 2.5, -32, -46);

    createTotem('OpenGL/WebGL', 2.5, -39, -50);
    createTotem('NodeJS', 2.5, -32, -50);

    createTotem('Python', 2, -39, -54);
    createTotem('OpenCV', 2, -32, -54);

    createTotem('PHP', 2, -39, -58);
    createTotem('Angular 2', 2, -32, -58);
}

let showMessage = function(id) {
    messages[id].material.wantedOpacity = 1;
}
let hideMessage = function(id) {
    messages[id].material.wantedOpacity = 0;
}
