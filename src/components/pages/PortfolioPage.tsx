import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SheetProductItem, SPREADSHEET_CONFIG, MASTER_SHEET_PRODUCTS } from '../../data/sheetProducts';
import { syncPortfolioFromGoogleSheets, getCachedPortfolio, SyncResult } from '../../services/sheetsService';
import { initAuth, googleSignIn, logout, getAccessToken } from '../../lib/firebase';
import { User } from 'firebase/auth';
import { ProductDetailModal } from '../ProductDetailModal';
import { ProductCatalogItem } from '../../types';
import { 
  Search, 
  Filter, 
  Pill, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  RotateCcw, 
  Download, 
  ExternalLink, 
  RefreshCw, 
  CheckCircle2, 
  Table as TableIcon, 
  Grid, 
  FileSpreadsheet, 
  Layers, 
  Droplet, 
  Box,
  LogIn,
  LogOut,
  UserCheck
} from 'lucide-react';

interface PortfolioPageProps {
  onOpenRfp: (category?: string, specificForm?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenRfp }) => {
  const [products, setProducts] = useState<SheetProductItem[]>(MASTER_SHEET_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDosageType, setSelectedDosageType] = useState<string>('all');
  const [selectedTherapeutic, setSelectedTherapeutic] = useState<string>('all');
  const [selectedForm, setSelectedForm] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSyncResult, setLastSyncResult] = useState<SyncResult | null>(null);
  
  // Auth state for Google Sheets API
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Selected product for detailed modal view
  const [selectedProductItem, setSelectedProductItem] = useState<SheetProductItem | null>(null);

  // Initialize Firebase Auth listener
  useEffect(() => {
    const unsubscribe = initAuth(
      (authedUser, authedToken) => {
        setUser(authedUser);
        setToken(authedToken);
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Sync Google Sheets handler
  const handleSyncSheets = async (userToken?: string | null) => {
    setIsSyncing(true);
    try {
      const activeToken = userToken !== undefined ? userToken : token;
      const res = await syncPortfolioFromGoogleSheets(activeToken);
      setLastSyncResult(res);
      if (res.products && res.products.length > 0) {
        setProducts(res.products);
      }
    } catch (err) {
      console.error('Failed to sync sheet:', err);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
        await handleSyncSheets(res.accessToken);
      }
    } catch (err) {
      console.error('Google Sign-In failed:', err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogout = async () => {
    await logout();
    setUser(null);
    setToken(null);
  };

  // Extract unique therapeutic categories
  const therapeuticCategories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.category) set.add(p.category.trim());
    });
    return Array.from(set).sort();
  }, [products]);

  // Extract unique dosage forms
  const dosageForms = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.form) set.add(p.form.trim());
    });
    return Array.from(set).sort();
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.form.toLowerCase().includes(q) ||
        item.sno.toLowerCase().includes(q);

      // Dosage Type
      const matchesDosage =
        selectedDosageType === 'all' || item.dosageType === selectedDosageType;

      // Therapeutic
      const matchesTherapeutic =
        selectedTherapeutic === 'all' || item.category === selectedTherapeutic;

      // Form
      const matchesForm =
        selectedForm === 'all' || item.form === selectedForm;

      return matchesSearch && matchesDosage && matchesTherapeutic && matchesForm;
    });
  }, [products, searchQuery, selectedDosageType, selectedTherapeutic, selectedForm]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedProducts = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, safeCurrentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDosageType('all');
    setSelectedTherapeutic('all');
    setSelectedForm('all');
    setCurrentPage(1);
  };

  // Convert SheetProductItem to ProductCatalogItem for modal
  const modalProduct: ProductCatalogItem | null = useMemo(() => {
    if (!selectedProductItem) return null;
    const type = selectedProductItem.dosageType;
    
    let categoryLabel = 'Oral Solid Dosage (OSD)';
    let packSize = '10x10 Alu-Alu / Blister / HDPE Bottle';
    let packagingType = 'Alu-Alu Cold-Form / PVC-PVDC Blister';
    let moq = '100,000 Tablets';
    
    if (type === 'topicals') {
      categoryLabel = 'Derma & Topical Formulation';
      packSize = '15g / 20g / 30g / 50g Lamitube';
      packagingType = 'Aluminum / Lami-Tube in Monocarton';
      moq = '25,000 Tubes';
    } else if (type === 'capsules') {
      categoryLabel = 'Hard Gelatin / HPMC Capsules';
      packSize = '10x10 Alu-Alu / Blister / HDPE Bottle';
      packagingType = 'Alu-Alu / Blister';
      moq = '100,000 Capsules';
    } else if (type === 'liquids') {
      categoryLabel = 'Oral Liquids & Syrups';
      packSize = '60ml / 100ml / 200ml Bottle';
      packagingType = 'PET / Glass Bottle with Measuring Cap';
      moq = '25,000 Bottles';
    } else if (type === 'soaps') {
      categoryLabel = 'Medicated Soaps';
      packSize = '75g / 100g Bar';
      packagingType = 'Wrapper in Monocarton';
      moq = '25,000 Bars';
    } else if (type === 'specialty') {
      categoryLabel = 'Specialty Formulations';
      packSize = '10ml / 20ml / 30ml';
      packagingType = 'Squeezable Bottle with Nozzle';
      moq = '25,000 Units';
    }

    return {
      id: selectedProductItem.id,
      name: selectedProductItem.name,
      genericName: selectedProductItem.name,
      dosageForm: selectedProductItem.form,
      category: type,
      categoryLabel,
      therapeuticArea: selectedProductItem.category,
      prescriptionType: 'Rx',
      strengthOrComposition: selectedProductItem.name,
      packSize,
      packagingType,
      moq,
      leadTime: '3-4 Weeks (Commercial Run)',
      description: `Validated WHO-GMP commercial formulation from Allrite Group Master Portfolio. Standardized for high stability, dissolution kinetics, and regulatory export dossiers.`,
      indications: [selectedProductItem.category],
      popular: true,
      readyDossier: true
    };
  }, [selectedProductItem]);

  // Export filtered products as CSV
  const handleExportCsv = () => {
    const header = 'S.No,Product Name,Dosage Form,Therapeutic Category,Modality\n';
    const rows = filteredProducts.map(p => 
      `"${p.sno}","${p.name.replace(/"/g, '""')}","${p.form}","${p.category.replace(/"/g, '""')}","${p.dosageType}"`
    ).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `allrite_portfolio_export_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const osdCount = products.filter(p => p.dosageType === 'osd').length;
  const topicalCount = products.filter(p => p.dosageType === 'topicals').length;
  const capsuleCount = products.filter(p => p.dosageType === 'capsules').length;
  const liquidCount = products.filter(p => p.dosageType === 'liquids').length;
  const specialtyCount = products.filter(p => p.dosageType === 'specialty').length;
  const soapCount = products.filter(p => p.dosageType === 'soaps').length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      {/* Portfolio Hero Header - Wide Screen */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-14 sm:py-18 border-b border-slate-800 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
              <span>Allrite Master Product Portfolio</span>
            </div>

            {/* Google Sheets Connection & Auth Status */}
            <div className="flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 px-3 py-1.5 rounded-full text-xs text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-white font-medium">{user.email || 'Google User'}</span>
                  <button
                    onClick={handleGoogleLogout}
                    className="ml-2 text-slate-400 hover:text-rose-300 transition-colors"
                    title="Sign Out"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  id="google-signin-btn"
                  onClick={handleGoogleLogin}
                  disabled={isLoggingIn}
                  className="gsi-material-button inline-flex items-center justify-center gap-2.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold shadow-md transition-all border border-slate-300"
                  aria-label="Sign in with Google"
                >
                  <svg className="w-4 h-4" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                  </svg>
                  <span>{isLoggingIn ? 'Connecting...' : 'Sign in with Google'}</span>
                </button>
              )}

              <button
                id="sync-sheets-btn"
                onClick={() => handleSyncSheets()}
                disabled={isSyncing}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-all disabled:opacity-50"
                title="Sync Live with Google Sheets"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{isSyncing ? 'Syncing...' : 'Sync Live'}</span>
              </button>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif] tracking-tight">
            Commercial Formulations Portfolio ({products.length} Products)
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Synchronized directly with Allrite Group's Master Formulation Database. Covering <strong className="text-white font-semibold">{osdCount} Tablets</strong>, <strong className="text-white font-semibold">{capsuleCount} Capsules</strong>, <strong className="text-white font-semibold">{liquidCount} Syrups/Liquids</strong>, <strong className="text-white font-semibold">{soapCount} Soaps</strong>, and <strong className="text-white font-semibold">{topicalCount} Topicals/Gels</strong> with validated stability and commercial batch dossiers.
          </p>

          {/* Quick Metrics Bar with Google Sheet Reference Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80 text-xs">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div>
                <span className="text-slate-400 block text-[11px]">Total Active Formulations</span>
                <strong className="text-xl font-bold text-white font-['Outfit',sans-serif]">{products.length} Products</strong>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-800" />
              <div>
                <span className="text-slate-400 block text-[11px]">Oral Solids & Caps</span>
                <strong className="text-xl font-bold text-blue-400 font-['Outfit',sans-serif]">{osdCount + capsuleCount} Units</strong>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-800" />
              <div>
                <span className="text-slate-400 block text-[11px]">Topicals & Liquids</span>
                <strong className="text-xl font-bold text-sky-400 font-['Outfit',sans-serif]">{topicalCount + liquidCount} Units</strong>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-800" />
              <div>
                <span className="text-slate-400 block text-[11px]">Therapeutic Segments</span>
                <strong className="text-xl font-bold text-emerald-400 font-['Outfit',sans-serif]">{therapeuticCategories.length} Categories</strong>
              </div>
            </div>

            <a
              id="view-original-sheet-link"
              href={SPREADSHEET_CONFIG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold border border-slate-700"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open Master Google Sheet</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Filter & Products Section - Wide Screen */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-8 space-y-6">
        {/* Search & Filter Bar */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
          {/* Top Search & Dropdown Filters Row */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="portfolio-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by product name, active molecule, or category (e.g., Telmisartan, Clindamycin, Metformin, Permethrin)..."
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:bg-white transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Therapeutic Category Filter */}
            <div className="w-full sm:w-72">
              <select
                id="filter-therapeutic-select"
                value={selectedTherapeutic}
                onChange={(e) => {
                  setSelectedTherapeutic(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 focus:outline-hidden focus:border-blue-500 font-medium"
              >
                <option value="all">All Therapeutic Areas ({therapeuticCategories.length})</option>
                {therapeuticCategories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Dosage Form Filter */}
            <div className="w-full sm:w-56">
              <select
                id="filter-form-select"
                value={selectedForm}
                onChange={(e) => {
                  setSelectedForm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 focus:outline-hidden focus:border-blue-500 font-medium"
              >
                <option value="all">All Dosage Forms ({dosageForms.length})</option>
                {dosageForms.map((form, idx) => (
                  <option key={idx} value={form}>
                    {form}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode & Export */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg text-xs transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-2 rounded-lg text-xs transition-colors ${
                    viewMode === 'table' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Table View"
                >
                  <TableIcon className="w-4 h-4" />
                </button>
              </div>

              <button
                id="export-csv-btn"
                onClick={handleExportCsv}
                className="px-3.5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
                title="Export Filtered Catalog to CSV"
              >
                <Download className="w-3.5 h-3.5 text-slate-600" />
                <span className="hidden sm:inline">Export CSV</span>
              </button>
            </div>
          </div>

          {/* Dosage Modality Category Pills */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Dosage Modality Division:
              </span>
              <button
                onClick={handleResetFilters}
                className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  setSelectedDosageType('all');
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedDosageType === 'all'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Master Products ({products.length})
              </button>

              <button
                onClick={() => {
                  setSelectedDosageType('osd');
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedDosageType === 'osd'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Pill className="w-3.5 h-3.5" />
                <span>Tablets ({osdCount})</span>
              </button>

              <button
                onClick={() => {
                  setSelectedDosageType('capsules');
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedDosageType === 'capsules'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Pill className="w-3.5 h-3.5" />
                <span>Capsules ({capsuleCount})</span>
              </button>

              <button
                onClick={() => {
                  setSelectedDosageType('liquids');
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedDosageType === 'liquids'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Pill className="w-3.5 h-3.5" />
                <span>Liquids ({liquidCount})</span>
              </button>

              <button
                onClick={() => {
                  setSelectedDosageType('topicals');
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedDosageType === 'topicals'
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Topicals ({topicalCount})</span>
              </button>

              <button
                onClick={() => {
                  setSelectedDosageType('soaps');
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedDosageType === 'soaps'
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Soaps ({soapCount})</span>
              </button>

              <button
                onClick={() => {
                  setSelectedDosageType('specialty');
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedDosageType === 'specialty'
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Specialty ({specialtyCount})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Header & Items Per Page */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 px-1">
          <div>
            Showing <strong className="text-slate-900">{filteredProducts.length === 0 ? 0 : (safeCurrentPage - 1) * itemsPerPage + 1}–{Math.min(safeCurrentPage * itemsPerPage, filteredProducts.length)}</strong> of <strong className="text-slate-900">{filteredProducts.length}</strong> matching formulations
            {lastSyncResult && (
              <span className="ml-2 text-slate-400 font-mono">
                (Last synced: {lastSyncResult.timestamp})
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span>Items per page:</span>
            {[12, 24, 48].map((num) => (
              <button
                key={num}
                onClick={() => {
                  setItemsPerPage(num);
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                  itemsPerPage === num
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Product Listing - Grid View vs Table View */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 space-y-4">
            <Pill className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">No Formulations Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We did not find products matching "{searchQuery}". You can submit a custom formulation RFP for tailor-made formulation in our Baddi GLP R&D facility.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                Reset All Filters
              </button>
              <button
                onClick={() => onOpenRfp('rd', searchQuery ? `Custom: ${searchQuery}` : 'Custom Formulation')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit Custom F&D RFP
              </button>
            </div>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {paginatedProducts.map((prod) => {
              let badgeClasses = 'bg-slate-50 text-slate-700 border-slate-200';
              let facilityLine = 'Unit-I / Unit-II OSD Block';
              
              if (prod.dosageType === 'osd') { badgeClasses = 'bg-blue-50 text-blue-700 border-blue-200'; facilityLine = 'Unit-I / Unit-II OSD Block'; }
              else if (prod.dosageType === 'capsules') { badgeClasses = 'bg-indigo-50 text-indigo-700 border-indigo-200'; facilityLine = 'Unit-II Caps Block'; }
              else if (prod.dosageType === 'liquids') { badgeClasses = 'bg-emerald-50 text-emerald-700 border-emerald-200'; facilityLine = 'Unit-V Liquid Block'; }
              else if (prod.dosageType === 'topicals') { badgeClasses = 'bg-sky-50 text-sky-700 border-sky-200'; facilityLine = 'Unit-III Topical Block'; }
              else if (prod.dosageType === 'soaps') { badgeClasses = 'bg-rose-50 text-rose-700 border-rose-200'; facilityLine = 'Unit-IV Soap Block'; }
              else if (prod.dosageType === 'specialty') { badgeClasses = 'bg-amber-50 text-amber-700 border-amber-200'; facilityLine = 'Unit-VI Specialty Block'; }

              return (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    {/* Top Row: S.No + Dosage Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-bold text-slate-400">
                        #{prod.sno}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${badgeClasses}`}
                      >
                        {prod.form}
                      </span>
                    </div>

                    {/* Product Name */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-['Outfit',sans-serif] line-clamp-2 leading-snug">
                        {prod.name}
                      </h3>
                    </div>

                    {/* Category & Details */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Therapeutic:</span>
                        <span className="font-semibold text-slate-800 text-right truncate max-w-[170px]" title={prod.category}>
                          {prod.category}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Facility Line:</span>
                        <span className="text-slate-600 font-medium text-right">
                          {facilityLine}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-4">
                    <button
                      onClick={() => setSelectedProductItem(prod)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Technical Specs
                    </button>

                    <button
                      onClick={() => onOpenRfp(prod.dosageType, prod.name)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1 shadow-xs"
                    >
                      <span>Quote RFP</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Table View for High-Volume Pharmacopeial Review */
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100/80 text-slate-800 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3.5 w-16">S.No</th>
                    <th className="px-4 py-3.5">Product Formulation & Active Composition</th>
                    <th className="px-4 py-3.5 w-40">Dosage Form</th>
                    <th className="px-4 py-3.5">Therapeutic Indication</th>
                    <th className="px-4 py-3.5 w-36 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedProducts.map((prod) => {
                    let badgeClasses = 'bg-slate-50 text-slate-700 border-slate-200';
                    let typeLabel = 'Oral Solid Dosage';
                    
                    if (prod.dosageType === 'osd') { badgeClasses = 'bg-blue-50 text-blue-700 border-blue-200'; typeLabel = 'Oral Solid Dosage'; }
                    else if (prod.dosageType === 'capsules') { badgeClasses = 'bg-indigo-50 text-indigo-700 border-indigo-200'; typeLabel = 'Hard Capsules'; }
                    else if (prod.dosageType === 'liquids') { badgeClasses = 'bg-emerald-50 text-emerald-700 border-emerald-200'; typeLabel = 'Oral Liquids/Syrups'; }
                    else if (prod.dosageType === 'topicals') { badgeClasses = 'bg-sky-50 text-sky-700 border-sky-200'; typeLabel = 'Derma / External'; }
                    else if (prod.dosageType === 'soaps') { badgeClasses = 'bg-rose-50 text-rose-700 border-rose-200'; typeLabel = 'Medicated Soap'; }
                    else if (prod.dosageType === 'specialty') { badgeClasses = 'bg-amber-50 text-amber-700 border-amber-200'; typeLabel = 'Specialty Formulation'; }

                    return (
                      <tr key={prod.id} className="hover:bg-blue-50/40 transition-colors">
                        <td className="px-4 py-3 font-mono font-bold text-slate-400">
                          #{prod.sno}
                        </td>
                        <td className="px-4 py-3">
                          <strong className="text-slate-900 font-semibold block text-sm">
                            {prod.name}
                          </strong>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {typeLabel}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${badgeClasses}`}
                          >
                            {prod.form}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          {prod.category}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setSelectedProductItem(prod)}
                              className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
                            >
                              Specs
                            </button>
                            <button
                              onClick={() => onOpenRfp(prod.dosageType, prod.name)}
                              className="px-3 py-1 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700"
                            >
                              RFP
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Numbered Pagination Controls */}
        {totalPages > 1 && (
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => handlePageChange(Math.max(1, safeCurrentPage - 1))}
              disabled={safeCurrentPage === 1}
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Numbered Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-xl">
              {Array.from({ length: Math.min(10, totalPages) }, (_, i) => {
                let pageNum = i + 1;
                if (totalPages > 10 && safeCurrentPage > 5) {
                  pageNum = safeCurrentPage - 5 + i;
                  if (pageNum > totalPages) return null;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                      safeCurrentPage === pageNum
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(totalPages, safeCurrentPage + 1))}
              disabled={safeCurrentPage === totalPages}
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Technical Product Detail Modal */}
      <ProductDetailModal
        product={modalProduct}
        onClose={() => setSelectedProductItem(null)}
        onOpenRfp={onOpenRfp}
      />
    </motion.div>
  );
};
