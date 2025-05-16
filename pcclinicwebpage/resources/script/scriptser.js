const blur = document.getElementById("blur");
const mainb = document.getElementById("mainb");

function Showbox(service) {
    blur.classList.toggle("dispb");
    mainb.classList.toggle("dispf");
}
Showbox("hard");