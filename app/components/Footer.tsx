// components/Footer.tsx
import { personalInfo, navLinks } from "../data/data";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d15] border-t border-[#1e1e2e] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <span className="font-display text-lg font-bold tracking-widest text-white">
          {personalInfo.name.split(" ")[0].toUpperCase()}
          <span className="text-[#a78bfa]">.</span>
        </span>

        {/* Nav */}
        <ul className="flex flex-wrap gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs text-gray-500 hover:text-[#a78bfa] uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
