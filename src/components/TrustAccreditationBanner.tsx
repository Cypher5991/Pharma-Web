import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Microscope, 
  Award, 
  Globe, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight,
  Info
} from 'lucide-react';
import { TRUST_CERTIFICATIONS, OPERATIONAL_ADVANTAGES, CLIENT_PARTNERS_LIST } from '../data/cdmoData';
import { TrustCertification } from '../types';

interface TrustAccreditationBannerProps {
  onOpenRfp: () => void;
}

export const TrustAccreditationBanner: React.FC<TrustAccreditationBannerProps> = ({ onOpenRfp }) => {
  const [selectedCert, setSelectedCert] = useState<TrustCertification | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'Microscope': return <Microscope className="w-5 h-5 text-purple-600" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-600" />;
      case 'Globe': return <Globe className="w-5 h-5 text-emerald-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-teal-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-sky-600" />;
      default: return <ShieldCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="certifications" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header - Minimal & Clear */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-100 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Regulatory Accreditations & Audits
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif] tracking-tight">
              Validated Global Quality Standards
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every production batch undergoes multi-stage testing in GLP-compliant analytical laboratories adhering to CDSCO, WHO-GMP, and revised Schedule M guidelines.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setSelectedCert(TRUST_CERTIFICATIONS[0])}
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Info className="w-3.5 h-3.5 text-slate-500" />
              <span>Compliance Standards</span>
            </button>
            <button
              onClick={onOpenRfp}
              className="text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <span>Request Audit Dossier</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Certifications Badge Grid - Clean Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRUST_CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="p-5 rounded-2xl border border-slate-200/90 hover:border-blue-400 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(cert.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                        {cert.badgeText}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif]">
                        {cert.name}
                      </h3>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shrink-0">
                    {cert.verifiedYear}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Authority: <strong className="text-slate-700 font-semibold">{cert.authority}</strong></span>
                <span className="text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform">View specs &rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Partners Logo Strip - Clean & Subtle */}
        <div className="mt-10 py-6 px-6 sm:px-8 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="shrink-0 text-center lg:text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block font-mono">
                Trusted Manufacturing Partner
              </span>
              <h4 className="text-sm font-bold text-slate-800 font-['Outfit',sans-serif]">
                Selected FMCG & Healthcare Brands
              </h4>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 sm:gap-8 opacity-80 hover:opacity-100 transition-opacity">
              {CLIENT_PARTNERS_LIST.filter(p => p.logoUrl).slice(0, 8).map((client, idx) => (
                <div key={idx} className="h-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-105" title={client.name}>
                  <img src={client.logoUrl} alt={client.name} className="max-h-7 max-w-[100px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Operational Excellence - Clean & Minimal */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-md">
          <div className="max-w-3xl mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 font-['Outfit',sans-serif]">
              Operational Advantages
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Engineered to Eliminate Supply-Chain Bottlenecks
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OPERATIONAL_ADVANTAGES.map((adv, idx) => (
              <div key={adv.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-300 flex items-center justify-center text-xs font-bold font-mono">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-white font-['Outfit',sans-serif]">
                    {adv.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Deep Dive into Compliance Certification */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  {getIcon(selectedCert.iconName)}
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase">{selectedCert.badgeText}</div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">{selectedCert.name}</h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Audit Status:</strong> Validated under national & international regulatory parameters.
              </p>
              <p>
                <strong>Regulatory Body:</strong> {selectedCert.authority}
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                <div className="font-bold text-slate-800">Assurance Protocols:</div>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Automated HVAC differential pressure sensors with continuous electronic logging.</li>
                  <li>Total Organic Carbon (TOC) & conductivity online monitoring for purified water systems.</li>
                  <li>Batch manufacturing record (BMR) traceability with raw API assay validation.</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCert(null);
                  onOpenRfp();
                }}
                className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700"
              >
                Request Quality Dossier / Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
