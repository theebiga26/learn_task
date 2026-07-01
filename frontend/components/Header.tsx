"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#audience", label: "Who It's For" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const sections = ["#home", "#features", "#how-it-works", "#audience", "#contact"];
      let current = "#home";
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const rect = (el as HTMLElement).getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(15,23,42,0.08)]"
          : "border-b border-transparent bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-blue/60 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden flex-1 items-center justify-center md:flex">
          <div className="relative flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100/80 p-1 backdrop-blur">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? "text-slate-900" : "text-slate-700 hover:text-sky-blue"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-sky-blue/30 to-navy-deep/60 shadow-[0_0_18px_rgba(123,189,232,0.35)]" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>
        </nav>

        <a
          href="#contact"
          className="btn-gradient group relative hidden shrink-0 items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-blue/30 transition hover:shadow-sky-blue/50 sm:inline-flex"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative">Get Started</span>
          <svg
            className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-blue/20 bg-white/80 text-slate-700 md:hidden"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-sky-blue/10 bg-navy-darkest/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                active === link.href
                  ? "bg-sky-blue/10 text-sky-blue"
                  : "text-slate-700 hover:bg-sky-blue/5 hover:text-sky-blue"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-gradient mt-2 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-slate-900"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
