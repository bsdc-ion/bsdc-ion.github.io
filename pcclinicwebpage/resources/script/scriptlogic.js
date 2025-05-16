const date = document.getElementById("booking");
const serv = document.getElementById("Services");
const device = document.getElementById("device");
const message = document.getElementById("message");
const booksubmit = document.getElementById("booksubmit");

/* services */ 
const mainte = document.getElementById("mainte");
const hardrep = document.getElementById("hard");
const softrep = document.getElementById("soft");
const datades = document.getElementById("data");

/* devices */
const phones = ['Apple', 'samsung', 'Huawei', 'Tablet'];

/* logic booking slot */
date.min = new Date().toISOString().slice(0, -8);

/* check if there is anything in the storage */
if(localStorage.getItem("SelectedBooking") !== null) {
    switch(localStorage.getItem("SelectedBooking")) {
        case "softrep": {
            serv.value = "SoftwareRepair";
            break;
        }
        case "hardrep": {
            serv.value = "HardwareRepair";
            break;
        }
        case "maint": {
            serv.value = "maintenance";
            break;

        }
        case "datades": {
            serv.value = "DataDestruction";
            break;

        }
        default: {
            serv.value = "unselected";
            break;
        }
    }
    localStorage.clear("SelectedBooking");
}

/* logic devices */
serv.addEventListener("click", function () {
    if(phones.includes(device.value)) {
        mainte.disabled = true;
        datades.disabled = true;
        serv.value = "HardwareRepair";
    }
    else {
        mainte.disabled = false;
        datades.disabled = false;
    }
});

booksubmit.addEventListener("click", function() {
    if(device.value == 'other') {
        message.setAttribute("required", "");
    }
})