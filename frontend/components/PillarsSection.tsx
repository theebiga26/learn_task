"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Simplicity First",
    description:
      "Describe your business in plain English. No technical knowledge required.",
    color: "#7BBDE8",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Lightning Fast",
    description:
      "Generate a complete, production-ready website in under 10 minutes.",
    color: "#6EA2B3",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4L8 18h6l-2 10 10-14h-6l2-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AI-Powered Precision",
    description:
      "Every layout, image, and line of copy is optimized for your audience.",
    color: "#4E8EA2",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 2v4m0 20v4M2 16h4m20 0h4M6.34 6.34l2.83 2.83m13.66 13.66l2.83 2.83M6.34 25.66l2.83-2.83m13.66-13.66l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
          observer.unobserve(card);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-700 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(123,189,232,0.08)]"
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at 50% 50%, ${pillar.color}08, transparent 60%)`,
        }}
      />

      {/* Number badge */}
      <div className="relative mb-5 flex items-center gap-3">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${pillar.color}20`,
            color: pillar.color,
            boxShadow: `0 0 20px ${pillar.color}20`,
          }}
        >
          {pillar.number}
        </span>

        {/* Animated accent line */}
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* Icon */}
      <div
        className="mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ color: pillar.color }}
      >
        {pillar.icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-sky-blue">
        {pillar.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
        {pillar.description}
      </p>

      {/* Bottom accent border */}
      <div
        className="mt-6 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{
          background: `linear-gradient(90deg, ${pillar.color}, transparent)`,
        }}
      />
    </div>
  );
}

export function PillarsSection() {
  return (
    <section id="features" className="relative py-20 lg:py-28">
      {/* Section background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-sky-blue/3 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-blue">
            Our Pillars
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Built on three core principles
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Every feature we build is guided by simplicity, speed, and intelligence — so you can
            focus on growing your business.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.number} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
