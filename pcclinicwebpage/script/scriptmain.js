const behindblur = document.getElementById("blur");
const sidebar = document.getElementById("side");
const menubut = document.getElementById("menu");

const themeswitch = document.getElementById("lightdarkmode");
const icon = document.getElementById("iconitself");

const bodyy = document.getElementById("body");
const head = document.getElementById("head");
const foot = document.getElementById("foot");


const elementss = document.getElementsByClassName("product");
const imgbord = document.getElementsByTagName("img");
const moreinf = document.getElementsByClassName("moreinfo");

const button = document.getElementsByClassName("button");
const sbutton = document.getElementsByClassName("buttonsmall");



/* code the menu itself */
menubut.addEventListener("click", function () {
    sidebar.classList.toggle("dispb");
    behindblur.classList.toggle("dispb");
});

/* darkmode */
themeswitch.addEventListener("click", function() {
    if(icon.classList.contains("moon")) {
        icon.classList.add("sun");
        icon.classList.remove("moon");
    }
    else {
        icon.classList.add("moon");
        icon.classList.remove("sun");
    }

    for(var i = 0; i < elementss.length; i++) {
        elementss[i].classList.toggle("foregrounddark");
    }
    for(var i = 0; i < button.length; i++) {
        button[i].classList.toggle("buttondark");
    }
    for(var i = 0; i < sbutton.length; i++) {
        sbutton[i].classList.toggle("buttondark");
    }
    for(var i = 0; i < imgbord.length; i++) {
        imgbord[i].classList.toggle("borderdark");
    }
    for(var i = 0; i < moreinf.length; i++) {
        moreinf[i].classList.toggle("buttondark");
    }

    bodyy.classList.toggle("backgrounddark");
    head.classList.toggle("foregrounddark");
    foot.classList.toggle("foregrounddark");
    sidebar.classList.toggle("foregrounddark");
});