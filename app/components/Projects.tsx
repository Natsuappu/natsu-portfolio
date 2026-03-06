// components/Projects.tsx
import { projects } from "../data/data";

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-[#0a0a0f] relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#6366f1]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#a78bfa] text-xs tracking-[0.3em] uppercase font-semibold">02</span>
          <div className="w-12 h-px bg-[#a78bfa]" />
          <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">Projects</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-16 leading-tight">
          Things I've<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#6366f1]">
            built.
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="relative border border-[#1e1e2e] bg-[#0d0d15] p-8 hover:border-[#a78bfa]/50 transition-all duration-300 group overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-6 font-display text-8xl font-black text-[#a78bfa]/5 group-hover:text-[#a78bfa]/10 transition-colors select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Status badge */}
              <div className="flex items-center gap-2 mb-6">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.status === "In Progress"
                      ? "bg-emerald-400 animate-pulse"
                      : "bg-gray-500"
                  }`}
                />
                <span
                  className={`text-xs tracking-widest uppercase ${
                    project.status === "In Progress"
                      ? "text-emerald-400"
                      : "text-gray-500"
                  }`}
                >
                  {project.status}
                </span>
                <span className="ml-auto text-gray-600 text-xs font-mono">{project.duration}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-black text-white mb-1 group-hover:text-[#a78bfa] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#a78bfa] text-xs tracking-widest uppercase mb-4">{project.role}</p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border border-[#1e1e2e] text-gray-400 group-hover:border-[#a78bfa]/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
