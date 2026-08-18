import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { FacilitiesPage } from './components/pages/FacilitiesPage';
import { QualityPage } from './components/pages/QualityPage';
import { ClientsPage } from './components/pages/ClientsPage';
import { ContactPage } from './components/pages/ContactPage';
import { FastInquiryDrawer } from './components/FastInquiryDrawer';
import { AuditBenchmarkDrawer } from './components/AuditBenchmarkDrawer';
import { CleanroomTourModal } from './components/CleanroomTourModal';
import { DosageCategoryId, NavPageId } from './types';
import { Award, Eye, Calculator, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPageId>('home');
  const [activeCategory, setActiveCategory] = useState<DosageCategoryId>('osd');
  const [isRfpOpen, setIsRfpOpen] = useState<boolean>(false);
  const [rfpCategory, setRfpCategory] = useState<string>('osd');
  const [rfpForm, setRfpForm] = useState<string>('');
  const [isAuditOpen, setIsAuditOpen] = useState<boolean>(false);
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);

  const handleOpenRfp = (category?: string, specificForm?: string) => {
    if (category) setRfpCategory(category);
    if (specificForm) setRfpForm(specificForm);
    setIsRfpOpen(true);
  };

  const handleSelectCategory = (category: DosageCategoryId) => {
    setActiveCategory(category);
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    setTimeout(() => {
      const element = document.getElementById('capabilities');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigate = (page: NavPageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Primary Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenRfp={handleOpenRfp}
        onOpenAuditInsights={() => setIsAuditOpen(true)}
      />

      {/* Main Content Area with Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <HomePage
                onOpenRfp={handleOpenRfp}
                onNavigate={handleNavigate}
                onOpenTour={() => setIsTourOpen(true)}
                onSelectCategory={setActiveCategory}
                activeCategory={activeCategory}
              />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <AboutPage
                onOpenRfp={() => handleOpenRfp()}
                onNavigate={handleNavigate}
              />
            </motion.div>
          )}

          {currentPage === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <PortfolioPage
                onOpenRfp={handleOpenRfp}
              />
            </motion.div>
          )}

          {currentPage === 'facilities' && (
            <motion.div
              key="facilities"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <FacilitiesPage
                onOpenRfp={handleOpenRfp}
                onOpenTour={() => setIsTourOpen(true)}
              />
            </motion.div>
          )}

          {currentPage === 'quality' && (
            <motion.div
              key="quality"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <QualityPage
                onOpenRfp={handleOpenRfp}
              />
            </motion.div>
          )}

          {currentPage === 'clients' && (
            <motion.div
              key="clients"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <ClientsPage
                onOpenRfp={handleOpenRfp}
              />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <ContactPage
                onOpenRfp={handleOpenRfp}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Corporate CDMO Footer */}
      <Footer
        onOpenRfp={handleOpenRfp}
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
        onOpenAuditInsights={() => setIsAuditOpen(true)}
      />

      {/* Interactive 2-Step Fast RFP / Technical Feasibility Drawer */}
      <FastInquiryDrawer
        isOpen={isRfpOpen}
        onClose={() => {
          setIsRfpOpen(false);
          setRfpForm('');
        }}
        initialCategory={rfpCategory}
        initialForm={rfpForm}
      />

      {/* Virtual Cleanroom Floor Explorer Modal */}
      <CleanroomTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onOpenRfp={handleOpenRfp}
      />

      {/* UX Strategy & Competitor Benchmark Audit Report Drawer */}
      <AuditBenchmarkDrawer
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />

      {/* Floating Action Bar (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <button
          id="floating-tour-btn"
          onClick={() => setIsTourOpen(true)}
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold shadow-xl border border-slate-700 hover:border-blue-500 backdrop-blur-md transition-all group"
        >
          <Eye className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
          <span>Cleanroom Tour</span>
        </button>

        <button
          id="floating-audit-btn"
          onClick={() => setIsAuditOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xl shadow-blue-500/20 border border-blue-400/40 transition-all group"
        >
          <Award className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
          <span>Strategy Audit</span>
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
        </button>
      </div>
    </div>
  );
}
