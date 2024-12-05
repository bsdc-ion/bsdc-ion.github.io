/* navigatie */
const homebutton = document.getElementById("produse");
const aboutbutton = document.getElementById("desprenoi");

homebutton.addEventListener("click", function () {
    window.location.href = "indexproduse.html";
});

aboutbutton.addEventListener("click", function () {
    window.location.href  = "indexdesprenoi.html";
});


// functie de incarcat
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


// get data from other site
function LoadQuery(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const name = LoadQuery('name');

const img1 = document.getElementById("imaginemare");
const img2 = document.getElementById("imaginimici");

const titlu = document.getElementById("titlu");
const descriere = document.getElementById("infobox");

titlu.textContent = name;

// recomandari
const recom = document.getElementById("recomandari");

var data;
var lastname = [];

readTextFile("./produsele/produse.json", function(text){
    data = JSON.parse(text);

    // variabile //
    var results = [];
    var searchField = "name";
    var searchVal = titlu.textContent;

    // cauta  valorea //
    for (var i=0 ; i < 12 ; i++)
    {
        if (data[0].produse[i].name == searchVal) {
            results.push(data[0].produse[i]);
            break;
        }
    }

    // continua incarcarea //
        // imagini
    var imgg1 = document.createElement("img");
    imgg1.className = "imagineprin";
    imgg1.src = results[0].image1;
    img1.appendChild(imgg1);

    var imgg2 = document.createElement("img");
    imgg2.className = "imaginemica";
    imgg2.src = results[0].image2;
    img2.appendChild(imgg2);
    
    var imgg3 = document.createElement("img");
    imgg3.className = "imaginemica";
    imgg3.src = results[0].image3;
    img2.appendChild(imgg3);

    var imgg4 = document.createElement("img");
    imgg4.className = "imaginemica";
    imgg4.src = results[0].image4;
    img2.appendChild(imgg4);

        // descriere
    var para = document.createElement("div");
    para.className = "descirere";
    para.textContent = results[0].description;
    descriere.appendChild(para);


    for(var i = 0; i < 3; i++){
        var rand = getRandomInt(1, 11);

        if(data[0].produse[rand].name == results[0].name || lastname[i-1] == results[0].name || lastname[i-1] == data[0].produse[rand].name) {
            if(rand != 12) {
                rand++;
            }
            else if(rand == 12) {
                rand = getRandomInt(1, 8);
            }
        }

        // creaza cutie support
        var cutie = document.createElement("div");
        cutie.className = "produs";
        recom.appendChild(cutie);
        
        lastname.push(data[0].produse[rand].name);

        // adauga restu de script
        cutie.innerHTML = `
            <img src="${data[0].produse[rand].image1}" alt="${data[0].produse[rand].name}" class="imagineprodus">
            <h3 class="numeprodus">${data[0].produse[rand].name}</h3>
            <button onclick="redirectToDetails('${data[0].produse[rand].name}', '${data[0].produse[rand].image1}')" class="maimultinfo">Informații</button>
        `;
    }
});

// genereaza numar random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// codeaza tot in site
function redirectToDetails(name, image, description) {
    const url = new URL('/miculbrutar/indexprodus.html', window.location.origin);
    url.searchParams.append('name', name);
    window.location.href = url;
}
