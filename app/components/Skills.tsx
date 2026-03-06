// components/Skills.tsx
import { skills } from "../data/data";

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#0d0d15]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#a78bfa] text-xs tracking-[0.3em] uppercase font-semibold">03</span>
          <div className="w-12 h-px bg-[#a78bfa]" />
          <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">Skills & Expertise</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h2 className="font-display text-4xl font-black text-white mb-10 leading-tight">
              Technical<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#6366f1]">
                Stack.
              </span>
            </h2>

            <div className="flex flex-col gap-6">
              {skills.technical.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-semibold">{skill.name}</span>
                    <span className="text-[#a78bfa] text-xs font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-[#1e1e2e] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#a78bfa] to-[#6366f1] rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display text-4xl font-black text-white mb-10 leading-tight">
                Soft<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#6366f1]">
                  Skills.
                </span>
              </h2>

              <div className="flex flex-col gap-4">
                {skills.soft.map((skill, idx) => (
                  <div
                    key={skill}
                    className="flex items-center gap-4 p-4 border border-[#1e1e2e] bg-[#0a0a0f] hover:border-[#a78bfa]/40 transition-colors group"
                  >
                    <span className="text-[#a78bfa]/40 font-mono text-xs">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-white text-sm font-semibold group-hover:text-[#a78bfa] transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: "2+", label: "Projects" },
                { value: "3+", label: "Certifications" },
                { value: "3", label: "Years Study" },
              ].map((stat) => (
                <div key={stat.label} className="border border-[#1e1e2e] p-4 text-center">
                  <p className="font-display text-3xl font-black text-[#a78bfa]">{stat.value}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
