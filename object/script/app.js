console.log("Application running!")

/* start of everything */
const cars = [
    {type:"Nissan", model:"370z", hp:"350hp", color:"venompurple"},
    {type:"BMW", model:"M3", hp:"420hp", color:"black"},
    {type:"Audi", model:"S4 B6", hp:"250hp", color:"red"},
    {type:"Mitsubishi", model:"Lancer EVO X", hp:"435hp", color:"white"},
    {type:"Renault", model:"Meganozauru", hp:"135hp", color:"blue"},
    {type:"BMW", model:"m135", hp:"320hp", color:"stormbay gray"},
]

/* pickup everything */
const sec = document.getElementById("cartab");
/* iter to put everything in table */
for(i = 0; i < 6; i++) {
    const newc = document.createElement('tr');
    newc.innerHTML = `<td>${cars[i].type}</td><td>${cars[i].model}</td><td>${cars[i].hp}</td><td>${cars[i].color}</td>`

    sec.appendChild(newc);
}