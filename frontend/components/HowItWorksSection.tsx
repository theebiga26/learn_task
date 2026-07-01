import { HowItWorksGraphic } from "./HowItWorksGraphic";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-blue">
              The Core Idea
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              From plain English to a live website — that's the entire magic
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              SiteForge is a smart tool that lets anyone build a professional business
              website just by describing what they want. No coding, no design skills needed.
            </p>
            <a href="#contact" className="btn-gradient inline-block rounded-full px-7 py-3 text-sm font-semibold text-slate-900">
              Try It Now
            </a>
          </div>

          <div className="flex items-center justify-center">
            <HowItWorksGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
