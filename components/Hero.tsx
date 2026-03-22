import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden"
    >
      {/* Blob decorativo */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent-soft/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-1/2 -left-20 w-72 h-72 bg-warm/50 rounded-[30%_60%_70%_40%/50%_60%_30%_60%] animate-blob pointer-events-none"
        style={{ animationDelay: "-4s" }}
        aria-hidden
      />
      {/* Gradiente radial sutil */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#E8DFD4_0%,transparent_50%)] pointer-events-none"
        aria-hidden
      />
      <div className="container-narrow relative grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-muted mb-4">
            Osteópata · Fisioterapeuta · Acupuntor
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Tratamiento holístico para tu bienestar
          </h1>
          <p className="text-lg text-muted max-w-xl mb-8">
            Más de 25 años de experiencia en tratamientos personalizados. Mi
            herramienta son las manos; mi enfoque, la causa del problema, no solo
            el síntoma.
          </p>
          <Link
            href="#contacto"
            className="inline-block px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-white font-medium rounded-xl shadow-elevation-1 hover:shadow-elevation-2 hover:scale-[1.02] transition-all duration-300"
          >
            Pedir cita
          </Link>
        </div>
        <div className="relative aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden bg-border/50 shadow-elevation-2">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
            alt="Consulta de osteopatía - ambiente cálido y profesional"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
