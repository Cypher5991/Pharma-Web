import {
  DosageCategoryInfo,
  ProductCatalogItem,
  ManufacturingUnit,
  LeadershipMember,
  MilestoneItem,
  TrustCertification,
  ClientPartner,
  CompanyPrinciple
} from '../types';

export const COMPANY_STATS = [
  { id: 'osd-capacity', label: 'Annual OSD Capacity', value: '1.2B+', unit: 'Units / Year', sub: 'Tablets & Capsules', iconName: 'Pill' },
  { id: 'topical-capacity', label: 'Topicals & Derma Capacity', value: '45M+', unit: 'Tubes / Year', sub: 'Tubes & Jars Annually', iconName: 'Droplet' },
  { id: 'liquids-capacity', label: 'Liquid Orals Throughput', value: '30M+', unit: 'Bottles / Year', sub: 'Bottles Annually', iconName: 'Droplets' },
  { id: 'soaps-capacity', label: 'Medicated Bars & Soaps', value: '25M+', unit: 'Bars / Year', sub: 'Syndet & Opaque Bars', iconName: 'Sparkles' },
  { id: 'units-count', label: 'Manufacturing Campuses', value: '3 Units', unit: 'Baddi (HP)', sub: 'Dedicated Cleanroom Blocks', iconName: 'Building' }
];

export const KEY_COMPANY_METRICS = COMPANY_STATS;

export const TRUST_CERTIFICATIONS: TrustCertification[] = [
  {
    id: 'who-gmp',
    name: 'WHO-GMP Certified',
    authority: 'World Health Organization Standards',
    badgeText: 'WHO-GMP Compliant',
    description: 'Audited and verified cleanroom manufacturing adhering to global pharmacopeial standards (IP/BP/USP).',
    verifiedYear: '2026',
    iconName: 'ShieldCheck'
  },
  {
    id: 'cgmp-sched-m',
    name: 'Revised Schedule M (cGMP)',
    authority: 'CDSCO & State Drug Authority HP',
    badgeText: 'CDSCO Approved',
    description: 'Full compliance with revised Schedule M requirements for AHU cascading, HVAC validation, and computerized batch systems.',
    verifiedYear: '2026',
    iconName: 'Award'
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015 & ISO 22716',
    authority: 'Quality Management Systems',
    badgeText: 'ISO Certified',
    description: 'Comprehensive total quality management, automated in-process quality assurance (IPQA), and batch traceability.',
    verifiedYear: '2025',
    iconName: 'CheckCircle2'
  },
  {
    id: 'glp-lab',
    name: 'GLP Certified Testing Hub',
    authority: 'HP State Drug Testing Accreditation',
    badgeText: 'GLP Accredited',
    description: 'In-house HPLC, GC-MS, FTIR, Dissolution, and Microbiology testing labs for 100% release testing.',
    verifiedYear: '2026',
    iconName: 'Microscope'
  }
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  { name: 'Sun Pharma Ltd', category: 'Pharma Leader' },
  { name: 'Cipla Therapeutics', category: 'Formulations' },
  { name: 'Torrent Pharmaceuticals', category: 'Cardio & Diabetology' },
  { name: 'Mankind Healthcare', category: 'Consumer Health' },
  { name: 'Alkem Laboratories', category: 'Anti-Infectives' },
  { name: 'Lupin Formulations', category: 'Specialty Formulations' },
  { name: 'Dr. Reddy’s Labs', category: 'Generics' },
  { name: 'Glenmark Pharmaceuticals', category: 'Dermatology & Respiratory' },
  { name: 'Zydus Lifesciences', category: 'Therapeutics' },
  { name: 'Abbott Healthcare', category: 'Nutrition & Women’s Health' }
];

export const CLIENT_PARTNERS_LIST = CLIENT_PARTNERS;

