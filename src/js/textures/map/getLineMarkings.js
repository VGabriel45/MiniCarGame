import * as THREE from 'three';
import arcCalculations from "../../utils/arcCalculations";

export default getLineMarkings = (mapWidth, mapHeight) => {
    const canvas = document.createElement("canvas");
    canvas.width = mapWidth;
    canvas.height = mapHeight;

    const context = canvas.getContext("2d");
    context.fillStyle = "#546e90";
    context.fillRect(0, 0, mapWidth, mapHeight);

    context.lineWidth = 2;
    context.strokeStyle = "#E0FFFF"
    context.setLineDash([10, 14]);

    // Left circle
    context.beginPath();
    context.arc(
        mapWidth / 2 - arcCalculations().arcCenterX,
        mapHeight / 2,
        arcCalculations().trackRadius,
        0,
        Math.PI * 2
    );
    context.stroke();

    // Right circle
    context.beginPath();
    context.arc(
        mapWidth / 2 + arcCalculations().arcCenterX,
        mapHeight / 2,
        arcCalculations().trackRadius,
        0,
        Math.PI * 2
    );
    context.stroke();

    return new THREE.CanvasTexture(canvas);

}