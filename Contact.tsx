import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, Calendar, Home, IndianRupee } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── EmailJS Config ───────────────────────────────────────────────
// Steps to activate real email delivery:
// 1. Go to https://www.emailjs.com and create a FREE account
// 2. Add an Email Service (Gmail) → copy the Service ID below
// 3. Create an Email Template → copy the Template ID below
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = "service_4lzys8h";
const EMAILJS_TEMPLATE_ID = "template_pk0wakl";
const EMAILJS_PUBLIC_KEY  = "miuwIJKyaeNEpcEfS";
// ─────────────────────────────────────────────────────────────────

const contactInfo = [
  { icon: MapPin,     label: "Studio",  value: "Shubham Interiors, India" },
  { icon: Phone,      label: "Phone",   value: "+91 63746 47600" },
  { icon: Mail,       label: "Email",   value: "shubhamdantee@gmail.com" },
  { icon: Clock,      label: "Hours",   value: "Mon–Fri: 9AM–6PM · Sat: 10AM–4PM" },
];

const roomTypes = [
  "Living Room", "Bedroom", "Kitchen", "Bathroom",
  "Office / Study", "Dining Room", "Outdoor Space", "Full Home", "Commercial Space",
];

const budgetOptions = [
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000 – ₹10,00,000",
  "₹10,00,000+",
];

const serviceOptions = [
  "Residential Design",
  "Commercial Design",
  "Furniture & Styling",
  "Color Consultation",
  "Space Planning",
  "3D Visualization",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  rooms: string[];
  budget: string;
  message: string;
  service: string;
  date: string;
};

const emptyForm: FormState = {
  name: "", email: "", phone: "", rooms: [],
  budget: "", message: "", service: "", date: "",
};

