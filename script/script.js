console.log("Scripted by MLGBD");

/* start of everything */
const ehub = document.getElementById("experience");
const pv1 = document.getElementById("portofoliov1");
const trans = document.getElementById("translator");
const pokemon = document.getElementById("pokemon");
const miculbrutar = document.getElementById("miculbrutar");
const pcclinic = document.getElementById("pcclinic");
const fixfolio = document.getElementById("fixfolio");

ehub.addEventListener("click", function() {
    window.location.href = "/experiencehubpage/indexhome";
});

pv1.addEventListener("click", function () {
    window.location.href = "/oldportofolio/index";
});

trans.addEventListener("click", function () {
    window.location.href = "/languagewebpage/indexcountries";
});

pokemon.addEventListener("click", function () {
    window.location.href = "/pokemon/index";
});

miculbrutar.addEventListener("click", function () {
    window.location.href = "/miculbrutar/index";
});

pcclinic.addEventListener("click", function () {
    window.location.href = "/pcclinicwebpage/index.html";
});

fixfolio.addEventListener("click", function () {
    window.location.href = "/FixFolio/";
});