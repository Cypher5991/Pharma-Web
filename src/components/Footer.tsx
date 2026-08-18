import React from 'react';
import { ShieldCheck, MapPin, Mail, Phone, ArrowRight, Award, FileText } from 'lucide-react';
import { DosageCategoryId, NavPageId } from '../types';

interface FooterProps {
  onOpenRfp: (category?: string, specificForm?: string) => void;
  onNavigate: (page: NavPageId) => void;
  onSelectCategory: (category: DosageCategoryId) => void;
  onOpenAuditInsights?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenRfp,
  onNavigate,
  onSelectCategory,
  onOpenAuditInsights
}) => {
  const handleNav = (page: NavPageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Pre-Footer Call to Action Banner */}
      <div className="bg-slate-900 py-12 border-b border-slate-800">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
              Commercial Partnership Portal
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
              Ready to Accelerate Your Formulation to Commercial Scale?
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Connect with our technical business development and regulatory team in Baddi to receive customized batch feasibility, pilot schedules, and commercial quotes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              id="footer-rfp-btn"
              onClick={() => onOpenRfp()}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2"
            >
              <span>Submit CDMO Feasibility RFP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            {onOpenAuditInsights && (
              <button
                onClick={onOpenAuditInsights}
                className="px-5 py-3.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <Award className="w-4 h-4 text-blue-400" />
                <span>View Strategy Audit</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('home')}>
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 p-0.5 flex items-center justify-center shadow-md shadow-blue-500/20">
                <div className="h-full w-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight font-['Outfit',sans-serif]">
                  Pharma<span className="text-blue-400">Tech</span> Group
                </span>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Contract Development & Manufacturing
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              India’s high-capacity pharmaceutical, derma-cosmetic, and AYUSH contract development and manufacturing organization (CDMO). Operating WHO-GMP certified facilities with 1.4B+ monthly unit throughput in Baddi, Himachal Pradesh.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Plant:</strong> Plot No. 114-A, EPIP, Phase-II, Village Thana, Baddi, Distt. Solan, HP – 173205
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Corporate:</strong> B-206, 2nd Floor, Elante Office Complex, Chandigarh – 160002
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@pharmatech.in" className="hover:text-white transition-colors">
                  info@pharmatech.in • bd@pharmatech.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919317039330" className="hover:text-white transition-colors font-mono">
                  +91 93170 39330 / +91 1795 244 800
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit',sans-serif]">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors text-left">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors text-left">
                  About Us (Company Heritage)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-white transition-colors text-left flex items-center gap-1">
                  <span>Product Portfolio</span>
                  <span className="px-1.5 py-0.2 rounded bg-blue-500/30 text-blue-300 text-[10px]">300+</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('facilities')} className="hover:text-white transition-colors text-left">
                  Manufacturing Facilities
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('quality')} className="hover:text-white transition-colors text-left">
                  Quality & Accreditations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('clients')} className="hover:text-white transition-colors text-left">
                  Our Clients & Models
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors text-left">
                  Contact Us & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Dosage Modalities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit',sans-serif]">
              Modality Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => {
                    handleNav('home');
                    onSelectCategory('osd');
                    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Oral Solid Dose (1.2B/mo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleNav('home');
                    onSelectCategory('topicals');
                    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Derma Topicals (70M/mo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleNav('home');
                    onSelectCategory('liquids');
                    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Oral Liquids (15M/mo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleNav('home');
                    onSelectCategory('soaps');
                    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Medicated & Syndet Bars
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleNav('home');
                    onSelectCategory('rd');
                    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  GLP Analytical & Stability
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Engagement */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit',sans-serif]">
              Commercial Portal
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>Execute structured mutual NDAs for custom formulation transfer and confidential feasibility studies.</p>
              <button
                onClick={() => onOpenRfp()}
                className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-center text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
              >
                Request Batch RFP Dossier
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-center text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Schedule Plant Visit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} PharmaTech Group. All Rights Reserved. Pharmaceutical, Derma & Cosmetic CDMO.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('quality')} className="hover:text-slate-300 transition-colors">
              Regulatory Compliance
            </button>
            <button onClick={() => handleNav('facilities')} className="hover:text-slate-300 transition-colors">
              Cleanroom Specs
            </button>
            <button onClick={() => onOpenRfp()} className="text-blue-400 hover:text-blue-300 font-semibold">
              RFP Pipeline
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
