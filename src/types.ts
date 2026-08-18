export type NavPageId = 'home' | 'about' | 'portfolio' | 'facilities' | 'quality' | 'clients' | 'contact';

export type DosageCategoryId = 'osd' | 'capsules' | 'liquids' | 'topicals' | 'soaps' | 'specialty' | 'rd' | 'ayush' | 'sachets';

export interface PackagingOption {
  name: string;
  type: string;
  description: string;
  iconName: string;
}

export interface DosageFormItem {
  id: string;
  title: string;
  category: DosageCategoryId;
  tagline: string;
  monthlyCapacity: string;
  annualCapacity: string;
  badge?: string;
  leadTime: string;
  description: string;
  keyFormulationTypes: string[];
  equipmentHighlights: string[];
  packagingOptions: PackagingOption[];
  batchFlexibility: {
    pilot: string;
    commercial: string;
    optimal: string;
  };
  complianceStandards: string[];
  targetTherapeuticAreas: string[];
  highlightMetric: {
    label: string;
    value: string;
  };
  imageUrl?: string;
}

export interface DosageCategoryInfo {
  id: DosageCategoryId;
  name: string;
  shortName: string;
  iconName: string;
  headline: string;
  monthlyThroughput: string;
  description: string;
  facilityArea: string;
  cleanroomClass: string;
  items: DosageFormItem[];
  imageUrl?: string;
}

export interface ProductCatalogItem {
  id: string;
  name: string;
  genericName: string;
  category: DosageCategoryId;
  categoryLabel: string;
  dosageForm: string;
  strengthOrComposition: string;
  packSize: string;
  packagingType: string;
  therapeuticArea: string;
  prescriptionType: 'Rx' | 'OTC' | 'Nutraceutical' | 'Ayurvedic' | 'Cosmeceutical';
  moq: string;
  leadTime: string;
  popular?: boolean;
  description: string;
}

export interface ManufacturingUnit {
  id: string;
  name: string;
  location: string;
  area: string;
  cleanroomGrade: string;
  establishedYear: string;
  primaryFocus: string;
  monthlyCapacity: string;
  keyEquipment: string[];
  certifications: string[];
  description: string;
  badge: string;
  imageUrl?: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  focus: string;
  imageUrl?: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  metric: string;
}

export interface TrustCertification {
  id: string;
  name: string;
  authority: string;
  badgeText: string;
  description: string;
  verifiedYear: string;
  iconName: string;
  standardDocUrl?: string;
}

export interface RfpFormData {
  dosageCategory: string;
  specificForm: string;
  projectStage: 'development' | 'tech_transfer' | 'commercial_batch' | 'packaging_optimization';
  targetVolume: string;
  packagingPreference: string;
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneNumber: string;
  timeline: string;
  targetMarket: string;
  projectBrief: string;
}

export interface CalculatorState {
  dosageCategory: DosageCategoryId;
  specificType: string;
  monthlyVolume: number;
  packagingType: string;
  regulatoryStandard: string;
  needTechTransfer: boolean;
}

export interface ClientPartner {
  name: string;
  logoUrl?: string;
  category?: string;
}

export interface CompanyPrinciple {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

