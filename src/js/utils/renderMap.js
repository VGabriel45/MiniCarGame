import * as THREE from 'three';
import getLineMarkings from "../textures/map/getLineMarkings";
import getLeftIsland from "../textures/map/getLeftIsland";

export default renderMap = (mapWidth, mapHeight, scene) => {
    // Plane with line markings
    const lineMarkingsTexture = getLineMarkings(mapWidth, mapHeight);
    const planeGeometry = new THREE.PlaneBufferGeometry(mapWidth, mapHeight);
    const planeMaterial = new THREE.MeshLambertMaterial({
        // color: 0x546e90
        map: lineMarkingsTexture
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);

    const islandLeft = getLeftIsland();
    
    const fieldGeometry = new THREE.ExtrudeBufferGeometry(
        [islandLeft],
        {depth: 6, bevelEnabled: false}
    );

    const fieldMesh = new THREE.Mesh(
        fieldGeometry,
        [
            new THREE.MeshLambertMaterial({color: 0x67c240}),
            new THREE.MeshLambertMaterial({color: 0x23311c})
        ]
    );
    scene.add(fieldMesh);

}