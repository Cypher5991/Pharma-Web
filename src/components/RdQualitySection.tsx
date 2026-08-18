import React from 'react';
import { Microscope, ShieldCheck, CheckCircle2, ArrowRight, Activity, Thermometer, FileCheck, Layers } from 'lucide-react';

interface RdQualitySectionProps {
  onOpenRfp: (category?: string, specificForm?: string) => void;
}

export const RdQualitySection: React.FC<RdQualitySectionProps> = ({ onOpenRfp }) => {
  return (
    <section id="rd-hub" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: R&D & Analytical Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Microscope className="w-3.5 h-3.5" />
              <span>Dedicated Research & Analytical Hub</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit',sans-serif] tracking-tight leading-tight">
              In-House Formulation Optimization, Stability Testing & Tech Transfer
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our 12,000+ sq.ft GLP-compliant formulation and analytical development center in Baddi bridges the gap between lab-scale innovation and high-speed commercial production.
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Activity className="w-4 h-4 text-blue-600" />
                  <span>Analytical Method Validation (AMV)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  21 CFR Part 11 compliant HPLC, GC headspace, FTIR, and photostability chambers for impurity profiling and assay.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Thermometer className="w-4 h-4 text-emerald-600" />
                  <span>12+ Walk-In ICH Stability Suites</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time (Zone II & IVb), accelerated (40°C/75% RH), and intermediate stability storage with redundant telemetry.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Layers className="w-4 h-4 text-purple-600" />
                  <span>Reverse Engineering & QbD</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bioequivalence formulation design, solubility enhancement, and clean-label cosmetic reformulation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <FileCheck className="w-4 h-4 text-amber-600" />
                  <span>Structured Tech Transfer (4 Weeks)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive scale-up dossiers, critical process parameter (CPP) mapping, and validation batch execution.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="rd-inquire-btn"
                onClick={() => onOpenRfp('rd', 'Formulation Development (F&D)')}
                className="px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"
              >
                <span>Initiate R&D / Formulation Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                1,500+ Validated Commercial Formulations
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Tech Transfer Lifecycle */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-8 rounded-3xl text-white shadow-2xl border border-slate-800 space-y-6">
            <div className="border-b border-slate-700/80 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 font-['Outfit',sans-serif]">
                Streamlined CDMO Lifecycle
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                4-Stage Commercialization Framework
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Pre-Formulation & Compatibility',
                  desc: 'Raw API characterization, excipient synergy, dissolution profiling & initial prototype sprint.'
                },
                {
                  step: '02',
                  title: 'Analytical Method Development & Validation',
                  desc: 'HPLC/GC method validation, impurity profiling, and ICH stability protocol initiation.'
                },
                {
                  step: '03',
                  title: 'Pilot Batch & Process Optimization',
                  desc: 'Pilot scale production on commercial-equivalent machinery to establish critical process parameters (CPPs).'
                },
                {
                  step: '04',
                  title: 'Commercial Scale-Up & Market Release',
                  desc: 'Validation batch manufacturing (1M+ units), regulatory dossier compilation, and commercial distribution.'
                }
              ].map((stage, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center text-xs font-bold shrink-0 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {stage.step}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                      {stage.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed mt-0.5">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Average Tech Transfer: <strong className="text-white">4–6 Weeks</strong></span>
              <button
                onClick={() => onOpenRfp('rd', 'Technology Transfer')}
                className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
              >
                <span>Request Timeline &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
