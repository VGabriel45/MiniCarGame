export default pickRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}