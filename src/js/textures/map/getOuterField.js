import * as THREE from 'three';
import arcCalculations from '../../utils/arcCalculations';

export default getOuterField = (mapWidth, mapHeight) => {
    const field = new THREE.Shape();

    field.moveTo(-mapWidth / 2, -mapHeight / 2);
    field.lineTo(0, -mapHeight / 2);

    field.absarc(
        -arcCalculations().arcCenterX,
        0,
        arcCalculations().outerTrackRadius,
        arcCalculations().arcAngle4,
        arcCalculations().arcAngle4,
        true
    );

    field.absarc(
        arcCalculations().arcCenterX,
        0,
        arcCalculations().outerTrackRadius,
        Math.PI - arcCalculations().arcAngle4,
        Math.PI + arcCalculations().arcAngle4,
        true
    );

    field.lineTo(0, -mapHeight / 2);
    field.lineTo(mapWidth / 2, -mapHeight / 2);
    field.lineTo(mapWidth / 2, mapHeight / 2);
    field.lineTo(-mapWidth / 2, mapHeight / 2);

    return field;
}