const rippleButton = document.querySelector('.ripple-button')


const rippleButtonCustomPos = (event, element) => {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty("--x", posX + "px");
    element.style.setProperty("--y", posY + "px");
}

rippleButton.addEventListener("click", (e) => {
    rippleButtonCustomPos(e, rippleButton);
    rippleButton.classList.add("pulse");
    rippleButton.addEventListener('animationend', (e) =>{
        rippleButton.classList.remove("pulse");

    })
})

