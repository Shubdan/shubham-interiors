import { Home, Building2, Sofa, Palette, Ruler, Lightbulb, Trees, Video } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    desc: "Full-home makeovers and bespoke room designs tailored to your lifestyle, personality, and needs.",
    color: "from-amber-50 to-orange-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Building2,
    title: "Commercial Design",
    desc: "Offices, restaurants, hotels & retail spaces designed to impress clients and inspire teams.",
    color: "from-stone-50 to-zinc-50",
    border: "border-stone-200",
    iconBg: "bg-stone-100",
    iconColor: "text-stone-600",
  },
  {
    icon: Sofa,
    title: "Furniture & Styling",
    desc: "Curated furniture selection, custom-made pieces, and expert styling for a cohesive look.",
    color: "from-rose-50 to-pink-50",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: Palette,
    title: "Color Consultation",
    desc: "Expert color palette selection to set the perfect mood, brand identity, and visual flow.",
    color: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    desc: "Functional layout design that maximizes space efficiency, flow, and livability.",
    color: "from-teal-50 to-cyan-50",
    border: "border-teal-200",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    desc: "Layered lighting solutions that create ambiance, highlight architecture, and add drama.",
    color: "from-yellow-50 to-amber-50",
    border: "border-yellow-200",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: Trees,
    title: "Outdoor & Landscape",
    desc: "Beautiful outdoor living spaces, terraces, balconies, and garden interiors.",
    color: "from-green-50 to-emerald-50",
    border: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Video,
    title: "3D Visualization",
    desc: "Photo-realistic 3D renders and virtual walkthroughs so you see your space before it's built.",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-600 text-sm font-semibold tracking-[0.3em] uppercase">What We Offer</span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-stone-800 mt-3 mb-5">
            Our Design <em className="italic text-amber-600">Services</em>
          </h2>
          <p className="text-stone-500 leading-relaxed">
            From concept to completion, we offer a comprehensive suite of design services
            to transform any space into something truly extraordinary.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, color, border, iconBg, iconColor }) => (
            <div
              key={title}
              className={`bg-gradient-to-br ${color} border ${border} rounded-2xl p-6 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default`}
            >
              <div className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon size={22} className={iconColor} />
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold text-stone-800 mb-2">{title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