export const CDMO_VALUE_PROPOSITIONS = [
  {
    id: 'cleanrooms',
    title: 'Zero-Contamination Cleanrooms',
    description: 'Class 100,000 (ISO Class 8) and Class 10,000 (ISO Class 7) cleanroom blocks with dedicated AHUs and HEPA terminal filtration.',
    iconName: 'Layers'
  },
  {
    id: 'tech-transfer',
    title: 'Rapid Tech Transfer & Scale-Up',
    description: 'Accelerated pilot-to-commercial validation within 3 to 4 weeks with full stability study documentation.',
    iconName: 'Zap'
  },
  {
    id: 'regulatory-dossiers',
    title: 'Comprehensive Regulatory Dossiers',
    description: 'Ready ACTD/CTD dossiers, Stability Reports (Zone IVb), Process Validation, and Pharmacopeial compliance for export markets.',
    iconName: 'FileCheck'
  },
  {
    id: 'packaging-flexibility',
    title: 'High-Volume Packaging Flexibility',
    description: 'Alu-Alu, Blister (PVC/PVDC), HDPE bottles, Lamitubes, Glass vials, and Monocarton cartoning lines.',
    iconName: 'Box'
  }
];

export const OPERATIONAL_ADVANTAGES = CDMO_VALUE_PROPOSITIONS;

