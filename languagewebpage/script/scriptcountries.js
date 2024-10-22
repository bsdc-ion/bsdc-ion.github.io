// working test //
console.log('Java script running!');

// Boxes // 
const msg1 = document.getElementById("morning!");
const msg2 = document.getElementById("pronunce1");
const msg3 = document.getElementById("hitext!");
const msg4 = document.getElementById("pronunce2");

// Countries //
const robt = document.getElementById("Romania");
const frbt = document.getElementById("France");
const pkbt = document.getElementById("Pakistan");
const hubt = document.getElementById("Hungary");
const plbt = document.getElementById("Poland");
const ngbt = document.getElementById("Nigeria");
const wlbt = document.getElementById("Welsh");
const lvbt = document.getElementById("Latvia");

// all translates // 
const morningtr = ["Good Morning!", "Bonne matinée!", "Buna dimineata!", "Subha bakhair!", "Добро утро!", "Jó reggelt!", "Ekaaro", "Bore da!", "Labrīt!"];
const pron1 = ["[Good Morn·ing]", "[Buna dimi·neatsa]", "[Bon matin]", "[Sabah bak·hair]", "[Dobro utro]", "[Jo reg·et]", "[Eca·ro]", "[Borra-da]", "[Labri·]"];
const hellostr = ["Hello!", "Bonjour!", "Salut!", "As-salamu alaykum!", "Część!", "Szia", "Báwo", "Helo!", "Labdien!"];
const pron2 = ["[Hello]", "[Buna]", "[Bon·jur]", "[Asalam ulake-um]", "[Chay-sht]", "[Szia]", "[Ba·vo]", "[Helo]", "[La·bien]"];

// button work //
robt.addEventListener("click", function () {
    msg1.textContent = morningtr[2];
    msg3.textContent = hellostr[2];
    msg2.textContent = pron1[1];
    msg4.textContent = pron2[1];
});

frbt.addEventListener("click", function () {
    msg1.textContent = morningtr[1];
    msg3.textContent = hellostr[1];
    msg2.textContent = pron1[2];
    msg4.textContent = pron2[2];
});

pkbt.addEventListener("click", function () {
    msg1.textContent = morningtr[3];
    msg3.textContent = hellostr[3];
    msg2.textContent = pron1[3];
    msg4.textContent = pron2[3];
});

plbt.addEventListener("click", function () {
    msg1.textContent = morningtr[4];
    msg3.textContent = hellostr[4];
    msg2.textContent = pron1[4];
    msg4.textContent = pron2[4];
});

hubt.addEventListener("click", function () {
    msg1.textContent = morningtr[5];
    msg3.textContent = hellostr[5];
    msg2.textContent = pron1[5];
    msg4.textContent = pron2[5];
});

ngbt.addEventListener("click", function () {
    msg1.textContent = morningtr[6];
    msg3.textContent = hellostr[6];
    msg2.textContent = pron1[6];
    msg4.textContent = pron2[6];
});

wlbt.addEventListener("click", function () {
    msg1.textContent = morningtr[7];
    msg3.textContent = hellostr[7];
    msg2.textContent = pron1[7];
    msg4.textContent = pron2[7];
});

lvbt.addEventListener("click", function () {
    msg1.textContent = morningtr[8];
    msg3.textContent = hellostr[8];
    msg2.textContent = pron1[8];
    msg4.textContent = pron2[8];
});