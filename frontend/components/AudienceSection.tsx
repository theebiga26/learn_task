import { AudienceGraphic } from "./AudienceGraphic";

const audience = [
  {
    type: "Small business owners",
    problem: "No tech skills, no budget for developers",
    solution: "AI builds it for them in minutes",
  },
  {
    type: "Freelancers",
    problem: "Need quick client sites",
    solution: "Generate + customize fast",
  },
  {
    type: "Startups",
    problem: "Need a professional web presence fast",
    solution: "AI + templates + one-click deploy",
  },
  {
    type: "Enterprises",
    problem: "Need white-label or multi-site solutions",
    solution: "Enterprise plan with API access",
  },
];

export function AudienceSection() {
  return (
    <section id="audience" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AudienceGraphic />

          <div className="space-y-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-blue">
                Who Is It For?
              </p>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Built for every business that needs to be online — fast
              </h2>
              <p className="mt-4 text-slate-700">
                Whether you&apos;re a solo founder or an enterprise team, SiteForge adapts to your
                scale and speed.
              </p>
            </div>

            <div className="space-y-3">
              {audience.map((item) => (
                <div
                  key={item.type}
                  className="card-glass rounded-xl p-4 transition hover:border-sky-blue/25"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-semibold text-slate-900">{item.type}</h3>
                    <span className="text-xs text-steel-blue">{item.problem}</span>
                  </div>
                  <p className="mt-2 text-sm text-sky-blue">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
