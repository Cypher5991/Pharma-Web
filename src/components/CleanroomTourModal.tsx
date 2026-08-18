import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Microscope, Layers, ArrowRight, Eye, CheckCircle2, Thermometer, Wind, Activity } from 'lucide-react';

interface CleanroomTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfp: (category?: string, specificForm?: string) => void;
}

interface ZoneHotspot {
  id: string;
  name: string;
  category: string;
  cleanroomGrade: string;
  temperature: string;
  relativeHumidity: string;
  pressureCascade: string;
  equipment: string[];
  specs: string;
  highlight: string;
  imageUrl?: string;
}

export const CleanroomTourModal: React.FC<CleanroomTourModalProps> = ({
  isOpen,
  onClose,
  onOpenRfp
}) => {
  const [activeZoneId, setActiveZoneId] = useState<string>('tableting');

  if (!isOpen) return null;

  const ZONES: ZoneHotspot[] = [
    {
      id: 'granulation',
      name: 'Granulation & Raw Material Blending',
      category: 'Solid Oral Preparation',
      cleanroomGrade: 'Class D (ISO 8)',
      temperature: '22°C ± 2°C',
      relativeHumidity: '< 45% Controlled',
      pressureCascade: '+15 Pascals positive pressure',
      equipment: [
        'Rapid Mixer Granulator (RMG) 400L / 600L',
        'Fluid Bed Dryer (FBD) with auto top-spray granulation',
        'Multi-Mill & Sifter for uniform mesh calibration',
        'SS316L Double Cone & Octagonal Blender Suites'
      ],
      specs: 'Terminal HEPA filtered laminar airflow stations for dust-free active API charging and zero cross-contamination between batches.',
      highlight: 'Closed-loop material transfer via vacuum conveying.',
      imageUrl: '/images/150_conical_hopper_blender.jpg'
    },
    {
      id: 'tableting',
      name: 'Automated High-Speed Compression Block',
      category: 'Solid Oral Compression',
      cleanroomGrade: 'Class D (ISO 8)',
      temperature: '21°C ± 2°C',
      relativeHumidity: '< 40% RH for Hygroscopic Actives',
      pressureCascade: '+20 Pascals relative to corridor',
      equipment: [
        'Double Rotary High-Speed 45/55 Station Tablet Presses',
        'Bilayer Compression Press with Independent Feeder Control',
        'Automated In-Line Checkweighers and Metal Detectors',
        'Deduster and De-burring High-Frequency Elevators'
      ],
      specs: 'Monthly capacity exceeding 1.2 Billion tablets with continuous laser tablet thickness and hardness monitoring.',
      highlight: 'Precision weight variation RSD < 1.0%.',
      imageUrl: '/images/151_tablet_press_machine.jpg'
    },
    {
      id: 'packaging',
      name: 'High-Speed Blister & Alu-Alu Packaging Hall',
      category: 'Secondary & Barrier Packaging',
      cleanroomGrade: 'Class D (ISO 8)',
      temperature: '22°C ± 2°C',
      relativeHumidity: '< 40% RH for Alu-Alu Forming',
      pressureCascade: '+15 Pascals positive pressure',
      equipment: [
        'ACG High-Speed Rotary Blister Packaging Machine',
        'Alu-Alu Cold-Forming and PVC/PVDC Thermoforming Stations',
        'Integrated In-Line Color Camera Vision Inspection Systems',
        'Continuous Auto-Cartonator with OCR Batch Coding & Checkweigher'
      ],
      specs: 'Handles high-barrier Alu-Alu and moisture-sensitive blister packs with automatic reject stations for pinholes and missing tablets.',
      highlight: 'Zero-defect packaging integrity with automated online serialization.',
      imageUrl: '/images/157_acg_blister_packaging_machine.jpg'
    },
    {
      id: 'homogenization',
      name: 'Semi-Solid Vacuum Homogenizing Suite',
      category: 'Derma & Topicals',
      cleanroomGrade: 'Class C & D Zones',
      temperature: '20°C ± 2°C',
      relativeHumidity: '< 50% RH',
      pressureCascade: '+15 Pascals with LAF filling hoods',
      equipment: [
        'SS316L Vacuum Homogenizer Emulsification Plants (500L - 2,000L)',
        'Contra-Rotating Anchor Agitators with Teflon Scrapers',
        'Automated Linear Tube Fillers (Hot-air & Ultrasonic Sealing)',
        'In-Line Nitrogen Purging for Antioxidant Topical Gels'
      ],
      specs: 'Produces ultra-fine droplet micronization (< 2 microns) for deep skin barrier permeability and extended emulsion stability.',
      highlight: 'High-speed automated tube output exceeding 70M units/month.',
      imageUrl: '/images/146_process_vessels.jpg'
    },
    {
      id: 'liquid_bottling',
      name: 'Closed-Loop Liquid CIP/SIP & Bottling',
      category: 'Oral Liquids',
      cleanroomGrade: 'Class D with Laminar Air Flow (LAF)',
      temperature: '22°C ± 2°C',
      relativeHumidity: 'Controlled Atmosphere',
      pressureCascade: '+15 Pascals cascade',
      equipment: [
        'Automated Sugar Dissolution Vessel with Sparkler Filter',
        'SS316L Jacketed Manufacturing Vessels with Bottom Magnetic Mixers',
        'Automatic 12-Head Rotary Piston Fillers & ROPP Capping Lines',
        'Continuous Total Organic Carbon (TOC) Water Loop Monitoring'
      ],
      specs: 'Integrated Clean-in-Place (CIP) and Sterilize-in-Place (SIP) automated steam sanitation cycles ensuring zero bioburden.',
      highlight: '15M bottles monthly capacity in amber PET and glass.',
      imageUrl: '/images/90_bottle_filling_line.png'
    },
    {
      id: 'glp_lab',
      name: 'GLP Analytical & ICH Stability Center',
      category: 'Analytical Testing & Quality Control',
      cleanroomGrade: 'GLP Certified Laboratory',
      temperature: '20°C ± 1°C',
      relativeHumidity: '45% ± 5% RH',
      pressureCascade: 'Dedicated exhaust for chemical fume hoods',
      equipment: [
        'Waters & Shimadzu HPLC Systems with UV/PDA Detectors',
        'Gas Chromatography (GC) with Auto-Headspace Analyzer',
        '12+ Walk-In ICH Climate Stability Chambers (Zone II & IVb)',
        'FTIR, UV-Vis Spectrophotometers, & Dissolution Testers'
      ],
      specs: 'Full 21 CFR Part 11 electronic data integrity compliance validating 100% of raw API and finished product release lots.',
      highlight: 'Formulation tech transfer & stability dossiers compiled in 4 weeks.',
      imageUrl: '/images/109_laboratory_instruments.jpg'
    }
  ];

  const currentZone = ZONES.find((z) => z.id === activeZoneId) || ZONES[1];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 border-b border-slate-800 flex items-center justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                <Eye className="w-3.5 h-3.5" />
                <span>Virtual Cleanroom & Machinery Tour</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif]">
                Baddi GMP Manufacturing Complex Floor Explorer
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 max-h-[72vh] overflow-y-auto">
            {/* Zone Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {ZONES.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZoneId(zone.id)}
                  className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all flex flex-col justify-between ${
                    activeZoneId === zone.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                      : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700/80 hover:text-white border border-slate-700'
                  }`}
                >
                  <span className="text-[10px] text-blue-300 uppercase tracking-wider block truncate">
                    {zone.category.split(' ')[0]}
                  </span>
                  <span className="truncate mt-1">{zone.name.split(' ')[0]} {zone.name.split(' ')[1]}</span>
                </button>
              ))}
            </div>

            {/* Active Zone Detail Card */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    {currentZone.category}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif] text-white">
                    {currentZone.name}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {currentZone.cleanroomGrade}
                  </span>
                </div>
              </div>

              {currentZone.imageUrl && (
                <div className="w-full h-44 sm:h-56 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 relative">
                  <img
                    src={currentZone.imageUrl}
                    alt={currentZone.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Environmental Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                  <Thermometer className="w-4 h-4 text-rose-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Temperature</span>
                    <strong className="text-white font-semibold">{currentZone.temperature}</strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                  <Wind className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Relative Humidity (RH)</span>
                    <strong className="text-white font-semibold">{currentZone.relativeHumidity}</strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                  <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Air Pressure Cascade</span>
                    <strong className="text-white font-semibold">{currentZone.pressureCascade}</strong>
                  </div>
                </div>
              </div>

              {/* Specs & Highlight */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/50 text-xs text-blue-200">
                  <strong className="text-blue-100 block font-semibold mb-1">Process Engineering Standard:</strong>
                  {currentZone.specs}
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/50 text-xs text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Key Performance Metric:</strong> {currentZone.highlight}</span>
                </div>
              </div>

              {/* Equipment Installed */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Validated Equipment Machinery:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentZone.equipment.map((eq, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Compliant with <strong>Revised Schedule M, WHO-GMP, and ISO 9001:2015</strong>.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Close Tour
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenRfp(undefined, `${currentZone.name} Line Allocation`);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Book Line Inspection / RFP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
