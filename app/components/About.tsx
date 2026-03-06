// components/About.tsx
import { personalInfo, education, certifications, languages } from "../data/data";

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0d0d15] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#a78bfa]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#a78bfa] text-xs tracking-[0.3em] uppercase font-semibold">01</span>
          <div className="w-12 h-px bg-[#a78bfa]" />
          <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">About Me</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Building software<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#6366f1]">
                that matters.
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-base mb-8">{personalInfo.about}</p>

            {/* Languages */}
            <div className="mb-8">
              <h3 className="text-white text-sm tracking-widest uppercase mb-4 font-semibold">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex flex-col items-center px-4 py-2 border border-[#1e1e2e] bg-[#0a0a0f]"
                  >
                    <span className="text-white text-sm font-semibold">{lang.name}</span>
                    <span className="text-[#a78bfa] text-xs">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <span>📧 {personalInfo.email}</span>
              <span>📞 {personalInfo.phone}</span>
              <span>📍 {personalInfo.location}</span>
            </div>
          </div>

          {/* Right: Education + Certifications */}
          <div className="flex flex-col gap-10">
            {/* Education */}
            <div>
              <h3 className="text-white text-sm tracking-widest uppercase mb-6 font-semibold border-b border-[#1e1e2e] pb-3">
                Education
              </h3>
              {education.map((edu) => (
                <div key={edu.degree} className="relative pl-6 border-l border-[#a78bfa]/30">
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-[#a78bfa] -translate-x-1" />
                  <p className="text-white font-bold text-sm">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                  <p className="text-[#a78bfa] text-xs mt-1">{edu.duration}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-white text-sm tracking-widest uppercase mb-6 font-semibold border-b border-[#1e1e2e] pb-3">
                Certifications
              </h3>
              <div className="flex flex-col gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center justify-between p-4 border border-[#1e1e2e] bg-[#0a0a0f] hover:border-[#a78bfa]/40 transition-colors group"
                  >
                    <div>
                      <p className="text-white text-sm font-semibold group-hover:text-[#a78bfa] transition-colors">
                        {cert.name}
                      </p>
                      <p className="text-gray-500 text-xs italic">{cert.issuer}</p>
                    </div>
                    <span className="text-[#a78bfa] text-xs font-mono">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
