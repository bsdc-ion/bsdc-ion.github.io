const exploreButton = document.getElementById("explorebutton");
exploreButton.addEventListener("click", function () {
    window.location.href = "indexproduse";
});

var url = window.location.href;
url = url.split('.html')[0];
window.history.replaceState( null, null, url );