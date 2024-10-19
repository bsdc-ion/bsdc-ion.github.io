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
const morningtr = ["Good Morning!", "Bonjur", "Buna dimineata", "صبح بخیر", "Добро утро", "Jó reggelt", "Kàárọ̀"];
const hellostr = ["Hello!", "Bonjour!", "Salut!", "ہیلو!", "здравей!", "Üdvözlöm", "Witam", "Báwo"]

robt.addEventListener("click", function () {
    console.log(hellostr);
});
