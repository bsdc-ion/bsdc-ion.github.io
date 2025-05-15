const gene = document.getElementById("General");
const warranty = document.getElementById("Warranty");
const maintenance = document.getElementById("Maintenance");

const others = document.getElementById("OtherS");
const comm = document.getElementById("CommonI");
const pric = document.getElementById("Pricing");

/* gen faq */
const genf = document.getElementById("genfaq");
const warf = document.getElementById("warfaq");
const maif = document.getElementById("maifaq");

const otf = document.getElementById("otfaq");
const prif = document.getElementById("prifaq");
const comf = document.getElementById("comfaq");

/* normal bit */
gene.style.zIndex = "21";
warranty.style.zIndex = "19";
maintenance.style.zIndex = "17";

others.style.zIndex = "15";
comm.style.zIndex = "13";
pric.style.zIndex = "11";

/* faq box */
genf.style.zIndex = "20";
warf.style.zIndex = "18";
maif.style.zIndex = "16";

otf.style.zIndex = "14";
prif.style.zIndex = "10";
comf.style.zIndex = "12";

/* some array for automation */
const menus = [genf, warf, maif, otf, comf, prif];

function DisplayGood(goodf) {
    goodf.classList.toggle("displayy");
    
    var index = menus.indexOf(goodf);
    menus.splice(index, 1);
    
    for(const slide of menus ) {
        if(slide.classList.contains("displayy")) {
            slide.classList.remove("displayy");
            break;
        }
    }
    menus.push(goodf);
    return 1;
}
/* how it works */
gene.addEventListener("click", function () {
    DisplayGood(genf);
});

warranty.addEventListener("click", function () {
    DisplayGood(warf);
});

maintenance.addEventListener("click", function () {
    DisplayGood(maif);
});

others.addEventListener("click", function () {
    DisplayGood(otf);
});

comm.addEventListener("click", function () {
    DisplayGood(comf);
});

pric.addEventListener("click", function () {
    DisplayGood(prif);
});