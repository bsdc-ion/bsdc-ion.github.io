window.onload = function(){document.getElementsByTagName('html')[0].className = '';}

const homebutton = document.getElementById("desprenoi");
homebutton.addEventListener("click", function () {
    window.location.href = "indexdesprenoi.html";
});

// buttons var
var infobut = [];

// read json file
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

// creaza conteiner 
const conteiner = document.getElementById("produsee");

// loading everything in:
readTextFile("./produsele/produse.json", function(text){
    data = JSON.parse(text);

    // incarca tot
    for(var i = 0; i < 12; i++){

        // creaza cutie support
        var cutie = document.createElement("div");
        cutie.className = "produs";
        conteiner.appendChild(cutie);

        // adauga restu de script
        cutie.innerHTML = `
            <img src="${data[0].produse[i].image1}" alt="${data[0].produse[i].name}" class="imagineprodus">
            <h3 class="numeprodus">${data[0].produse[i].name}</h3>
            <button onclick="redirectToDetails('${data[0].produse[i].name}', '${data[0].produse[i].image1}')" class="maimultinfo">Informații</button>
        `;
    }
});

// codeaza tot in site
function redirectToDetails(name, image, description) {
    const url = new URL('/miculbrutar/indexprodus.html', window.location.origin);
    url.searchParams.append('name', name);
    window.location.href = url;
}
