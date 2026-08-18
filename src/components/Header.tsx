import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Phone, Mail, ArrowRight, Menu, X, Award, Search, Sparkles } from 'lucide-react';
import { NavPageId } from '../types';

interface HeaderProps {
  currentPage: NavPageId;
  onNavigate: (page: NavPageId) => void;
  onOpenRfp: (dosageCategory?: string, specificForm?: string) => void;
  onOpenAuditInsights?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenRfp,
  onOpenAuditInsights
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavPageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'portfolio', label: 'Our Portfolio', badge: '300+' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'quality', label: 'Quality' },
    { id: 'clients', label: 'Clients' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: NavPageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Compliance & Trust Announcement Bar - Wide Screen */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 border-b border-slate-850">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-[11px] border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              WHO-GMP & Revised Schedule M Validated
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400 text-[11px]">
              Baddi Campus, Himachal Pradesh • 1.4B+ Monthly Unit Scale
            </span>
          </div>

          <div className="flex items-center gap-5 text-[12px]">
            {onOpenAuditInsights && (
              <button
                id="header-audit-insights-btn"
                onClick={onOpenAuditInsights}
                className="hidden lg:flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Strategy Audit</span>
              </button>
            )}
            <a
              href="mailto:info@allrite.in"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">info@allrite.in</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href="tel:+919317039330"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white font-medium transition-colors text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 93170 39330</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Wide Screen */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer"
          >
            <div className="h-11 w-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm border border-slate-200 group-hover:border-blue-400 transition-colors">
              <img src="/images/logo1.png" alt="Allrite Group" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-slate-900 font-['Outfit',sans-serif]">
                  ALLRITE
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                  GROUP
                </span>
              </div>
              <span className="text-[10px] font-medium text-slate-500 tracking-wider uppercase">
                Contract Development & Manufacturing (CDMO)
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links - Minimal & Clean */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-50/80 p-1.5 rounded-xl border border-slate-200/60">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-slate-900 rounded-lg shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`relative z-10 px-1.5 py-0.2 rounded text-[9px] font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-blue-50 text-blue-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-portfolio-quick-btn"
              onClick={() => handleNavClick('portfolio')}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
              title="Search Product Catalog"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>300+ Formulations</span>
            </button>

            <button
              id="header-rfp-btn"
              onClick={() => onOpenRfp()}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all flex items-center gap-2"
            >
              <span>Request Batch RFP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenRfp()}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600"
            >
              RFP Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl"
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                  currentPage === item.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded text-[10px] bg-blue-50 text-blue-700 font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfp();
              }}
              className="w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
            >
              Start CDMO Request for Proposal (RFP)
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};
