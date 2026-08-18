import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Layers, Gauge, Clock, Zap } from 'lucide-react';
import { DosageCategoryId } from '../types';

interface InteractiveBatchCalculatorProps {
  onOpenRfp: (category?: string, specificForm?: string) => void;
}

export const InteractiveBatchCalculator: React.FC<InteractiveBatchCalculatorProps> = ({ onOpenRfp }) => {
  const [category, setCategory] = useState<DosageCategoryId>('osd');
  const [dosageType, setDosageType] = useState<string>('Tablets (Bilayer / Coated)');
  const [batchVolume, setBatchVolume] = useState<number>(1000000);
  const [packagingType, setPackagingType] = useState<string>('Alu-Alu Blister');
  const [needTechTransfer, setNeedTechTransfer] = useState<boolean>(true);

  // Dosage options map
  const categoryOptions: Record<DosageCategoryId, { label: string; types: string[]; packagings: string[]; defaultVolume: number; maxVolume: number; unitLabel: string; facility: string }> = {
    osd: {
      label: 'Oral Solid Dose (OSD)',
      types: ['Tablets (Bilayer / Coated)', 'Tablets (Effervescent / ODT)', 'Hard Gelatin Capsules (HGC)', 'HPMC Vegetarian Capsules', 'Multi-Lane Sachets'],
      packagings: ['Alu-Alu Cold Form Blister', 'PVC / PVDC Blister', 'HDPE Induction-Sealed Bottle', 'Alu-Poly 4-Side Sachet'],
      defaultVolume: 1000000,
      maxVolume: 15000000,
      unitLabel: 'Tablets / Units',
      facility: 'PharmaTech Unit-I (45,000 sq.ft Solid Oral Complex)'
    },
    topicals: {
      label: 'Topicals & Semi-Solids',
      types: ['Dermatological Creams & Ointments', 'Aqueous & Clear Gels', 'Topical Scalp Lotions & Sprays', 'Cosmeceutical Serums & Sunscreens'],
      packagings: ['Laminated ABL/PBL Tubes', 'Pure Aluminum Collapsible Tubes', 'Airless Pump Dispensers', 'PET Dropper Bottles'],
      defaultVolume: 250000,
      maxVolume: 3000000,
      unitLabel: 'Tubes / Units',
      facility: 'PharmaTech Unit-II (38,000 sq.ft Derma & Liquid Wing)'
    },
    liquids: {
      label: 'Oral Liquids & Syrups',
      types: ['Cough & Expectorant Syrups', 'Pediatric Oral Suspensions', 'Antacid & Digestant Liquids', 'Iron & Multivitamin Tonics'],
      packagings: ['Amber PET Bottles with Dosing Cup', 'Type III Amber Glass Bottles', 'Induction-Sealed HDPE Bottles'],
      defaultVolume: 100000,
      maxVolume: 2000000,
      unitLabel: 'Bottles',
      facility: 'PharmaTech Unit-II (Closed-Loop CIP/SIP Bottling Plant)'
    },
    soaps: {
      label: 'Medicated & Syndet Bars',
      types: ['Antifungal & Medicated Cleansing Bars', 'Syndet pH 5.5 Sensitive Skin Bars', 'Anti-Acne Benzoyl Peroxide Bars', 'Glycerin & Brightening Bars'],
      packagings: ['Pillow Flow-Wrap + Monocarton', 'Embossed Paper Wrap + Luxury Box', 'Multi-Pack Shrink Bundle'],
      defaultVolume: 200000,
      maxVolume: 3000000,
      unitLabel: 'Bars',
      facility: 'PharmaTech Unit-III (30,000 sq.ft Plodder & Stamping Hub)'
    },
    rd: {
      label: 'R&D / Tech Transfer Sprint',
      types: ['Formulation Optimization (F&D)', 'Analytical Method Validation (AMV)', 'ICH Accelerated Stability Testing', 'Reverse Engineering of Benchmark'],
      packagings: ['Pilot Batch Sample Pack', 'Full CTD / ACTD Regulatory Dossier'],
      defaultVolume: 50000,
      maxVolume: 500000,
      unitLabel: 'Units / Pilot Runs',
      facility: 'PharmaTech Research & Analytical Lab (GLP Certified)'
    },
    ayush: {
      label: 'Ayush & Herbal',
      types: ['Classical Taila Paka Vidhi Oils', 'Herbal Joint Pain Roll-On', 'Herbal Cleansing Gel', 'Polyherbal Hepatic Syrups'],
      packagings: ['Amber Glass Bottle with Metallic Dropper', 'Roll-On Applicator Bottle', 'Printed Translucent Tube'],
      defaultVolume: 50000,
      maxVolume: 1000000,
      unitLabel: 'Herbal Units',
      facility: 'PharmaTech Ayush Licensed Cleanroom Block'
    },
    sachets: {
      label: 'Sachets & Powders',
      types: ['WHO Oral Rehydration Salts (ORS)', 'Cholecalciferol D3 Granules', 'Probiotic Dry Mix', 'Collagen Peptide Drink Mix'],
      packagings: ['Triple Layer Foil Sachet', 'Stick Pack (Slimline)'],
      defaultVolume: 500000,
      maxVolume: 5000000,
      unitLabel: 'Sachets',
      facility: 'PharmaTech Unit-I High-Speed Sachet Track'
    }
  };

  const currentConfig = categoryOptions[category] || categoryOptions.osd;

  // Handle category change
  const handleCategoryChange = (newCat: DosageCategoryId) => {
    setCategory(newCat);
    const cfg = categoryOptions[newCat] || categoryOptions.osd;
    setDosageType(cfg.types[0]);
    setPackagingType(cfg.packagings[0]);
    setBatchVolume(cfg.defaultVolume);
  };

  // Calculations
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toLocaleString();
  };

  // Efficiency index (higher volume -> higher scale economy)
  const getEfficiencyScore = () => {
    const ratio = batchVolume / currentConfig.defaultVolume;
    if (ratio >= 4) return { label: 'Optimal Commercial Scale', savings: 'Max Unit Cost Advantage', color: 'text-emerald-400 bg-emerald-500/20 border-emerald-400/30' };
    if (ratio >= 1.5) return { label: 'High-Volume Production', savings: 'Economies of Scale Applied', color: 'text-blue-400 bg-blue-500/20 border-blue-400/30' };
    if (ratio >= 0.5) return { label: 'Standard Commercial Batch', savings: 'Standard Production Cost', color: 'text-amber-400 bg-amber-500/20 border-amber-400/30' };
    return { label: 'Pilot / Stability Run', savings: 'Fast Pilot Validation', color: 'text-purple-400 bg-purple-500/20 border-purple-400/30' };
  };

  const efficiency = getEfficiencyScore();
  const estimatedLeadTime = needTechTransfer ? '3–4 Weeks (Including Tech Transfer)' : '2–3 Weeks (Repeat Commercial Batch)';

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive CDMO Feasibility Simulator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit',sans-serif] tracking-tight text-white">
            Estimate Batch Scale, Timeline & Line Allocation
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Configure your target dosage modality, volume run, and packaging barrier to simulate factory scheduling in Baddi.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs text-slate-300 font-medium">Live Capacity Feed: <strong>Available</strong></span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Left Form Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Modality Category Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              1. Select Manufacturing Modality:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'osd', label: 'Solid Orals (OSD)' },
                { id: 'topicals', label: 'Topicals & Creams' },
                { id: 'liquids', label: 'Oral Liquids' },
                { id: 'soaps', label: 'Medicated Soaps' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleCategoryChange(tab.id as DosageCategoryId)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center ${
                    category === tab.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                      : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700/80 hover:text-white border border-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Specific Formulation Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              2. Specific Dosage Formulation:
            </label>
            <select
              value={dosageType}
              onChange={(e) => setDosageType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/90 text-white text-xs sm:text-sm border border-slate-700 focus:outline-hidden focus:border-blue-500 transition-colors"
            >
              {currentConfig.types.map((type, i) => (
                <option key={i} value={type} className="bg-slate-900 text-white">
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Target Volume Slider */}
          <div className="space-y-3 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                3. Planned Batch Volume:
              </label>
              <div className="px-3 py-1 rounded-lg bg-blue-600/30 border border-blue-400/30 text-blue-300 font-mono text-sm font-bold">
                {formatNumber(batchVolume)} {currentConfig.unitLabel}
              </div>
            </div>

            <input
              type="range"
              min={currentConfig.defaultVolume * 0.1}
              max={currentConfig.maxVolume}
              step={currentConfig.defaultVolume * 0.1}
              value={batchVolume}
              onChange={(e) => setBatchVolume(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
            />

            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>Min: {formatNumber(currentConfig.defaultVolume * 0.1)}</span>
              <span>Standard: {formatNumber(currentConfig.defaultVolume)}</span>
              <span>Mass: {formatNumber(currentConfig.maxVolume)}</span>
            </div>
          </div>

          {/* Packaging Barrier Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              4. Primary Packaging Format:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentConfig.packagings.map((pkg, i) => (
                <button
                  key={i}
                  onClick={() => setPackagingType(pkg)}
                  className={`p-3 rounded-xl text-left text-xs font-medium transition-all flex items-center gap-2 ${
                    packagingType === pkg
                      ? 'bg-blue-600/30 text-blue-200 border border-blue-500'
                      : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 border border-slate-700'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 shrink-0 text-blue-400" />
                  <span className="truncate">{pkg}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tech Transfer Checkbox */}
          <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 cursor-pointer hover:bg-slate-800/70 transition-colors">
            <input
              type="checkbox"
              checked={needTechTransfer}
              onChange={(e) => setNeedTechTransfer(e.target.checked)}
              className="w-4 h-4 rounded text-blue-600 accent-blue-600"
            />
            <span className="text-xs text-slate-300">
              Include R&D analytical method transfer & 3-batch pilot validation protocol
            </span>
          </label>
        </div>

        {/* Right Output Feasibility Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900 border border-slate-700 shadow-xl space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Feasibility Output
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${efficiency.color}`}>
                {efficiency.label}
              </span>
            </div>

            {/* Calculated Metrics */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Estimated Lead Time:</span>
                  </span>
                  <strong className="text-white font-bold">{estimatedLeadTime}</strong>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Commercial batch execution with automated in-process quality control (IPQC).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Allocated Unit Line:</span>
                  </span>
                  <strong className="text-emerald-400 font-bold text-right text-[11px]">
                    {currentConfig.facility.split('(')[0]}
                  </strong>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  {currentConfig.facility}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Unit Cost Optimization:</span>
                  </span>
                  <strong className="text-amber-400 font-bold">{efficiency.savings}</strong>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  High-speed rotary automation minimizes active API waste and labor overhead.
                </p>
              </div>
            </div>

            {/* Quality Statement */}
            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full COA, analytical validation dossier, and stability backup included.</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="space-y-2 pt-2">
            <button
              id="calculator-export-rfp-btn"
              onClick={() => onOpenRfp(category, `${dosageType} (${formatNumber(batchVolume)} ${currentConfig.unitLabel})`)}
              className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Export Feasibility into Formal RFP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[11px] text-slate-400 text-center">
              Pre-populates your dosage parameters into our secure mutual NDA proposal pipeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
