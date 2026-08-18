import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Phone, Mail, ArrowRight, Menu, X, Award, Search, Sparkles } from 'lucide-react';
import { NavPageId } from '../types';
import { PharmaTechIcon } from './PharmaTechLogo';

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
      {/* Top Compliance & Trust Announcement Bar */}
      <div className="bg-[#071739] text-slate-300 text-[11px] py-1.5 border-b border-slate-800">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#4EBA36]/15 text-[#4EBA36] font-semibold text-[10.5px] border border-[#4EBA36]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4EBA36] animate-pulse"></span>
              WHO-GMP & Revised Schedule M Validated
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300 text-[11px]">
              Baddi Campus, Himachal Pradesh • 1.4B+ Monthly Scale
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            {onOpenAuditInsights && (
              <button
                id="header-audit-insights-btn"
                onClick={onOpenAuditInsights}
                className="hidden lg:flex items-center gap-1 text-[#38BDF8] hover:text-white font-medium transition-colors"
              >
                <Award className="w-3 h-3" />
                <span>Strategy Audit</span>
              </button>
            )}
            <a
              href="mailto:info@pharmatech.in"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors text-[11px]"
            >
              <Mail className="w-3 h-3 text-[#38BDF8]" />
              <span className="hidden sm:inline">info@pharmatech.in</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href="tel:+919317039330"
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#4EBA36] font-medium transition-colors text-[11px]"
            >
              <Phone className="w-3 h-3 text-[#4EBA36]" />
              <span>+91 93170 39330</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-[68px]">
          {/* Main Logo - P Design Mark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer"
            title="PharmaTech CDMO"
          >
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-white border border-slate-200/90 group-hover:border-[#4EBA36]/60 p-1 flex items-center justify-center shadow-xs group-hover:shadow-md group-hover:shadow-[#4EBA36]/15 transition-all">
              <PharmaTechIcon size={38} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0B2553] font-['Outfit',sans-serif]">
                  pharma<span className="text-[#4EBA36]">tech</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="text-[8.5px] font-bold tracking-[0.2em] text-[#0284C7] uppercase font-mono">
                  CDMO
                </span>
                <span className="text-[8.5px] text-slate-400 font-semibold">• INDIA</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-slate-50/90 p-1 rounded-xl border border-slate-200/70">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-[#0B2553] hover:bg-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#0B2553] rounded-lg shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`relative z-10 px-1.5 py-0.2 rounded text-[9px] font-bold ${
                        isActive
                          ? 'bg-[#4EBA36] text-white'
                          : 'bg-[#4EBA36]/15 text-[#2E8B1E]'
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
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#0B2553] hover:bg-slate-100 transition-colors flex items-center gap-1.5"
              title="Search Product Catalog"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>300+ Formulations</span>
            </button>

            <button
              id="header-rfp-btn"
              onClick={() => onOpenRfp()}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0B2553] via-[#0284C7] to-[#4EBA36] hover:opacity-95 shadow-sm shadow-[#0B2553]/20 transition-all flex items-center gap-2"
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
