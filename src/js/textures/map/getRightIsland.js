import * as THREE from 'three';
import arcCalculations from '../../utils/arcCalculations';

export default getRightIsland = () => {
    const islandRight = new THREE.Shape();

    islandRight.absarc(
        arcCalculations().arcCenterX,
        0,
        arcCalculations().innerTrackRadius,
        Math.PI - arcCalculations().arcAngle1,
        Math.PI + arcCalculations().arcAngle1,
        true
    );

    islandRight.absarc(
        -arcCalculations().arcCenterX,
        0,
        arcCalculations().outerTrackRadius,
        -arcCalculations().arcAngle2,
        arcCalculations().arcAngle2,
        false
    );

    return islandRight;
}