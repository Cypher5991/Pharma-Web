const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all image sources in src directory
const grepCmd = `grep -rnoIE "src=\\"/images/[^\\"]+\\"|imageUrl: \\"/[^\\"]+\\"|logo: \\"/[^\\"]+\\"" src/`;
try {
  const output = execSync(grepCmd, { encoding: 'utf-8' });
  const lines = output.split('\n').filter(Boolean);
  
  const missing = [];
  
  lines.forEach(line => {
    // extract path
    let match = line.match(/src="([^"]+)"/);
    if (!match) match = line.match(/imageUrl:\s*"([^"]+)"/);
    if (!match) match = line.match(/logo:\s*"([^"]+)"/);
    
    if (match && match[1]) {
      const imgPath = match[1];
      const fullPath = path.join(process.cwd(), 'public', imgPath);
      if (!fs.existsSync(fullPath)) {
        missing.push({ line, imgPath });
      }
    }
  });
  
  if (missing.length > 0) {
    console.log("Missing images:");
    missing.forEach(m => console.log(`${m.imgPath} referenced in ${m.line.split(':')[0]}`));
  } else {
    console.log("No missing images found.");
  }
} catch (e) {
  console.error("Error running grep:", e.message);
}
