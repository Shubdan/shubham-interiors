import { useState } from "react";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Office", "Outdoor"];

const projects = [
  {
    id: 1,
    title: "The Serene Loft",
    category: "Living Room",
    style: "Scandinavian Minimalist",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=700&q=80",
  },
  {
    id: 2,
    title: "Golden Hour Suite",
    category: "Bedroom",
    style: "Modern Luxury",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
  },
  {
    id: 3,
    title: "The Culinary Canvas",
    category: "Kitchen",
    style: "Contemporary",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
  },
  {
    id: 4,
    title: "Skyline Executive Hub",
    category: "Office",
    style: "Corporate Modern",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
  },
  {
    id: 5,
    title: "Bohemian Retreat",
    category: "Living Room",
    style: "Boho Chic",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80",
  },
  {
    id: 6,
    title: "Garden Sanctuary",
    category: "Outdoor",
    style: "Mediterranean",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1568659358539-3e9a3f8e0b94?w=700&q=80",
  },
  {
    id: 7,
    title: "Midnight Spa Bedroom",
    category: "Bedroom",
    style: "Japandi",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
  },
  {
    id: 8,
    title: "The Open Kitchen",
    category: "Kitchen",
    style: "Industrial Chic",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=700&q=80",
  },
  {
    id: 9,
    title: "Rooftop Lounge",
    category: "Outdoor",
    style: "Urban Contemporary",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=700&q=80",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-600 text-sm font-semibold tracking-[0.3em] uppercase">Our Work</span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-stone-800 mt-3 mb-5">
            Featured <em className="italic text-amber-600">Portfolio</em>
          </h2>
          <p className="text-stone-500 leading-relaxed">
            A curated selection of our finest projects — each space a unique story of collaboration, creativity, and craftsmanship.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-200"
                  : "bg-stone-100 text-stone-600 hover:bg-amber-50 hover:text-amber-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-1">
                  {project.category} · {project.style}
                </span>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-stone-300 text-sm flex items-center gap-1">
                  📍 {project.location}
                </p>
                <div className="mt-3 flex items-center gap-2 text-amber-400 text-sm font-medium">
                  <ExternalLink size={14} /> View Project
                </div>
              </div>
              {/* Category badge */}
              <span className="absolute top-4 left-4 bg-white/90 text-stone-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
                {project.category}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-stone-800 hover:bg-stone-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
