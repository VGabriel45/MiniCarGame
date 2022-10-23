import * as THREE from 'three';
import arcCalculations from '../../utils/arcCalculations';

export default getLeftIsland = () => {
    const islandLeft = new THREE.Shape();

    islandLeft.absarc(
        -arcCalculations().arcCenterX,
        0,
        arcCalculations().innerTrackRadius,
        arcCalculations().arcAngle1,
        -arcCalculations().arcAngle1,
        false
    );

    islandLeft.absarc(
        arcCalculations().arcCenterX,
        0,
        arcCalculations().outerTrackRadius,
        Math.PI + arcCalculations().arcAngle2,
        Math.PI - arcCalculations().arcAngle2,
        false
    );

    return islandLeft;
}