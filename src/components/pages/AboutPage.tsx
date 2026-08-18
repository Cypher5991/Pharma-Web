import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_MILESTONES, LEADERSHIP_TEAM, KEY_COMPANY_METRICS } from '../../data/cdmoData';
import { NavPageId } from '../../types';
import { ShieldCheck, Award, Factory, Users, Compass, HeartHandshake, ArrowRight, CheckCircle2, Globe, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onOpenRfp: () => void;
  onNavigate: (page: NavPageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenRfp, onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      {/* About Hero */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Company Profile & Evolution</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif] tracking-tight max-w-3xl">
            A Legacy of Pharmaceutical Precision & High-Capacity CDMO Leadership
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Founded in 2010 as Allkind Healthcare and evolving into Allrite Group, we have grown into one of India’s most technologically advanced contract development and manufacturing organizations (CDMO). Operating across a 5-acre campus in Baddi, Himachal Pradesh with 1.4B+ monthly unit throughput.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenRfp}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <span>Connect with Leadership & BD</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('facilities')}
              className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/10 transition-all"
            >
              Explore Manufacturing Units &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="bg-white border-b border-slate-200 py-8 shadow-xs">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {KEY_COMPANY_METRICS.map((metric) => (
              <div key={metric.id} className="pt-3 md:pt-0 px-2 space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  {metric.unit}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Message from Managing Partner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shrink-0 border-2 border-blue-400/40 shadow-2xl bg-slate-800">
              <img
                src="/images/1.jpg"
                alt="Mr. Vivek K. Singh"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Leadership Message</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
                Message from Mr. Vivek K. Singh
              </h2>
              <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider font-mono">
                Managing Partner & Founder, Allrite Group
              </p>
              <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed italic border-l-2 border-blue-400/50 pl-4 py-1">
                “At Allrite Group, our journey began with a clear vision: to deliver world-class pharmaceutical and personal care contract manufacturing that bridges technological precision with uncompromised quality. We have evolved from a single oral liquid facility in 2010 to a multi-block CDMO delivering 1.4B+ units per month. Our success is built on one enduring philosophy: moving from mere customer satisfaction to genuine customer delight through transparency, scientific rigor, and compliance excellence.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Principles */}
      <section className="py-16 sm:py-20 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Our Core Values
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
            5 Pillars of the Allrite Group Culture
          </h2>
          <p className="text-sm text-slate-600">
            Guided by principles of engineering integrity, sustainable operations, and client-first commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
                Quality Assurance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Flawless cGMP and GLP execution across every batch, verified with 21 CFR Part 11 electronic data integrity.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
                Customer Delight
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Surpassing partner expectations with flexible batch scaling, rapid response times, and tailored CDMO solutions.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
                Transparency
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Uncompromising ethics in technical documentation, analytical validation, and commercial contractual terms.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
                Sustainability
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Solar energy adoption, eco-friendly R134a refrigerants, waste-water recycling, and green manufacturing practices.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
                Empathy & Compassion
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Treating every healthcare formula as a life-saving mission to make healthcare accessible and affordable worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Growth Milestones Timeline */}
      <section className="py-16 bg-slate-900 text-white border-y border-slate-800">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
              15-Year Growth Journey
            </span>
            <h2 className="text-3xl font-extrabold font-['Outfit',sans-serif]">
              From Allkind Healthcare (2010) to Allrite Group
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Key infrastructure expansions and quality milestones in Baddi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_MILESTONES.map((mile, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3 relative overflow-hidden group hover:border-blue-500 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-blue-400 font-['Outfit',sans-serif]">
                    {mile.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    {mile.metric}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-['Outfit',sans-serif]">
                  {mile.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {mile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Technical Governance */}
      <section className="py-16 sm:py-20 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Technical Leadership
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
            Experienced Pharmaceutical Governance
          </h2>
          <p className="text-sm text-slate-600">
            Directed by pharmaceutical veterans with over two decades of regulatory, formulation science, and manufacturing expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-blue-400 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                {member.imageUrl ? (
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-md">
                    {member.name.slice(0, 2).toUpperCase()}
                  </div>
                )}

                <div>
                  <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 block">
                    {member.role}
                  </span>
                  <span className="text-[11px] text-slate-400 block font-mono">
                    {member.experience}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                Focus: <strong className="text-slate-800">{member.focus}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus CTA */}
      <section className="py-12 bg-blue-50 border-t border-blue-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-900 font-['Outfit',sans-serif]">
              Schedule an On-Site Factory Audit in Baddi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We welcome QA heads and procurement executives for comprehensive vendor qualification and cleanroom inspections.
            </p>
          </div>

          <button
            onClick={onOpenRfp}
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all shrink-0"
          >
            Request Audit Visit / NDA
          </button>
        </div>
      </section>
    </motion.div>
  );
};
