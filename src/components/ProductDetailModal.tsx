import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Pill, Box, Layers, ArrowRight, CheckCircle2, Clock, Truck, FileText } from 'lucide-react';
import { ProductCatalogItem } from '../types';

interface ProductDetailModalProps {
  product: ProductCatalogItem | null;
  onClose: () => void;
  onOpenRfp: (category?: string, specificForm?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenRfp
}) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                {product.categoryLabel}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {product.prescriptionType}
              </span>
              {product.popular && (
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  High Demand
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif] leading-tight">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 mt-1">
              {product.genericName}
            </p>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Description */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Formulation & Clinical Profile
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 block">Dosage Form</span>
                <strong className="text-slate-900 font-semibold">{product.dosageForm}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Strength / Ratio</span>
                <strong className="text-slate-900 font-semibold">{product.strengthOrComposition}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Pack Size</span>
                <strong className="text-slate-900 font-semibold">{product.packSize}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Packaging Barrier</span>
                <strong className="text-slate-900 font-semibold">{product.packagingType}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Minimum Order (MOQ)</span>
                <strong className="text-slate-900 font-semibold">{product.moq}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Batch Lead Time</span>
                <strong className="text-slate-900 font-semibold">{product.leadTime}</strong>
              </div>
            </div>

            {/* Therapeutic & Regulatory */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
                <span className="text-slate-500">Therapeutic Segment:</span>
                <span className="font-semibold text-slate-900">{product.therapeuticArea}</span>
              </div>
              <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
                <span className="text-slate-500">Manufacturing Facility:</span>
                <span className="font-semibold text-slate-900">Baddi GMP Units (Class D/C Cleanrooms)</span>
              </div>
              <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
                <span className="text-slate-500">Quality Standards:</span>
                <span className="font-semibold text-emerald-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  IP / BP / USP Pharmacopeial Grade
                </span>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-blue-950 block font-semibold">Ready Dossier & Stability</strong>
                  <span className="text-slate-600">Accelerated & real-time stability data available for instant licensing.</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-100 flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-950 block font-semibold">High-Speed Commercial Scaling</strong>
                  <span className="text-slate-600">Seamless capacity allocation from pilot 10k to 1M+ unit runs.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Close Window
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenRfp(product.category, product.name);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Request Batch Quote for this Product</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
