import { Layers, CheckCircle, Lightbulb } from "lucide-react";

const highlights = [
  "Certified Interior Design Professional (CIDP)",
  "Featured in Architectural Digest & Elle Décor",
  "Sustainable & eco-friendly design champion",
];

const expertise = [
  { icon: Lightbulb, label: "Creative Vision", desc: "Unique concepts tailored to your lifestyle" },
  { icon: Layers, label: "Full Service", desc: "End-to-end design & project management" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1616137466211-f939a420be84?w=500&q=80"
                alt="Designer at work"
                className="rounded-2xl w-full h-64 object-cover shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80"
                alt="Living room design"
                className="rounded-2xl w-full h-64 object-cover shadow-xl mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80"
                alt="Bedroom design"
                className="rounded-2xl w-full h-48 object-cover shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&q=80"
                alt="Kitchen design"
                className="rounded-2xl w-full h-48 object-cover shadow-xl mt-4"
              />
            </div>
            {/* no badge */}
          </div>

          {/* Content */}
          <div className="lg:pl-6 mt-10 lg:mt-0">
            <span className="text-amber-600 text-sm font-semibold tracking-[0.3em] uppercase">About Us</span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-stone-800 mt-3 mb-6 leading-tight">
              Passion Meets <em className="italic text-amber-600">Precision</em>
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Founded by <strong>Shubham Dantee</strong>, our studio has been shaping exceptional living and working environments since 2025. We believe every space has a soul — our mission is to reveal it.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              From intimate residential makeovers to sprawling commercial interiors, we bring an obsessive attention to detail, a deep understanding of materiality, and a relentless pursuit of beauty that is both striking and liveable.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-stone-700 text-sm">
                  <CheckCircle size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Expertise cards */}
            <div className="grid grid-cols-3 gap-3">
              {expertise.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-stone-50 border border-stone-100 rounded-xl p-4 hover:border-amber-300 hover:bg-amber-50 transition-colors">
                  <Icon size={22} className="text-amber-600 mb-2" />
                  <div className="font-semibold text-stone-800 text-sm">{label}</div>
                  <div className="text-stone-500 text-xs mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
