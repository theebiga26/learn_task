export function ServerGraphic() {
  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-teal-blue/10 blur-[60px]" />
      <svg
        viewBox="0 0 420 320"
        className="relative h-full w-full max-w-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="isoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7BBDE8" />
            <stop offset="100%" stopColor="#0A4174" />
          </linearGradient>
          <filter id="isoGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Isometric platform base */}
        <path
          d="M60 220 L210 140 L360 220 L210 300 Z"
          stroke="#49769F"
          strokeWidth="1"
          fill="rgba(10,65,116,0.3)"
          opacity="0.6"
        />

        {/* Server block 1 */}
        <path d="M120 180 L180 150 L180 210 L120 240 Z" stroke="url(#isoGrad)" strokeWidth="1.2" filter="url(#isoGlow)" fill="rgba(78,142,162,0.15)" />
        <path d="M180 150 L240 180 L240 240 L180 210 Z" stroke="#7BBDE8" strokeWidth="1" fill="rgba(123,189,232,0.1)" />
        <path d="M120 180 L180 150 L240 180 L180 210 Z" stroke="#7BBDE8" strokeWidth="1.2" fill="rgba(123,189,232,0.2)" />

        {/* Server block 2 - taller */}
        <path d="M200 130 L260 100 L260 190 L200 220 Z" stroke="url(#isoGrad)" strokeWidth="1.2" filter="url(#isoGlow)" fill="rgba(78,142,162,0.15)" />
        <path d="M260 100 L320 130 L320 220 L260 190 Z" stroke="#7BBDE8" strokeWidth="1" fill="rgba(123,189,232,0.08)" />
        <path d="M200 130 L260 100 L320 130 L260 160 Z" stroke="#7BBDE8" strokeWidth="1.2" fill="rgba(123,189,232,0.25)" />

        {/* Data lines */}
        <line x1="150" y1="210" x2="230" y2="160" stroke="#7BBDE8" strokeWidth="0.8" opacity="0.5" strokeDasharray="4 4" />
        <line x1="230" y1="160" x2="290" y2="190" stroke="#7BBDE8" strokeWidth="0.8" opacity="0.5" strokeDasharray="4 4" />

        {/* Floating data cubes */}
        <rect x="280" y="70" width="20" height="20" rx="2" stroke="#7BBDE8" strokeWidth="1" transform="rotate(45 290 80)" opacity="0.7" />
        <rect x="90" y="90" width="16" height="16" rx="2" stroke="#4E8EA2" strokeWidth="1" transform="rotate(45 98 98)" opacity="0.5" />

        {/* Pulse nodes */}
        <circle cx="260" cy="130" r="5" fill="#7BBDE8" opacity="0.8" className="animate-pulse-glow" />
        <circle cx="150" cy="195" r="4" fill="#4E8EA2" opacity="0.6" />
        <circle cx="290" cy="175" r="4" fill="#6EA2B3" opacity="0.6" />

        {/* CDN globe hint */}
        <circle cx="340" cy="80" r="25" stroke="#49769F" strokeWidth="1" opacity="0.5" />
        <ellipse cx="340" cy="80" rx="25" ry="10" stroke="#7BBDE8" strokeWidth="0.8" opacity="0.4" />
        <ellipse cx="340" cy="80" rx="10" ry="25" stroke="#7BBDE8" strokeWidth="0.8" opacity="0.4" />
      </svg>
    </div>
  );
}
