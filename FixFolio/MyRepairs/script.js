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
readTextFile("./localdb.json", function(text){
    data = JSON.parse(text);

    console.log(data)
});
