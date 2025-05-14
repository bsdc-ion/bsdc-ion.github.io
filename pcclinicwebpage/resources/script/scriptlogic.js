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

/* logic devices */
serv.addEventListener("click", function () {
    if(phones.includes(device.value)) {
        mainte.disabled = true;
        datades.disabled = true;
        serv.value = "HardwareRepair";
        console.log("merge");
    }
    else {
        mainte.disabled = false;
        datades.disabled = false;
        console.log("mergeeeeeeee");
    }
});

booksubmit.addEventListener("click", function() {
    if(device.value == 'other') {
        message.setAttribute("required", "");
    }
})