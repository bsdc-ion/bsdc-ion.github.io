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

        /*// creaza imagine produs
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
        
        cutie.appendChild(namebar2);*/
    }
});

// Encode data into the URL
function redirectToDetails(name, image, description) {
    const url = new URL('/miculbrutar/indexprodus.html', window.location.origin);
    url.searchParams.append('name', name);
    url.searchParams.append('image', image);
    window.location.href = url;
}
