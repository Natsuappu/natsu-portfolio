// components/Contact.tsx
import { personalInfo } from "../data/data";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#a78bfa]/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Section label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="text-[#a78bfa] text-xs tracking-[0.3em] uppercase font-semibold">04</span>
          <div className="w-12 h-px bg-[#a78bfa]" />
          <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">Contact</span>
        </div>

        <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Let's build<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#6366f1]">
            something.
          </span>
        </h2>

        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          I'm actively seeking entry-level software developer roles. If you have an interesting opportunity or just want to connect, I'd love to hear from you.
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-10 py-4 bg-[#a78bfa] text-black font-black text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 mb-16"
        >
          Say Hello →
        </a>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
            { label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
            { label: "LinkedIn", value: "alwin-sebastian42", href: personalInfo.linkedin },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 border border-[#1e1e2e] bg-[#0d0d15] hover:border-[#a78bfa]/50 transition-colors group text-left"
            >
              <p className="text-gray-600 text-xs tracking-widest uppercase mb-2">{item.label}</p>
              <p className="text-white text-sm font-semibold group-hover:text-[#a78bfa] transition-colors truncate">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
