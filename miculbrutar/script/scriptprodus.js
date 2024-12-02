/* navigatie */
const homebutton = document.getElementById("produse");
const aboutbutton = document.getElementById("desprenoi");

homebutton.addEventListener("click", function () {
    window.location.href = "indexproduse.html";
});

aboutbutton.addEventListener("click", function () {
    window.location.href  = "indexdesprenoi.html";
});