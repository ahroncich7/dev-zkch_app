const coin = document.querySelector(".coin-img");
const city = document.querySelector(".city-img");
const height = city.clientHeight;
const width = city.clientWidth;

city.addEventListener("mousemove", (evt) => {
    const { layerX, layerY } = evt;
    const yRotation = ((layerX - width / 2) / width) * 100;
    const xRotation = ((layerY - height / 2) / height) * -100;

    const string = `
    perspective(500px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)
    translate(-40%, -40%)
    
    `

    coin.style.transform = string;
})


city.addEventListener("mouseout", (evt) => {
    const string = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)
    translate(-50%, -50%)
    `

    coin.style.transform = string;
})