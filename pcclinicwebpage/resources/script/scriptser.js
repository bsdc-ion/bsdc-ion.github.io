const blur = document.getElementById("blur");
const mainb = document.getElementById("mainb");
const menu = document.getElementById("menu");

const title = document.getElementById("title");
const description = document.getElementById("description");
const bigimg = document.getElementById("bigimg");
const bookrep = document.getElementById("bookrep");

var what;


function Showbox(service) {
    menu.style.display = "none";
    console.log("Showbox called with:", service);
    switch(service) {
        case 'softrep':
            title.textContent = "Software Repair";
            description.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            bigimg.src = "/pcclinicwebpage/resources/images/softrepair.png";
            what = "softrep";
            break;
        case "hardrep":
            title.textContent = "Hardware Repair";
            description.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            bigimg.src = "/pcclinicwebpage/resources/images/hardrepair.jpg";
            what = "hardrep";
            break;
        case "maint":
            title.textContent = "Maintenance"
            description.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            bigimg.src = "/pcclinicwebpage/resources/images/maintenance.jpg";
            what = "maint";
            break;
        case "datades":
            title.textContent = "Data Destruction"
            description.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            bigimg.src = "/pcclinicwebpage/resources/images/datadest.jpg";
            what = "datades";
            break;
        default: {
            title.textContent = "Error";
            description.textContent = "error";
            bigimg.src = "/";
            what = "invalid";
            break;
        }
    }
    blur.classList.toggle("dispb");
    mainb.classList.toggle("dispf");
}

/* check if it clicks outside */
window.addEventListener("click", function(event) {
    setTimeout(() => {
        if (mainb.classList.contains("dispf") && !mainb.contains(event.target)) {
            mainb.classList.remove("dispf");
            blur.classList.remove("dispb");
            if(window.innerWidth < 1200) {
                menu.style.display = "block";
            }
        }
    }, 100);
});

/* check if click on repairbut */ 
bookrep.addEventListener("click", function() {
    localStorage.setItem("SelectedBooking", what);
    window.location.replace("/pcclinicwebpage/BookRepair/");
})