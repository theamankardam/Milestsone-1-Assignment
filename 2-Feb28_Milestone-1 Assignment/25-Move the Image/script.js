let x = 0;
let y = 0;
const distance = 1;
const changePosition = () => {
    const img = document.getElementById("img");
    img.style.top = x + "rem";
    img.style.left = y + "rem";
}
document.body.addEventListener("keydown", (event) => {
    let key = event.key;
    switch (key) {
        case "ArrowUp":
            x -= distance;
            break;
        case "ArrowDown":
            x += distance;
            break;
        case "ArrowLeft":
            y -= distance;
            break;
        case "ArrowRight":
            y += distance;
            break;
        default:
            break;
    }
    changePosition();
})

changePosition();