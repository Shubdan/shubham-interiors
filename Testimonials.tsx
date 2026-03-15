import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie & James Mitchell",
    role: "Homeowners, New York",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    rating: 5,
    text: "Working with Élara Interiors was an absolute dream. They completely transformed our Brooklyn brownstone into the warm, sophisticated home we always imagined. Every detail was considered — from the bespoke joinery to the handpicked art pieces. We're obsessed.",
    project: "Full Home Redesign",
  },
  {
    name: "David Chen",
    role: "CEO, TechVenture Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    text: "Our office has been completely reimagined. The team understood our brand DNA and translated it into a space that wows clients and energizes employees. Employee satisfaction scores went up 40% after the redesign. Incredible ROI.",
    project: "Corporate Office, San Francisco",
  },
  {
    name: "Isabella Romano",
    role: "Restaurateur, Miami",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "They designed my restaurant from scratch and it's now one of the most Instagrammed dining spots in Miami. The blend of Italian elegance with tropical warmth is just stunning. Bookings tripled in the first month after reopening.",
    project: "Restaurant Interior, Miami",
  },
  {
    name: "Marcus & Priya Sharma",
    role: "Homeowners, Los Angeles",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    text: "The 3D visualization service was a game-changer. We could walk through our future home virtually and make changes before a single wall was painted. The process was transparent, on-budget, and the result is beyond anything we hoped for.",
    project: "Luxury Residence, Beverly Hills",
  },
  {
    name: "Amanda Foster",
    role: "Interior Enthusiast, Chicago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "I hired Élara for a single bedroom consultation and ended up redesigning my entire apartment! Their color consultation alone changed how I feel in my home every morning. Professional, warm, and genuinely talented team.",
    project: "Apartment Styling, Chicago",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-600 text-sm font-semibold tracking-[0.3em] uppercase">Client Stories</span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-stone-800 mt-3 mb-5">
            What Our Clients <em className="italic text-amber-600">Say</em>
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-3xl p-8 md:p-14 max-w-4xl mx-auto relative shadow-xl border border-amber-100">
          <Quote size={60} className="absolute top-8 right-8 text-amber-200" />

          <div className="flex items-center gap-1 mb-6">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="text-stone-700 text-lg md:text-xl leading-relaxed italic mb-8 relative z-10">
            "{t.text}"
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-amber-200 shadow"
              />
              <div>
                <div className="font-semibold text-stone-800">{t.name}</div>
                <div className="text-stone-500 text-sm">{t.role}</div>
                <div className="text-amber-600 text-xs font-medium mt-0.5">📐 {t.project}</div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border-2 border-stone-200 flex items-center justify-center hover:border-amber-500 hover:text-amber-600 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border-2 border-stone-200 flex items-center justify-center hover:border-amber-500 hover:text-amber-600 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-200 ${
                i === current ? "w-8 h-2.5 bg-amber-500" : "w-2.5 h-2.5 bg-stone-300 hover:bg-amber-300"
              }`}
            />
          ))}
        </div>

        {/* Mini cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                i === current
                  ? "border-amber-400 bg-amber-50 shadow-md"
                  : "border-stone-200 bg-stone-50 hover:border-amber-200"
              }`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover mb-2 border border-stone-200"
              />
              <div className="text-xs font-semibold text-stone-800 leading-tight">{t.name.split(" ")[0]}</div>
              <div className="text-xs text-stone-400 truncate">{t.project}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
