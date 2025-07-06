const fs = require('fs');
const path = './MyRepairs/index.html';

let html = fs.readFileSync(path, 'utf8');
const now = new Date().toISOString();

const updatedHtml = html.replace(
  /<div class="stat-number" id="last-updated">6 July<\/div>/,
  `<div class="stat-number" id="last-updated">${now}</div>`
);

fs.writeFileSync(path, updatedHtml, 'utf8');
console.log("✅ HTML date updated to:", now);
