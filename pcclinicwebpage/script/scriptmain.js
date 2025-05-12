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

/* specific to contact us page */
const insta = document.getElementById("insta");
const facebook = document.getElementById("Facebook");
const youtube = document.getElementById("Youtube");
const twitter = document.getElementById("Twitter");

const phone = document.getElementById("phone");
const phone1 = document.getElementById("phone1");

const mail = document.getElementById("mail");
const mail1 = document.getElementById("mail1");

const map = document.getElementById("map");
const map1 = document.getElementById("map1");

const from = document.getElementById("formm");
const sub = document.getElementById("submit");

/* specific to about us page */
const abouts = document.getElementById("aboutt");

/* code the menu itself */
menubut.addEventListener("click", function () {
    sidebar.classList.toggle("dispb");
    behindblur.classList.toggle("dispb");
});

/* switch to dark in case of the other page was*/
if (localStorage.getItem("ThemeSwitch") === "Dark") {
    Theme();
}


/* darkmode */
function Theme() {
    var myUrl = window.location.href;
    var secondToLast = myUrl.substring(0, myUrl.lastIndexOf('/'));
    secondToLast = secondToLast.substring(secondToLast.lastIndexOf('/') + 1);
    secondToLast = secondToLast.toLowerCase();

    if(icon.classList.contains("moon")) {
        icon.classList.add("sun");
        icon.classList.remove("moon");
        localStorage.setItem("ThemeSwitch", "Dark");
    }
    else {
        icon.classList.add("moon");
        icon.classList.remove("sun");
        localStorage.setItem("ThemeSwitch", "Light");
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
    sidebar.classList.toggle("foregrounddark");

    if(secondToLast !== 'contactus') {
        foot.classList.toggle("foregrounddark");
    }
    if(secondToLast === 'aboutus') {
        abouts.classList.toggle("foregrounddark");
    }
    if(secondToLast == 'contactus') {
        if(insta.src.indexOf("/Light/Instagram.svg") !== -1) {
            insta.src = "/pcclinicwebpage/images/dark/Instagram.svg";
            facebook.src = "/pcclinicwebpage/images/dark/Facebook.svg";
            youtube.src = "/pcclinicwebpage/images/dark/Youtube.svg";
            twitter.src = "/pcclinicwebpage/images/dark/Twitter.svg";

            map.src = "/pcclinicwebpage/images/dark/Map.svg";
            mail.src = "/pcclinicwebpage/images/dark/Mail.svg";
            phone.src = "/pcclinicwebpage/images/dark/Phone.svg";

            map1.classList.toggle("whitetext");
            mail1.classList.toggle("whitetext");
            phone1.classList.toggle("whitetext");

            from.classList.toggle("foregrounddark");
            sub.classList.toggle("buttondark");
        }
        else if(insta.src.indexOf("/dark/Instagram.svg") !== -1) {
            insta.src = "/pcclinicwebpage/images/Light/Instagram.svg";
            facebook.src = "/pcclinicwebpage/images/Light/Facebook.svg";
            youtube.src = "/pcclinicwebpage/images/Light/Youtube.svg";
            twitter.src = "/pcclinicwebpage/images/Light/Twitter.svg";

            map.src = "/pcclinicwebpage/images/Light/Map.svg";
            mail.src = "/pcclinicwebpage/images/Light/Mail.svg";
            phone.src = "/pcclinicwebpage/images/Light/Phone.svg";

            map1.classList.toggle("whitetext");
            mail1.classList.toggle("whitetext");
            phone1.classList.toggle("whitetext");

            from.classList.toggle("foregrounddark");
            sub.classList.toggle("buttondark");
        }
        return 1;
    }
    
}
themeswitch.addEventListener("click", Theme);
themeswitch2.addEventListener("click", Theme);