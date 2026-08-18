const fs = require('fs');
const analysis = JSON.parse(fs.readFileSync('scratch_analysis.json', 'utf8'));

let out = '';

for (const [url, data] of Object.entries(analysis)) {
  out += `================================================================================\n`;
  out += `PAGE: ${url}\n`;
  out += `================================================================================\n`;
  out += `HEADINGS:\n${data.headings.join(' | ')}\n\n`;
  out += `IMAGES:\n${JSON.stringify(data.images, null, 2)}\n\n`;
  out += `TEXT:\n${data.text}\n\n\n`;
}

fs.writeFileSync('scratch_extracted_details.txt', out);
console.log('Saved scratch_extracted_details.txt');
