console.log("app run");

var namee = document.getElementById("nameinp");
var email = document.getElementById("emailinp");
var col = document.getElementById("colinp");
var filem = document.getElementById("filee");

let formData = new FormData();

var submit = document.getElementById("submit");
var tab = document.getElementById("table");

submit.addEventListener("click", function() {
    var row = document.createElement("tr");
    row.innerHTML = `<td>${email.value}</td><td>${namee.value}</td><td>${col.value}</td><td>${filem.files}</td>`;
    tab.appendChild(row);

    formData.append("photo", filem);
    fetch('/flomarpage/images', {method: "POST", body: formData});

    namee.value = "";
    email.value ="";
    col.value = "";
});