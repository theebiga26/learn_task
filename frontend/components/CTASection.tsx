"use client";

import { useEffect, useRef } from "react";
import { Logo } from "./Logo";

export function CTASection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.8 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: 0.15 + Math.random() * 0.35,
    }));

    const start = performance.now();

    const render = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(123, 189, 232, ${(1 - d / 110) * 0.18})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(123, 189, 232, ${p.a})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-sky-blue/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-navy-deep/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="card-glass glow-box relative overflow-hidden rounded-3xl border border-sky-blue/20 p-10 text-center lg:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-blue/10 via-transparent to-navy-deep/40" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(123,189,232,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(123,189,232,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-blue/30 bg-sky-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-blue">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-blue opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-blue" />
              </span>
              Live Now
            </div>

            <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Ready to build your website with{" "}
              <span className="bg-gradient-to-r from-sky-blue to-pale-blue bg-clip-text text-transparent">
                AI
              </span>
              ?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-700">
              Join thousands of businesses launching professional sites in minutes. Describe your
              vision — we&apos;ll handle the rest.
            </p>

            <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 pt-2">
              {[
                { value: "10K+", label: "Sites Launched" },
                { value: "< 5min", label: "Avg Build Time" },
                { value: "99.9%", label: "Uptime" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-sky-blue/15 bg-navy-darkest/40 px-4 py-4 backdrop-blur"
                >
                  <div className="text-2xl font-bold text-slate-900 sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-600">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
              <a
                href="mailto:hello@siteforge.ai"
                className="group btn-gradient relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-blue/30 transition hover:shadow-sky-blue/50"
              >
                Start Building Free
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
              <a
                href="tel:+12073068729"
                className="group inline-flex items-center gap-2 rounded-full border border-sky-blue/30 bg-white/5 px-8 py-4 text-sm font-semibold text-sky-blue backdrop-blur transition hover:border-sky-blue/60 hover:bg-sky-blue/10"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +1 (207) 306-8729
              </a>
            </div>

            <p className="pt-2 text-xs text-slate-500">
              No credit card required · Free forever plan · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const productLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#audience", label: "Who It's For" },
    { href: "#contact", label: "Pricing" },
  ];
  const companyLinks = [
    { href: "#", label: "About" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Press" },
  ];
  const legalLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
    { href: "#", label: "GDPR" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-sky-blue/10">
      {/* Decorative top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-blue/50 to-transparent" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-sky-blue/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-navy-deep/40 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-block">
              <Logo />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Intelligent websites, built in minutes. Transform your ideas into
              professional sites with the power of AI — no code, no design skills needed.
            </p>

            {/* Contact chips */}
            <div className="mt-6 space-y-3">
              <a
                href="https://maps.google.com/?q=103+E+6th+St,+Los+Angeles,+CA+90014"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 text-sm text-slate-700 transition hover:text-sky-blue"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-sky-blue/20 bg-sky-blue/5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>103 E 6th St, Los Angeles, CA 90014</span>
              </a>
              <a
                href="mailto:hello@siteforge.ai"
                className="group flex items-center gap-3 text-sm text-slate-700 transition hover:text-sky-blue"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-sky-blue/20 bg-sky-blue/5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span>hello@siteforge.ai</span>
              </a>
              <a
                href="tel:+12073068729"
                className="group flex items-center gap-3 text-sm text-slate-700 transition hover:text-sky-blue"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-sky-blue/20 bg-sky-blue/5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>+1 (207) 306-8729</span>
              </a>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {[
                {
                  label: "Twitter",
                  d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
                },
                {
                  label: "LinkedIn",
                  d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
                },
                {
                  label: "GitHub",
                  d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
                },
                {
                  label: "YouTube",
                  d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="group flex h-9 w-9 items-center justify-center rounded-lg border border-sky-blue/20 bg-navy-darkest/40 text-slate-700 transition hover:border-sky-blue/60 hover:bg-sky-blue/10 hover:text-sky-blue"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-blue">
                Product
              </h4>
              <ul className="mt-4 space-y-3">
                {productLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-700 transition hover:text-sky-blue"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-blue">
                Company
              </h4>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-700 transition hover:text-sky-blue"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-blue">
                Legal
              </h4>
              <ul className="mt-4 space-y-3">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-700 transition hover:text-sky-blue"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter row */}
        <div className="mt-12 rounded-2xl border border-sky-blue/15 bg-navy-darkest/40 p-6 backdrop-blur sm:p-8">
          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold text-slate-900">Stay in the loop</h4>
              <p className="mt-1 text-sm text-slate-600">
                Get product updates, AI tips, and launch news — no spam.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full items-center gap-2"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-sky-blue/20 bg-navy-darkest/60 px-4 py-3 text-sm text-slate-900 placeholder-pale-blue/40 outline-none transition focus:border-sky-blue/60 focus:ring-2 focus:ring-sky-blue/20"
              />
              <button
                type="submit"
                className="btn-gradient shrink-0 rounded-full px-5 py-3 text-sm font-semibold text-slate-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-sky-blue/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 A3 TechWorld. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>All systems operational</span>
          </div>
          <p>Built with AI · Made in California</p>
        </div>
      </div>
    </footer>
  );
}
