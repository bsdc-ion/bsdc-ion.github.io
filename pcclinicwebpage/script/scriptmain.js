const behindblur = document.getElementById("blur");
const sidebar = document.getElementById("side");
const menubut = document.getElementById("menu");

const themeswitch = document.getElementById("lightdarkmode");
const themeswitch2 = document.getElementById("lightdarkmode1");

const icon = document.getElementById("iconitself");
const icon1 = document.getElementById("iconitself1");

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
function Theme() {
    if(icon.classList.contains("moon")) {
        icon.classList.add("sun");
        icon.classList.remove("moon");
    }
    else {
        icon.classList.add("moon");
        icon.classList.remove("sun");
    }

    if(icon1.classList.contains("moon")) {
        icon1.classList.add("sun");
        icon1.classList.remove("moon");
    }
    else {
        icon1.classList.add("moon");
        icon1.classList.remove("sun");
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
}
themeswitch.addEventListener("click", Theme);
themeswitch2.addEventListener("click", Theme);