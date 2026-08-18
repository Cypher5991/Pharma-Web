import React from 'react';

interface PharmaTechLogoProps {
  className?: string;
  size?: number | string;
  iconOnly?: boolean;
  theme?: 'light' | 'dark';
}

export const PharmaTechIcon: React.FC<{ size?: number | string; className?: string }> = ({
  size = 40,
  className = ''
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Hexagon Outer Gradient: Navy -> Cyan -> Green */}
        <linearGradient id="ptHexGrad" x1="60" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B3C8A" />
          <stop offset="35%" stopColor="#0284C7" />
          <stop offset="70%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#4EBA36" />
        </linearGradient>

        {/* P Stem Gradient: Deep Navy -> Ocean Blue */}
        <linearGradient id="ptStemGrad" x1="90" y1="40" x2="150" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#082559" />
          <stop offset="60%" stopColor="#0B3C8A" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Particle Dot Gradients */}
        <linearGradient id="dotBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B3C8A" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="dotTeal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="dotGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#4EBA36" />
        </linearGradient>
      </defs>

      {/* Hexagon Frame Outline */}
      <path
        d="M 92 48 
           L 125 22 
           L 165 48 
           L 165 105 
           L 125 142 
           L 100 120"
        stroke="url(#ptHexGrad)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central 'P' glyph */}
      {/* P Stem */}
      <path
        d="M 92 48 
           L 92 135"
        stroke="url(#ptStemGrad)"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* P Loop */}
      <path
        d="M 92 58 
           H 128 
           C 146 58 146 95 128 95 
           H 92"
        stroke="url(#ptStemGrad)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Molecular Dispersion Particle Dots */}
      {/* Column 1 (Far left) */}
      <circle cx="34" cy="74" r="5" fill="url(#dotBlue)" />
      <circle cx="42" cy="56" r="4.5" fill="url(#dotBlue)" />
      <circle cx="40" cy="94" r="4.5" fill="url(#dotTeal)" />

      {/* Column 2 */}
      <circle cx="56" cy="44" r="5" fill="url(#dotBlue)" />
      <circle cx="54" cy="66" r="6" fill="url(#dotBlue)" />
      <circle cx="52" cy="88" r="5.5" fill="url(#dotTeal)" />
      <circle cx="54" cy="110" r="4" fill="url(#dotGreen)" />

      {/* Column 3 */}
      <circle cx="70" cy="36" r="4.5" fill="url(#dotBlue)" />
      <circle cx="70" cy="56" r="5" fill="url(#dotBlue)" />
      <circle cx="68" cy="78" r="5.5" fill="url(#dotTeal)" />
      <circle cx="68" cy="98" r="5" fill="url(#dotGreen)" />
      <circle cx="72" cy="118" r="5.5" fill="url(#dotGreen)" />

      {/* Top / Inner accent dots */}
      <circle cx="84" cy="28" r="4" fill="url(#dotBlue)" />
      <circle cx="86" cy="42" r="3.5" fill="url(#dotBlue)" />
      <circle cx="80" cy="132" r="4" fill="url(#dotGreen)" />
    </svg>
  );
};

export const PharmaTechLogo: React.FC<PharmaTechLogoProps> = ({
  size = 44,
  iconOnly = false,
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="shrink-0 transition-transform group-hover:scale-105">
        <PharmaTechIcon size={size} />
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span
              className={`text-2xl font-extrabold tracking-tight font-['Outfit',sans-serif] ${
                isDark ? 'text-white' : 'text-[#0B2553]'
              }`}
            >
              pharma<span className="text-[#4EBA36]">tech</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="h-[1px] w-3 bg-gradient-to-r from-[#0B2553] to-[#0284C7]"></div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#0284C7] uppercase font-mono">
              CDMO
            </span>
            <div className="h-[1px] w-3 bg-gradient-to-r from-[#10B981] to-[#4EBA36]"></div>
            <span className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
              • INDIA
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