export const DOSAGE_CATEGORIES: DosageCategoryInfo[] = [
  {
    id: 'osd',
    name: 'Oral Solid Dose (OSD)',
    shortName: 'OSD Formulations',
    iconName: 'Pill',
    headline: 'High-Speed Automated Compression, Coating & Encapsulation',
    monthlyThroughput: '100M+ Units / Month',
    description: 'Dedicated high-capacity tablet compression suites and automated encapsulation modules engineered for high batch reproducibility.',
    facilityArea: '45,000 Sq. Ft.',
    cleanroomClass: 'Class D / ISO Class 8',
    items: [
      {
        id: 'osd-uncoated-tablets',
        title: 'Uncoated & Immediate Release Tablets',
        category: 'osd',
        tagline: 'Rapid dissolution, precision hardness control',
        monthlyCapacity: '40 Million Tablets',
        annualCapacity: '480 Million Tablets',
        leadTime: '3-4 Weeks',
        description: 'Standard, chewable, dispersible, and effervescent immediate release oral tablets with high content uniformity.',
        keyFormulationTypes: ['Dispersible Tablets', 'Chewable Tablets', 'Mouth Dissolving (ODT)', 'Sublingual Tablets'],
        equipmentHighlights: ['Cadmach 45-Station Rotary Presses', 'FBD Granulators', 'High-Shear Rapid Mix Granulator (RMG)'],
        packagingOptions: [
          { name: 'Alu-Alu Blister', type: 'Cold Form Foil', description: 'Maximum moisture and light barrier protection', iconName: 'Layers' },
          { name: 'PVC / PVDC Blister', type: 'Thermoform Blister', description: 'High optical clarity with tailored moisture barrier', iconName: 'Box' },
          { name: 'HDPE Container', type: 'Secured Bottles', description: 'Child-resistant caps with induction sealing', iconName: 'Shield' }
        ],
        batchFlexibility: { pilot: '50,000 Units', commercial: '500,000+ Units', optimal: '200,000 Units' },
        complianceStandards: ['IP / BP / USP', 'In-vitro Dissolution Testing', 'Stability Zone IVb'],
        targetTherapeuticAreas: ['Cardiovascular', 'Analgesics & NSAIDs', 'Antidiabetics', 'Antibiotics'],
        highlightMetric: { label: 'Tablet Weight Variation', value: '< ±1.5%' }
      },
      {
        id: 'osd-film-coated-tablets',
        title: 'Film & Enteric Coated Tablets',
        category: 'osd',
        tagline: 'Targeted GI delivery, moisture protection and taste masking',
        monthlyCapacity: '35 Million Tablets',
        annualCapacity: '420 Million Tablets',
        leadTime: '3-4 Weeks',
        description: 'Advanced aqueous and non-aqueous polymer coating systems for moisture-sensitive active ingredients and enteric release.',
        keyFormulationTypes: ['Aqueous Film Coated', 'Delayed Release / Enteric Coated', 'Sustained Release (SR)', 'Bilayer Tablets'],
        equipmentHighlights: ['Gansons Auto-Coaters with peristaltic pumps', 'Fully closed HEPA exhausted spray systems'],
        packagingOptions: [
          { name: 'Alu-Alu Blister', type: 'Cold Form', description: 'Zero-permeation tropical blister packaging', iconName: 'Layers' },
          { name: 'Blister with Monocarton', type: 'Cartoned Packs', description: 'Automated high-speed cartoning with leaflet insertion', iconName: 'Box' }
        ],
        batchFlexibility: { pilot: '50,000 Units', commercial: '1,000,000+ Units', optimal: '300,000 Units' },
        complianceStandards: ['Acid Resistance (>2 hrs in 0.1N HCl)', 'Uniform Coating Thickness'],
        targetTherapeuticAreas: ['Gastroenterology (PPIs)', 'Cardiovascular', 'CNS & Antidepressants'],
        highlightMetric: { label: 'Coating Uniformity', value: '99.8%' }
      },
      {
        id: 'osd-capsules',
        title: 'Hard Gelatin & Veg HPMC Capsules',
        category: 'osd',
        tagline: 'Pellet, powder, and multi-particulate filling',
        monthlyCapacity: '25 Million Capsules',
        annualCapacity: '300 Million Capsules',
        leadTime: '3-4 Weeks',
        description: 'Precision capsule filling technology for pure powders, micro-pellets, and delayed-release beads.',
        keyFormulationTypes: ['Size 00, 0, 1, 2, 3, 4 Capsules', 'Enteric Pellets in Capsule', 'Dual-Release Mini-Tablets in Capsule'],
        equipmentHighlights: ['Pam-Pac AF-90 Automatic Capsule Fillers', 'Laser Checkweighers'],
        packagingOptions: [
          { name: 'Alu-Alu Blister', type: 'Cold Form', description: 'Rigid pocket protection for delicate shells', iconName: 'Layers' },
          { name: 'HDPE Jars', type: 'Bulk & Retail Bottles', description: 'Tamper-evident shrink sleeve seals', iconName: 'Box' }
        ],
        batchFlexibility: { pilot: '30,000 Units', commercial: '500,000+ Units', optimal: '150,000 Units' },
        complianceStandards: ['Moisture Balance Control', 'Disintegration < 15 mins'],
        targetTherapeuticAreas: ['Gastroenterology', 'Haematinics & Vitamins', 'Respiratory'],
        highlightMetric: { label: 'Filling Weight Accuracy', value: '99.5%' }
      }
    ]
  },
  {
    id: 'topicals',
    name: 'Derma & Cosmetic Topicals',
    shortName: 'Topicals & Derma',
    iconName: 'Droplet',
    headline: 'Homogeneous Semi-Solid Vacuum Emulsification & Micro-particle Suspensions',
    monthlyThroughput: '4M+ Tubes / Month',
    description: 'Dedicated topical manufacturing cleanrooms with planetary vacuum emulsifiers and automated high-speed aluminum/lami tube filling lines.',
    facilityArea: '30,000 Sq. Ft.',
    cleanroomClass: 'Class D / ISO Class 8',
    items: [
      {
        id: 'topicals-creams-ointments',
        title: 'Medicated Creams & Ointments',
        category: 'topicals',
        tagline: 'Micro-homogenized emulsions for optimal skin permeation',
        monthlyCapacity: '2.5 Million Tubes',
        annualCapacity: '30 Million Tubes',
        leadTime: '3-4 Weeks',
        description: 'Water-in-oil (W/O) and oil-in-water (O/W) emulsions with uniform active ingredient dispersion and controlled rheology.',
        keyFormulationTypes: ['Antifungal Creams', 'Antibiotic Ointments', 'Corticosteroid Creams', 'Wound Healing Ointments'],
        equipmentHighlights: ['FrymaKoruma Vacuum Emulsifier Plants (500L & 1000L)', 'Integrated CIP/SIP Systems'],
        packagingOptions: [
          { name: 'Aluminum Tubes', type: 'Collapsible Metal', description: 'Internal epoxy lacquered for reactive formulations', iconName: 'Layers' },
          { name: 'Laminated Tubes', type: 'ABL / PBL Tubes', description: 'Multi-layer barrier with flip-top or screw cap', iconName: 'Box' }
        ],
        batchFlexibility: { pilot: '10,000 Tubes', commercial: '100,000+ Tubes', optimal: '30,000 Tubes' },
        complianceStandards: ['Viscosity Stability', 'Microbiological Bioburden Testing', 'Heavy Metals Testing'],
        targetTherapeuticAreas: ['Dermatology', 'Wound Care', 'Antiseptic', 'Cosmeceuticals'],
        highlightMetric: { label: 'Homogeneity Particle Size', value: '< 5 Microns' }
      },
      {
        id: 'topicals-gels-lotions',
        title: 'Transdermal Gels & Topical Lotions',
        category: 'topicals',
        tagline: 'Crystal clear aqueous carbomer gels and fluid lotions',
        monthlyCapacity: '1.5 Million Units',
        annualCapacity: '18 Million Units',
        leadTime: '3-4 Weeks',
        description: 'Fast-absorbing topical gels and soothing lotions with non-greasy sensory profiles and immediate cooling effect.',
        keyFormulationTypes: ['Diclofenac Pain Gels', 'Acne Treatment Gels', 'Sunscreen Lotions', 'Scalp Application Lotions'],
        equipmentHighlights: ['High-Shear Inline Homogenizers', 'Bubble-Free Vacuum Deaeration Tanks'],
        packagingOptions: [
          { name: 'Pump Bottles', type: 'Airless Dispenser', description: 'Precision dose metering with zero air exposure', iconName: 'Droplet' },
          { name: 'Lami-Tubes', type: 'Translucent Tubes', description: 'UV-resistant protective barrier', iconName: 'Box' }
        ],
        batchFlexibility: { pilot: '10,000 Units', commercial: '50,000+ Units', optimal: '25,000 Units' },
        complianceStandards: ['Spreadability Index Validation', 'Viscosity Retention Over 36 Months'],
        targetTherapeuticAreas: ['Pain Management', 'Cosmetic Dermatology', 'Hair Care'],
        highlightMetric: { label: 'Spreadability Index', value: 'Optimal' }
      }
    ]
  },
  {
    id: 'liquids',
    name: 'Oral Liquids & Syrups',
    shortName: 'Syrups & Suspensions',
    iconName: 'Droplets',
    headline: 'Closed-Loop Liquid Sugar Dissolution & Automated Bottle Packaging',
    monthlyThroughput: '2.5M+ Bottles / Month',
    description: 'Stainless steel 316L liquid formulation suites with inline microfiltration and optical particle inspection.',
    facilityArea: '25,000 Sq. Ft.',
    cleanroomClass: 'Class D / ISO Class 8',
    items: [
      {
        id: 'liquids-syrups',
        title: 'Cough Syrups, Tonics & Suspensions',
        category: 'liquids',
        tagline: 'Palatable taste-masking and stable suspension kinetics',
        monthlyCapacity: '2.5 Million Bottles',
        annualCapacity: '30 Million Bottles',
        leadTime: '3-4 Weeks',
        description: 'Sugar and sugar-free cough formulations, antacids, digestive enzymes, and pediatric multi-vitamin drops.',
        keyFormulationTypes: ['Antitussive Syrups', 'Antacid Suspensions', 'Pediatric Drops', 'Herbal Tonics'],
        equipmentHighlights: ['SS316L Sugar Dissolution Vessels', 'Automated 8-Head Rotary Liquid Fillers', 'Induction Cap Sealers'],
        packagingOptions: [
          { name: 'PET Bottles', type: 'Amber & Clear PET', description: 'Food & Pharma grade PET with measuring cups', iconName: 'Box' },
          { name: 'Glass Bottles', type: 'Type III Amber Glass', description: 'Hermetic seal for sensitive formulations', iconName: 'Layers' }
        ],
        batchFlexibility: { pilot: '5,000 Bottles', commercial: '50,000+ Bottles', optimal: '20,000 Bottles' },
        complianceStandards: ['Preservative Efficacy Testing (PET)', 'Sedimentation Rate & Redispersibility'],
        targetTherapeuticAreas: ['Respiratory & Cough', 'Gastrointestinal', 'Pediatrics', 'Nutraceuticals'],
        highlightMetric: { label: 'Filling Accuracy', value: '±0.5 ml' }
      }
    ]
  },
  {
    id: 'soaps',
    name: 'Medicated & Syndet Soaps',
    shortName: 'Soaps & Bars',
    iconName: 'Sparkles',
    headline: 'High-Pressure Plodding, Extrusion & Custom Syndet Formulations',
    monthlyThroughput: '2M+ Bars / Month',
    description: 'Specialized bar soap manufacturing block handling pH-balanced syndet bases, sulfur, ketoconazole, and benzoyl peroxide bars.',
    facilityArea: '20,000 Sq. Ft.',
    cleanroomClass: 'Controlled Production Zone',
    items: [
      {
        id: 'soaps-syndet',
        title: 'Syndet & Medicated Cleansing Bars',
        category: 'soaps',
        tagline: 'Soap-free pH 5.5 skin-friendly cleansing bars',
        monthlyCapacity: '2 Million Bars',
        annualCapacity: '24 Million Bars',
        leadTime: '3-4 Weeks',
        description: 'Gentle syndet bars formulated with syndet noodles, moisturizing shea butter, and active dermatological APIs.',
        keyFormulationTypes: ['Ketoconazole Antifungal Bars', 'Benzoyl Peroxide Acne Bars', 'Moisturizing Syndet Bars (pH 5.5)'],
        equipmentHighlights: ['Sigma Mixers', 'Triple Roll Mills', 'Vacuum Duplex Plodders', 'Automatic Stamping & Flow-Wrappers'],
        packagingOptions: [
          { name: 'Flow-Wrap & Monocarton', type: 'Barrier Film Wrap', description: 'Moisture-retaining protective film inside premium box', iconName: 'Box' },
          { name: 'Pleat Wrap', type: 'Round Bar Wrap', description: 'Luxury hotel and derma presentation', iconName: 'Layers' }
        ],
        batchFlexibility: { pilot: '10,000 Bars', commercial: '50,000+ Bars', optimal: '25,000 Bars' },
        complianceStandards: ['Total Fatty Matter (TFM) Control', 'Hardness & Cracking Resistance'],
        targetTherapeuticAreas: ['Dermatology', 'Acne Management', 'Sensitive Skin Care'],
        highlightMetric: { label: 'Moisture Retention', value: 'Validated' }
      }
    ]
  }
];

