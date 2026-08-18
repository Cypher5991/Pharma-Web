const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scratch_all_site_data.json', 'utf8'));

for (const [url, val] of Object.entries(data)) {
  console.log('====================================');
  console.log('PAGE:', url);
  console.log('CONTENT SAMPLE:');
  console.log(val.clean.slice(0, 1500));
  console.log('\n');
}
