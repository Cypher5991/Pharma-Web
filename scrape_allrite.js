const https = require('https');
const fs = require('fs');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let nextUrl = res.headers.location;
        if (!nextUrl.startsWith('http')) nextUrl = 'https://www.allrite.in' + nextUrl;
        return fetchUrl(nextUrl).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const homeHtml = await fetchUrl('https://www.allrite.in/');
  fs.writeFileSync('scratch_home_full.html', homeHtml);

  // Extract all hrefs
  const linkMatches = homeHtml.match(/href=["']([^"']+)["']/g) || [];
  const links = new Set();
  linkMatches.forEach(m => {
    let href = m.replace(/^href=["']/, '').replace(/["']$/, '');
    if (href.startsWith('https://www.allrite.in') || href.startsWith('/')) {
      if (!href.match(/\.(jpg|jpeg|png|gif|css|js|pdf|zip)$/i) && !href.includes('#') && !href.includes('mailto:') && !href.includes('tel:')) {
        if (href.startsWith('/')) href = 'https://www.allrite.in' + href;
        links.add(href);
      }
    }
  });

  console.log('Found internal pages count:', links.size);
  const results = {};

  for (const link of Array.from(links)) {
    try {
      console.log('Fetching', link);
      const html = await fetchUrl(link);
      const clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                         .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                         .replace(/<[^>]+>/g, ' ')
                         .replace(/\s+/g, ' ')
                         .trim();
      results[link] = { clean };
    } catch (e) {
      console.error('Error on', link, e.message);
    }
  }

  fs.writeFileSync('scratch_all_site_data.json', JSON.stringify(results, null, 2));
  console.log('Completed crawling. Total pages saved:', Object.keys(results).length);
}

run();
