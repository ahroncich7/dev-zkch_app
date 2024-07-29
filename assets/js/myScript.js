// const coin = document.querySelector(".coin-img");
// const city = document.querySelector(".city-img");
// const height = city.clientHeight;
// const width = city.clientWidth;

// city.addEventListener("mousemove", (evt) => {
//     const { layerX, layerY } = evt;
//     const yRotation = ((layerX - width / 2) / width) * 100;
//     const xRotation = ((layerY - height / 2) / height) * -100;

//     const string = `
//     perspective(500px)
//     scale(1.1)
//     rotateX(${xRotation}deg)
//     rotateY(${yRotation}deg)
//     translate(-40%, -40%)

//     `

//     coin.style.transform = string;
// })


// city.addEventListener("mouseout", (evt) => {
//     const string = `
//     perspective(500px)
//     scale(1)
//     rotateX(0)
//     rotateY(0)
//     translate(-50%, -50%)
//     `

//     coin.style.transform = string;
// })



// import Atropos library

// Initialize
const myAtropos = Atropos({
    el: '.cont-atropos',
    shadow: false,
    highlight: false,
    "rotate-x-max": 2,
    "rotate-y-max": 2
    // rest of parameters
});



// METAMASK


const connectWallet = () => {
    let accountsPromise = window.ethereum.request({ method: 'eth_requestAccounts' })
    accountsPromise.then(wallet => document.querySelectorAll(".wallet-adress").forEach(el => el.innerText = wallet))
}

document.getElementById("connect-wallet-btn").addEventListener("click", connectWallet)



try{

    VANTA.FOG({
        el: "#roadmap-token",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x06517B,
        midtoneColor: 0x69136F,
        lowlightColor: 0x460A0A,
        baseColor: 0x0,
        blurFactor: 1,
        speed: 2.30
    })
}catch{}


try{

    VANTA.FOG({
        el: "#raise",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x06517B,
    midtoneColor: 0x69136F,
    lowlightColor: 0x460A0A,
    baseColor: 0x0,
    blurFactor: 1,
    speed: 2.30
})
}catch{}