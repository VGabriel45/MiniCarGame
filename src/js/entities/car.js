import * as THREE from 'three';
import pickRandom from "../utils/randomPicker";
import getCarFrontTexture from "../textures/carTextures/carFrontTexture";
import getCarSideTexture from "../textures/carTextures/carSideTexture";

const vehicleColors = [0xa52523, 0xbdb638, 0x78b14b];

export default Car = () => {
    const car = new THREE.Group();

    const backWheel = Wheel();
    backWheel.position.x = -18
    car.add(backWheel);

    const frontWheel = Wheel();
    frontWheel.position.x = 18;
    car.add(frontWheel);

    const main = new THREE.Mesh(
        new THREE.BoxBufferGeometry(60, 30, 15),
        new THREE.MeshLambertMaterial({color: pickRandom(vehicleColors)})
    );
    main.position.z = 12;
    car.add(main);

    const carFrontTexture = getCarFrontTexture();
    carFrontTexture.center = new THREE.Vector2(0.5, 0.5);
    carFrontTexture.rotation = Math.PI / 2;

    const carBackTexture = getCarFrontTexture();
    carBackTexture.center = new THREE.Vector2(0.5, 0.5);
    carBackTexture.rotation = -Math.PI / 2;

    const carRightSideTexture = getCarSideTexture();

    const carLeftSideTexture = getCarSideTexture();
    carLeftSideTexture.flipY = false;

    const cabin = new THREE.Mesh(
        new THREE.BoxBufferGeometry(33, 24, 12),
        [
            new THREE.MeshLambertMaterial({map: carFrontTexture}),
            new THREE.MeshLambertMaterial({map: carBackTexture}),
            new THREE.MeshLambertMaterial({map: carLeftSideTexture}),
            new THREE.MeshLambertMaterial({map: carRightSideTexture}),
            new THREE.MeshLambertMaterial({color: 0xffffff}),
            new THREE.MeshLambertMaterial({color: 0xffffff})
        ]
    )
    cabin.position.z = 25.5;
    cabin.position.x = -6;
    car.add(cabin);

    return car;
}

const Wheel = () => {
    const wheel = new THREE.Mesh(
        new THREE.BoxBufferGeometry(12, 33, 12),
        new THREE.MeshLambertMaterial({color: 0x333333})
    )
    wheel.position.z = 6;
    return wheel;
}

