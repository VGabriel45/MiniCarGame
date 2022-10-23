import * as THREE from 'three';
import arcCalculations from '../../utils/arcCalculations';

export default getMiddleIsland = () => {
    const islandMiddle = new THREE.Shape();

    islandMiddle.absarc(
        -arcCalculations().arcCenterX,
        0,
        arcCalculations().innerTrackRadius,
        arcCalculations().arcAngle3,
        -arcCalculations().arcAngle3,
        true
    );

    islandMiddle.absarc(
        arcCalculations().arcCenterX,
        0,
        arcCalculations().innerTrackRadius,
        Math.PI + arcCalculations().arcAngle3,
        Math.PI - arcCalculations().arcAngle3,
        true
    );

    return islandMiddle;
}