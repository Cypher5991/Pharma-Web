import React from 'react';
import { motion } from 'motion/react';
import { TRUST_CERTIFICATIONS } from '../../data/cdmoData';
import { 
  ShieldCheck, 
  Award, 
  Microscope, 
  CheckCircle2, 
  FileText, 
  Activity, 
  Layers, 
  Cpu, 
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  Building,
  RefreshCw
} from 'lucide-react';

interface QualityPageProps {
  onOpenRfp: (category?: string, specificForm?: string) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenRfp }) => {
  const qualityPillars = [
    {
      title: 'WHO-GMP & Revised Schedule M',
      desc: 'All 3 Baddi manufacturing campuses are engineered and audited in accordance with current WHO-GMP guidelines and CDSCO Revised Schedule M protocols.',
      icon: ShieldCheck,
      badge: 'Regulatory Mandate'
    },
    {
      title: '100% GLP Testing & Analytical Assurance',
      desc: 'High-precision in-house analytical infrastructure equipped with Shimadzu HPLC, GC-MS, FTIR spectrophotometers, and automated multi-station dissolution testers.',
      icon: Microscope,
      badge: 'Analytical Control'
    },
    {
      title: 'Dedicated HVAC & Terminal HEPA Filtration',
      desc: 'Individual AHUs for every production cubicle maintaining Class 100,000 (ISO Class 8) cleanliness, negative pressure differentials, and controlled relative humidity.',
      icon: Layers,
      badge: 'Contamination Control'
    },
    {
      title: 'Complete Batch Traceability & Stability Studies',
      desc: 'Real-time and accelerated stability chambers (Zone IVb: 40°C/75% RH) generating complete CTD/ACTD regulatory dossiers for domestic and international markets.',
      icon: Activity,
      badge: 'Batch Integrity'
    }
  ];

  const validationWorkflow = [
    {
      step: '01',
      title: 'Raw Material Testing (IQC)',
      desc: '100% active pharmaceutical ingredients (APIs) and excipients quarantined and released only upon full pharmacopeial assay and FTIR identity confirmation.'
    },
    {
      step: '02',
      title: 'In-Process Quality Assurance (IPQA)',
      desc: 'Rigorous periodic checks for tablet weight variation, hardness, friability, disintegration, pH, viscosity, and seal integrity during live production runs.'
    },
    {
      step: '03',
      title: 'Finished Product Release (FQC)',
      desc: 'Comprehensive chromatographic assay, dissolution kinetics, microbiological bioburden testing, and uniformity of dosage units before QA batch release.'
    },
    {
      step: '04',
      title: 'Batch Dossier & COA Issuance',
      desc: 'Authorized Certificate of Analysis (COA) along with complete Batch Manufacturing Record (BMR) provided with every dispatched shipment.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>WHO-GMP & Regulatory Excellence</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif] tracking-tight">
            Quality Assurance & Regulatory Compliance
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            At PharmaTech, quality is engineered into every unit operation. Our 3 Baddi manufacturing units adhere to stringent WHO-GMP, cGMP Schedule M, and GLP standards to guarantee zero-defect pharmaceutical batches.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block text-[11px]">Quality Rating</span>
              <strong className="text-lg font-bold text-white font-['Outfit',sans-serif]">99.8% Right-First-Time</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block text-[11px]">Audit Track Record</span>
              <strong className="text-lg font-bold text-emerald-400 font-['Outfit',sans-serif]">100% Clean Pass</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block text-[11px]">Testing Protocols</span>
              <strong className="text-lg font-bold text-white font-['Outfit',sans-serif]">IP / BP / USP Grades</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block text-[11px]">Stability Chambers</span>
              <strong className="text-lg font-bold text-blue-400 font-['Outfit',sans-serif]">Zone IVb Validated</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-12 space-y-12">
        {/* Core Pillars */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
              Our Four Pillars of Quality Integrity
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              End-to-end scientific controls across every stage of formulation, validation, and commercial packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Validation Workflow */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Quality Management Lifecycle
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
              Batch Testing & Release Protocol
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
              Strict multi-checkpoint validation ensuring that every tablet, capsule, cream, and bottle meets international pharmacopeial limits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {validationWorkflow.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5"
              >
                <div className="text-2xl font-black text-blue-600 font-mono">
                  {item.step}
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif]">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations Grid */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Verified Accreditations
              </span>
              <h2 className="text-2xl font-extrabold text-white font-['Outfit',sans-serif]">
                Regulatory Licenses & Compliance Certifications
              </h2>
            </div>

            <button
              onClick={() => onOpenRfp('tech_transfer', 'Quality Audit & Plant Visit')}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-md transition-colors flex items-center gap-2 self-start sm:self-auto"
            >
              <span>Schedule Plant Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {TRUST_CERTIFICATIONS.map((cert) => (
              <div 
                key={cert.id}
                className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-2 backdrop-blur-xs"
              >
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
                    {cert.badgeText}
                  </span>
                </div>
                <strong className="text-sm font-bold text-white block">
                  {cert.name}
                </strong>
                <p className="text-[11px] text-slate-300">
                  {cert.authority}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
