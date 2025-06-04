const fs = require('fs');
const key = process.env.EMAILJS_PUBLIC_KEY;

if (!key) throw new Error('EMAILJS_PUBLIC_KEY is missing!');

const htmlPath = './docs/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

html = html.replace(
  'emailjs.init("")', 
  `emailjs.init("${key}")`
);

fs.writeFileSync(htmlPath, html);