export const MANUFACTURING_UNITS: ManufacturingUnit[] = [
  {
    id: 'unit-1',
    name: 'PharmaTech Unit-I (Oral Solid Dosage Hub)',
    location: 'Baddi Industrial Area, Himachal Pradesh, India',
    area: '45,000 Sq. Ft. Built-up Area',
    cleanroomGrade: 'Class 100,000 (ISO Class 8)',
    establishedYear: '2012',
    primaryFocus: 'Tablets, Capsules, Dispersible Formulations & High-Speed Packaging',
    monthlyCapacity: '100 Million Tablets & 25 Million Capsules',
    keyEquipment: [
      'Cadmach 45-Station Double Rotary Tablet Compression Machines',
      'Gansons High-Efficiency Auto-Coaters (100kg & 250kg)',
      'Pam-Pac AF-90 High Speed Capsule Fillers',
      'Elmach High-Speed Continuous Motion Alu-Alu Blister Lines'
    ],
    certifications: ['WHO-GMP Certified', 'cGMP Schedule M', 'ISO 9001:2015'],
    description: 'Unit-I is our flagship oral solid formulation facility featuring dedicated AHU systems for each production suite to prevent cross-contamination and maintain tight humidity control (< 40% RH for effervescent/dispersible tablets).',
    badge: 'High-Volume OSD'
  },
  {
    id: 'unit-2',
    name: 'PharmaTech Unit-II (Topical & Liquid Formulations)',
    location: 'Baddi Industrial Area, Himachal Pradesh, India',
    area: '35,000 Sq. Ft. Built-up Area',
    cleanroomGrade: 'Class 100,000 (ISO Class 8)',
    establishedYear: '2016',
    primaryFocus: 'Creams, Ointments, Gels, Lotions, Syrups & Oral Suspensions',
    monthlyCapacity: '4 Million Tubes & 2.5 Million Liquid Bottles',
    keyEquipment: [
      'FrymaKoruma Vacuum Homogenizer & Emulsifier Plants (500L & 1000L)',
      'IMA PG Automated Lami and Aluminum Tube Filling & Sealing Lines',
      'Rotary 8-Head Liquid Bottle Filling & Induction Capping Lines',
      'Automated Cartoning with Optical Code & Pharmacode Verification'
    ],
    certifications: ['WHO-GMP Certified', 'cGMP Schedule M', 'ISO 22716 Cosmetics'],
    description: 'Unit-II houses specialized semi-solid vacuum processing suites for crystal-clear gels, micro-emulsion creams, and sterile suspension syrups with online CIP/SIP systems.',
    badge: 'Semi-Solids & Liquids'
  },
  {
    id: 'unit-3',
    name: 'PharmaTech Unit-III (Medicated Bars, Syndets & R&D Hub)',
    location: 'Baddi Industrial Area, Himachal Pradesh, India',
    area: '25,000 Sq. Ft. Built-up Area',
    cleanroomGrade: 'Controlled GLP & Manufacturing Zone',
    establishedYear: '2020',
    primaryFocus: 'Medicated Cleansing Bars, Syndet Soap Formulation & Pilot Formulation R&D',
    monthlyCapacity: '2 Million Bars & 15+ Pilot Tech Transfer Batches',
    keyEquipment: [
      'Vacuum Duplex Plodders & Triple Roll Milling Lines',
      'Automated Bar Stamping & High-Speed Flow-Wrapping Machines',
      'Shimadzu HPLC & GC-MS Analytical Equipment in R&D Lab',
      'Walk-In Stability Chambers (25°C/60% RH, 30°C/65% RH, 40°C/75% RH)'
    ],
    certifications: ['GLP Accredited Laboratory', 'WHO-GMP Compliant', 'ISO 9001:2015'],
    description: 'Unit-III serves as our premier specialized derma-soap division and analytical formulation laboratory, expediting formulation optimization, stability analysis, and method development.',
    badge: 'Syndets & Formulation R&D'
  }
];

