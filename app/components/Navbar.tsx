// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../data/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#1e1e2e] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-xl font-bold tracking-widest text-white hover:text-[#a78bfa] transition-colors"
        >
          {personalInfo.name.split(" ")[0].toUpperCase()}
          <span className="text-[#a78bfa]">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-widest text-gray-400 hover:text-white uppercase transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#a78bfa] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="hidden md:inline-block px-5 py-2 text-xs tracking-widest uppercase border border-[#a78bfa] text-[#a78bfa] hover:bg-[#a78bfa] hover:text-black transition-all duration-300 font-semibold"
        >
          Hire Me
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 border-t border-[#1e1e2e] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest text-gray-300 hover:text-white uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-2 px-5 py-2 text-xs tracking-widest uppercase border border-[#a78bfa] text-[#a78bfa] text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
