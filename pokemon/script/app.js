console.log("Application running!")


// image search
const nimg = document.createElement('img');

for(var i = 0; i < 5; i++){
    var pokem = document.createElement("div");
    pokem.className = "pokeshow";
    document.getElementById("pokeshow1").appendChild(pokem);

    console.log("This is repeat " + i)
}