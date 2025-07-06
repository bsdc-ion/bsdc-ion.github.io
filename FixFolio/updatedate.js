const fs = require('fs');
const path = './MyRepairs/index.html';
const path2 = './index.html';

let html = fs.readFileSync(path, 'utf8');
let html2 = fs.readFileSync(path2, 'utf8');

const now = new Date().toISOString();

const updatedHtml = html.replace(
  /<div class="stat-number" id="last-updated">6 July<\/div>/,
  `<div class="stat-number" id="last-updated">${now}</div>`
);

const updatedHtml2 = html2.replace(
  /<div class="stat-number" id="last-updated">6 July<\/div>/,
  `<div class="stat-number" id="last-updated">${now}</div>`
);

fs.writeFileSync(path, updatedHtml, 'utf8');
fs.writeFileSync(path2, updatedHtml2, 'utf8');
console.log("✅ HTML date updated to:", now);
