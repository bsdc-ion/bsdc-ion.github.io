
/* navigatie */
const homebutton = document.getElementById("produse");

/* date imp */
const locatie = document.getElementById("locatie");

/* social */
const ig = document.getElementById("insta");
const fb = document.getElementById("Facebook");
const lin = document.getElementById("Linkedin");
const yt = document.getElementById("Youtube");
const tw = document.getElementById("Twitter");

/* navigatie */
homebutton.addEventListener("click", function () {
    window.location.href = "indexproducts.html";
});



/* retele sociale */
ig.addEventListener("click", function() {
    window.open('https://www.instagram.com/');
});
fb.addEventListener("click", function() {
    window.open('https://www.facebook.com/');
});
lin.addEventListener("click", function() {
    window.open('https://www.linkedin.com/');
});
yt.addEventListener("click", function() {
    window.open('https://www.youtube.com/');
});
tw.addEventListener("click", function() {
    window.open('https://www.x.com/');
});
