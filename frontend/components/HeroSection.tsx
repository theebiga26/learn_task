import { HeroGraphic } from "./HeroGraphic";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Animated background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 animate-float rounded-full bg-sky-blue/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 animate-float rounded-full bg-navy-deep/30 blur-[120px] [animation-delay:2s]" />
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-blue/20 bg-navy-deep/40 px-4 py-1.5 text-sm text-sky-blue">
            <span className="h-2 w-2 rounded-full bg-sky-blue animate-pulse-glow" />
            AI-Powered Website Creation
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Unleashing the Power of{" "}
              <span className="bg-gradient-to-r from-sky-blue to-teal-blue bg-clip-text text-transparent glow-text">
                AI Site Building
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-700">
              Build a professional business website by describing what you want in plain English.
              No coding. No design skills. Just describe, tweak, and publish.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="btn-gradient rounded-full px-8 py-3.5 text-center text-sm font-semibold text-slate-900"
            >
              Get Started Free
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-sky-blue/30 px-8 py-3.5 text-center text-sm font-semibold text-sky-blue transition hover:border-sky-blue/60 hover:bg-sky-blue/5"
            >
              See How It Works
            </a>
          </div>

          <div className="flex flex-wrap gap-8 pt-2">
            <div>
              <p className="text-2xl font-bold text-slate-900">Minutes</p>
              <p className="text-sm text-slate-600">To launch a site</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">Zero</p>
              <p className="text-sm text-slate-600">Code required</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">Global</p>
              <p className="text-sm text-slate-600">CDN delivery</p>
            </div>
          </div>
        </div>

        <HeroGraphic />
      </div>
    </section>
  );
}
