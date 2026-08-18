import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  Pill, 
  Droplet, 
  Box, 
  Microscope
} from 'lucide-react';
import { KEY_COMPANY_METRICS } from '../data/cdmoData';
import { DosageCategoryId } from '../types';

interface HeroSectionProps {
  onOpenRfp: (category?: string) => void;
  onSelectCategory: (category: DosageCategoryId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRfp, onSelectCategory }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[620px] lg:min-h-[720px] flex items-center">
      {/* Background Factory Video Loop (YouTube) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2">
          <iframe
            src="https://www.youtube.com/embed/x7i6L6cqWLY?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=x7i6L6cqWLY&playsinline=1"
            title="Allrite Group Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full filter brightness-[0.80] contrast-[1.10]"
          ></iframe>
        </div>
        
        {/* Adjusted Subtle Dark Vignette & Gradient Overlay for legibility and video visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
      </div>

      {/* Main Content Container - Wide Screen & Minimal */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="max-w-4xl space-y-6">
          {/* Compliance & Trust Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300 text-xs font-medium backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-white">WHO-GMP & GLP Certified CDMO</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Baddi, Himachal Pradesh</span>
          </div>

          {/* Clean Display Typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif] leading-[1.12]">
            Contract Development & Manufacturing for Global Healthcare
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            From pilot formulation to commercial batching at <strong className="text-white font-semibold">1.4B+ monthly unit scale</strong>. 
            High-speed tableting, sterile liquids, vacuum-homogenized topicals, and medicated soaps across 5 dedicated manufacturing blocks.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              id="hero-request-rfp-btn"
              onClick={() => onOpenRfp()}
              className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5"
            >
              <span>Request CDMO Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="hero-explore-matrix-btn"
              href="#capabilities"
              className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Explore Dosage Capabilities</span>
            </a>
          </div>

          {/* Minimal Modality Filter Row */}
          <div className="pt-6">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
              Instant Line Specifications:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onSelectCategory('osd')}
                className="px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-blue-600/30 border border-slate-800 hover:border-blue-500/50 backdrop-blur-md text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <Pill className="w-3.5 h-3.5 text-blue-400" />
                <span>Oral Solids (1.2B/mo)</span>
              </button>

              <button
                onClick={() => onSelectCategory('topicals')}
                className="px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-sky-600/30 border border-slate-800 hover:border-sky-500/50 backdrop-blur-md text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Topicals (70M/mo)</span>
              </button>

              <button
                onClick={() => onSelectCategory('liquids')}
                className="px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-teal-600/30 border border-slate-800 hover:border-teal-500/50 backdrop-blur-md text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <Droplet className="w-3.5 h-3.5 text-teal-400" />
                <span>Oral Liquids (15M/mo)</span>
              </button>

              <button
                onClick={() => onSelectCategory('soaps')}
                className="px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-indigo-600/30 border border-slate-800 hover:border-indigo-500/50 backdrop-blur-md text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <Box className="w-3.5 h-3.5 text-indigo-400" />
                <span>Medicated Soaps (18M/mo)</span>
              </button>

              <button
                onClick={() => onSelectCategory('rd')}
                className="px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-purple-600/30 border border-slate-800 hover:border-purple-500/50 backdrop-blur-md text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <Microscope className="w-3.5 h-3.5 text-purple-400" />
                <span>R&D & GLP Lab</span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimal High-Impact Metric Strip */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {KEY_COMPANY_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-xl p-4 transition-colors hover:border-slate-700"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif] tracking-tight">
                {metric.value}
              </div>
              <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wider mt-0.5">
                {metric.unit}
              </div>
              <div className="text-xs text-slate-300 mt-1 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
