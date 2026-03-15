import { Instagram, Facebook, Linkedin, Youtube, ArrowUp, Heart } from "lucide-react";

const footerLinks = {
  Services: [
    "Residential Design", "Commercial Design", "Furniture & Styling",
    "Color Consultation", "Space Planning", "3D Visualization",
  ],
  Company: [
    "About Us", "Our Team", "Careers", "Press & Media",
    "Sustainability", "Gift Vouchers",
  ],
  Resources: [
    "Design Blog", "Inspiration Gallery", "Design Guides", "FAQ",
    "Client Portal", "Referral Program",
  ],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-stone-950 text-stone-400">
      {/* Top CTA banner */}
      <div className="bg-amber-600 py-10 px-6 text-center">
        <h3 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-2">
          Ready to Transform Your Space?
        </h3>
        <p className="text-amber-100 mb-6 text-sm">
          Get your free consultation today. Let's create something extraordinary together.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-amber-700 font-semibold px-8 py-3 rounded-full hover:bg-amber-50 transition shadow-xl"
        >
          Book Free Consultation
        </a>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-['Playfair_Display'] text-3xl font-bold text-white">Shubham</span>
              <span className="block text-xs tracking-[0.4em] uppercase text-amber-500 mt-0.5">Interiors</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-6">
              Crafting extraordinary spaces that celebrate the art of living. Your trusted luxury interior design studio since 2009.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/s_dantee2005?igsh=MTd0ODRwN2N3anVyeA==" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-stone-500 hover:text-amber-400 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Awards bar */}
        <div className="border-y border-stone-800 py-6 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              "🏆 Architectural Digest Top 100",
              "✨ Elle Décor A-List 2023",
              "🌿 LEED Certified Studio",
              "⭐ Houzz Best of Design 2024",
            ].map((award) => (
              <span key={award} className="text-stone-500 text-xs font-medium">
                {award}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs">
            © {new Date().getFullYear()} Shubham Interiors. All rights reserved. · Built with{" "}
            <Heart size={11} className="inline text-amber-500 fill-amber-500" /> in New York
          </p>
          <div className="flex gap-6 text-xs text-stone-600">
            <a href="#" className="hover:text-amber-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition">Cookie Policy</a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-amber-600 hover:bg-amber-500 rounded-full flex items-center justify-center transition shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
