import Link from "next/link";

const footerLinks = [
  { href: "#osteopatia", label: "Osteopatía" },
  { href: "#acupuntura", label: "Acupuntura" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-accent text-white py-12 md:py-16">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-serif text-xl font-semibold">Xavi Sánchez</p>
            <p className="text-white/70 text-sm mt-1">
              Osteópata · Fisioterapeuta · Acupuntura
            </p>
            <a
              href="mailto:xavisaum@gmail.com"
              className="text-white/80 text-sm mt-2 block hover:text-white transition-colors"
            >
              xavisaum@gmail.com
            </a>
          </div>
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Xavi Sánchez Osteópata. Ripollet,
            Barcelona.
          </p>
        </div>
      </div>
    </footer>
  );
}
