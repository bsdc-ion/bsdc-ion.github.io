window.onload = function(){document.getElementsByTagName('html')[0].className = '';}

document.addEventListener("DOMContentLoaded", function () {
    const homebutton = document.getElementById("desprenoi");
    homebutton.addEventListener("click", function () {
        window.location.href = "indexdesprenoi.html";
    });
});


