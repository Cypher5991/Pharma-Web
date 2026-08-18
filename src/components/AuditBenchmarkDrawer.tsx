import React from 'react';
import { X, CheckCircle2, Award, ArrowRight, ShieldCheck, SlidersHorizontal, Layers, Sparkles, TrendingUp } from 'lucide-react';

interface AuditBenchmarkDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditBenchmarkDrawer: React.FC<AuditBenchmarkDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:px-8 border-b border-slate-800 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Phase 1 & 2 Completed
              </span>
              <span className="text-xs text-slate-400">Lead UX Strategist & CRO Audit</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif]">
              Comparative Benchmark & CRO Optimization Report
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Executive Overview */}
          <div className="bg-blue-50/70 p-5 rounded-2xl border border-blue-200/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
              <TrendingUp className="w-4 h-4 text-blue-700" />
              <span>Target Site: Allrite Group vs. Benchmarks (Recipharm, Cohance, CPL)</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
              <strong>Option A Execution Summary:</strong> Transformed Allrite Group’s digital presence from a standard brochure catalog into a high-converting <strong>CDMO Commercial Engine</strong>. 
              The hero has been re-engineered with an authoritative value proposition and live capacity tickers (1.4B+ units/mo), backed by an interactive 5-modality dosage matrix and a validated regulatory trust strip.
            </p>
          </div>

          {/* 5-Area Comparative Table */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
              1. Five-Pillar Comparative Audit & Implemented Optimizations
            </h4>

            <div className="border border-slate-200 rounded-2xl overflow-hidden text-xs">
              <div className="grid grid-cols-12 bg-slate-100 p-3 font-bold text-slate-700 border-b border-slate-200">
                <div className="col-span-3">Pillar</div>
                <div className="col-span-4">Previous State (allrite.in)</div>
                <div className="col-span-5">Implemented CRO Benchmark Solution</div>
              </div>

              {[
                {
                  pillar: '1. Information Arch.',
                  prev: 'Flat catalog; technical specs buried in dense text blocks.',
                  solution: 'Structured 5-tab Modality Matrix with live search, batch scalability, and clear cleanroom specs.'
                },
                {
                  pillar: '2. Conversion & CRO',
                  prev: 'Generic "Contact Us"; hidden trust metrics & throughput numbers.',
                  solution: 'Prominent 1.4B+ capacity ticker, high-intent "Request RFP" CTAs, and instant dosage-specific quote triggers.'
                },
                {
                  pillar: '3. Visual Aesthetics',
                  prev: 'Standard corporate template; crowded spacing and muted contrast.',
                  solution: 'Deep slate & electric blue precision theme, Plus Jakarta Sans typography, and generous negative space.'
                },
                {
                  pillar: '4. Mobile & a11y',
                  prev: 'Sub-40px touch targets; complex tables requiring zoom.',
                  solution: '48px+ touch targets, mobile-responsive card grids, and strict WCAG AA contrast compliance (7:1).'
                },
                {
                  pillar: '5. Micro-interactions',
                  prev: 'Static, non-responsive cards with abrupt changes.',
                  solution: 'Real-time category switching, active tab indicators, and progressive 2-step RFP modal.'
                }
              ].map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-12 p-3.5 items-start gap-2 border-b border-slate-100 last:border-none ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                  }`}
                >
                  <div className="col-span-3 font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{row.pillar}</span>
                  </div>
                  <div className="col-span-4 text-slate-500">{row.prev}</div>
                  <div className="col-span-5 text-slate-800 font-medium">{row.solution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap Tiers Checklist */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
              2. Improvement Roadmap Status
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <div className="text-xs font-bold text-emerald-800 uppercase flex items-center justify-between">
                  <span>Quick Wins (Option A)</span>
                  <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded font-bold">100% Deployed</span>
                </div>
                <ul className="text-[11px] text-emerald-950 space-y-1">
                  <li>✓ Above-the-fold Hero Re-engineering</li>
                  <li>✓ Live Key Metrics Ticker (1.4B/mo)</li>
                  <li>✓ Accreditations Trust Strip (GMP, GLP, ISO)</li>
                  <li>✓ Action-Oriented RFP CTA Placement</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2">
                <div className="text-xs font-bold text-blue-800 uppercase flex items-center justify-between">
                  <span>Structural Tweaks</span>
                  <span className="text-[10px] bg-blue-200 text-blue-900 px-1.5 py-0.5 rounded font-bold">Active</span>
                </div>
                <ul className="text-[11px] text-blue-950 space-y-1">
                  <li>✓ 5-Tab Interactive Dosage Matrix</li>
                  <li>✓ Live Spec Search & Therapeutic Filters</li>
                  <li>✓ Packaging & Batch Flexibility Cards</li>
                  <li>✓ "Why Allrite" Operational Pillars</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-800 uppercase flex items-center justify-between">
                  <span>Strategic Enhancements</span>
                  <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-bold">Next Sprint</span>
                </div>
                <ul className="text-[11px] text-slate-600 space-y-1">
                  <li>✓ 2-Step Fast-Track RFP Feasibility Drawer</li>
                  <li>• Interactive Batch Cost Estimator</li>
                  <li>• 360° Virtual Cleanroom Lab Tour</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Prepared by Lead Product Strategist & Senior UX Researcher</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
};
