"use client";

import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-10 w-10 items-center justify-center">
        {/* Glow behind the logo */}
        <span className="absolute inset-0 rounded-full bg-sky-blue/30 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        <span className="relative">
          <Image
            src="/logo.svg"
            alt="SiteForge AI logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 animate-[spin_24s_linear_infinite] transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(123,189,232,0.6)]"
          />
        </span>
        {/* Pulsing status dot */}
        <span className="absolute -right-0.5 -top-0.5 z-20 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-blue opacity-70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-navy-darkest bg-sky-blue" />
        </span>
      </span>
      <span className="text-lg font-bold tracking-wide text-slate-900">
        Site<span className="text-sky-blue">Forge</span>
        <span className="ml-0.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          AI
        </span>
      </span>
    </span>
  );
}