export default function Contact() {
  const [form, setForm]           = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [error, setError]         = useState("");
  const [booking, setBooking]     = useState<FormState | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const toggleRoom = (room: string) =>
    setForm((f) => ({
      ...f,
      rooms: f.rooms.includes(room)
        ? f.rooms.filter((r) => r !== room)
        : [...f.rooms, room],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const templateParams = {
      from_name:    form.name,
      from_email:   form.email,
      phone:        form.phone,
      service:      form.service,
      rooms:        form.rooms.join(", ") || "Not specified",
      budget:       form.budget || "Not specified",
      preferred_date: form.date || "Not specified",
      message:      form.message || "No additional message",
      to_email:     "shubhamdantee@gmail.com",
    };

    try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      // Save booking info for display
      setBooking({ ...form });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly at +91 63746 47600.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase">
            Get In Touch
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mt-3 mb-5">
            Start Your <em className="italic text-amber-400">Transformation</em>
          </h2>
          <p className="text-stone-400 leading-relaxed">
            Book your free 30-minute consultation today. No obligations — just a conversation about your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* ── Left: Contact Info ── */}
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="bg-amber-600/20 border border-amber-600/30 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-stone-400 text-xs uppercase tracking-widest mb-1">{label}</div>
                  <div className="text-white text-sm">{value}</div>
                </div>
              </div>
            ))}

            {/* Map / studio image */}
            <div className="rounded-2xl overflow-hidden border border-stone-700 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80"
                alt="Studio Location"
                className="w-full h-48 object-cover opacity-70 hover:opacity-90 transition-opacity"
              />
            </div>

            {/* Social */}
            <div>
              <p className="text-stone-400 text-sm mb-3 uppercase tracking-widest">Follow Our Work</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { name: "Instagram", href: "https://www.instagram.com/s_dantee2005?igsh=MTd0ODRwN2N3anVyeA==" },
                  { name: "Pinterest", href: "#" },
                  { name: "Houzz", href: "#" },
                  { name: "LinkedIn", href: "#" },
                ].map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-2 rounded-lg border border-stone-700 text-stone-400
                               hover:border-amber-500 hover:text-amber-400 transition-colors"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form / Confirmation ── */}
          <div className="lg:col-span-3 bg-stone-800/60 backdrop-blur border border-stone-700 rounded-3xl p-8 shadow-2xl">

            {/* ── CONFIRMATION SCREEN ── */}
            {submitted && booking ? (
              <div className="flex flex-col items-center text-center py-6 gap-6">
                <CheckCircle size={64} className="text-amber-400" />
                <div>
                  <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-2">
                    Thank You, {booking.name.split(" ")[0]}! 🎉
                  </h3>
                  <p className="text-stone-400 text-sm max-w-md mx-auto">
                    Your consultation request has been received. We will contact you within
                    <span className="text-amber-400 font-semibold"> 24 hours</span>.
                  </p>
                </div>

                {/* ── Booking Summary Card ── */}
                <div className="w-full bg-stone-900/70 border border-stone-600 rounded-2xl p-6 text-left space-y-4">
                  <h4 className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-4 flex items-center gap-2">
                    <Calendar size={14} /> Booking Summary
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    {/* Name */}
                    <div className="flex items-start gap-3">
                      <User size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-stone-500 text-xs uppercase tracking-widest">Name</p>
                        <p className="text-white font-medium">{booking.name}</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <Mail size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-stone-500 text-xs uppercase tracking-widest">Email</p>
                        <p className="text-white font-medium break-all">{booking.email}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <Phone size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-stone-500 text-xs uppercase tracking-widest">Phone</p>
                        <p className="text-white font-medium">{booking.phone || "Not provided"}</p>
                      </div>
                    </div>

                    {/* Service */}
                    <div className="flex items-start gap-3">
                      <Home size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-stone-500 text-xs uppercase tracking-widest">Service</p>
                        <p className="text-white font-medium">{booking.service}</p>
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div className="flex items-start gap-3">
                      <Calendar size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-stone-500 text-xs uppercase tracking-widest">Preferred Date</p>
                        <p className="text-white font-medium">
                          {booking.date
                            ? new Date(booking.date).toLocaleDateString("en-IN", {
                                day: "numeric", month: "long", year: "numeric",
                              })
                            : "Flexible"}
                        </p>
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="flex items-start gap-3">
                      <IndianRupee size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-stone-500 text-xs uppercase tracking-widest">Budget</p>
                        <p className="text-white font-medium">{booking.budget || "Not specified"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Rooms */}
                  {booking.rooms.length > 0 && (
                    <div className="border-t border-stone-700 pt-4">
                      <p className="text-stone-500 text-xs uppercase tracking-widest mb-2">Rooms of Interest</p>
                      <div className="flex flex-wrap gap-2">
                        {booking.rooms.map((r) => (
                          <span key={r} className="text-xs bg-amber-500/20 border border-amber-500/40 text-amber-400 px-3 py-1 rounded-full">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  {booking.message && (
                    <div className="border-t border-stone-700 pt-4">
                      <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Your Message</p>
                      <p className="text-stone-300 text-sm leading-relaxed">{booking.message}</p>
                    </div>
                  )}
                </div>

                {/* Notice */}
                <div className="bg-amber-600/10 border border-amber-600/30 rounded-xl p-4 text-sm text-amber-300 w-full text-left">
                  📧 A confirmation will be sent to <span className="font-semibold">{booking.email}</span>. <br />
                  📞 For urgent queries, call us at <span className="font-semibold">+91 63746 47600</span>.
                </div>

                <button
                  onClick={() => { setSubmitted(false); setForm(emptyForm); setBooking(null); }}
                  className="mt-2 bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition text-sm font-semibold"
                >
                  Submit Another Request
                </button>
              </div>

            ) : (
              /* ── BOOKING FORM ── */
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-6">
                  Book Your Free Consultation
                </h3>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-400 text-xs uppercase tracking-widest mb-2">Full Name *</label>
                    <input
                      type="text" name="name" required value={form.name}
                      onChange={handleChange} placeholder="Shubham Dantee"
                      className="w-full bg-stone-900/50 border border-stone-600 rounded-xl px-4 py-3 text-white
                                 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 text-xs uppercase tracking-widest mb-2">Email *</label>
                    <input
                      type="email" name="email" required value={form.email}
                      onChange={handleChange} placeholder="you@example.com"
                      className="w-full bg-stone-900/50 border border-stone-600 rounded-xl px-4 py-3 text-white
                                 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition text-sm"
                    />
                  </div>
                </div>

                {/* Phone + Service */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-400 text-xs uppercase tracking-widest mb-2">Phone</label>
                    <input
                      type="tel" name="phone" value={form.phone}
                      onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-stone-900/50 border border-stone-600 rounded-xl px-4 py-3 text-white
                                 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 text-xs uppercase tracking-widest mb-2">Service *</label>
                    <select
                      name="service" required value={form.service}
                      onChange={handleChange}
                      className="w-full bg-stone-900/50 border border-stone-600 rounded-xl px-4 py-3 text-white
                                 focus:outline-none focus:border-amber-500 transition text-sm"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* Preferred Date + Budget */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-400 text-xs uppercase tracking-widest mb-2">Preferred Date</label>
                    <input
                      type="date" name="date" value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-stone-900/50 border border-stone-600 rounded-xl px-4 py-3 text-white
                                 focus:outline-none focus:border-amber-500 transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 text-xs uppercase tracking-widest mb-2">Estimated Budget</label>
                    <select
                      name="budget" value={form.budget}
                      onChange={handleChange}
                      className="w-full bg-stone-900/50 border border-stone-600 rounded-xl px-4 py-3 text-white
                                 focus:outline-none focus:border-amber-500 transition text-sm"
                    >
                      <option value="">Select a budget range</option>
                      {budgetOptions.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                {/* Rooms */}
                <div>
                  <label className="block text-stone-400 text-xs uppercase tracking-widest mb-2">Rooms of Interest</label>
                  <div className="flex flex-wrap gap-2">
                    {roomTypes.map((room) => (
                      <button
                        type="button" key={room} onClick={() => toggleRoom(room)}
                        className={`text-xs px-3 py-2 rounded-lg border transition-all ${
                          form.rooms.includes(room)
                            ? "border-amber-500 bg-amber-500/20 text-amber-400"
                            : "border-stone-600 text-stone-400 hover:border-stone-500"
                        }`}
                      >
                        {room}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-stone-400 text-xs uppercase tracking-widest mb-2">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    name="message" rows={4} value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your space, style preferences, timeline, or any specific requirements..."
                    className="w-full bg-stone-900/50 border border-stone-600 rounded-xl px-4 py-3 text-white
                               placeholder-stone-500 focus:outline-none focus:border-amber-500 transition text-sm resize-none"
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3">
                    ⚠️ {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit" disabled={sending}
                  className="w-full bg-amber-600 hover:bg-amber-500 disabled:opacity-60 text-white font-semibold py-4
                             rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                             shadow-xl hover:shadow-amber-600/30 hover:-translate-y-0.5"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <><Send size={16} /> Request Free Consultation</>
                  )}
                </button>

                <p className="text-center text-stone-500 text-xs">
                  We respond within 24 hours · No spam, ever
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
