import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  FileText, 
  Pill, 
  Droplet, 
  Sparkles, 
  Box, 
  Microscope,
  Send,
  Building2,
  Mail,
  User,
  Phone,
  Check
} from 'lucide-react';
import { RfpFormData } from '../types';

interface FastInquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialForm?: string;
}

export const FastInquiryDrawer: React.FC<FastInquiryDrawerProps> = ({
  isOpen,
  onClose,
  initialCategory = 'osd',
  initialForm = ''
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<RfpFormData>({
    dosageCategory: initialCategory || 'osd',
    specificForm: initialForm || '',
    projectStage: 'commercial_batch',
    targetVolume: '1M – 5M units',
    packagingPreference: 'Alu-Alu Blister / Barrier Tube',
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    timeline: 'Within 30–60 Days',
    targetMarket: 'India Domestic & Export',
    projectBrief: ''
  });

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        dosageCategory: initialCategory || prev.dosageCategory,
        specificForm: initialForm || prev.specificForm
      }));
    }
  }, [isOpen, initialCategory, initialForm]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Modal Top Header */}
          <div className="bg-slate-900 text-white p-6 sm:px-8 border-b border-slate-800 flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  CDMO Commercial Portal
                </span>
                <span className="text-xs text-slate-400">Strict Mutual NDA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif]">
                Request CDMO Technical Feasibility & Quote
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Progress Indicator */}
          {!submitted && (
            <div className="bg-slate-50 px-6 sm:px-8 py-3 border-b border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                  step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {step > 1 ? <Check className="w-3.5 h-3.5" /> : '1'}
                </span>
                <span className={step === 1 ? 'font-bold text-slate-900' : 'text-slate-500'}>
                  Dosage & Volume
                </span>

                <span className="text-slate-300">→</span>

                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                  step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  2
                </span>
                <span className={step === 2 ? 'font-bold text-slate-900' : 'text-slate-500'}>
                  Enterprise Details
                </span>
              </div>

              <div className="hidden sm:inline text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                ⚡ 24h Dedicated Response
              </div>
            </div>
          )}

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                    Feasibility Request Received!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{formData.fullName || 'Partner'}</strong>. 
                    Your inquiry regarding <strong className="text-slate-800">{formData.dosageCategory.toUpperCase()} manufacturing</strong> has been routed to our Technical Business Development team in Baddi.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs max-w-md mx-auto space-y-2">
                  <div className="font-bold text-slate-800 border-b border-slate-200 pb-1.5 flex items-center justify-between">
                    <span>Project Specification Summary:</span>
                    <span className="text-blue-600 font-semibold">Ref #{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div>Modality: <strong>{formData.dosageCategory.toUpperCase()}</strong> {formData.specificForm && `(${formData.specificForm})`}</div>
                  <div>Estimated Batch Volume: <strong>{formData.targetVolume}</strong></div>
                  <div>Packaging Format: <strong>{formData.packagingPreference}</strong></div>
                  <div>Company / Brand: <strong>{formData.companyName || 'Not specified'}</strong></div>
                  <div>Target Turnaround: <strong>{formData.timeline}</strong></div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md"
                  >
                    Done & Close Portal
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <div className="space-y-6">
                    {/* Category Selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        1. Select Manufacturing Modality:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          { id: 'osd', name: 'Oral Solids (OSD)', desc: 'Tablets / Capsules' },
                          { id: 'topicals', name: 'Topicals & Gels', desc: '70M/mo Creams' },
                          { id: 'liquids', name: 'Oral Liquids', desc: 'Syrups & Suspensions' },
                          { id: 'soaps', name: 'Medicated Soaps', desc: 'Syndet / Soap Bars' },
                          { id: 'rd', name: 'R&D / Testing', desc: 'Formulation & AMV' },
                          { id: 'ayush', name: 'Ayush Herbal', desc: 'Oils & Cleansers' }
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, dosageCategory: item.id })}
                            className={`p-3 rounded-xl border text-left transition-all ${
                              formData.dosageCategory === item.id
                                ? 'bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-500/20'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <div className="text-xs font-bold">{item.name}</div>
                            <div className="text-[10px] text-slate-500">{item.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Specific Form if passed */}
                    {formData.specificForm && (
                      <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs">
                        <span className="text-slate-500 block text-[11px]">Selected Target Formulation:</span>
                        <strong className="text-blue-900 font-semibold">{formData.specificForm}</strong>
                      </div>
                    )}

                    {/* Project Stage */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        2. Project Lifecycle Stage:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'development', label: 'New Formulation / F&D Sprint' },
                          { id: 'tech_transfer', label: 'Technology Transfer / Scale-Up' },
                          { id: 'commercial_batch', label: 'Commercial Contract Manufacturing' },
                          { id: 'packaging_optimization', label: 'Packaging Format Upgrade / Re-pack' }
                        ].map((stg) => (
                          <button
                            key={stg.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectStage: stg.id as any })}
                            className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                              formData.projectStage === stg.id
                                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {stg.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Estimated Target Batch Volume */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Estimated Annual / Batch Volume:
                        </label>
                        <select
                          value={formData.targetVolume}
                          onChange={(e) => setFormData({ ...formData, targetVolume: e.target.value })}
                          className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        >
                          <option value="Pilot / Stability (< 100k units)">Pilot / Stability (&lt; 100k units)</option>
                          <option value="Commercial 100k – 500k units">Commercial 100k – 500k units</option>
                          <option value="1M – 5M units">1M – 5M units (Standard Run)</option>
                          <option value="Large Scale 10M+ units / year">Large Scale 10M+ units / year</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Packaging Preference:
                        </label>
                        <select
                          value={formData.packagingPreference}
                          onChange={(e) => setFormData({ ...formData, packagingPreference: e.target.value })}
                          className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        >
                          <option value="Alu-Alu Blister">Alu-Alu Cold-Form Blister</option>
                          <option value="PVC / PVDC Blister">PVC / PVDC Blister Strip</option>
                          <option value="Laminated / Aluminum Tube">Laminated / Aluminum Tube</option>
                          <option value="Amber PET / Glass Bottle">Amber PET / Glass Bottle</option>
                          <option value="Multi-Lane Sachet / Stick Pack">Multi-Lane Sachet / Stick Pack</option>
                          <option value="Flow-Wrap Soap Carton">Flow-Wrap Soap Carton</option>
                          <option value="Need Packaging Recommendation">Need Packaging Recommendation</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center gap-2"
                      >
                        <span>Continue to Enterprise Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-blue-600" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Dr. Rajesh Sharma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-blue-600" />
                          <span>Company / Organization *</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="E.g. Cipla, Sun Pharma, Derma Brand"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-blue-600" />
                          <span>Work Email *</span>
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="procurement@company.com"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-blue-600" />
                          <span>Contact Number *</span>
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Formulation Notes / Molecule / Regulatory Target:
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Specify API name, strength, target timeline, or special requirements (e.g. Bilayer tablet, sustained release, NDA required)..."
                        value={formData.projectBrief}
                        onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                      />
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>
                        Standard Mutual Non-Disclosure Agreement (NDA) executed before receiving proprietary formulation dossiers.
                      </span>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 flex items-center gap-1.5"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 flex items-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Feasibility & Quote Request</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
