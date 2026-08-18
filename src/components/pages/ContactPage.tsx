import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Factory, ShieldCheck, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface ContactPageProps {
  onOpenRfp: (category?: string, specificForm?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenRfp }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    modality: 'Oral Solid Dose (OSD)',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }
  };

  const FAQS = [
    {
      q: 'What is your minimum order quantity (MOQ) for commercial batches?',
      a: 'MOQs vary by dosage form: 500,000 units for standard coated/bilayer tablets, 200,000 for hard gelatin capsules, 25,000 tubes for dermatological creams/ointments, and 15,000 bottles for oral liquids. For specialized pilot or stability batches, custom lower volumes are accommodated in our R&D wing.'
    },
    {
      q: 'How fast can a new product technology transfer be completed?',
      a: 'Standard technology transfer for established formulations takes 3 to 4 weeks, including analytical method transfer (AMV), process optimization, and pilot validation batch generation.'
    },
    {
      q: 'Do you offer Third-Party (P2P) as well as Loan License (LL) models?',
      a: 'Yes. We support both models. Under P2P, we procure all API/excipients and deliver release-ready finished goods with full COA. Under Loan License, you utilize our Baddi GMP facilities under your company’s statutory manufacturing license.'
    },
    {
      q: 'What regulatory standards are your Baddi manufacturing units certified under?',
      a: 'All manufacturing units operate strictly under WHO-GMP, Revised Schedule M (Drugs & Cosmetics Act), ISO 9001:2015, and state Ayush & Cosmetic licensure. 100% of analytical chromatography is 21 CFR Part 11 compliant.'
    },
    {
      q: 'Can you provide CTD/ACTD export dossiers for international registrations?',
      a: 'Yes. Our in-house regulatory affairs team compiles CTD/ACTD dossiers, COPPs, stability documentation (Zone II, IVa, IVb), and batch release documentation for export to over 25+ global markets.'
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
      {/* Contact Hero */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <Mail className="w-3.5 h-3.5" />
            <span>Commercial & Regulatory Correspondence</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif] tracking-tight max-w-3xl">
            Get in Touch with Our Commercial & Technical Formulation Team
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Whether you require a formal commercial batch quotation, on-site plant audit scheduling, or R&D formulation development in Baddi, our dedicated team responds within 24 hours under mutual NDA.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                Direct Commercial Inquiry Form
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Submit your product specifications or project parameters below for immediate feasibility review.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950 font-['Outfit',sans-serif]">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our Business Development Director and Formulation Lead have received your request and will contact you at <strong>{formData.workEmail}</strong> within 24 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Phone / Mobile *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Company / Organization *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Life Sciences Ltd"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Manufacturing Modality Needed
                  </label>
                  <select
                    value={formData.modality}
                    onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 focus:outline-hidden focus:border-blue-500"
                  >
                    <option>Oral Solid Dose (Tablets / Capsules / Sachets)</option>
                    <option>Topicals & Derma Creams / Gels / Ointments</option>
                    <option>Oral Liquids & Pediatric Syrups / Drops</option>
                    <option>Medicated & Syndet pH 5.5 Cleansing Bars</option>
                    <option>Ayush & Classical Herbal Formulations</option>
                    <option>Custom R&D Formulation / Reverse Engineering</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Project Requirements / Target Batch Size / API Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your desired composition, packaging barrier, target launch timeline, or regulatory filing requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry Under Mutual NDA</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Strict confidentiality covenants applied. No third-party data sharing.</span>
                </p>
              </form>
            )}
          </div>

          {/* Right Plant & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Plant & Corporate Office Cards */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  Manufacturing Campus
                </span>
                <h3 className="text-xl font-bold font-['Outfit',sans-serif]">
                  Baddi Manufacturing Facility
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Manufacturing Plant Address:</strong>
                    <span className="text-slate-300 leading-relaxed block">
                      Plot No. 114-A, EPIP, Phase-II, Village Thana, Baddi, Distt. Solan, Himachal Pradesh – 173205, India.
                    </span>
                    <span className="text-slate-400 text-[11px] block mt-0.5">
                      (7 km from Baddi Bus Stand • 50 km from Chandigarh Airport)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Corporate Office:</strong>
                    <span className="text-slate-300 leading-relaxed block">
                      B-206, 2nd Floor, Elante Office Complex, Industrial Area Phase-I, Chandigarh – 160002, India.
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-2.5">
                  <strong className="text-white block font-semibold text-xs">Direct Department Numbers:</strong>
                  
                  <div className="grid grid-cols-1 gap-2 text-[11px]">
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Reception & Board:</span>
                      <a href="tel:+919317039330" className="text-blue-300 font-mono font-semibold hover:underline">+91 93170 39330</a>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Sales & Marketing (BD):</span>
                      <a href="tel:+919805550309" className="text-emerald-300 font-mono font-semibold hover:underline">+91 98055 50309</a>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">RM / PM Purchase:</span>
                      <a href="tel:+919318193601" className="text-amber-300 font-mono font-semibold hover:underline">+91 93181 93601</a>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Engineering & Spares:</span>
                      <a href="tel:+919805098214" className="text-indigo-300 font-mono font-semibold hover:underline">+91 98050 98214</a>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-400">Human Resources (HR):</span>
                      <a href="tel:+919317086896" className="text-purple-300 font-mono font-semibold hover:underline">+91 93170 86896</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <Mail className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Official Emails:</strong>
                    <span className="text-slate-300 block font-mono">info@allrite.in • bd@allrite.in</span>
                  </div>
                </div>
              </div>

              {/* Plant Audit Callout */}
              <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-800 text-xs text-blue-200">
                <strong className="text-white block font-semibold mb-1">Schedule an On-Site Plant Audit</strong>
                QA teams and procurement auditors can schedule on-site walkthroughs with 48 hours notice.
              </div>
            </div>

            {/* Quick Contact Direct Action */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif]">
                Immediate Technical Evaluation?
              </h4>
              <p className="text-xs text-slate-600">
                Launch our direct 2-step RFP modal to configure detailed batch sizing and formulation specifications.
              </p>
              <button
                onClick={() => onOpenRfp()}
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm text-center"
              >
                Launch Fast RFP Builder
              </button>
            </div>
          </div>
        </div>

        {/* Commercial FAQs Accordion */}
        <section className="space-y-6 pt-6 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
              Common CDMO Commercial & Regulatory Inquiries
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  {activeFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};
