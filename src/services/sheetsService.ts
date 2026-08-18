import { SheetProductItem, SPREADSHEET_CONFIG, MASTER_SHEET_PRODUCTS } from '../data/sheetProducts';

const SPREADSHEET_ID = SPREADSHEET_CONFIG.spreadsheetId;

export interface SyncResult {
  success: boolean;
  source: 'google_api' | 'live_gviz' | 'local_master';
  products: SheetProductItem[];
  totalCount: number;
  osdCount: number;
  topicalCount: number;
  capsuleCount: number;
  liquidCount: number;
  specialtyCount: number;
  soapCount: number;
  timestamp: string;
  error?: string;
}

// In-memory runtime cache
let memoryCache: SheetProductItem[] | null = null;

const GID_MAPPING = [
  { gid: '0', defaultType: 'osd' as const, name: 'OSD (Oral Solid Dosage)' },
  { gid: '778694971', defaultType: 'capsules' as const, name: 'Capsules' },
  { gid: '1609561952', defaultType: 'liquids' as const, name: 'Liquids & Syrups (Oral)' },
  { gid: '669103245', defaultType: 'specialty' as const, name: 'Nasal, Ear & Oral Care' },
  { gid: '1195825370', defaultType: 'soaps' as const, name: 'Medicated Soaps' },
  { gid: '363169404', defaultType: 'topicals' as const, name: 'Topicals' },
];

function parseGvizCsv(csvText: string, defaultType: SheetProductItem['dosageType']): SheetProductItem[] {
  const lines = csvText.split('\n');
  const items: SheetProductItem[] = [];
  let headerFound = false;
  let currentCategory = 'General Formulations';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (line.startsWith('ALLRITE GROUP') || line.includes('Products  |')) continue;
    
    if (line.includes('▸')) {
      const match = line.match(/▸\s*([^,]+)/);
      if (match && match[1]) {
        currentCategory = match[1].replace(/"/g, '').trim();
      }
    }

    const regex = /"([^"]*)"|([^,]+)/g;
    const cols: string[] = [];
    let match;
    while ((match = regex.exec(line)) !== null) {
      cols.push((match[1] !== undefined ? match[1] : match[2]).trim());
    }

    if (cols.some(c => c.toLowerCase().includes('product name'))) {
      headerFound = true;
      continue;
    }

    if (headerFound && cols.length >= 4) {
      const [sno, name, form, category] = cols;
      if (name && name.length > 2 && !name.toLowerCase().includes('product name') && !name.includes('▸')) {
        let finalCategory = category || currentCategory;
        if (finalCategory.includes('▸')) {
          const parts = finalCategory.split('▸').map(p => p.trim());
          finalCategory = parts[0];
        }

        items.push({
          id: `sheet-${defaultType}-${items.length + 1}`,
          sno: sno || (items.length + 1).toString(),
          name,
          form: form || (defaultType === 'soaps' ? 'Medicated Soap' : 'Formulation'),
          category: finalCategory,
          dosageType: defaultType,
        });
      }
    }
  }
  return items;
}