export const COMPANY_MILESTONES: MilestoneItem[] = [
  {
    year: '2010',
    title: 'Founding of PharmaTech',
    description: 'Established the initial manufacturing campus in Baddi, Himachal Pradesh with a vision for precision CDMO pharmaceutical manufacturing.',
    metric: 'Unit-I Groundbreaking'
  },
  {
    year: '2014',
    title: 'WHO-GMP & Regulatory Milestones',
    description: 'Achieved full WHO-GMP certification, expanding contract supply partnerships to leading pan-Indian pharma enterprises.',
    metric: '50M Units/Month'
  },
  {
    year: '2018',
    title: 'Unit-II Derma & Topical Expansion',
    description: 'Commissioned high-tech semi-solid vacuum processing plant, scaling derma formulations to 4 million tubes monthly.',
    metric: 'Unit-II Launch'
  },
  {
    year: '2022',
    title: 'Unit-III Syndet & GLP R&D Centre',
    description: 'Added automated syndet soap facility and GLP-accredited analytical laboratories for turnkey formulation dossiers.',
    metric: '3 Manufacturing Units'
  },
  {
    year: '2026',
    title: '300+ Commercial Dossiers & Global Tech Transfer',
    description: 'Continuous operational excellence delivering 1.2 Billion+ dosage units annually with zero-defect compliance.',
    metric: '1.2B+ Annual Units'
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    name: 'Harsimran Singh',
    role: 'Managing Director & Chief Executive',
    experience: '20+ Years in Pharmaceutical CDMO',
    bio: 'Pioneered PharmaTech’s high-precision manufacturing systems, engineering partnerships with India’s leading healthcare multinationals.',
    focus: 'Strategic Growth & Operational Excellence'
  },
  {
    name: 'Dr. V. K. Sharma',
    role: 'VP — Quality Assurance & Regulatory Affairs',
    experience: '25+ Years in Pharma QA & Compliance',
    bio: 'Former senior auditor for global regulatory bodies, directing our WHO-GMP quality control protocols and regulatory filing dossiers.',
    focus: 'cGMP Compliance & Quality Integrity'
  },
  {
    name: 'Er. Rajesh Bansal',
    role: 'Director of Technical Operations & Engineering',
    experience: '18+ Years in Cleanroom Engineering',
    bio: 'Oversees HVAC validation, automated compression technologies, and sustainable lean manufacturing across all 3 Baddi facilities.',
    focus: 'Facility Engineering & Scale-Up'
  }
];

