console.log('Boilerplate app is running')

/* load buttons */
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");

/* load quest */
let qnumb = 1;
const question = document.getElementById("question");
const qn = document.getElementById("questionnumb");
const questions = [
    {number: "1", questionn: "Which is the component that connects all the hardware in the computer?", rans: "Motherboard", ans2: "CPU", ans3: "HardDisk", ans4: "None of the above", done: 0},
    {number: "2", questionn: "Which ones of these computers are portable?", rans: "Laptop", ans2: "Desktop", ans3: "Smartphone", ans4: "Quantum", done: 0},
    {number: "3", questionn: "How many Terabytes are in a Petabyte?", rans: "1,000", ans2: "10", ans3: "10,000", ans4: "11,000", done: 0},
    {number: "4", questionn: "Which one of these is (usually) free to use?", rans: "Open-Source Software", ans2: "Closed-Source Software", ans3: "Bespoke Software", ans4: "Off-the-Shelf Software", done: "0"},
    {number: "5", questionn: "Which one of these would be a Text based Communication?", rans: "VoIP", ans2: "Email", ans3: "Vlog", ans4: "Teleconference", done: "true"},
    {number: "6", questionn: "Which is the component that connects all the hardware in the computer?", rans: "Motherboard", ans2: "CPU", ans3: "HardDisk", ans4: "None of the above", done: 0},
    {number: "7", questionn: "Which is the component that connects all the hardware in the computer?", rans: "Motherboard", ans2: "CPU", ans3: "HardDisk", ans4: "None of the above", done: 0},
    {number: "8", questionn: "Which is the component that connects all the hardware in the computer?", rans: "Motherboard", ans2: "CPU", ans3: "HardDisk", ans4: "None of the above", done: 0},
    {number: "9", questionn: "Which is the component that connects all the hardware in the computer?", rans: "Motherboard", ans2: "CPU", ans3: "HardDisk", ans4: "None of the above", done: 0},
    {number: "10", questionn: "Which is the component that connects all the hardware in the computer?", rans: "Motherboard", ans2: "CPU", ans3: "HardDisk", ans4: "None of the above", done: 0},
    {number: "11", questionn: "Which is the component that connects all the hardware in the computer?", rans: "Motherboard", ans2: "CPU", ans3: "HardDisk", ans4: "None of the above", done: 0},
    {number: "12", questionn: "Which is the component that connects all the hardware in the computer?", rans: "Motherboard", ans2: "CPU", ans3: "HardDisk", ans4: "None of the above", done: 0},
    {number: "13", questionn: "Which is the component that connects all the hardware in the computer?", rans: "Motherboard", ans2: "CPU", ans3: "HardDisk", ans4: "None of the above", done: 0},
    {number: "14", questionn: "Which is the component that connects all the hardware in the computer?", rans: "Motherboard", ans2: "CPU", ans3: "HardDisk", ans4: "None of the above", done: 0},
    {number: "15", questionn: "Which is the component that connects all the hardware in the computer?", rans: "Motherboard", ans2: "CPU", ans3: "HardDisk", ans4: "None of the above", done: 0}
];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
var randnumb;
qn.textContent = qnumb + "/15";
function LoadQuestion() {
    var randnumb = getRandomInt(14);
    if(questions[randnumb].done === 1) return LoadQuestion();
    else {
        question.textContent = questions[randnumb].questionn;
        ans1.textContent = questions[randnumb].ans2;
        ans2.textContent = questions[randnumb].rans;
        ans3.textContent = questions[randnumb].ans3;
        ans4.textContent = questions[randnumb].ans4;
    }
    return 1;
}

ans1.onclick = function() {alert('Wrong Answer');}
ans2.onclick = function() {
    alert('Right Answer'); 
    qnumb++; 
    questions[randnumb].done = 1;
    LoadQuestion();
}
ans3.onclick = function() {alert('Wrong Answer');}
ans4.onclick = function() {alert('Wrong Answer');}