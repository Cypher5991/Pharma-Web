import React from 'react';
import { motion } from 'motion/react';
import { HeroSection } from '../HeroSection';
import { TrustAccreditationBanner } from '../TrustAccreditationBanner';
import { DosageMatrixSection } from '../DosageMatrixSection';
import { RdQualitySection } from '../RdQualitySection';
import { InteractiveBatchCalculator } from '../InteractiveBatchCalculator';
import { DosageCategoryId, NavPageId } from '../../types';
import { Eye, ArrowRight, ShieldCheck, Factory, Sparkles, Award, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onOpenRfp: (category?: string, specificForm?: string) => void;
  onNavigate: (page: NavPageId) => void;
  onOpenTour: () => void;
  onSelectCategory: (cat: DosageCategoryId) => void;
  activeCategory: DosageCategoryId;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenRfp,
  onNavigate,
  onOpenTour,
  onSelectCategory,
  activeCategory
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-0"
    >
      {/* 1. Hero Section */}
      <HeroSection
        onOpenRfp={onOpenRfp}
        onSelectCategory={(cat) => {
          onSelectCategory(cat);
          const el = document.getElementById('capabilities');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Trust Accreditation Strip */}
      <TrustAccreditationBanner onOpenRfp={() => onOpenRfp()} />

      {/* 3. Interactive Batch Calculator Section */}
      <section className="py-16 sm:py-20 bg-slate-950 text-white border-y border-slate-800 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
              Commercial Batch Planning Tool
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit',sans-serif] tracking-tight">
              Interactive CDMO Feasibility & Batch Sizing Engine
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Simulate line capacity, production lead times, and unit cost benefits for your pipeline in seconds.
            </p>
          </div>

          <InteractiveBatchCalculator onOpenRfp={onOpenRfp} />
        </div>
      </section>

      {/* 4. Dosage Matrix Section */}
      <DosageMatrixSection
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
        onOpenRfp={onOpenRfp}
      />

      {/* 5. Virtual Cleanroom & Facility Callout */}
      <section className="py-16 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="/images/158_facility_exterior.jpg" alt="Facility Exterior" className="w-full h-full object-cover" />
        </div>
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/85 border border-slate-800 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                <Factory className="w-3.5 h-3.5" />
                <span>Baddi Industrial Complex (5-Acre GMP Campus)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit',sans-serif] leading-tight">
                Explore Our Automated Compression, Homogenization & GLP Suites
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Take an interactive walkthrough of our 4 manufacturing units in Baddi, featuring high-speed 55-station rotary presses, Class C/D cleanrooms, and 12+ ICH stability suites.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                id="home-open-tour-btn"
                onClick={onOpenTour}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-xl transition-all flex items-center gap-2 group"
              >
                <Eye className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>Launch Cleanroom Floor Tour</span>
              </button>

              <button
                onClick={() => onNavigate('facilities')}
                className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600/60 hover:bg-blue-600 border border-blue-400/40 transition-all flex items-center gap-2"
              >
                <span>View Full Facility Specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dedicated R&D & Formulation Quality Hub */}
      <RdQualitySection onOpenRfp={onOpenRfp} />

      {/* 7. Quick Jump to Full Product Portfolio */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Ready Formulations Portfolio
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
              Over 300+ Validated Products in Our Commercial Portfolio
            </h3>
            <p className="text-sm text-slate-600">
              Browse our ready-to-license formulations across Oral Solids, Topicals, Syrups, Soaps, Sachets, and Ayush.
            </p>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => {
                onNavigate('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all flex items-center gap-2"
            >
              <span>Explore Full Product Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
