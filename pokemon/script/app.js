console.log("Application running!")

// important consts and vars to use
const conteiner = document.getElementById("pokeshow1");
var data;
const mypokemons = {
    id: [],
    name: [],
    img: []
};

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

// loading everything in:
readTextFile("./pokemon api/pokedex.json", function(text){
    data = JSON.parse(text);
    
    // random load everything
    for(var i = 0; i <= 11; i++){

        var randomnumb = Math.floor(Math.random() * 899);

        // create support box
        var pokem = document.createElement("div");
        pokem.className = "pokeshow";
        conteiner.appendChild(pokem);

        // insert custom image link
        var nimg = document.createElement('img');
        nimg.src = data[randomnumb].image.thumbnail;
        nimg.className = "pokemonimg";
        pokem.appendChild(nimg);

        // create namebar with text
        var namebar = document.createElement("div");
        namebar.className = "namebar";
        namebar.textContent = data[randomnumb].name.english;
        pokem.appendChild(namebar)
    }
    console.log(`Everything loaded succesfully`);
});

