export function PillarsGraphic() {
  return (
    <div className="relative flex h-full min-h-[350px] items-center justify-center">
      {/* Glow bg */}
      <div className="absolute inset-0 rounded-full bg-sky-blue/5 blur-[60px]" />

      <svg
        viewBox="0 0 500 420"
        className="relative h-full w-full max-w-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pillarGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7BBDE8" />
            <stop offset="100%" stopColor="#0A4174" />
          </linearGradient>
          <linearGradient id="pillarGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6EA2B3" />
            <stop offset="100%" stopColor="#1A3A5C" />
          </linearGradient>
          <linearGradient id="pillarGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4E8EA2" />
            <stop offset="100%" stopColor="#0F2A4A" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Platform base */}
        <path
          d="M50 350 L250 280 L450 350 L250 420 Z"
          stroke="#49769F"
          strokeWidth="1"
          fill="rgba(10,65,116,0.2)"
          opacity="0.5"
        />
        <path
          d="M50 350 L250 280 L250 420 L50 350 Z"
          stroke="#7BBDE8"
          strokeWidth="0.6"
          fill="rgba(123,189,232,0.05)"
        />
        <path
          d="M250 280 L450 350 L250 420 Z"
          stroke="#4E8EA2"
          strokeWidth="0.6"
          fill="rgba(78,142,162,0.05)"
        />

        {/* Pillar 1 — Simplicity */}
        <g filter="url(#glow)">
          {/* Front face */}
          <path d="M130 200 L170 180 L170 310 L130 330 Z" fill="url(#pillarGrad1)" opacity="0.85" />
          {/* Side face */}
          <path d="M170 180 L210 200 L210 330 L170 310 Z" fill="url(#pillarGrad2)" opacity="0.7" />
          {/* Top face */}
          <path d="M130 200 L170 180 L210 200 L170 220 Z" fill="url(#pillarGrad3)" opacity="0.5" />
          {/* Cap accent */}
          <rect x="130" y="195" width="80" height="8" rx="1" fill="#7BBDE8" opacity="0.6" />
          {/* Data slots */}
          <rect x="140" y="230" width="40" height="3" rx="1" fill="#7BBDE8" opacity="0.4" />
          <rect x="140" y="245" width="40" height="3" rx="1" fill="#7BBDE8" opacity="0.3" />
          <rect x="140" y="260" width="40" height="3" rx="1" fill="#7BBDE8" opacity="0.4" />
          <rect x="140" y="275" width="40" height="3" rx="1" fill="#7BBDE8" opacity="0.3" />
          {/* Label */}
          <text x="170" y="360" textAnchor="middle" fill="#7BBDE8" fontSize="11" fontWeight="600" opacity="0.8">
            Simplicity
          </text>
        </g>

        {/* Pillar 2 — Speed (taller) */}
        <g filter="url(#glow)">
          <path d="M220 160 L260 140 L260 300 L220 320 Z" fill="url(#pillarGrad2)" opacity="0.85" />
          <path d="M260 140 L300 160 L300 320 L260 300 Z" fill="url(#pillarGrad3)" opacity="0.7" />
          <path d="M220 160 L260 140 L300 160 L260 180 Z" fill="url(#pillarGrad1)" opacity="0.5" />
          <rect x="220" y="155" width="80" height="8" rx="1" fill="#7BBDE8" opacity="0.6" />
          {/* Speed indicator lines */}
          <line x1="230" y1="200" x2="270" y2="185" stroke="#7BBDE8" strokeWidth="1.5" opacity="0.5" />
          <line x1="230" y1="215" x2="275" y2="198" stroke="#7BBDE8" strokeWidth="1.5" opacity="0.4" />
          <line x1="230" y1="230" x2="280" y2="210" stroke="#7BBDE8" strokeWidth="1.5" opacity="0.3" />
          <line x1="230" y1="245" x2="275" y2="228" stroke="#7BBDE8" strokeWidth="1.5" opacity="0.4" />
          <line x1="230" y1="260" x2="270" y2="245" stroke="#7BBDE8" strokeWidth="1.5" opacity="0.5" />
          <text x="260" y="350" textAnchor="middle" fill="#6EA2B3" fontSize="11" fontWeight="600" opacity="0.8">
            Speed
          </text>
        </g>

        {/* Pillar 3 — Precision */}
        <g filter="url(#glow)">
          <path d="M310 190 L350 170 L350 320 L310 340 Z" fill="url(#pillarGrad3)" opacity="0.85" />
          <path d="M350 170 L390 190 L390 340 L350 320 Z" fill="url(#pillarGrad1)" opacity="0.7" />
          <path d="M310 190 L350 170 L390 190 L350 210 Z" fill="url(#pillarGrad2)" opacity="0.5" />
          <rect x="310" y="185" width="80" height="8" rx="1" fill="#7BBDE8" opacity="0.6" />
          {/* Precision grid dots */}
          <circle cx="330" cy="230" r="2" fill="#7BBDE8" opacity="0.5" />
          <circle cx="350" cy="230" r="2" fill="#7BBDE8" opacity="0.5" />
          <circle cx="370" cy="230" r="2" fill="#7BBDE8" opacity="0.5" />
          <circle cx="330" cy="250" r="2" fill="#7BBDE8" opacity="0.4" />
          <circle cx="350" cy="250" r="2" fill="#7BBDE8" opacity="0.4" />
          <circle cx="370" cy="250" r="2" fill="#7BBDE8" opacity="0.4" />
          <circle cx="330" cy="270" r="2" fill="#7BBDE8" opacity="0.5" />
          <circle cx="350" cy="270" r="2" fill="#7BBDE8" opacity="0.5" />
          <circle cx="370" cy="270" r="2" fill="#7BBDE8" opacity="0.5" />
          <text x="350" y="370" textAnchor="middle" fill="#4E8EA2" fontSize="11" fontWeight="600" opacity="0.8">
            Precision
          </text>
        </g>

        {/* Connecting data lines between pillars */}
        <path d="M170 220 Q210 200 230 180" stroke="#7BBDE8" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3" />
        <path d="M300 180 Q320 200 330 210" stroke="#7BBDE8" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3" />

        {/* Floating particles */}
        <circle cx="190" cy="140" r="3" fill="#7BBDE8" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="270" cy="110" r="3" fill="#6EA2B3" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="360" cy="135" r="3" fill="#4E8EA2" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="130" r="2" fill="#7BBDE8" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="340" cy="100" r="2" fill="#7BBDE8" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
