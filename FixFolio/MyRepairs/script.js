/* flip card */
function flipCard(button) {
    const productCard = button.closest('.product-card');
    productCard.classList.toggle('flipped');
}

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
readTextFile("../localdb.json", function(text){
    data = JSON.parse(text);

    var devstat = document.getElementById("devstat");
    devstat.textContent = data.repairs.length;

    var mainbox = document.getElementById("grid");

    // incarca tot
    for(var i = 0; i < data.repairs.length; i++){

        // creaza cutie support
        var cutie = document.createElement("div");
        cutie.className = "product-card";
        mainbox.appendChild(cutie);

        // adauga restu de script
        cutie.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div>
                        <img src="${data.repairs[i].image1}" class="product-image"></img>
                        <h3 class="device-name">${data.repairs[i].name}</h3>
                    </div>
                    <button class="product-button" onclick="flipCard(this)">See Final Result</button>
                </div>
                <div class="card-back">
                    <div>
                        <img src="${data.repairs[i].image2}" class="product-image"></img>
                        <h3 class="device-name">${data.repairs[i].name}</h3>
                    </div>
                    <button class="product-button" onclick="flipCard(this)">See Before</button>
                </div>
            </div>
        `;
    }
});
