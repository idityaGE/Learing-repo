let btn = document.querySelector("button");
let clbox = document.querySelector("#color_box");
let h3 = document.querySelector("h3");

function getRandomColor() {
    let R = Math.floor(Math.random() * 100) + 126;
    let G = Math.floor(Math.random() * 100) + 126;
    let B = Math.floor(Math.random() * 100) + 126;

    let color = `rgb(${R},${G},${B})`;
    return color;
}

btn.addEventListener("click", function () {
    let randomColor = getRandomColor();

    h3.innerText = randomColor;

    clbox.style.backgroundColor = randomColor;
})



