import { MessageSquare, Pencil, Package, Hammer, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Free Consultation",
    desc: "We start with a complimentary discovery call or in-person meeting to understand your vision, lifestyle, preferences, and budget.",
    duration: "Day 1–3",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design Concept",
    desc: "Our team develops a tailored design concept with mood boards, floor plans, color palettes, and 3D visualizations for your approval.",
    duration: "Week 1–3",
  },
  {
    icon: Package,
    step: "03",
    title: "Material & Sourcing",
    desc: "We carefully source and procure all materials, furniture, fixtures, and accessories — managing vendor relationships on your behalf.",
    duration: "Week 3–6",
  },
  {
    icon: Hammer,
    step: "04",
    title: "Execution & Build",
    desc: "Our skilled tradespeople handle all construction, installation, and fit-out with regular site visits and quality control checkpoints.",
    duration: "Week 6–14",
  },
  {
    icon: Sparkles,
    step: "05",
    title: "Final Reveal",
    desc: "The grand unveiling — your space is styled, photographed, and handed over. We walk you through every detail with a satisfaction guarantee.",
    duration: "Week 14–16",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-stone-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase">How We Work</span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mt-3 mb-5">
            Our Design <em className="italic text-amber-400">Process</em>
          </h2>
          <p className="text-stone-400 leading-relaxed">
            A seamless, stress-free journey from first conversation to final reveal —
            transparent, collaborative, and always on schedule.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map(({ icon: Icon, step, title, desc, duration }, i) => (
              <div key={step} className="flex flex-col items-center text-center group">
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full border-2 border-amber-600/40 bg-stone-800 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-600/10 transition-all duration-300 shadow-xl">
                    <Icon size={28} className="text-amber-400" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
                    {i + 1}
                  </span>
                </div>

                {/* Duration badge */}
                <span className="text-amber-500/80 text-xs font-medium tracking-widest uppercase mb-2">
                  {duration}
                </span>
                <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-3">{title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-stone-400 mb-6 text-sm">
            Ready to start your transformation journey?
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:shadow-amber-600/30 hover:-translate-y-1"
          >
            Begin Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
