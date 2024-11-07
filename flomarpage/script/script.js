document.addEventListener("DOMContentLoaded", function () {
    const exploreButton = document.getElementById("explorebutton");
    exploreButton.addEventListener("click", function () {
        const produsee = document.getElementById('produse');

        produsee.scrollIntoView({ behavior: 'smooth' });
    });
    
    const infobutton = document.getElementById("produs");
    infobutton.addEventListener("click", function () {
        window.location.href = "indexprodus.html";
    });
});