export const COMPANY_PRINCIPLES: CompanyPrinciple[] = [
  {
    id: 'quality',
    title: 'Zero-Defect Quality Integrity',
    subtitle: '100% In-Process Quality Assurance',
    description: 'Every batch undergoes exhaustive testing from raw material release to finished goods stability testing before batch release.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'timeline',
    title: 'Predictable Delivery Commitments',
    subtitle: '99.4% On-Time Batch Dispatch',
    description: 'Rigorous ERP-driven capacity planning ensures our brand partners never face supply disruptions in their market rollout.',
    iconName: 'Clock'
  },
  {
    id: 'transparency',
    title: 'Auditable Regulatory Transparency',
    subtitle: 'Open-Door Audits & Complete Dossiers',
    description: 'Full batch manufacturing records (BMR), analytical method validations (AMV), and stability data available on demand.',
    iconName: 'FileText'
  }
];

export const PRODUCT_CATALOG_ITEMS: ProductCatalogItem[] = [
  {
    id: 'prod-telmisartan',
    name: 'Telmisartan & Amlodipine Tablets',
    genericName: 'Telmisartan 40mg + Amlodipine 5mg',
    category: 'osd',
    categoryLabel: 'Oral Solid Dosage',
    dosageForm: 'Bilayer Tablet',
    strengthOrComposition: '40mg + 5mg',
    packSize: '10x10 Alu-Alu Blister',
    packagingType: 'Cold Form Foil Alu-Alu',
    therapeuticArea: 'Cardiovascular / Antihypertensive',
    prescriptionType: 'Rx',
    moq: '100,000 Tablets',
    leadTime: '3-4 Weeks',
    popular: true,
    description: 'High-stability bilayer tablet formulation for combination hypertension management.'
  },
  {
    id: 'prod-clindamycin',
    name: 'Clindamycin Phosphate & Nicotinamide Gel',
    genericName: 'Clindamycin 1% w/w + Nicotinamide 4% w/w',
    category: 'topicals',
    categoryLabel: 'Derma Topicals',
    dosageForm: 'Aqueous Gel',
    strengthOrComposition: '1% + 4% w/w',
    packSize: '15g / 20g Lamitube',
    packagingType: 'Laminated Tube in Monocarton',
    therapeuticArea: 'Dermatology / Acne Treatment',
    prescriptionType: 'Rx',
    moq: '25,000 Tubes',
    leadTime: '3-4 Weeks',
    popular: true,
    description: 'Validated aqueous anti-acne gel formulation with high stability and fast cutaneous absorption.'
  },
  {
    id: 'prod-ketoconazole-soap',
    name: 'Ketoconazole & Zinc Pyrithione Soap',
    genericName: 'Ketoconazole 2% w/w + ZPTO 1% w/w',
    category: 'soaps',
    categoryLabel: 'Medicated Soaps',
    dosageForm: 'Syndet Bar',
    strengthOrComposition: '2% + 1% w/w',
    packSize: '75g Bar in Monocarton',
    packagingType: 'Flow-Wrapped Inner in Monocarton',
    therapeuticArea: 'Dermatology / Antifungal & Anti-dandruff',
    prescriptionType: 'OTC',
    moq: '20,000 Bars',
    leadTime: '3-4 Weeks',
    popular: true,
    description: 'High-foaming medicated cleansing bar with high antifungal efficacy.'
  },
  {
    id: 'prod-montelukast',
    name: 'Montelukast Sodium & Levocetirizine Tablets',
    genericName: 'Montelukast 10mg + Levocetirizine 5mg',
    category: 'osd',
    categoryLabel: 'Oral Solid Dosage',
    dosageForm: 'Film Coated Tablet',
    strengthOrComposition: '10mg + 5mg',
    packSize: '10x10 Alu-Alu',
    packagingType: 'Alu-Alu Blister',
    therapeuticArea: 'Respiratory / Antiallergic',
    prescriptionType: 'Rx',
    moq: '100,000 Tablets',
    leadTime: '3-4 Weeks',
    popular: true,
    description: 'Market-leading anti-allergic respiratory combination with high bioavailability.'
  }
];

export const CDMO_CATEGORIES = DOSAGE_CATEGORIES;
