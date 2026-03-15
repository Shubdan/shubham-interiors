import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Essential",
    tagline: "Perfect for single rooms",
    price: "1,35,000",
    period: "per room",
    color: "border-stone-200",
    badge: "",
    highlight: false,
    features: [
      "1-room design",
      "Initial consultation (1 hr)",
      "2D floor plan",
      "Color palette & mood board",
      "Furniture sourcing list",
      "2 revision rounds",
      "Email support",
    ],
    cta: "Get Started",
    ctaStyle: "border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white",
  },
  {
    name: "Signature",
    tagline: "Most popular — full home",
    price: "3,50,000",
    period: "starting price",
    color: "border-amber-500",
    badge: "Most Popular",
    highlight: true,
    features: [
      "Up to 5 rooms",
      "Dedicated lead designer",
      "2D + 3D floor plans",
      "Full color & material boards",
      "Furniture & décor sourcing",
      "Vendor & contractor management",
      "5 revision rounds",
      "Weekly check-ins",
      "Priority phone & email support",
    ],
    cta: "Book Signature",
    ctaStyle: "bg-amber-600 text-white hover:bg-amber-700",
  },
  {
    name: "Prestige",
    tagline: "Complete luxury experience",
    price: "Custom",
    period: "tailored quote",
    color: "border-stone-700",
    badge: "Luxury",
    highlight: false,
    features: [
      "Whole home / commercial space",
      "Senior designer + full team",
      "Full architectural collaboration",
      "Photorealistic 3D walkthroughs",
      "Custom furniture & art curation",
      "Full project management",
      "Unlimited revisions",
      "Dedicated project portal",
      "Post-handover styling support",
      "Professional photography",
    ],
    cta: "Request a Quote",
    ctaStyle: "bg-stone-800 text-white hover:bg-stone-900",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-600 text-sm font-semibold tracking-[0.3em] uppercase">Investment</span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-stone-800 mt-3 mb-5">
            Transparent <em className="italic text-amber-600">Pricing</em>
          </h2>
          <p className="text-stone-500 leading-relaxed">
            No hidden fees. Choose the package that fits your vision — or let us craft a custom plan just for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl border-2 ${plan.color} p-8 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.highlight ? "scale-105 shadow-amber-100" : ""
              }`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full shadow-md ${
                    plan.highlight
                      ? "bg-amber-500 text-white"
                      : "bg-stone-800 text-white"
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-stone-800">{plan.name}</h3>
                <p className="text-stone-500 text-sm mt-1">{plan.tagline}</p>
              </div>

              <div className="mb-8">
                <span className="font-['Playfair_Display'] text-4xl font-bold text-stone-800">
                  {plan.price === "Custom" ? "" : "₹"}
                  {plan.price}
                </span>
                <span className="text-stone-400 text-sm ml-2">/ {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-stone-600">
                    <Check size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-semibold py-3.5 rounded-full transition-all duration-200 text-sm ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-stone-400 text-sm mt-10 flex items-center justify-center gap-2">
          <Zap size={14} className="text-amber-500" />
          All packages include a free 30-minute discovery call · Flexible payment plans available
        </p>
      </div>
    </section>
  );
}
