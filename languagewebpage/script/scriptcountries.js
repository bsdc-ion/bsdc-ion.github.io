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
const bgbt = document.getElementById("Bulgaria");
const ngbt = document.getElementById("Nigeria");

// all translates // 
const morningtr = ["Good Morning!", "Bonne matinée!", "Buna dimineata!", "صبح بخیر!", "Добро утро!", "Jó reggelt!", "Kàárọ̀!"];
const pron1 = ["[Good Morn·ing]", "[Buna dimi·neatsa]", "[Bon matin]", "[Sabah bak·hair]", "[Dobro utro]", "[Jo reg·et]", "[Karu]"];
const hellostr = ["Hello!", "Bonjour!", "Salut!", "ہیلو!", "здравей!", "Üdvözlöm", "Báwo"];
const pron2 = ["Hello", "Buna", "Bon·jur", "Helo", "Zdra·vei", "Üd·voz·lom", "Ba·vo"];

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

bgbt.addEventListener("click", function () {
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