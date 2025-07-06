const fs = require('fs');
const path = './FixFolio/MyRepairs/index.html';
const path2 = './FixFolio/index.html';

let html = fs.readFileSync(path, 'utf8');
let html2 = fs.readFileSync(path2, 'utf8');

// Get today's date
const now = new Date();
const day = now.getDate();
const month = now.toLocaleString('default', { month: 'long' }); // "July"

const formattedDate = `${day} ${month}`;

const updatedHtml = html.replace(
  /<div class="stat-number" id="last-updated">.*?<\/div>/,
  `<div class="stat-number" id="last-updated">${formattedDate}</div>`
);

const updatedHtml2 = html2.replace(
  /<div class="stat-number" id="last-updated">.*?<\/div>/,
  `<div class="stat-number" id="last-updated">${formattedDate}</div>`
);

fs.writeFileSync(path, updatedHtml, 'utf8');
fs.writeFileSync(path2, updatedHtml2, 'utf8');
console.log("✅ HTML date updated to:", now);
