import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-stone-800/60 to-amber-900/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          Design That Tells{" "}
          <em className="italic text-amber-400">Your Story</em>
        </h1>

        <p className="text-stone-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          We craft bespoke, breathtaking spaces that blend timeless elegance
          with modern functionality — transforming every room into a masterpiece.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-1 text-sm tracking-wide"
          >
            Explore Our Work
          </a>
          <a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 text-sm tracking-wide"
          >
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-amber-400 transition animate-bounce"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
