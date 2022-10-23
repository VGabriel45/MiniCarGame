export default arcCalculations = () => {
    const trackRadius = 225;
    const trackWidth = 45;
    const innerTrackRadius = trackRadius - trackWidth;
    const outerTrackRadius = trackRadius + trackWidth;

    const arcAngle1 = (1 / 3) * Math.PI; // 60 degrees

    const deltaY = Math.sin(arcAngle1) * innerTrackRadius;
    const arcAngle2 = Math.asin(deltaY / outerTrackRadius);

    const arcCenterX =
    (Math.cos(arcAngle1) * innerTrackRadius +
        Math.cos(arcAngle2) * outerTrackRadius) /
    2;

    const arcAngle3 = Math.acos(arcCenterX / innerTrackRadius);

    const arcAngle4 = Math.acos(arcCenterX / outerTrackRadius);

    return ({trackRadius, trackWidth, arcCenterX, arcAngle1, arcAngle2, arcAngle3, arcAngle4, innerTrackRadius, outerTrackRadius})
}