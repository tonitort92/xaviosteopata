"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#osteopatia", label: "Osteopatía" },
  { href: "#acupuntura", label: "Acupuntura" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-elevation-1" : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-20 md:h-24">
        <Link href="#inicio" className="flex flex-col">
          <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
            Xavi Sánchez
          </span>
          <span className="text-xs text-muted hidden sm:block">
            MROE 192 · Col. 1794
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contacto"
            className="hidden sm:inline-block px-5 py-2.5 bg-gradient-to-r from-accent to-accent/90 text-white text-sm font-medium rounded-xl shadow-elevation-1 hover:shadow-elevation-2 hover:scale-[1.02] transition-all duration-300"
          >
            Pedir cita
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground hover:bg-foreground/5 rounded"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-elevation-2">
          <nav className="container-narrow py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-block px-5 py-2.5 bg-gradient-to-r from-accent to-accent/90 text-white text-sm font-medium rounded-xl shadow-elevation-1 w-fit"
            >
              Pedir cita
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
