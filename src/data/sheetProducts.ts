export interface SheetProductItem {
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
  sheets: [
  {
    "gid": "0",
    "name": "OSD (Oral Solid Dosage)",
    "dosageType": "osd",
    "count": 276
  },
  {
    "gid": "778694971",
    "name": "Capsules",
    "dosageType": "capsules",
    "count": 19
  },
  {
    "gid": "1609561952",
    "name": "Liquids & Syrups (Oral)",
    "dosageType": "liquids",
    "count": 84
  },
  {
    "gid": "669103245",
    "name": "Nasal, Ear & Oral Care",
    "dosageType": "specialty",
    "count": 15
  },
  {
    "gid": "1195825370",
    "name": "Medicated Soaps & Syndet Bars",
    "dosageType": "soaps",
    "count": 9
  },
  {
    "gid": "363169404",
    "name": "Topicals (Creams, Gels, Ointments)",
    "dosageType": "topicals",
    "count": 94
  }
],
  totalProducts: 497,
  lastUpdated: 'Aug 18, 2026'
};

export const MASTER_SHEET_PRODUCTS: SheetProductItem[] = [
  {
    "id": "sheet-osd-1",
    "sno": "1",
    "name": "Loratadine & Ambroxol Hydrochloride Tablets",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-2",
    "sno": "2",
    "name": "Levocetirizine Hydrochloride & Ambroxol Hydrochloride Tablets",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-3",
    "sno": "3",
    "name": "Calcium, Calcitriol and Zinc Tablets",
    "form": "Tablet",
    "category": "Nutritional / Haematinics",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-4",
    "sno": "4",
    "name": "Iron, Folic Acid & Vitamin B12 Tablets",
    "form": "Tablet",
    "category": "Nutritional / Haematinics",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-5",
    "sno": "5",
    "name": "Doxylamine Succinate, Pyridoxine Hydrochloride & Folic Acid Tablets",
    "form": "Tablet",
    "category": "Nutritional / Haematinics",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-6",
    "sno": "6",
    "name": "Paracetamol, Phenylephrine Hydrochloride, Caffeine & Chlorpheniramine Maleate Tablets",
    "form": "Tablet",
    "category": "Analgesic / Antipyretic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-7",
    "sno": "7",
    "name": "Glimepiride, Pioglitazone & Metformin Hydrochloride (Extended-release) Tablets",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-8",
    "sno": "8",
    "name": "Ivermectin & Albendazole Tablets",
    "form": "Tablet",
    "category": "Antiparasitic / Antiprotozoal",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-9",
    "sno": "9",
    "name": "Nimesulide & Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-10",
    "sno": "10",
    "name": "Biotin & Folic Acid Tablets",
    "form": "Tablet",
    "category": "Nutritional / Haematinics",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-11",
    "sno": "11",
    "name": "N-Acetylcysteine, Vitamins & Minerals Tablets",
    "form": "Tablet",
    "category": "Nutritional / Haematinics",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-12",
    "sno": "12",
    "name": "Mefenamic Acid and Dicyclomine Hydrochloride Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-13",
    "sno": "13",
    "name": "Olmesartan Medoxomil and Chlorthalidone Tablets",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-14",
    "sno": "14",
    "name": "Olmesartan Medoxomil and Chlorthalidone Tablets",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-15",
    "sno": "15",
    "name": "Aceclofenac, Paracetamol & Chlorzoxazone Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-16",
    "sno": "16",
    "name": "Aceclofenac, Paracetamol & Serratiopeptidase Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-17",
    "sno": "17",
    "name": "Drotaverine Hydrochloride & Mefenamic Acid Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-18",
    "sno": "18",
    "name": "Thiocolchicoside, Aceclofenac & Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-19",
    "sno": "19",
    "name": "Aceclofenac & Paracetamol Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-20",
    "sno": "20",
    "name": "Etamsylate Tablets 500 mg",
    "form": "Tablet",
    "category": "Haematology / Coagulation",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-21",
    "sno": "21",
    "name": "Nimesulide Mouth-dissolving Tablets",
    "form": "Orally Disintegrating Tablet (ODT)",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-22",
    "sno": "22",
    "name": "Finasteride and Biotin Tablets",
    "form": "Tablet",
    "category": "Urology / Sexual Health",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-23",
    "sno": "23",
    "name": "Cetirizine Hydrochloride & Ambroxol Hydrochloride Tablets",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-24",
    "sno": "24",
    "name": "Disulfiram Tablets IP",
    "form": "Tablet",
    "category": "Psychiatry — CNS / Antidepressants",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-25",
    "sno": "25",
    "name": "Disulfiram Tablets IP",
    "form": "Tablet",
    "category": "Psychiatry — CNS / Antidepressants",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-26",
    "sno": "26",
    "name": "Sodium Picosulfate Tablets",
    "form": "Tablet",
    "category": "GI — Laxative",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-27",
    "sno": "27",
    "name": "Atorvastatin & Fenofibrate Tablets",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-28",
    "sno": "28",
    "name": "Etoricoxib & Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-29",
    "sno": "29",
    "name": "Etoricoxib & Thiocolchicoside Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-30",
    "sno": "30",
    "name": "Febuxostat Tablets 40 mg",
    "form": "Tablet",
    "category": "Anti-Gout / Uric Acid Control",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-31",
    "sno": "31",
    "name": "Febuxostat Tablets 80 mg",
    "form": "Tablet",
    "category": "Anti-Gout / Uric Acid Control",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-32",
    "sno": "32",
    "name": "Gabapentin & Methylcobalamin Tablets",
    "form": "Tablet",
    "category": "Nutritional / Haematinics",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-33",
    "sno": "33",
    "name": "Amlodipine & Olmesartan Medoxomil Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-34",
    "sno": "34",
    "name": "Etamsylate & Tranexamic Acid Tablets",
    "form": "Tablet",
    "category": "Haematology / Coagulation",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-35",
    "sno": "35",
    "name": "Deflazacort Tablets",
    "form": "Tablet",
    "category": "Corticosteroids (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-36",
    "sno": "36",
    "name": "Telmisartan, Amlodipine & Hydrochlorothiazide Tablets",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-37",
    "sno": "37",
    "name": "Levocetirizine Dihydrochloride Tablets IP",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-38",
    "sno": "38",
    "name": "Azithromycin Tablets IP 250 mg",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-39",
    "sno": "39",
    "name": "Azithromycin Tablets IP 500 mg",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-40",
    "sno": "40",
    "name": "Cyproheptadine Hydrochloride Tablets IP 4 mg",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-41",
    "sno": "41",
    "name": "Atorvastatin Tablets IP 10 mg",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-42",
    "sno": "42",
    "name": "Atorvastatin Tablets IP 20 mg",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-43",
    "sno": "43",
    "name": "Etoricoxib Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-44",
    "sno": "44",
    "name": "Etoricoxib Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-45",
    "sno": "45",
    "name": "Bisacodyl Gastro-resistant Tablets IP 5 mg",
    "form": "Modified-Release Tablet",
    "category": "GI — Laxative",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-46",
    "sno": "46",
    "name": "Metoprolol Succinate Prolonged-release Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-47",
    "sno": "47",
    "name": "Losartan Potassium & Amlodipine Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-48",
    "sno": "48",
    "name": "Losartan Potassium & Hydrochlorothiazide Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-49",
    "sno": "49",
    "name": "Ofloxacin Tablets IP 200 mg",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-50",
    "sno": "50",
    "name": "Ofloxacin & Ornidazole Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-51",
    "sno": "51",
    "name": "Olmesartan Medoxomil Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-52",
    "sno": "52",
    "name": "Olmesartan Medoxomil Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-53",
    "sno": "53",
    "name": "Olmesartan Medoxomil & Hydrochlorothiazide Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-54",
    "sno": "54",
    "name": "Methylprednisolone Tablets IP",
    "form": "Tablet",
    "category": "Corticosteroids (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-55",
    "sno": "55",
    "name": "Methylprednisolone Tablets IP",
    "form": "Tablet",
    "category": "Corticosteroids (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-56",
    "sno": "56",
    "name": "Methylprednisolone Tablets IP",
    "form": "Tablet",
    "category": "Corticosteroids (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-57",
    "sno": "57",
    "name": "Betahistine Dihydrochloride Tablets IP",
    "form": "Tablet",
    "category": "CNS — Vestibular / Antivertigo",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-58",
    "sno": "58",
    "name": "Betahistine Dihydrochloride Tablets IP",
    "form": "Tablet",
    "category": "CNS — Vestibular / Antivertigo",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-59",
    "sno": "59",
    "name": "Allopurinol Tablets IP",
    "form": "Tablet",
    "category": "Anti-Gout / Uric Acid Control",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-60",
    "sno": "60",
    "name": "Allopurinol Tablets IP",
    "form": "Tablet",
    "category": "Anti-Gout / Uric Acid Control",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-61",
    "sno": "61",
    "name": "Sildenafil Tablets IP 50 mg",
    "form": "Tablet",
    "category": "Urology / Sexual Health",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-62",
    "sno": "62",
    "name": "Doxofylline Tablets IP",
    "form": "Tablet",
    "category": "Respiratory — Bronchodilator / Mucolytic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-63",
    "sno": "63",
    "name": "Fluconazole Tablets IP",
    "form": "Tablet",
    "category": "Antifungal (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-64",
    "sno": "64",
    "name": "Fluconazole Tablets IP",
    "form": "Tablet",
    "category": "Antifungal (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-65",
    "sno": "65",
    "name": "Losartan Potassium Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-66",
    "sno": "66",
    "name": "Ondansetron Orally Disintegrating Tablets IP",
    "form": "Orally Disintegrating Tablet (ODT)",
    "category": "GI — Antiemetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-67",
    "sno": "67",
    "name": "Olanzapine Tablets IP",
    "form": "Tablet",
    "category": "Psychiatry — CNS / Antidepressants",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-68",
    "sno": "68",
    "name": "Hydroxyzine Hydrochloride Tablets IP",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-69",
    "sno": "69",
    "name": "Linezolid Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-70",
    "sno": "70",
    "name": "Tranexamic Acid Tablets IP",
    "form": "Tablet",
    "category": "Haematology / Coagulation",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-71",
    "sno": "71",
    "name": "Albendazole Tablets IP",
    "form": "Tablet",
    "category": "Antiparasitic / Antiprotozoal",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-72",
    "sno": "72",
    "name": "Sildenafil Tablets IP 100 mg",
    "form": "Tablet",
    "category": "Urology / Sexual Health",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-73",
    "sno": "73",
    "name": "Levetiracetam Tablets IP",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-74",
    "sno": "74",
    "name": "Norfloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-75",
    "sno": "75",
    "name": "Terbinafine Tablets IP",
    "form": "Tablet",
    "category": "Antifungal (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-76",
    "sno": "76",
    "name": "Lornoxicam and Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-77",
    "sno": "77",
    "name": "Norfloxacin & Tinidazole Tablets",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-78",
    "sno": "78",
    "name": "Aceclofenac & Thiocolchicoside Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-79",
    "sno": "79",
    "name": "Aceclofenac Sustained-release Tablets",
    "form": "Modified-Release Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-80",
    "sno": "80",
    "name": "Loratadine Tablets IP",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-81",
    "sno": "81",
    "name": "Glucosamine, Methylsulfonylmethane & Diacerein Tablets",
    "form": "Tablet",
    "category": "Other / Miscellaneous",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-82",
    "sno": "82",
    "name": "Diacerein & Aceclofenac Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-83",
    "sno": "83",
    "name": "Rupatadine Tablets",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-84",
    "sno": "84",
    "name": "Tranexamic Acid & Mefenamic Acid Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-85",
    "sno": "85",
    "name": "Deflazacort Tablets",
    "form": "Tablet",
    "category": "Corticosteroids (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-86",
    "sno": "86",
    "name": "Etamsylate Tablets 250 mg",
    "form": "Tablet",
    "category": "Haematology / Coagulation",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-87",
    "sno": "87",
    "name": "Montelukast and Desloratadine Tablets",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-88",
    "sno": "88",
    "name": "Citicoline & Piracetam Tablets",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-89",
    "sno": "89",
    "name": "Etodolac & Thiocolchicoside Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-90",
    "sno": "90",
    "name": "Drotaverine Hydrochloride & Aceclofenac Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-91",
    "sno": "91",
    "name": "Cinnarizine & Domperidone Tablets",
    "form": "Tablet",
    "category": "GI — Antiemetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-92",
    "sno": "92",
    "name": "Aciclovir Dispersible Tablets IP",
    "form": "Dispersible Tablet",
    "category": "Antiviral",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-93",
    "sno": "93",
    "name": "Aciclovir Tablets IP",
    "form": "Tablet",
    "category": "Antiviral",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-94",
    "sno": "94",
    "name": "Amlodipine Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-95",
    "sno": "95",
    "name": "Amlodipine Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-96",
    "sno": "96",
    "name": "Atorvastatin Tablets IP 40 mg",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-97",
    "sno": "97",
    "name": "Citicoline Tablets IP",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-98",
    "sno": "98",
    "name": "Drotaverine Hydrochloride Tablets IP",
    "form": "Tablet",
    "category": "Other / Miscellaneous",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-99",
    "sno": "99",
    "name": "Fexofenadine Hydrochloride Tablets IP",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-100",
    "sno": "100",
    "name": "Folic Acid Tablets IP 5 mg",
    "form": "Tablet",
    "category": "Nutritional / Haematinics",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-101",
    "sno": "101",
    "name": "Glimepiride Tablets IP",
    "form": "Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-102",
    "sno": "102",
    "name": "Glimepiride Tablets IP",
    "form": "Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-103",
    "sno": "103",
    "name": "Glimepiride Tablets IP",
    "form": "Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-104",
    "sno": "104",
    "name": "Zolpidem Tartrate Tablets IP",
    "form": "Tablet",
    "category": "Psychiatry — CNS / Antidepressants",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-105",
    "sno": "105",
    "name": "Levofloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-106",
    "sno": "106",
    "name": "Metoprolol Succinate Prolonged-release Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-107",
    "sno": "107",
    "name": "Montelukast Sodium Tablets IP",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-108",
    "sno": "108",
    "name": "Montelukast Sodium & Levocetirizine Hydrochloride Tablets IP",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-109",
    "sno": "109",
    "name": "Ofloxacin Tablets IP 400 mg",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-110",
    "sno": "110",
    "name": "Prochlorperazine Tablets IP",
    "form": "Tablet",
    "category": "GI — Antiemetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-111",
    "sno": "111",
    "name": "Promethazine Theoclate Tablets IP",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-112",
    "sno": "112",
    "name": "Sertraline Tablets IP",
    "form": "Tablet",
    "category": "Psychiatry — CNS / Antidepressants",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-113",
    "sno": "113",
    "name": "Telmisartan Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-114",
    "sno": "114",
    "name": "Telmisartan Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-115",
    "sno": "115",
    "name": "Telmisartan Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-116",
    "sno": "116",
    "name": "Telmisartan and Amlodipine Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-117",
    "sno": "117",
    "name": "Telmisartan & Hydrochlorothiazide Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-118",
    "sno": "118",
    "name": "Ursodeoxycholic Acid Tablets IP",
    "form": "Tablet",
    "category": "Hepatic / Liver Care",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-119",
    "sno": "119",
    "name": "Ursodeoxycholic Acid Tablets IP",
    "form": "Tablet",
    "category": "Hepatic / Liver Care",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-120",
    "sno": "120",
    "name": "Tapentadol Tablets 100 mg",
    "form": "Tablet",
    "category": "Other / Miscellaneous",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-121",
    "sno": "121",
    "name": "Tapentadol Tablets 50 mg",
    "form": "Tablet",
    "category": "Other / Miscellaneous",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-122",
    "sno": "122",
    "name": "Cinnarizine Tablets IP",
    "form": "Tablet",
    "category": "CNS — Vestibular / Antivertigo",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-123",
    "sno": "123",
    "name": "Ciprofloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-124",
    "sno": "124",
    "name": "Ciprofloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-125",
    "sno": "125",
    "name": "Clarithromycin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-126",
    "sno": "126",
    "name": "Clarithromycin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-127",
    "sno": "127",
    "name": "Dapoxetine Tablets IP",
    "form": "Tablet",
    "category": "Urology / Sexual Health",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-128",
    "sno": "128",
    "name": "Dapoxetine Tablets IP",
    "form": "Tablet",
    "category": "Urology / Sexual Health",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-129",
    "sno": "129",
    "name": "Escitalopram Tablets IP",
    "form": "Tablet",
    "category": "Psychiatry — CNS / Antidepressants",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-130",
    "sno": "130",
    "name": "Etodolac Extended- release Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-131",
    "sno": "131",
    "name": "Fluconazole Tablets IP",
    "form": "Tablet",
    "category": "Antifungal (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-132",
    "sno": "132",
    "name": "Ketoconazole Tablets IP",
    "form": "Tablet",
    "category": "Antifungal (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-133",
    "sno": "133",
    "name": "Levofloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-134",
    "sno": "134",
    "name": "Metformin Hydrochloride Prolonged-release & Glimepiride Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-135",
    "sno": "135",
    "name": "Metoprolol Succinate Prolonged-release Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-136",
    "sno": "136",
    "name": "Paracetamol and Caffeine Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / Antipyretic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-137",
    "sno": "137",
    "name": "Rosuvastatin Tablets IP",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-138",
    "sno": "138",
    "name": "Rosuvastatin Tablets IP",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-139",
    "sno": "139",
    "name": "Serratiopeptidase Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-140",
    "sno": "140",
    "name": "Tadalafil Tablets IP",
    "form": "Tablet",
    "category": "Urology / Sexual Health",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-141",
    "sno": "141",
    "name": "Telmisartan and Amlodipine Tablets",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-142",
    "sno": "142",
    "name": "Metformin Hydrochloride Prolonged-release & Glimepiride Tablets",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-143",
    "sno": "143",
    "name": "Glimepiride, Pioglitazone & Metformin Hydrochloride (Sustained-release) Tablets",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-144",
    "sno": "144",
    "name": "Voglibose & Metformin Hydrochloride (Sustained-release) Tablets",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-145",
    "sno": "145",
    "name": "Tamsulosin Hydrochloride (Extended-release) & Dutasteride Tablets",
    "form": "Modified-Release Tablet",
    "category": "Urology / Sexual Health",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-146",
    "sno": "146",
    "name": "Montelukast & Doxofylline (Sustained-release) Tablets",
    "form": "Modified-Release Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-147",
    "sno": "147",
    "name": "Rosuvastatin & Fenofibrate Tablets IP",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-148",
    "sno": "148",
    "name": "Olmesartan Medoxomil, Amlodipine & Hydrochlorothiazide Tablets",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-149",
    "sno": "149",
    "name": "Combikit of Azithromycin, Fluconazole and Secnidazole Tablets",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-150",
    "sno": "150",
    "name": "Pregabalin (Sustained-release) and Mecobalamin Tablets",
    "form": "Modified-Release Tablet",
    "category": "Nutritional / Haematinics",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-151",
    "sno": "151",
    "name": "Voglibose Mouth-dissolving Tablets",
    "form": "Orally Disintegrating Tablet (ODT)",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-152",
    "sno": "152",
    "name": "Desloratadine Tablets",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-153",
    "sno": "153",
    "name": "Aceclofenac & Serratiopeptidase Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-154",
    "sno": "154",
    "name": "Piracetam Tablets",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-155",
    "sno": "155",
    "name": "Moxifloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-156",
    "sno": "156",
    "name": "Roxithromycin & Ambroxol Hydrochloride Tablets",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-157",
    "sno": "157",
    "name": "Levofloxacin & Ornidazole Tablets",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-158",
    "sno": "158",
    "name": "Diclofenac Potassium, Paracetamol & Serratiopeptidase Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-159",
    "sno": "159",
    "name": "Diclofenac Potassium & Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-160",
    "sno": "160",
    "name": "Diclofenac Potassium and Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-161",
    "sno": "161",
    "name": "Torsemide & Spironolactone Tablets",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-162",
    "sno": "162",
    "name": "Torsemide & Spironolactone Tablets",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-163",
    "sno": "163",
    "name": "Nimesulide & Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-164",
    "sno": "164",
    "name": "Diclofenac Potassium, Paracetamol & Chlorzoxazone Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-165",
    "sno": "165",
    "name": "Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride & Chlorpheniramine Maleate Tablets",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-166",
    "sno": "166",
    "name": "Trypsin, Bromelain and Rutoside Trihydrate Tablets",
    "form": "Tablet",
    "category": "Analgesic / Muscle Relaxant",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-167",
    "sno": "167",
    "name": "Trypsin, Bromelain and Rutoside Trihydrate Tablets",
    "form": "Tablet",
    "category": "Analgesic / Muscle Relaxant",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-168",
    "sno": "168",
    "name": "Trypsin, Bromelain, Rutoside Trihydrate and Aceclofenac Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-169",
    "sno": "169",
    "name": "Trypsin, Bromelain, Rutoside Trihydrate and Diclofenac Sodium Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-170",
    "sno": "170",
    "name": "Telmisartan and Chlorthalidone Tablets",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-171",
    "sno": "171",
    "name": "Voglibose, Glimepiride & Metformin Hydrochloride (Sustained-release) Tablets",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-172",
    "sno": "172",
    "name": "Ciprofloxacin and Tinidazole Tablets",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-173",
    "sno": "173",
    "name": "Gabapentin and Nortriptyline Tablets",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-174",
    "sno": "174",
    "name": "Pregabalin and Nortriptyline Tablets",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-175",
    "sno": "175",
    "name": "Paracetamol, Caffeine, Phenylephrine Hydrochloride & Diphenhydramine Hydrochloride Tablets",
    "form": "Tablet",
    "category": "Analgesic / Antipyretic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-176",
    "sno": "176",
    "name": "Fexofenadine Hydrochloride Tablets IP",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-177",
    "sno": "177",
    "name": "Rosuvastatin Tablets IP",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-178",
    "sno": "178",
    "name": "Ondansetron Orally Disintegrating Tablets IP",
    "form": "Orally Disintegrating Tablet (ODT)",
    "category": "GI — Antiemetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-179",
    "sno": "179",
    "name": "Metformin Hydrochloride Prolonged-release Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-180",
    "sno": "180",
    "name": "Metformin Hydrochloride Prolonged-release and Glimepiride Tablets",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-181",
    "sno": "181",
    "name": "Betahistine Tablets",
    "form": "Tablet",
    "category": "CNS — Vestibular / Antivertigo",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-182",
    "sno": "182",
    "name": "Terbinafine Tablets IP",
    "form": "Tablet",
    "category": "Antifungal (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-183",
    "sno": "183",
    "name": "Mefenamic Acid & Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-184",
    "sno": "184",
    "name": "Paracetamol & Domperidone Tablets",
    "form": "Tablet",
    "category": "Analgesic / Antipyretic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-185",
    "sno": "185",
    "name": "Levocetirizine Dihydrochloride Tablets",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-186",
    "sno": "186",
    "name": "Aceclofenac, Paracetamol, Phenylephrine Hydrochloride, Cetirizine Hydrochloride & Caffeine Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-187",
    "sno": "187",
    "name": "Levofloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-188",
    "sno": "188",
    "name": "Benidipine Hydrochloride Tablets JP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-189",
    "sno": "189",
    "name": "Benidipine Hydrochloride Tablets JP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-190",
    "sno": "190",
    "name": "Deflazacort Tablets 12 mg",
    "form": "Tablet",
    "category": "Corticosteroids (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-191",
    "sno": "191",
    "name": "Ivermectin Dispersible Tablets",
    "form": "Dispersible Tablet",
    "category": "Antiparasitic / Antiprotozoal",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-192",
    "sno": "192",
    "name": "Levetiracetam Tablets IP",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-193",
    "sno": "193",
    "name": "Glimepiride Tablets IP",
    "form": "Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-194",
    "sno": "194",
    "name": "Telmisartan and Hydrochlorothiazide Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-195",
    "sno": "195",
    "name": "Voglibose Mouth-Dissolving Tablets",
    "form": "Orally Disintegrating Tablet (ODT)",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-196",
    "sno": "196",
    "name": "Ibuprofen & Paracetamol Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-197",
    "sno": "197",
    "name": "Ranitidine Tablets IP",
    "form": "Tablet",
    "category": "GI — Antacid / PPI",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-198",
    "sno": "198",
    "name": "Gabapentin Tablets IP",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-199",
    "sno": "199",
    "name": "Aceclofenac & Thiocolchicoside Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-200",
    "sno": "200",
    "name": "Metoprolol Succinate Prolonged-release & Amlodipine Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-201",
    "sno": "201",
    "name": "Metoprolol Succinate Prolonged-release & Amlodipine Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-202",
    "sno": "202",
    "name": "Mecobalamin Tablets (1500 mcg)",
    "form": "Tablet",
    "category": "Nutritional / Haematinics",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-203",
    "sno": "203",
    "name": "Montelukast & Fexofenadine Hydrochloride Tablets",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-204",
    "sno": "204",
    "name": "Glimepiride & Metformin Hydrochloride (Sustained-release) Tablets (3 mg / 500 mg)",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-205",
    "sno": "205",
    "name": "Sitagliptin Tablets IP (50 mg)",
    "form": "Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-206",
    "sno": "206",
    "name": "Sitagliptin Tablets IP (100 mg)",
    "form": "Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-207",
    "sno": "207",
    "name": "Amlodipine & Olmesartan Medoxomil Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-208",
    "sno": "208",
    "name": "Olmesartan Medoxomil, Amlodipine and Hydrochlorothiazide Tablets",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-209",
    "sno": "209",
    "name": "Olmesartan Medoxomil and Hydrochlorothiazide Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-210",
    "sno": "210",
    "name": "Telmisartan, Amlodipine and Hydrochlorothiazide Tablets",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-211",
    "sno": "211",
    "name": "Telmisartan and Chlorthalidone Tablets",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-212",
    "sno": "212",
    "name": "Glimepiride & Metformin Hydrochloride (Sustained-release) Tablets (4 mg / 500 mg)",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-213",
    "sno": "213",
    "name": "Pregabalin (Sustained-release) and Methylcobalamin Tablets (150 mg / 1500 mcg)",
    "form": "Modified-Release Tablet",
    "category": "Nutritional / Haematinics",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-214",
    "sno": "214",
    "name": "Tranexamic Acid Tablets IP",
    "form": "Tablet",
    "category": "Haematology / Coagulation",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-215",
    "sno": "215",
    "name": "Drotaverine Hydrochloride & Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / Antipyretic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-216",
    "sno": "216",
    "name": "Gabapentin and Nortriptyline Tablets",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-217",
    "sno": "217",
    "name": "Montelukast, Levocetirizine Dihydrochloride & Ambroxol Hydrochloride (Sustained-release) Tablets",
    "form": "Modified-Release Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-218",
    "sno": "218",
    "name": "Amlodipine and Atenolol Tablets IP",
    "form": "Tablet",
    "category": "Cardiovascular / Antihypertensive",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-219",
    "sno": "219",
    "name": "Paracetamol, Fexofenadine Hydrochloride & Phenylephrine Hydrochloride Tablets",
    "form": "Tablet",
    "category": "Analgesic / Antipyretic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-220",
    "sno": "220",
    "name": "Escitalopram Tablets IP",
    "form": "Tablet",
    "category": "Psychiatry — CNS / Antidepressants",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-221",
    "sno": "221",
    "name": "Rosuvastatin Tablets IP",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-222",
    "sno": "222",
    "name": "Rosuvastatin Tablets IP",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-223",
    "sno": "223",
    "name": "Rosuvastatin Tablets IP",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-224",
    "sno": "224",
    "name": "Ciprofloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-225",
    "sno": "225",
    "name": "Ciprofloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-226",
    "sno": "226",
    "name": "Etoricoxib Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-227",
    "sno": "227",
    "name": "Etoricoxib Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-228",
    "sno": "228",
    "name": "Febuxostat Tablets 40 mg",
    "form": "Tablet",
    "category": "Anti-Gout / Uric Acid Control",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-229",
    "sno": "229",
    "name": "Febuxostat Tablets 80 mg",
    "form": "Tablet",
    "category": "Anti-Gout / Uric Acid Control",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-230",
    "sno": "230",
    "name": "Keterolac Tromethamine Dispersible Tablets",
    "form": "Dispersible Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-231",
    "sno": "231",
    "name": "Paracetamol Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / Antipyretic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-232",
    "sno": "232",
    "name": "Paracetamol Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / Antipyretic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-233",
    "sno": "233",
    "name": "Piroxicam Dispersible Tablets",
    "form": "Dispersible Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-234",
    "sno": "234",
    "name": "Ofloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-235",
    "sno": "235",
    "name": "Cetirizine Hydrochloride Tablets IP",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-236",
    "sno": "236",
    "name": "Nimesulide & Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-237",
    "sno": "237",
    "name": "Diclofenac Potassium & Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-238",
    "sno": "238",
    "name": "Levetiracetam Tablets IP",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-239",
    "sno": "239",
    "name": "Levetiracetam Tablets IP",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-240",
    "sno": "240",
    "name": "Aciclovir Dispersible Tablets IP",
    "form": "Dispersible Tablet",
    "category": "Antiviral",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-241",
    "sno": "241",
    "name": "Aciclovir Tablets IP",
    "form": "Tablet",
    "category": "Antiviral",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-242",
    "sno": "242",
    "name": "Gabapentin & Methylcobalamin Tablets",
    "form": "Tablet",
    "category": "Nutritional / Haematinics",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-243",
    "sno": "243",
    "name": "Metformin Hydrochloride Prolonged-release Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-244",
    "sno": "244",
    "name": "Metformin Hydrochloride Prolonged-release Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-245",
    "sno": "245",
    "name": "Ondansetron Orally Disintegrating Tablets IP",
    "form": "Orally Disintegrating Tablet (ODT)",
    "category": "GI — Antiemetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-246",
    "sno": "246",
    "name": "Ondansetron Orally Disintegrating Tablets IP",
    "form": "Orally Disintegrating Tablet (ODT)",
    "category": "GI — Antiemetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-247",
    "sno": "247",
    "name": "Prolonged-release Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Other / Miscellaneous",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-248",
    "sno": "248",
    "name": "Aceclofenac, Paracetamol & Serratiopeptidase Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-249",
    "sno": "249",
    "name": "Rosuvastatin Tablets IP",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-250",
    "sno": "250",
    "name": "Rosuvastatin Tablets IP",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-251",
    "sno": "251",
    "name": "Rosuvastatin Tablets IP",
    "form": "Tablet",
    "category": "Lipid-Lowering (Statin)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-252",
    "sno": "252",
    "name": "Ciprofloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-253",
    "sno": "253",
    "name": "Ciprofloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-254",
    "sno": "254",
    "name": "Etoricoxib Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-255",
    "sno": "255",
    "name": "Etoricoxib Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-256",
    "sno": "256",
    "name": "Febuxostat Tablets 40 mg",
    "form": "Tablet",
    "category": "Anti-Gout / Uric Acid Control",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-257",
    "sno": "257",
    "name": "Febuxostat Tablets 80 mg",
    "form": "Tablet",
    "category": "Anti-Gout / Uric Acid Control",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-258",
    "sno": "258",
    "name": "Keterolac Tromethamine Dispersible Tablets",
    "form": "Dispersible Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-259",
    "sno": "259",
    "name": "Paracetamol Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / Antipyretic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-260",
    "sno": "260",
    "name": "Paracetamol Tablets IP",
    "form": "Tablet",
    "category": "Analgesic / Antipyretic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-261",
    "sno": "261",
    "name": "Piroxicam Dispersible Tablets",
    "form": "Dispersible Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-262",
    "sno": "262",
    "name": "Ofloxacin Tablets IP",
    "form": "Tablet",
    "category": "Antibiotic (Oral)",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-263",
    "sno": "263",
    "name": "Cetirizine Hydrochloride Tablets IP",
    "form": "Tablet",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-264",
    "sno": "264",
    "name": "Nimesulide & Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-265",
    "sno": "265",
    "name": "Diclofenac Potassium & Paracetamol Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-266",
    "sno": "266",
    "name": "Levetiracetam Tablets IP",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-267",
    "sno": "267",
    "name": "Levetiracetam Tablets IP",
    "form": "Tablet",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-268",
    "sno": "268",
    "name": "Aciclovir Dispersible Tablets IP",
    "form": "Dispersible Tablet",
    "category": "Antiviral",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-269",
    "sno": "269",
    "name": "Aciclovir Tablets IP",
    "form": "Tablet",
    "category": "Antiviral",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-270",
    "sno": "270",
    "name": "Gabapentin & Methylcobalamin Tablets",
    "form": "Tablet",
    "category": "Nutritional / Haematinics",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-271",
    "sno": "271",
    "name": "Metformin Hydrochloride Prolonged-release Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-272",
    "sno": "272",
    "name": "Metformin Hydrochloride Prolonged-release Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-273",
    "sno": "273",
    "name": "Ondansetron Orally Disintegrating Tablets IP",
    "form": "Orally Disintegrating Tablet (ODT)",
    "category": "GI — Antiemetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-274",
    "sno": "274",
    "name": "Ondansetron Orally Disintegrating Tablets IP",
    "form": "Orally Disintegrating Tablet (ODT)",
    "category": "GI — Antiemetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-275",
    "sno": "275",
    "name": "Teneligliptin and Metformin Hydrochloride Prolonged-release Tablets IP",
    "form": "Modified-Release Tablet",
    "category": "Antidiabetic",
    "dosageType": "osd"
  },
  {
    "id": "sheet-osd-276",
    "sno": "276",
    "name": "Aceclofenac, Paracetamol & Serratiopeptidase Tablets",
    "form": "Tablet",
    "category": "Analgesic / NSAID",
    "dosageType": "osd"
  },
  {
    "id": "sheet-cap-1",
    "sno": "1",
    "name": "Iron, Zinc & Folic Acid Capsules",
    "form": "Capsule",
    "category": "Nutritional / Haematinics",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-2",
    "sno": "2",
    "name": "Rabeprazole Sodium (Enteric- coated) & Domperidone (Sustained-release) Capsules",
    "form": "Modified-Release Capsule",
    "category": "GI — Antacid / PPI",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-3",
    "sno": "3",
    "name": "Acebrophylline Capsules",
    "form": "Capsule",
    "category": "Respiratory — Bronchodilator / Mucolytic",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-4",
    "sno": "4",
    "name": "Pregabalin & Methylcobalamin Capsules IP",
    "form": "Capsule",
    "category": "Nutritional / Haematinics",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-5",
    "sno": "5",
    "name": "Clindamycin Capsules IP",
    "form": "Capsule",
    "category": "Other / Miscellaneous",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-6",
    "sno": "6",
    "name": "Diacerein Capsules IP",
    "form": "Capsule",
    "category": "Other / Miscellaneous",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-7",
    "sno": "7",
    "name": "Doxycycline & Lactobacillus Capsules",
    "form": "Capsule",
    "category": "Antibiotic (Oral)",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-8",
    "sno": "8",
    "name": "Omeprazole Gastro- resistant Capsules IP",
    "form": "Capsule",
    "category": "GI — Antacid / PPI",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-9",
    "sno": "9",
    "name": "Omeprazole & Domperidone Capsules IP",
    "form": "Capsule",
    "category": "GI — Antacid / PPI",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-10",
    "sno": "10",
    "name": "Pregabalin Capsules IP",
    "form": "Capsule",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-11",
    "sno": "11",
    "name": "Racecadotril Capsules IP",
    "form": "Capsule",
    "category": "GI — Antispasmodic / Digestive",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-12",
    "sno": "12",
    "name": "Tamsulosin Hydrochloride Prolonged-release Capsules IP",
    "form": "Modified-Release Capsule",
    "category": "Urology / Sexual Health",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-13",
    "sno": "13",
    "name": "Ribavirin Capsules IP",
    "form": "Capsule",
    "category": "Antiviral",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-14",
    "sno": "14",
    "name": "Pregabalin Capsules IP",
    "form": "Capsule",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-15",
    "sno": "15",
    "name": "Duloxetine Delayed Release Capsules USP",
    "form": "Capsule",
    "category": "Psychiatry — CNS / Antidepressants",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-16",
    "sno": "16",
    "name": "Pregabalin Capsules IP",
    "form": "Capsule",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-17",
    "sno": "17",
    "name": "Gabapentin Capsules IP",
    "form": "Capsule",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-18",
    "sno": "18",
    "name": "(Enteric-coated) & Domperidone (Sustained-Release) Capsules",
    "form": "Modified-Release Capsule",
    "category": "GI — Antiemetic",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-cap-19",
    "sno": "19",
    "name": "Rabeprazole Sodium (Enteric-coated) & Domperidone (Sustained-Release) Capsules",
    "form": "Modified-Release Capsule",
    "category": "GI — Antacid / PPI",
    "dosageType": "capsules"
  },
  {
    "id": "sheet-liq-1",
    "sno": "1",
    "name": "Disodium Hydrogen Citrate Syrup",
    "form": "Syrup",
    "category": "Urinary Alkaliser",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-2",
    "sno": "2",
    "name": "Levocetirizine Dihydrochloride & Ambroxol Hydrochloride Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-3",
    "sno": "3",
    "name": "Ambroxol Hydrochloride, Guaiphenesin & Levosalbutamol Sulphate Syrup",
    "form": "Syrup",
    "category": "Respiratory — Bronchodilator / Mucolytic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-4",
    "sno": "4",
    "name": "Cyproheptadine Hydrochloride &  Tricholine Citrate Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-5",
    "sno": "5",
    "name": "Aluminium, Magnesium and Simethicone Oral Suspension IP",
    "form": "Oral Suspension",
    "category": "GI — Antacid / PPI",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-6",
    "sno": "6",
    "name": "Chlorpheniramine Maleate, Dextromethorphan Hydrobromide & Phenylephrine Hydrochloride Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-7",
    "sno": "7",
    "name": "Calcium, Magnesium, Zinc & Vitamin D3 Suspension",
    "form": "Oral Suspension",
    "category": "Nutritional / Haematinics",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-8",
    "sno": "8",
    "name": "Diastase & Pepsin Syrup",
    "form": "Syrup",
    "category": "GI — Antispasmodic / Digestive",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-9",
    "sno": "9",
    "name": "Iron Tonic with Vitamin B6, Vitamin B12 & Folic Acid",
    "form": "Syrup",
    "category": "Nutritional / Haematinics",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-10",
    "sno": "10",
    "name": "Ferric Ammonium Citrate, Cyanocobalamin & Folic Acid Syrup",
    "form": "Syrup",
    "category": "Nutritional / Haematinics",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-11",
    "sno": "11",
    "name": "Iron, Proteolysed Liver, Peptone & Folic Acid Syrup",
    "form": "Syrup",
    "category": "Nutritional / Haematinics",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-12",
    "sno": "12",
    "name": "Ofloxacin Oral Suspension IP",
    "form": "Oral Suspension",
    "category": "Antibiotic (Oral)",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-13",
    "sno": "13",
    "name": "Ofloxacin Oral Suspension IP",
    "form": "Oral Suspension",
    "category": "Antibiotic (Oral)",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-14",
    "sno": "14",
    "name": "Lactulose Solution IP",
    "form": "Oral Solution",
    "category": "GI — Laxative",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-15",
    "sno": "15",
    "name": "Liquid Paraffin & Milk of Magnesia Suspension",
    "form": "Oral Suspension",
    "category": "Other / Miscellaneous",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-16",
    "sno": "16",
    "name": "Liquid Paraffin, Milk of Magnesia & Sodium Picosulfate Suspension",
    "form": "Oral Suspension",
    "category": "GI — Laxative",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-17",
    "sno": "17",
    "name": "Paracetamol Paediatric Oral Suspension IP",
    "form": "Oral Suspension",
    "category": "Analgesic / Antipyretic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-18",
    "sno": "18",
    "name": "Paracetamol and Mefenamic Acid Suspension",
    "form": "Oral Suspension",
    "category": "Analgesic / NSAID",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-19",
    "sno": "19",
    "name": "Dextromethorphan Hydrobromide, Bromhexine Hydrochloride & Phenylephrine Hydrochloride Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-20",
    "sno": "20",
    "name": "Levocetirizine Dihydrochloride Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-21",
    "sno": "21",
    "name": "Piracetam Syrup",
    "form": "Syrup",
    "category": "Neurology — Anticonvulsant / Neuropathic Pain",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-22",
    "sno": "22",
    "name": "Cetirizine Syrup IP",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-23",
    "sno": "23",
    "name": "Sodium Picosulfate Oral Solution BP",
    "form": "Oral Solution",
    "category": "GI — Laxative",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-24",
    "sno": "24",
    "name": "Tricholine Citrate and Sorbitol Syrup",
    "form": "Syrup",
    "category": "GI — Antispasmodic / Digestive",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-25",
    "sno": "25",
    "name": "Paracetamol Drops",
    "form": "Oral Drops",
    "category": "Analgesic / Antipyretic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-26",
    "sno": "26",
    "name": "Protein, L-Lysine, Vitamins & Minerals Syrup",
    "form": "Syrup",
    "category": "Nutritional / Haematinics",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-27",
    "sno": "27",
    "name": "Zinc Gluconate Syrup",
    "form": "Syrup",
    "category": "Other / Miscellaneous",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-28",
    "sno": "28",
    "name": "Albendazole Oral Suspension IP",
    "form": "Oral Suspension",
    "category": "Antiparasitic / Antiprotozoal",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-29",
    "sno": "29",
    "name": "Ambroxol Hydrochloride Drops",
    "form": "Oral Drops",
    "category": "Respiratory — Bronchodilator / Mucolytic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-30",
    "sno": "30",
    "name": "Azithromycin Oral Suspension IP",
    "form": "Oral Suspension",
    "category": "Antibiotic (Oral)",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-31",
    "sno": "31",
    "name": "Azithromycin Oral Suspension IP",
    "form": "Oral Suspension",
    "category": "Antibiotic (Oral)",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-32",
    "sno": "32",
    "name": "Cyproheptadine Hydrochloride &  Tricholine Citrate Drops",
    "form": "Oral Drops",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-33",
    "sno": "33",
    "name": "Paracetamol, Phenylephrine Hydrochloride & Chlorpheniramine Maleate Drops",
    "form": "Oral Drops",
    "category": "Analgesic / Antipyretic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-34",
    "sno": "34",
    "name": "Diastase and Pepsin Drops",
    "form": "Oral Drops",
    "category": "GI — Antispasmodic / Digestive",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-35",
    "sno": "35",
    "name": "Albendazole and Ivermectin Suspension",
    "form": "Oral Suspension",
    "category": "Antiparasitic / Antiprotozoal",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-36",
    "sno": "36",
    "name": "Iron, Cyanocobalamin, Folic Acid and L-Lysine Hydrochloride Drops",
    "form": "Oral Drops",
    "category": "Nutritional / Haematinics",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-37",
    "sno": "37",
    "name": "Domperidone Suspension IP",
    "form": "Oral Suspension",
    "category": "GI — Antiemetic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-38",
    "sno": "38",
    "name": "Dicyclomine Hydrochloride & Activated Dimethicone Drops",
    "form": "Oral Drops",
    "category": "GI — Antispasmodic / Digestive",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-39",
    "sno": "39",
    "name": "Ondansetron Oral Solution IP",
    "form": "Oral Solution",
    "category": "GI — Antiemetic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-40",
    "sno": "40",
    "name": "Doxofylline syrup",
    "form": "Syrup",
    "category": "Respiratory — Bronchodilator / Mucolytic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-41",
    "sno": "41",
    "name": "L-Ornithine L-Aspartate Syrup",
    "form": "Syrup",
    "category": "Other / Miscellaneous",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-42",
    "sno": "42",
    "name": "Chlorpheniramine Maleate & Dextromethorphan Hydrobromide Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-43",
    "sno": "43",
    "name": "Magaldrate and Simethicone Oral Suspension USP",
    "form": "Oral Suspension",
    "category": "GI — Antacid / PPI",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-44",
    "sno": "44",
    "name": "Magaldrate and Simethicone Oral Suspension IP",
    "form": "Oral Suspension",
    "category": "GI — Antacid / PPI",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-45",
    "sno": "45",
    "name": "Hydroxyzine Oral Solution IP",
    "form": "Oral Solution",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-46",
    "sno": "46",
    "name": "Cholecalciferol Oral Drops",
    "form": "Oral Drops",
    "category": "Nutritional / Haematinics",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-47",
    "sno": "47",
    "name": "Cholecalciferol Oral Drops",
    "form": "Oral Drops",
    "category": "Nutritional / Haematinics",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-48",
    "sno": "48",
    "name": "Paracetamol Paediatric Oral Suspension IP",
    "form": "Oral Suspension",
    "category": "Analgesic / Antipyretic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-49",
    "sno": "49",
    "name": "Montelukast and Levocetirizine Dihydrochloride Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-50",
    "sno": "50",
    "name": "Ambroxol Hydrochloride, Terbutaline Sulphate & Guaiphenesin Syrup",
    "form": "Syrup",
    "category": "Respiratory — Bronchodilator / Mucolytic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-51",
    "sno": "51",
    "name": "Terbutaline Sulphate, Bromhexine Hydrochloride & Guaiphenesin Syrup",
    "form": "Syrup",
    "category": "Respiratory — Bronchodilator / Mucolytic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-52",
    "sno": "52",
    "name": "Cetirizine Dihydrochloride, Dextromethorphan Hydrobromide & Phenylephrine Hydrochloride Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-53",
    "sno": "53",
    "name": "Ambroxol Hydrochloride, Terbutaline Sulphate & Guaiphenesin Syrup",
    "form": "Syrup",
    "category": "Respiratory — Bronchodilator / Mucolytic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-54",
    "sno": "54",
    "name": "Magnesium Hydroxide, Simethicone, Dried Aluminium Hydroxide and Sodium Carboxymethylcellulose Suspension",
    "form": "Oral Suspension",
    "category": "GI — Antacid / PPI",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-55",
    "sno": "55",
    "name": "Ambroxol Hydrochloride, Terbutaline Sulphate, Guaiphenesin & Menthol Syrup",
    "form": "Syrup",
    "category": "Respiratory — Bronchodilator / Mucolytic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-56",
    "sno": "56",
    "name": "Zinc Acetate Oral Solution USP",
    "form": "Oral Solution",
    "category": "Other / Miscellaneous",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-57",
    "sno": "57",
    "name": "Hydroxyzine Hydrochloride Oral Solution USP",
    "form": "Oral Solution",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-58",
    "sno": "58",
    "name": "Phenylephrine Hydrochloride, Chlorpheniramine Maleate & Paracetamol Syrup",
    "form": "Syrup",
    "category": "Analgesic / Antipyretic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-59",
    "sno": "59",
    "name": "Ibuprofen & Paracetamol Suspension",
    "form": "Oral Suspension",
    "category": "Analgesic / NSAID",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-60",
    "sno": "60",
    "name": "Mefenamic Acid Suspension",
    "form": "Oral Suspension",
    "category": "Other / Miscellaneous",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-61",
    "sno": "61",
    "name": "Paracetamol & Domperidone Maleate Suspension",
    "form": "Oral Suspension",
    "category": "Analgesic / Antipyretic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-62",
    "sno": "62",
    "name": "Paracetamol & Dicyclomine Hydrochloride Suspension",
    "form": "Oral Suspension",
    "category": "Analgesic / Antipyretic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-63",
    "sno": "63",
    "name": "Potassium Citrate, Sodium Citrate & Citric Acid Oral Solution",
    "form": "Oral Solution",
    "category": "Urinary Alkaliser",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-64",
    "sno": "64",
    "name": "Levosalbutamol, Ambroxol Hydrochloride & Guaiphenesin Syrup",
    "form": "Syrup",
    "category": "Respiratory — Bronchodilator / Mucolytic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-65",
    "sno": "65",
    "name": "Levosalbutamol, Ambroxol Hydrochloride & Guaiphenesin Drops",
    "form": "Oral Drops",
    "category": "Respiratory — Bronchodilator / Mucolytic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-66",
    "sno": "66",
    "name": "Simethicone, Dill Oil & Fennel Oil Drops",
    "form": "Oral Drops",
    "category": "GI — Antacid / PPI",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-67",
    "sno": "67",
    "name": "Calcium, Vitamin D3, Vitamin B12 and Lysine Hydrochloride Suspension",
    "form": "Oral Suspension",
    "category": "Nutritional / Haematinics",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-68",
    "sno": "68",
    "name": "Desloratadine, Ambroxol Hydrochloride, Guaiphenesin & Menthol Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-69",
    "sno": "69",
    "name": "Calcium with Vitamin D3 Suspension",
    "form": "Oral Suspension",
    "category": "Nutritional / Haematinics",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-70",
    "sno": "70",
    "name": "Phenylephrine Hydrochloride & Chlorpheniramine Maleate Syrup IP",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-71",
    "sno": "71",
    "name": "Cetirizine Hydrochloride & Ambroxol Hydrochloride Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-72",
    "sno": "72",
    "name": "Loratadine, Ambroxol Hydrochloride & Guaiphenesin Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-73",
    "sno": "73",
    "name": "Promethazine Hydrochloride Syrup IP",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-74",
    "sno": "74",
    "name": "Dextromethorphan Hydrobromide & Chlorpheniramine Maleate Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-75",
    "sno": "75",
    "name": "Mefenamic Acid  & Paracetamol Suspension",
    "form": "Oral Suspension",
    "category": "Analgesic / NSAID",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-76",
    "sno": "76",
    "name": "Dextromethorphan Hydrobromide & Chlorpheniramine Maleate Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-77",
    "sno": "77",
    "name": "Phenylephrine Hydrochloride & Chlorpheniramine Maleate Drops IP",
    "form": "Oral Drops",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-78",
    "sno": "78",
    "name": "Domperidone, Dicyclomine Hydrochloride & Activated Dimethicone Suspension",
    "form": "Oral Suspension",
    "category": "GI — Antiemetic",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-79",
    "sno": "79",
    "name": "Sodium Picosulfate Oral Solution BP",
    "form": "Oral Solution",
    "category": "GI — Laxative",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-80",
    "sno": "80",
    "name": "Ambroxol Hydrochloride, Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride, Chlorpheniramine Maleate & Menthol Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-81",
    "sno": "81",
    "name": "Ofloxacin, Metronidazole & Simethicone Suspension",
    "form": "Oral Suspension",
    "category": "Antibiotic (Oral)",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-82",
    "sno": "82",
    "name": "Levofloxacin & Ornidazole oral Suspension",
    "form": "Oral Suspension",
    "category": "Antibiotic (Oral)",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-83",
    "sno": "83",
    "name": "Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride & Chlorpheniramine Maleate Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-liq-84",
    "sno": "84",
    "name": "Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride & Chlorpheniramine Maleate Syrup",
    "form": "Syrup",
    "category": "Antihistamine / Allergy & Cold",
    "dosageType": "liquids"
  },
  {
    "id": "sheet-spec-1",
    "sno": "1",
    "name": "Antiseptic mouth wash & gum Paint",
    "form": "Mouthwash",
    "category": "Oral Care",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-2",
    "sno": "2",
    "name": "Clotrimazole Mouth Paint",
    "form": "Mouth Paint / Oral Care",
    "category": "Oral Care",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-3",
    "sno": "3",
    "name": "Ketoconazole Anti-Dandruff Shampoo",
    "form": "Shampoo",
    "category": "Dermatology — Antifungal",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-4",
    "sno": "4",
    "name": "Chlorhexidine Gluconate, Sodium Fluoride & Zinc Chloride Mouthwash",
    "form": "Mouthwash",
    "category": "Oral Care",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-5",
    "sno": "5",
    "name": "Sodium Chloride Nasal Spray",
    "form": "Nasal Drops / Spray",
    "category": "Nasal / Decongestant",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-6",
    "sno": "6",
    "name": "Potassium Nitrate & Sodium Monofluorophosphate Toothpaste",
    "form": "Toothpaste",
    "category": "Oral Care",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-7",
    "sno": "7",
    "name": "Beclomethasone, Clotrimazole & Benzocaine Oral Care",
    "form": "Mouth Paint / Oral Care",
    "category": "Other / Miscellaneous",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-8",
    "sno": "8",
    "name": "Tannic Acid, Zinc Chloride & Cetrimide Gum Astringent",
    "form": "Gum Paint / Astringent",
    "category": "Oral Care",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-9",
    "sno": "9",
    "name": "Ketoconazole & Zinc Pyrithione Shampoo",
    "form": "Shampoo",
    "category": "Dermatology — Antifungal",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-10",
    "sno": "10",
    "name": "Xylometazoline Nasal Drops IP",
    "form": "Nasal Drops / Spray",
    "category": "Nasal / Decongestant",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-11",
    "sno": "11",
    "name": "Triamcinolone Oromucosal Paste BP",
    "form": "Oromucosal Paste",
    "category": "Other / Miscellaneous",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-12",
    "sno": "12",
    "name": "Oxymetazoline Hydrochloride Nasal Solution IP",
    "form": "Nasal Drops / Spray",
    "category": "Nasal / Decongestant",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-13",
    "sno": "13",
    "name": "Paradichlorobenzene, Benzocaine, Turpentine Oil & Chlorbutol Ear Drops",
    "form": "Ear Drops",
    "category": "Ear Care",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-14",
    "sno": "14",
    "name": "Xylometazoline Nasal Drops IP",
    "form": "Nasal Drops / Spray",
    "category": "Nasal / Decongestant",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-spec-15",
    "sno": "15",
    "name": "Clotrimazole & Lignocaine Hydrochloride Ear Drops",
    "form": "Ear Drops",
    "category": "Ear Care",
    "dosageType": "specialty"
  },
  {
    "id": "sheet-soap-1",
    "sno": "1",
    "name": "Clotrimazole Soap",
    "form": "Medicated Soap",
    "category": "Dermatology — Antifungal",
    "dosageType": "soaps"
  },
  {
    "id": "sheet-soap-2",
    "sno": "2",
    "name": "Fluconazole Soap",
    "form": "Medicated Soap",
    "category": "Dermatology — Antifungal",
    "dosageType": "soaps"
  },
  {
    "id": "sheet-soap-3",
    "sno": "3",
    "name": "Ketoconazole & Cetrimide Soap",
    "form": "Medicated Soap",
    "category": "Dermatology — Antifungal + Antibacterial",
    "dosageType": "soaps"
  },
  {
    "id": "sheet-soap-4",
    "sno": "4",
    "name": "Itraconazole Soap",
    "form": "Medicated Soap",
    "category": "Dermatology — Antifungal",
    "dosageType": "soaps"
  },
  {
    "id": "sheet-soap-5",
    "sno": "5",
    "name": "Luliconazole Soap",
    "form": "Medicated Soap",
    "category": "Dermatology — Antifungal",
    "dosageType": "soaps"
  },
  {
    "id": "sheet-soap-6",
    "sno": "6",
    "name": "Monosulfiram Soap",
    "form": "Medicated Soap",
    "category": "Dermatology — Antiparasitic",
    "dosageType": "soaps"
  },
  {
    "id": "sheet-soap-7",
    "sno": "7",
    "name": "Chlorhexidine Gluconate & Cetrimide Soap",
    "form": "Medicated Soap",
    "category": "Dermatology — Antibacterial",
    "dosageType": "soaps"
  },
  {
    "id": "sheet-soap-8",
    "sno": "8",
    "name": "Cetrimide, Vitamin E Acetate & Glycerin Soap",
    "form": "Medicated Soap",
    "category": "Dermatology — Antibacterial",
    "dosageType": "soaps"
  },
  {
    "id": "sheet-soap-9",
    "sno": "9",
    "name": "Permethrin Soap",
    "form": "Medicated Soap",
    "category": "Dermatology — Antiparasitic",
    "dosageType": "soaps"
  },
  {
    "id": "sheet-top-1",
    "sno": "1",
    "name": "Clindamycin Phosphate & Nicotinamide Gel",
    "form": "Gel",
    "category": "Dermatology — Antibacterial",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-2",
    "sno": "2",
    "name": "Adapalene & Clindamycin Phosphate Gel",
    "form": "Gel",
    "category": "Dermatology — Antibacterial",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-3",
    "sno": "3",
    "name": "Beclomethasone Dipropionate, Neomycin Sulphate & Clotrimazole Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-4",
    "sno": "4",
    "name": "Clindamycin & Benzoyl Peroxide Cream",
    "form": "Cream",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-5",
    "sno": "5",
    "name": "Beclomethasone Dipropionate, Neomycin Sulphate & Clotrimazole Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-6",
    "sno": "6",
    "name": "Nadifloxacin, Mometasone Furoate & Miconazole Nitrate Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-7",
    "sno": "7",
    "name": "Nadifloxacin & Clobetasol Propionate Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-8",
    "sno": "8",
    "name": "Nadifloxacin Cream IP",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-9",
    "sno": "9",
    "name": "Neomycin, Miconazole Nitrate & Fluocinolone Acetonide Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-10",
    "sno": "10",
    "name": "Urea, Lactic Acid, Propylene Glycol & Liquid Paraffin Cream",
    "form": "Cream",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-11",
    "sno": "11",
    "name": "Clotrimazole Vaginal Gel",
    "form": "Vaginal Gel",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-12",
    "sno": "12",
    "name": "Choline Salicylate & Lignocaine Hydrochloride Gel",
    "form": "Gel",
    "category": "Oral Care",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-13",
    "sno": "13",
    "name": "Povidone Iodine Ointment USP",
    "form": "Ointment",
    "category": "Dermatology — Wound / Antiseptic",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-14",
    "sno": "14",
    "name": "Povidone Iodine & Ornidazole Ointment",
    "form": "Ointment",
    "category": "Dermatology — Wound / Antiseptic",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-15",
    "sno": "15",
    "name": "Permethrin Cream",
    "form": "Cream",
    "category": "Dermatology — Antiparasitic",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-16",
    "sno": "16",
    "name": "Permethrin Lotion",
    "form": "Lotion",
    "category": "Dermatology — Antiparasitic",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-17",
    "sno": "17",
    "name": "Terbinafine Hydrochloride Cream IP",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-18",
    "sno": "18",
    "name": "Diclofenac Sodium, Methyl Salicylate, Menthol & Absolute Alcohol Gel",
    "form": "Gel",
    "category": "Dermatology — Anti-inflammatory",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-19",
    "sno": "19",
    "name": "Aciclovir Cream IP",
    "form": "Cream",
    "category": "Dermatology — Wound / Antiseptic",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-20",
    "sno": "20",
    "name": "Clobetasol Propionate & Salicylic Acid Ointment",
    "form": "Ointment",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-21",
    "sno": "21",
    "name": "Fusidic Acid and Beclomethasone Dipropionate Cream",
    "form": "Cream",
    "category": "Dermatology — Antibacterial",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-22",
    "sno": "22",
    "name": "Beclomethasone Dipropionate, Phenylephrine Hydrochloride & Lignocaine Hydrochloride Cream",
    "form": "Cream",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-23",
    "sno": "23",
    "name": "Silver Nitrate, Chlorhexidine Gluconate, Aloe Vera & Allantoin Cream",
    "form": "Cream",
    "category": "Dermatology — Antibacterial",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-24",
    "sno": "24",
    "name": "Troxerutin, Calcium Dobesilate, Zinc, Phenylephrine, Lignocaine with Hydrocortisone Cream",
    "form": "Cream",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-25",
    "sno": "25",
    "name": "Clotrimazole & Beclomethasone Dipropionate Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-26",
    "sno": "26",
    "name": "Fradiomycin Skin Cream",
    "form": "Cream",
    "category": "Dermatology — Antibacterial",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-27",
    "sno": "27",
    "name": "Clobetasol Propionate, Neomycin Sulphate & Miconazole Nitrate Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-28",
    "sno": "28",
    "name": "Clobetasol Propionate with Salicylic Acid Lotion",
    "form": "Lotion",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-29",
    "sno": "29",
    "name": "Calamine, Diphenhydramine Hydrochloride & Camphor Lotion",
    "form": "Lotion",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-30",
    "sno": "30",
    "name": "Gamma Benzene Hexachloride & Cetrimide Lotion",
    "form": "Lotion",
    "category": "Dermatology — Antibacterial",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-31",
    "sno": "31",
    "name": "Clotrimazole & Beclomethasone Dipropionate Lotion",
    "form": "Lotion",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-32",
    "sno": "32",
    "name": "Beclomethasone Dipropionate Lotion",
    "form": "Lotion",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-33",
    "sno": "33",
    "name": "N, N Diethyl Benzamide Cream",
    "form": "Cream",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-34",
    "sno": "34",
    "name": "Diclofenac Diethylamine, Virgin Linseed Oil, Menthol, Methyl Salicylate & Capsaicin Gel",
    "form": "Gel",
    "category": "Dermatology — Anti-inflammatory",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-35",
    "sno": "35",
    "name": "Fluocinolone Acetonide, Hydroquinone & Tretinoin Cream",
    "form": "Cream",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-36",
    "sno": "36",
    "name": "Glycolic Acid, Arbutin & Kojic Acid Dipalmitate Cream",
    "form": "Cream",
    "category": "Dermatology — Skin Lightening",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-37",
    "sno": "37",
    "name": "Clotrimazole, Menthol, Ichthammol, Boric Acid and Zinc Oxide Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-38",
    "sno": "38",
    "name": "Aminacrine Hydrochloride & Cetrimide Cream",
    "form": "Cream",
    "category": "Dermatology — Antibacterial",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-39",
    "sno": "39",
    "name": "Hydroquinone, Tretinoin & Mometasone Furoate Cream",
    "form": "Cream",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-40",
    "sno": "40",
    "name": "Metronidazole & Povidone-Iodine Ointment",
    "form": "Ointment",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-41",
    "sno": "41",
    "name": "Calcitriol & Clobetasol Propionate Ointment",
    "form": "Ointment",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-42",
    "sno": "42",
    "name": "Ketoconazole & Beclomethasone Dipropionate Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-43",
    "sno": "43",
    "name": "Adapalene Gel BP",
    "form": "Gel",
    "category": "Dermatology — Acne Treatment",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-44",
    "sno": "44",
    "name": "White Soft Paraffin & Light Liquid Paraffin Cream",
    "form": "Cream",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-45",
    "sno": "45",
    "name": "Itraconazole Gel",
    "form": "Gel",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-46",
    "sno": "46",
    "name": "Itraconazole & Terbinafine Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-47",
    "sno": "47",
    "name": "Ketoconazole Cream BP",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-48",
    "sno": "48",
    "name": "Tacrolimus Ointment",
    "form": "Ointment",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-49",
    "sno": "49",
    "name": "Ketoconazole, Beclomethasone Dipropionate & Neomycin Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-50",
    "sno": "50",
    "name": "Amorolfine Hydrochloride Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-51",
    "sno": "51",
    "name": "Azelaic Acid Cream",
    "form": "Cream",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-52",
    "sno": "52",
    "name": "Hydroquinone, Tretinoin & Mometasone Furoate Cream",
    "form": "Cream",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-53",
    "sno": "53",
    "name": "Diclofenac Diethylamine, Methyl Salicylate, Menthol, Virgin Linseed Oil Gel",
    "form": "Gel",
    "category": "Dermatology — Anti-inflammatory",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-54",
    "sno": "54",
    "name": "Mometasone Furoate & Terbinafine Hydrochloride Gel",
    "form": "Gel",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-55",
    "sno": "55",
    "name": "Halobetasol Propionate Cream",
    "form": "Cream",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-56",
    "sno": "56",
    "name": "Halobetasol Propionate with Salicylic acid Ointment",
    "form": "Ointment",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-57",
    "sno": "57",
    "name": "Mometasone Furoate & Fusidic acid Cream",
    "form": "Cream",
    "category": "Dermatology — Antibacterial",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-58",
    "sno": "58",
    "name": "Mometasone Furoate & Salicylic acid Ointment",
    "form": "Ointment",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-59",
    "sno": "59",
    "name": "Halobetasol Propionate & Fusidic Acid Cream",
    "form": "Cream",
    "category": "Dermatology — Antibacterial",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-60",
    "sno": "60",
    "name": "Sertaconazole Nitrate Cream IP",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-61",
    "sno": "61",
    "name": "Ammonium Lactate Cream",
    "form": "Cream",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-62",
    "sno": "62",
    "name": "Nanocrystalline Silver Gel",
    "form": "Gel",
    "category": "Dermatology — Antibacterial",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-63",
    "sno": "63",
    "name": "Tacrolimus Ointment",
    "form": "Ointment",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-64",
    "sno": "64",
    "name": "Ketoconazole & Zinc Pyrithione Lotion",
    "form": "Lotion",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-65",
    "sno": "65",
    "name": "Sertaconazole Nitrate Lotion",
    "form": "Lotion",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-66",
    "sno": "66",
    "name": "Luliconazole Cream IP",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-67",
    "sno": "67",
    "name": "Luliconazole Lotion IP",
    "form": "Lotion",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-68",
    "sno": "68",
    "name": "Eberconazole Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-69",
    "sno": "69",
    "name": "Eberconazole & Mometasone Furoate Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-70",
    "sno": "70",
    "name": "Fluconazole Gel",
    "form": "Gel",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-71",
    "sno": "71",
    "name": "Clobetasol Cream IP",
    "form": "Cream",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-72",
    "sno": "72",
    "name": "Calamine Lotion IP",
    "form": "Lotion",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-73",
    "sno": "73",
    "name": "Mometasone Cream IP",
    "form": "Cream",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-74",
    "sno": "74",
    "name": "Mupirocin Ointment IP",
    "form": "Ointment",
    "category": "Dermatology — Antibacterial",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-75",
    "sno": "75",
    "name": "Metronidazole Gel IP",
    "form": "Gel",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-76",
    "sno": "76",
    "name": "Metronidazole Gel IP",
    "form": "Gel",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-77",
    "sno": "77",
    "name": "Fluticasone Propionate Cream IP",
    "form": "Cream",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-78",
    "sno": "78",
    "name": "Salicylic Acid Ointment IP",
    "form": "Ointment",
    "category": "Dermatology — Keratolytic",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-79",
    "sno": "79",
    "name": "Sertaconazole Nitrate & Beclomethasone Dipropionate Cream IP",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-80",
    "sno": "80",
    "name": "Hydrocortisone Acetate Cream IP",
    "form": "Cream",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-81",
    "sno": "81",
    "name": "Tretinoin Gel USP",
    "form": "Gel",
    "category": "Dermatology — Skin Lightening",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-82",
    "sno": "82",
    "name": "Itraconazole, Ofloxacin, Ornidazole & Clobetasol Propionate Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-83",
    "sno": "83",
    "name": "Clobetasol Propionate, Gentamicin, Tolnaftate, Iodochlorhydroxyquinoline & Clotrimazole Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-84",
    "sno": "84",
    "name": "Ciprofloxacin, Metronidazole, Terbinafine Hydrochloride & Clobetasol Propionate Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-85",
    "sno": "85",
    "name": "Diclofenac Diethylamine, Thiocolchicoside, Virgin Linseed Oil, Methyl Salicylate & Menthol Gel",
    "form": "Gel",
    "category": "Dermatology — Anti-inflammatory",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-86",
    "sno": "86",
    "name": "Zinc Oxide Cream",
    "form": "Cream",
    "category": "Dermatology — Wound / Antiseptic",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-87",
    "sno": "87",
    "name": "Neomycin and Polymyxin B Sulfate and Bacitracin Zinc Ointment U.S.P.",
    "form": "Ointment",
    "category": "Dermatology — Antibacterial",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-88",
    "sno": "88",
    "name": "Povidone-Iodine Ointment USP",
    "form": "Ointment",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-89",
    "sno": "89",
    "name": "Lidocaine & Prilocaine Gel",
    "form": "Gel",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-90",
    "sno": "90",
    "name": "Clobetasol Propionate, Salicylic Acid, Urea, & Lactic Acid Ointment",
    "form": "Ointment",
    "category": "Dermatology — Corticosteroid",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-91",
    "sno": "91",
    "name": "Fusidic Acid, Clotrimazole & Clobetasol Propionate Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-92",
    "sno": "92",
    "name": "Luliconazole & Beclomethasone Dipropionate Cream",
    "form": "Cream",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-93",
    "sno": "93",
    "name": "Terbinafine Hydrochloride Lotion",
    "form": "Lotion",
    "category": "Dermatology — Antifungal",
    "dosageType": "topicals"
  },
  {
    "id": "sheet-top-94",
    "sno": "94",
    "name": "Ketokonazole",
    "form": "Cream",
    "category": "Other / Miscellaneous",
    "dosageType": "topicals"
  }
];
