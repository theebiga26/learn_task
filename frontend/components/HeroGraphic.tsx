import Image from "next/image";
function OrbitRing({
  inset,
  dashArray,
  duration,
  reverse = false,
  opacity = 0.6,
  gradientId,
}: {
  inset: string;
  dashArray: string;
  duration: string;
  reverse?: boolean;
  opacity?: number;
  gradientId: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${inset} aspect-square rounded-full ${reverse ? "animate-spin-reverse" : "animate-spin-slow"}`}
      style={{ animationDuration: duration }}
    >
      <svg className="h-full w-full" viewBox="0 0 100 100" fill="none">
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke={`url(#${gradientId})`}
          strokeWidth="0.7"
          strokeDasharray={dashArray}
          strokeLinecap="round"
          opacity={opacity}
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A1F44" />
            <stop offset="50%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0A1F44" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OrbitDot({
  inset,
  duration,
  reverse = false,
  delay = "0s",
}: {
  inset: string;
  duration: string;
  reverse?: boolean;
  delay?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${inset} aspect-square rounded-full ${reverse ? "animate-spin-reverse" : "animate-spin-slow"}`}
      style={{ animationDuration: duration, animationDelay: delay }}
    >
      <span
        className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_14px_#FFFFFF]"
        aria-hidden
      />
    </div>
  );
}

export function HeroGraphic() {
  return (
    <div className="relative flex h-full min-h-[340px] items-center justify-center lg:min-h-[540px]">
      <div className="animate-ring-pulse absolute aspect-square h-[88%] max-h-[420px] rounded-full bg-[#0A1F44]/30 blur-[70px]" />

      <div className="animate-float relative aspect-square w-full max-w-[420px]">
        <div className="absolute inset-[9%] overflow-hidden rounded-full border-2 border-white/40 bg-navy-darkest shadow-[0_0_50px_rgba(10,31,68,0.6)]">
          <Image
            src="/hero-ai-visual.png"
            alt="Professional using AI holographic interfaces to build and manage a website"
            width={640}
            height={640}
            className="hero-circle-image h-full w-full scale-110 object-cover object-[center_20%]"
            priority
          />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_55%,rgba(10,31,68,0.55)_100%)]" />
        </div>

        <OrbitRing
          inset="inset-[7%]"
          dashArray="8 6 2 6"
          duration="16s"
          opacity={0.95}
          gradientId="ringGradientOuter"
        />
        <OrbitRing
          inset="inset-[4%]"
          dashArray="4 10 4 10"
          duration="22s"
          reverse
          opacity={0.7}
          gradientId="ringGradientInner"
        />

        <OrbitDot inset="inset-[5%]" duration="14s" />
        <OrbitDot inset="inset-[2%]" duration="20s" reverse delay="1s" />
        <OrbitDot inset="inset-0" duration="26s" delay="2s" />

        <div className="absolute inset-[6%] rounded-full border border-white/20 shadow-[0_0_40px_rgba(10,31,68,0.4),inset_0_0_30px_rgba(10,31,68,0.15)]" />

        <div
          className="pointer-events-none absolute inset-[7.5%] animate-spin-slow rounded-full"
          style={{
            animationDuration: "12s",
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.85) 35deg, transparent 70deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
          }}
        />

        <div className="absolute -bottom-2 left-2 rounded-full border border-white/30 bg-navy-darkest/90 px-4 py-2 backdrop-blur-md">
          <p className="text-xs font-medium text-slate-900">AI + SEO + Analytics</p>
        </div>
        <div className="absolute -right-1 top-6 rounded-full border border-white/30 bg-navy-darkest/90 px-4 py-2 backdrop-blur-md">
          <p className="text-xs font-medium text-slate-900">Live Dashboard</p>
        </div>
      </div>
    </div>
  );
}