function parseSheetsApiValues(values: string[][], defaultType: SheetProductItem['dosageType']): SheetProductItem[] {
  const items: SheetProductItem[] = [];
  let headerFound = false;
  let currentCategory = 'General Formulations';

  for (const row of values) {
    if (!row || row.length === 0) continue;
    
    const rowStr = row.join(',');
    if (rowStr.startsWith('ALLRITE GROUP') || rowStr.includes('Products  |')) continue;
    
    if (rowStr.includes('▸')) {
      const match = rowStr.match(/▸\s*([^,]+)/);
      if (match && match[1]) {
        currentCategory = match[1].replace(/"/g, '').trim();
      }
    }

    if (row.some(cell => typeof cell === 'string' && cell.toLowerCase().includes('product name'))) {
      headerFound = true;
      continue;
    }

    if (headerFound && row.length >= 4) {
      const sno = row[0] || (items.length + 1).toString();
      const name = row[1];
      const form = row[2] || (defaultType === 'soaps' ? 'Medicated Soap' : 'Formulation');
      let category = row[3] || currentCategory;

      if (category.includes('▸')) {
        const parts = category.split('▸').map(p => p.trim());
        category = parts[0];
      }

      if (name && name.trim().length > 2 && !name.toLowerCase().includes('product name') && !name.includes('▸')) {
        items.push({
          id: `sheet-${defaultType}-${items.length + 1}`,
          sno: sno.trim(),
          name: name.trim(),
          form: form.trim(),
          category: category.trim(),
          dosageType: defaultType,
        });
      }
    }
  }
  return items;
}

export async function syncPortfolioFromGoogleSheets(accessToken?: string | null): Promise<SyncResult> {
  const timestamp = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  // 1. If user is authenticated with OAuth token, try Google Sheets API v4 first
  if (accessToken) {
    try {
      // Fetch metadata to find sheet titles
      const metaRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}?fields=sheets.properties`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      if (metaRes.ok) {
        const metaData = await metaRes.json();
        const sheetTitles: string[] = metaData.sheets?.map((s: any) => s.properties?.title) || [];
        
        let allApiProducts: SheetProductItem[] = [];

        for (const title of sheetTitles) {
          const valRes = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(title)}?majorDimension=ROWS`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            }
          );

          if (valRes.ok) {
            const valData = await valRes.json();
            const rows: string[][] = valData.values || [];
            
            // Map title to defaultType
            let type: SheetProductItem['dosageType'] = 'osd';
            if (title.toLowerCase().includes('capsule')) type = 'capsules';
            else if (title.toLowerCase().includes('liquid') || title.toLowerCase().includes('syrup')) type = 'liquids';
            else if (title.toLowerCase().includes('soap')) type = 'soaps';
            else if (title.toLowerCase().includes('topical') || title.toLowerCase().includes('cream')) type = 'topicals';
            else if (title.toLowerCase().includes('nasal') || title.toLowerCase().includes('specialty')) type = 'specialty';

            const parsed = parseSheetsApiValues(rows, type);
            allApiProducts = [...allApiProducts, ...parsed];
          }
        }

        if (allApiProducts.length > 0) {
          memoryCache = allApiProducts;
          return {
            success: true,
            source: 'google_api',
            products: allApiProducts,
            totalCount: allApiProducts.length,
            osdCount: allApiProducts.filter(p => p.dosageType === 'osd').length,
            topicalCount: allApiProducts.filter(p => p.dosageType === 'topicals').length,
            capsuleCount: allApiProducts.filter(p => p.dosageType === 'capsules').length,
            liquidCount: allApiProducts.filter(p => p.dosageType === 'liquids').length,
            specialtyCount: allApiProducts.filter(p => p.dosageType === 'specialty').length,
            soapCount: allApiProducts.filter(p => p.dosageType === 'soaps').length,
            timestamp,
          };
        }
      }
    } catch (err) {
      console.warn('OAuth Sheets API sync error, attempting live fallback:', err);
    }
  }

  // 2. Live GVIZ endpoint fetch for real-time data sync without requiring active token
  try {
    const fetchPromises = GID_MAPPING.map(mapping => 
      fetch(`https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&gid=${mapping.gid}`)
        .then(async res => {
          if (res.ok) {
            const csv = await res.text();
            return parseGvizCsv(csv, mapping.defaultType);
          }
          return [];
        })
    );

    const results = await Promise.all(fetchPromises);
    const combined = results.flat();

    if (combined.length > 0) {
      memoryCache = combined;
      return {
        success: true,
        source: 'live_gviz',
        products: combined,
        totalCount: combined.length,
        osdCount: combined.filter(p => p.dosageType === 'osd').length,
        topicalCount: combined.filter(p => p.dosageType === 'topicals').length,
        capsuleCount: combined.filter(p => p.dosageType === 'capsules').length,
        liquidCount: combined.filter(p => p.dosageType === 'liquids').length,
        specialtyCount: combined.filter(p => p.dosageType === 'specialty').length,
        soapCount: combined.filter(p => p.dosageType === 'soaps').length,
        timestamp,
      };
    }
  } catch (err) {
    console.warn('Live gviz fetch error, using master dataset:', err);
  }

  // 3. Fallback to Master Dataset (370 authentic items)
  memoryCache = MASTER_SHEET_PRODUCTS;
  return {
    success: true,
    source: 'local_master',
    products: MASTER_SHEET_PRODUCTS,
    totalCount: MASTER_SHEET_PRODUCTS.length,
    osdCount: MASTER_SHEET_PRODUCTS.filter(p => p.dosageType === 'osd').length,
    topicalCount: MASTER_SHEET_PRODUCTS.filter(p => p.dosageType === 'topicals').length,
    capsuleCount: MASTER_SHEET_PRODUCTS.filter(p => p.dosageType === 'capsules').length,
    liquidCount: MASTER_SHEET_PRODUCTS.filter(p => p.dosageType === 'liquids').length,
    specialtyCount: MASTER_SHEET_PRODUCTS.filter(p => p.dosageType === 'specialty').length,
    soapCount: MASTER_SHEET_PRODUCTS.filter(p => p.dosageType === 'soaps').length,
    timestamp,
  };
}

export function getCachedPortfolio(): SheetProductItem[] {
  return memoryCache || MASTER_SHEET_PRODUCTS;
}
