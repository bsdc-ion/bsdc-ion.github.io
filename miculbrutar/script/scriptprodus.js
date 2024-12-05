/* navigatie */
const homebutton = document.getElementById("produse");
const aboutbutton = document.getElementById("desprenoi");

homebutton.addEventListener("click", function () {
    window.location.href = "indexproduse.html";
});

aboutbutton.addEventListener("click", function () {
    window.location.href  = "indexdesprenoi.html";
});


// get data from other site
function LoadQuery(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const name = LoadQuery('name');
const image = LoadQuery('image');

console.log(name);
console.log(image);


// recomandari 
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const recom = document.getElementById("recomandari");

readTextFile("./produsele/produse.json", function(text){
    data = JSON.parse(text);

    for(var i = 0; i < 3; i++) {
        // genereaza numar random
        var rand = getRandomInt(1, 12);

        // adauga scriptu
        recom.innerHTML = `
            <div class="produs">
                <img src="${data[0].produse[rand].image1}" alt="${data[0].produse[rand].name}" class="imagineprodus">
                <h3 class="numeprodus">${data[0].produse[rand].name}</h3>
                <button onclick="redirectToDetails('${data[0].produse[rand].name}', '${data[0].produse[rand].image1}')" class="maimultinfo">Informații</button>
            </div>
        `;
    }
});