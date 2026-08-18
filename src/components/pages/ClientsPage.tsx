import React from 'react';
import { motion } from 'motion/react';
import { TRUST_CERTIFICATIONS } from '../../data/cdmoData';
import { Users, Globe, Building2, Handshake, ShieldCheck, ArrowRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

interface ClientsPageProps {
  onOpenRfp: (category?: string, specificForm?: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenRfp }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      {/* Clients Hero */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <Handshake className="w-3.5 h-3.5" />
            <span>Commercial Partnerships & Client Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif] tracking-tight max-w-3xl">
            Trusted Manufacturing Partner to 200+ Domestic & Global Brand Leaders
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            From India’s top pharmaceutical enterprises to fast-growing direct-to-consumer derma-cosmetic brands, PharmaTech provides flexible commercial models spanning Third-Party (P2P), Loan License, and Custom Formulation Development.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenRfp()}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <span>Initiate Mutual NDA / Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Engagement Models Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Commercial Engagement Models
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
            Flexible Manufacturing Frameworks Tailored to Your Pipeline
          </h2>
          <p className="text-sm text-slate-600">
            Choose the engagement model that fits your regulatory and commercial strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Principal to Principal (P2P) / Third Party',
              badge: 'Most Popular',
              desc: 'Turnkey contract manufacturing where PharmaTech procures tested raw APIs, excipients, and primary packaging materials, delivering finished, tested, release-ready batches.',
              idealFor: 'Pharma marketers, D2C brands, Hospital supply distributors',
              turnaround: '2–3 Weeks standard batch turnaround'
            },
            {
              title: 'Loan License (LL) Manufacturing',
              badge: 'Regulatory Dedicated',
              desc: 'Manufacture formulations under your company’s dedicated loan license in our certified Baddi facilities, utilizing our GMP cleanrooms with your regulatory filings.',
              idealFor: 'Established pharma companies holding state manufacturing licenses',
              turnaround: 'Dedicated line allocation and batch scheduling'
            },
            {
              title: 'Collaborative Formulation & R&D',
              badge: 'Innovation Sprint',
              desc: 'End-to-end development of novel formulations, stability benchmarking, reverse-engineering of innovator drugs, and full CTD regulatory dossier preparation.',
              idealFor: 'Specialty dermatology brands and novel combination OTCs',
              turnaround: '4–8 Weeks rapid prototype to validation'
            },
            {
              title: 'Global Export & Private Label',
              badge: 'International Reach',
              desc: 'High-volume production with CTD/ACTD dossiers, Certificate of Pharmaceutical Product (COPP), and free-sale certificates for 25+ emerging export markets.',
              idealFor: 'International pharma importers, SEA, Africa, and CIS buyers',
              turnaround: 'Export packaging and customs container staging'
            }
          ].map((model, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                  {model.badge}
                </span>

                <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
                  {model.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {model.desc}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Ideal Partner Profile:</span>
                  <strong className="text-slate-800 font-medium">{model.idealFor}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Turnaround:</span>
                  <span className="text-blue-700 font-semibold">{model.turnaround}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Therapeutic Therapeutic Segment Dominance */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
              Therapeutic Segment Coverage
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit',sans-serif]">
              Market-Leading Formulations Across High-Growth Categories
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              High-volume commercial output serving chronic, acute, and derma-care segments.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center text-xs">
            {[
              { name: 'Dermatology & Cosmeceuticals', count: '120+ SKUs' },
              { name: 'Cardiovascular & Hypertension', count: '45+ SKUs' },
              { name: 'Diabetology & Metabolic', count: '40+ SKUs' },
              { name: 'Gastroenterology & Antacids', count: '55+ SKUs' },
              { name: 'Pediatric Syrups & Drops', count: '35+ SKUs' },
              { name: 'Nutraceuticals & Immunity', count: '50+ SKUs' },
            ].map((seg, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                <strong className="text-white block font-semibold">{seg.name}</strong>
                <span className="text-blue-400 font-mono font-bold text-xs">{seg.count}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Client Partner Logo Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Our Trusted Partners
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
              Leading Healthcare & FMCG Brands Manufactured by PharmaTech
            </h2>
            <p className="text-sm text-slate-600">
              Trusted by multinational enterprises, domestic leaders, and innovative D2C brands.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: 'Himalaya Wellness', logo: '/images/partners/himalaya.png', category: 'Personal Care & Wellness' },
              { name: 'Leeford Healthcare', logo: '/images/partners/leeford.png', category: 'Pharmaceuticals' },
              { name: 'Bombay Shaving Company', logo: '/images/partners/bombay-shaving.png', category: 'Cosmeceuticals' },
              { name: 'Apollo Pharmacy', logo: '/images/partners/apollo.png', category: 'Healthcare Retail' },
              { name: 'Mamaearth (Honasa)', logo: '/images/partners/mama-earth.png', category: 'Personal Care D2C' },
              { name: 'Ajanta Pharma', logo: '/images/partners/ajanta.png', category: 'Specialty Formulations' },
              { name: 'MedPlus Health', logo: '/images/partners/medplus.png', category: 'Retail & Institutional' },
              { name: 'Morepen Laboratories', logo: '/images/partners/morepen.png', category: 'Pharmaceuticals' },
              { name: 'Healing Pharma', logo: '/images/partners/healing.png', category: 'Therapeutics' },
              { name: 'Emami Limited', logo: '/images/partners/emami.png', category: 'Cosmetics & Ayush' },
              { name: 'Galpha Laboratories', logo: '/images/partners/galpha.png', category: 'Pharma Formulations' },
              { name: 'Piramal Healthcare', logo: '', category: 'OTC & Pharma' },
              { name: 'Dabur India', logo: '', category: 'Ayurvedic & Health' },
              { name: 'Godrej Consumer', logo: '', category: 'Personal Care' },
              { name: 'Reckitt Benckiser', logo: '', category: 'Health & Hygiene' },
              { name: '82°E Skincare', logo: '', category: 'Premium Skincare' },
              { name: 'Xionex Healthcare', logo: '/images/partners/xionex.png', category: 'Pharmaceuticals' },
              { name: 'Medicos Derma', logo: '', category: 'Dermatology' }
            ].map((partner, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col items-center justify-center text-center group h-32"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain filter group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="text-slate-800 font-bold text-sm font-['Outfit',sans-serif]">
                    {partner.name}
                  </div>
                )}
                <span className="text-[10px] text-slate-400 font-medium mt-2">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Message about Our Valuable Clients */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                A Message to Our Invaluable Partners
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Client-Centric Collaboration & Long-Term Trust
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              At <strong>PharmaTech Group</strong>, we recognize that our success is intrinsically linked to the trust and confidence placed in us by our invaluable clients. Our clients are not just customers; they are valued collaborators and partners on our journey towards pharmaceutical excellence.
            </p>
            <p>
              Their insights, feedback, and trust in our products and services drive us to continuously raise the bar and exceed expectations. We are deeply committed to understanding and meeting the diverse needs of our clients, ensuring that every interaction is characterized by professionalism, reliability, and integrity.
            </p>
            <p className="italic text-slate-700 font-medium pt-2">
              “To our valued clients, we extend our sincere thanks for your continued partnership and trust in PharmaTech Group. Your support inspires us to push the boundaries of manufacturing excellence.” — The PharmaTech Leadership Team
            </p>
          </div>
        </section>

        {/* Confidentiality & Mutual NDA Guarantee */}
        <div className="p-8 rounded-3xl bg-blue-50 border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-lg font-['Outfit',sans-serif]">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>Strict IP Protection & Mutual NDA Guarantee</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We operate under strict confidentiality covenants. Your formulation recipes, artwork, batch records, and commercial market forecasts are protected under legally binding non-disclosure agreements before technical data exchange.
            </p>
          </div>

          <button
            onClick={() => onOpenRfp()}
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all shrink-0"
          >
            Execute Standard Mutual NDA
          </button>
        </div>
      </div>
    </motion.div>
  );
};
