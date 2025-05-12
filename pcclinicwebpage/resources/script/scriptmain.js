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
        document.getElementById("aboutt").classList.toggle("foregrounddark");
    }
    if(secondToLast === 'bookrepair') {
        document.getElementById("bookingform").classList.toggle("foregrounddark");
        document.getElementById("booksubmit").classList.toggle("buttondark");
    }
    if(secondToLast ==- 'contactus') {
        if(document.getElementById("insta").src.indexOf("/Light/Instagram.svg") !== -1) {
            document.getElementById("insta").src = "/pcclinicwebpage/resources/images/dark/Instagram.svg";
            document.getElementById("Facebook").src = "/pcclinicwebpage/resources/images/dark/Facebook.svg";
            document.getElementById("Youtube").src = "/pcclinicwebpage/resources/images/dark/Youtube.svg";
            document.getElementById("Twitter").src = "/pcclinicwebpage/resources/images/dark/Twitter.svg";

            document.getElementById("map").src = "/pcclinicwebpage/resources/images/dark/Map.svg";
            document.getElementById("mail").src = "/pcclinicwebpage/resources/images/dark/Mail.svg";
            document.getElementById("phone").src = "/pcclinicwebpage/resources/images/dark/Phone.svg";

            document.getElementById("map1").classList.toggle("whitetext");
            document.getElementById("mail1").classList.toggle("whitetext");
            document.getElementById("phone1").classList.toggle("whitetext");

            from.classList.toggle("foregrounddark");
            sub.classList.toggle("buttondark");
        }
        else if(document.getElementById("insta").src.indexOf("/resources/images/dark/Instagram.svg") !== -1) {
            document.getElementById("insta").src = "/pcclinicwebpage/resources/images/Light/Instagram.svg";
            document.getElementById("Facebook").src = "/pcclinicwebpage/resources/images/Light/Facebook.svg";
            document.getElementById("Youtube").src = "/pcclinicwebpage/resources/images/Light/Youtube.svg";
            document.getElementById("Twitter").src = "/pcclinicwebpage/resources/images/Light/Twitter.svg";

            document.getElementById("map").src = "/pcclinicwebpage/resources/images/Light/Map.svg";
            document.getElementById("mail").src = "/pcclinicwebpage/resources/images/Light/Mail.svg";
            document.getElementById("phone").src = "/pcclinicwebpage/resources/images/Light/Phone.svg";

            document.getElementById("map1").classList.toggle("whitetext");
            document.getElementById("mail1").classList.toggle("whitetext");
            document.getElementById("phone1").classList.toggle("whitetext");

            document.getElementById("formm").classList.toggle("foregrounddark");
            document.getElementById("subb").classList.toggle("buttondark");
        }
        return 1;
    }
    
}


themeswitch.addEventListener("click", Theme);
themeswitch2.addEventListener("click", Theme);