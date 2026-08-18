import React from 'react';
import { motion } from 'motion/react';
import { MANUFACTURING_UNITS } from '../../data/cdmoData';
import { Factory, Eye, ArrowRight, ShieldCheck, Cpu, Droplet, Layers, Wind, Thermometer, CheckCircle2 } from 'lucide-react';

interface FacilitiesPageProps {
  onOpenRfp: (category?: string, specificForm?: string) => void;
  onOpenTour: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onOpenRfp, onOpenTour }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      {/* Facilities Hero */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <Factory className="w-3.5 h-3.5" />
            <span>Manufacturing Infrastructure & Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif] tracking-tight max-w-3xl">
            State-of-the-Art Manufacturing Units & High-Throughput Cleanrooms
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Four specialized manufacturing blocks spanning over 125,000+ sq.ft of built-up cleanroom space in Baddi, Himachal Pradesh. Engineered with dedicated AHU air-handling systems, positive pressure cascades, and automated high-speed packaging lines.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenTour}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-xl transition-all flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-blue-600" />
              <span>Launch 360° Cleanroom Tour</span>
            </button>

            <button
              onClick={() => onOpenRfp()}
              className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"
            >
              <span>Book Line Allocation RFP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Dedicated Facility Units Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Production Campuses
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
            Dedicated Specialized Manufacturing Units
          </h2>
          <p className="text-sm text-slate-600">
            Zoned by dosage modality to completely prevent cross-contamination and maximize operational batch speeds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {MANUFACTURING_UNITS.map((unit) => (
            <div
              key={unit.id}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {unit.imageUrl && (
                  <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-100 bg-slate-100 relative">
                    <img
                      src={unit.imageUrl}
                      alt={unit.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    {unit.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Est. {unit.establishedYear}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit',sans-serif] group-hover:text-blue-600 transition-colors">
                    {unit.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {unit.location}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {unit.description}
                </p>

                {/* Specs Pill Grid */}
                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Cleanroom Grade</span>
                    <strong className="text-slate-800 font-semibold">{unit.cleanroomGrade}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Monthly Capacity</span>
                    <strong className="text-blue-700 font-bold">{unit.monthlyCapacity}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Built-Up Floor Area</span>
                    <strong className="text-slate-800 font-semibold">{unit.area}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Primary Modality</span>
                    <strong className="text-slate-800 font-semibold">{unit.primaryFocus.split('-')[0]}</strong>
                  </div>
                </div>

                {/* Validated Equipment Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key Installed Machinery:
                  </h4>
                  <div className="space-y-1.5">
                    {unit.keyEquipment.map((eq, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {unit.certifications.map((cert, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                      {cert}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenRfp(undefined, unit.name)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>Inquire Unit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cleanroom Process & Engineering Standards Strip */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
              Cleanroom Engineering Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit',sans-serif]">
              Rigorous Environmental & Contamination Controls
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Designed to meet Revised Schedule M, WHO-GMP, and USFDA data integrity norms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Wind className="w-4 h-4 text-blue-400" />
                <span>HVAC & HEPA Air Cascades</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Independent Air Handling Units (AHUs) with terminal 0.3-micron HEPA filters ensuring 20+ air changes per hour (ACPH) and strict pressure gradients between dispensing, compression, and corridors.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Droplet className="w-4 h-4 text-emerald-400" />
                <span>Continuous Purified Water Generation</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Multi-stage RO, EDI, and UV sanitized water circulation loop maintaining continuous turbulent flow (&gt; 1.5 m/s) with online Total Organic Carbon (TOC) and conductivity telemetry.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>SS316L Contact Metallurgy</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                100% of product contact surfaces, storage vessels, transfer piping, and homogenizing chambers constructed with electropolished SS316L (Ra &lt; 0.4 µm) with orbital welding.
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
