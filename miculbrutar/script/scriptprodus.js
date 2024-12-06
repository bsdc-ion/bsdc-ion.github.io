/* navigatie */
const homebutton = document.getElementById("produse");
const aboutbutton = document.getElementById("desprenoi");

homebutton.addEventListener("click", function () {
    window.location.href = "indexproduse";
});

aboutbutton.addEventListener("click", function () {
    window.location.href  = "indexdesprenoi";
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
var recom = document.getElementById("recomandari");

var data = [];
var lastname = [];
var results = [];


readTextFile("./produsele/produse.json", function(text){
    data = JSON.parse(text);

    // variabile //
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
    imgg2.addEventListener("click", function () {
        imgg1.src = results[0].image2;
    });
    img2.appendChild(imgg2);
    
    var imgg3 = document.createElement("img");
    imgg3.className = "imaginemica";
    imgg3.src = results[0].image3;
    imgg3.addEventListener("click", function () {
        imgg1.src = results[0].image3;
    });
    img2.appendChild(imgg3);

    var imgg4 = document.createElement("img");
    imgg4.className = "imaginemica";
    imgg4.src = results[0].image1;
    imgg4.addEventListener("click", function () {
        imgg1.src = results[0].image1;
    });
    imgg4.id = "image4";
    img2.appendChild(imgg4);

    // descriere
    var para = document.createElement("div");
    para.className = "descirere";
    para.textContent = results[0].description;
    descriere.appendChild(para);

    check(data, results);
});

// unde se intampla magia
function check(params, params2) {
    var i = 0;
    while(i < 3) {
        var rand = getRandomInt(1, 11);
        if(params[0].produse[rand].name == params2[0].name || lastname[i-1] == params2[0].name || lastname[i-1] == params[0].produse[rand].name) return rand = getRandomInt(1, 11);

        // creaza cutie support
        var cutie = document.createElement("div");
        cutie.className = "produs";
        recom.appendChild(cutie);
        
        lastname.push(params[0].produse[rand].name);
    
        // adauga restu de script
        cutie.innerHTML = `
            <img src="${params[0].produse[rand].image1}" alt="${params[0].produse[rand].name}" class="imagineprodus">
            <h3 class="numeprodus">${params[0].produse[rand].name}</h3>
            <button onclick="redirectToDetails('${params[0].produse[rand].name}', '${params[0].produse[rand].image1}')" class="maimultinfo">Informații</button>
        `;
        i++;
    }
    if(lastname.length === 0) {
        var nuavemrecom = document.createElement("div");
        nuavemrecom.textContent = "Nu exista nici o recomandare!";
        nuavemrecom.className = "nuavem";
        recom.appendChild(nuavemrecom);
    }
    return 1;
}

// genereaza numar random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// codeaza tot in site
function redirectToDetails(name, image, description) {
    const url = new URL('/miculbrutar/indexprodus', window.location.origin);
    url.searchParams.append('name', name);
    window.location.href = url;
}
