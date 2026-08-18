import fs from 'fs';
import { execSync } from 'child_process';

const tabs = [
  { gid: '0', name: 'OSD (Oral Solid Dosage)', dosageType: 'osd', prefix: 'osd' },
  { gid: '778694971', name: 'Capsules', dosageType: 'capsules', prefix: 'cap' },
  { gid: '1609561952', name: 'Liquids & Syrups (Oral)', dosageType: 'liquids', prefix: 'liq' },
  { gid: '669103245', name: 'Nasal, Ear & Oral Care', dosageType: 'specialty', prefix: 'spec' },
  { gid: '1195825370', name: 'Medicated Soaps & Syndet Bars', dosageType: 'soaps', prefix: 'soap' },
  { gid: '363169404', name: 'Topicals (Creams, Gels, Ointments)', dosageType: 'topicals', prefix: 'top' }
];

function parseCSV(text, dosageType, prefix) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const products = [];
  let currentCategory = 'General Formulations';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('ALLRITE GROUP') || line.includes('Products  |') || line.startsWith('S.No,')) {
      continue;
    }

    if (line.includes('▸')) {
      const match = line.match(/▸\s*([^,]+)/);
      if (match && match[1]) {
        currentCategory = match[1].replace(/\"/g, '').trim();
      }
    }

    const rowMatch = line.match(/^(\d+),/);
    if (rowMatch) {
      const sno = rowMatch[1];
      const remainder = line.substring(rowMatch[0].length);

      let name = '';
      let form = '';
      let category = currentCategory;

      if (remainder.startsWith('\"')) {
        const endQuoteIndex = remainder.indexOf('\"', 1);
        if (endQuoteIndex !== -1) {
          name = remainder.substring(1, endQuoteIndex).trim();
          const afterQuote = remainder.substring(endQuoteIndex + 1);
          const parts = afterQuote.split(',').filter(p => p.trim());
          if (parts.length >= 1) form = parts[0].trim();
          if (parts.length >= 2) category = parts[1].replace(/\"/g, '').trim();
        }
      } else {
        const parts = remainder.split(',');
        if (parts.length >= 1) name = parts[0].trim();
        if (parts.length >= 2) form = parts[1].trim();
        if (parts.length >= 3 && parts[2].trim()) category = parts[2].replace(/\"/g, '').trim();
      }

      if (category.includes('▸')) {
        const catParts = category.split('▸').map(c => c.trim()).filter(Boolean);
        category = catParts[0];
      }

      if (name) {
        products.push({
          id: `sheet-${prefix}-${sno}`,
          sno,
          name,
          form: form || (dosageType === 'soaps' ? 'Medicated Soap' : 'Formulation'),
          category: category || currentCategory,
          dosageType
        });
      }
    }
  }
  return products;
}

async function generate() {
  let allProducts = [];
  const sheetStats = [];

  for (const tab of tabs) {
    const url = `https://docs.google.com/spreadsheets/d/14slhpfIIFCSbvj2NlrDVr-zLVYD92Z1qonOe-UzftNo/export?format=csv&gid=${tab.gid}`;
    const csv = execSync(`curl -s -L "${url}"`).toString('utf-8');
    const parsed = parseCSV(csv, tab.dosageType, tab.prefix);
    console.log(`${tab.name} (${tab.gid}) -> parsed ${parsed.length} products`);
    sheetStats.push({
      gid: tab.gid,
      name: tab.name,
      dosageType: tab.dosageType,
      count: parsed.length
    });
    allProducts = allProducts.concat(parsed);
  }

  const fileContent = `export interface SheetProductItem {
  id: string;
  sno: string;
  name: string;
  form: string;
  category: string;
  dosageType: 'osd' | 'capsules' | 'liquids' | 'soaps' | 'topicals' | 'specialty';
}

export const SPREADSHEET_CONFIG = {
  spreadsheetId: '14slhpfIIFCSbvj2NlrDVr-zLVYD92Z1qonOe-UzftNo',
  url: 'https://docs.google.com/spreadsheets/d/14slhpfIIFCSbvj2NlrDVr-zLVYD92Z1qonOe-UzftNo/edit?gid=363169404#gid=363169404',
  sheets: ${JSON.stringify(sheetStats, null, 2)},
  totalProducts: ${allProducts.length},
  lastUpdated: 'Aug 18, 2026'
};

export const MASTER_SHEET_PRODUCTS: SheetProductItem[] = ${JSON.stringify(allProducts, null, 2)};
`;

  fs.writeFileSync('src/data/sheetProducts.ts', fileContent, 'utf-8');
  console.log(`Successfully generated src/data/sheetProducts.ts with ${allProducts.length} products!`);
}

generate();
