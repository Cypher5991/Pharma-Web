const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const allImages = getAllFiles(publicImagesDir);

const grepCmd = `grep -rnI "" src/`;
const output = execSync(grepCmd, { encoding: 'utf-8' });

let deletedCount = 0;

for (const imgPath of allImages) {
  // Get relative path from public
  const relPath = path.relative(path.join(process.cwd(), 'public'), imgPath);
  const searchPath = '/' + relPath.replace(/\\/g, '/');
  
  // Also search for the base filename
  const baseName = path.basename(imgPath);
  
  // Simple check if the base name is in the output
  if (!output.includes(baseName)) {
    console.log(`Deleting unused image: ${imgPath}`);
    fs.unlinkSync(imgPath);
    deletedCount++;
  }
}

console.log(`Deleted ${deletedCount} unused images.`);
