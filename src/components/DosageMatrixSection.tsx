import React, { useState } from 'react';
import { 
  Pill, 
  Droplet, 
  Sparkles, 
  Box, 
  Microscope, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Container, 
  FileText, 
  Search, 
  SlidersHorizontal,
  Clock,
  Zap,
  ShieldCheck,
  Building,
  Check,
  Package
} from 'lucide-react';
import { CDMO_CATEGORIES } from '../data/cdmoData';
import { DosageCategoryId, DosageFormItem } from '../types';

interface DosageMatrixSectionProps {
  activeCategory: DosageCategoryId;
  onSelectCategory: (category: DosageCategoryId) => void;
  onOpenRfp: (category?: string, specificForm?: string) => void;
}

export const DosageMatrixSection: React.FC<DosageMatrixSectionProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenRfp
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'pharma' | 'derma' | 'packaging'>('all');

  const selectedCategoryData = CDMO_CATEGORIES.find((c) => c.id === activeCategory) || CDMO_CATEGORIES[0];

  const getCategoryIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Pill': return <Pill className={className} />;
      case 'Droplet': return <Droplet className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Box': return <Box className={className} />;
      case 'Microscope': return <Microscope className={className} />;
      default: return <Pill className={className} />;
    }
  };

  const getPackagingIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-3.5 h-3.5" />;
      case 'Container': return <Container className="w-3.5 h-3.5" />;
      case 'FileText': return <FileText className="w-3.5 h-3.5" />;
      case 'Box': return <Box className="w-3.5 h-3.5" />;
      default: return <Package className="w-3.5 h-3.5" />;
    }
  };

  // Filter items based on search query
  const filteredItems = selectedCategoryData.items.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyFormulationTypes.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.packagingOptions.some((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (!matchesSearch) return false;

    if (filterType === 'pharma') {
      return item.complianceStandards.some(s => s.toLowerCase().includes('usp') || s.toLowerCase().includes('ip') || s.toLowerCase().includes('who'));
    }
    if (filterType === 'derma') {
      return item.targetTherapeuticAreas.some(t => t.toLowerCase().includes('derma') || t.toLowerCase().includes('skin') || t.toLowerCase().includes('cosmeceuticals'));
    }
    if (filterType === 'packaging') {
      return item.packagingOptions.length > 0;
    }

    return true;
  });

  return (
    <section id="capabilities" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B2553]/10 text-[#0B2553] text-xs font-bold uppercase tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Formulation Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2553] font-['Outfit',sans-serif] tracking-tight">
            Dosage Form Capabilities & Production Lines
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore validated capacities, cleanroom classifications, lead equipment, and packaging barrier technologies across each manufacturing modality.
          </p>
        </div>

        {/* Interactive Modality Category Tabs */}
        <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {CDMO_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  id={`tab-btn-${cat.id}`}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    setSearchQuery('');
                  }}
                  className={`relative p-3.5 rounded-xl text-left transition-all flex flex-col justify-between gap-2 ${
                    isActive
                      ? 'bg-gradient-to-br from-[#0B2553] via-[#0284C7] to-[#4EBA36] text-white shadow-md shadow-[#0B2553]/25'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-[#0B2553] border border-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-[#0284C7]/10 text-[#0284C7]'}`}>
                      {getCategoryIcon(cat.iconName, 'w-4 h-4')}
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#4EBA36] ring-2 ring-white/40 animate-pulse"></span>
                    )}
                  </div>

                  <div>
                    <div className="text-xs font-bold font-['Outfit',sans-serif] leading-tight">
                      {cat.name}
                    </div>
                    <div className={`text-[10px] font-semibold mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                      {cat.monthlyThroughput}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Overview Card & Facility Specs Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs mb-8 overflow-hidden">
          {selectedCategoryData.imageUrl && (
            <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 border border-slate-100 relative group">
              <img
                src={selectedCategoryData.imageUrl}
                alt={selectedCategoryData.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white bg-blue-600/90 px-3 py-1.5 rounded-lg backdrop-blur-md">
                  {selectedCategoryData.name} Production Line
                </span>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Modality Focus
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-medium text-slate-500">
                  {selectedCategoryData.facilityArea}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                {selectedCategoryData.headline}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {selectedCategoryData.description}
              </p>
            </div>

            {/* Quick Facility Metrics */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Cleanroom Area</div>
                <div className="text-sm font-bold text-slate-900">{selectedCategoryData.facilityArea.split(' ')[0]}</div>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Air Handling Spec</div>
                <div className="text-sm font-bold text-slate-900">{selectedCategoryData.cleanroomClass.split(' ')[0]}</div>
              </div>
              <button
                id="matrix-category-rfp-btn"
                onClick={() => onOpenRfp(selectedCategoryData.id)}
                className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"
              >
                <span>Request Quote for {selectedCategoryData.shortName}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Real-time Search and Sub-Filter Strip */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={`Search ${selectedCategoryData.shortName} specs...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all text-slate-800 placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-1.5 self-start sm:self-auto overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-xs font-semibold text-slate-500 mr-1 hidden sm:inline">Filter:</span>
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  filterType === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Lines ({selectedCategoryData.items.length})
              </button>
              <button
                onClick={() => setFilterType('pharma')}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  filterType === 'pharma'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Pharma & Pharmacopeial
              </button>
              <button
                onClick={() => setFilterType('derma')}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  filterType === 'derma'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Derma & Specialty
              </button>
            </div>
          </div>
        </div>

        {/* Dosage Item Deep Dive Cards Grid */}
        <div className="space-y-6">
          {filteredItems.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
              <Search className="w-8 h-8 text-slate-400 mx-auto" />
              <div className="text-base font-bold text-slate-800">No matching formulation specs found</div>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Try searching for different terms like "Tablet", "Capsule", "Alu-Alu", "Syrup", "Ointment", or reset the filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterType('all');
                }}
                className="px-4 py-2 rounded-lg text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                id={`dosage-card-${item.id}`}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all p-6 sm:p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                  {item.imageUrl && (
                    <div className="w-full lg:w-44 h-32 sm:h-36 rounded-xl overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
                          {item.badge}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500">
                        <Clock className="w-3 h-3 text-slate-400" />
                        Lead Time: <strong className="text-slate-700">{item.leadTime}</strong>
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Monthly Output Highlight & Direct Quote Action */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0 bg-slate-50 lg:bg-transparent p-4 lg:p-0 rounded-xl border lg:border-none border-slate-100">
                    <div className="text-left lg:text-right">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Monthly Throughput</div>
                      <div className="text-2xl font-extrabold text-blue-700 font-['Outfit',sans-serif]">{item.monthlyCapacity}</div>
                      <div className="text-[10px] text-slate-400 font-medium">({item.annualCapacity})</div>
                    </div>
                    <button
                      id={`inquire-btn-${item.id}`}
                      onClick={() => onOpenRfp(item.category, item.title)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Inquire for {item.title.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 3-Column Technical Breakdown Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  {/* Column 1: Formulation Capabilities */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Formulation Options</span>
                    </div>
                    <ul className="space-y-1.5">
                      {item.keyFormulationTypes.map((type, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                          <span>{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Packaging Barrier & Formats */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                      <Layers className="w-4 h-4 text-blue-600" />
                      <span>Available Packaging Formats</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {item.packagingOptions.map((pkg, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-colors"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                              {getPackagingIcon(pkg.iconName)}
                              {pkg.name}
                            </span>
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                              {pkg.type}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {pkg.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Batch Flexibility & Equipment Standards */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                        <Zap className="w-4 h-4 text-amber-600" />
                        <span>Batch Size Flexibility</span>
                      </div>
                      <div className="space-y-1.5 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                        <div>
                          <span className="text-slate-500 font-medium">Pilot Scale:</span>{' '}
                          <strong className="text-slate-800">{item.batchFlexibility.pilot}</strong>
                        </div>
                        <div>
                          <span className="text-slate-500 font-medium">Commercial:</span>{' '}
                          <strong className="text-slate-800">{item.batchFlexibility.commercial}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                        Key Equipment Suite:
                      </div>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {item.equipmentHighlights.slice(0, 2).map((eq, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-slate-400">•</span>
                            <span>{eq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Tag Strip: Therapeutic Targets */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-slate-500 font-medium">Therapeutic Domains:</span>
                    {item.targetTherapeuticAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium text-[11px]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {item.complianceStandards.map((std, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded"
                      >
                        <Check className="w-3 h-3 text-emerald-600" />
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
