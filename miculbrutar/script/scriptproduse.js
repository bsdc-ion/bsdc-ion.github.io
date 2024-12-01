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
//
var url = "http://127.0.0.1:5500/miculbrutar/indexprodus.html"

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

        // creaza imagine produs
        var cutie1 = document.createElement("img");
        cutie1.src = data[0].produse[i].image1;
        cutie1.className = "imagineprodus";
        cutie.appendChild(cutie1);

        // creaza nume
        var namebar = document.createElement("h1");
        namebar.className = "numeprodus";
        namebar.textContent = `${data[0].produse[i].name}`;
        cutie.appendChild(namebar);

        // creaza buton
        var namebar2 = document.createElement("button");
        namebar2.className = "maimultinfo";
        namebar2.textContent = "Informatii";
        namebar2.id = `produs${i+1}`;

        infobut[i] = namebar2.id;
        
        cutie.appendChild(namebar2);
    }
});