import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "osteopatia",
    title: "Osteopatía",
    subtitle: "Técnicas manuales · Diagnóstico global · Estructura y función",
    description:
      "Una experiencia profundamente personal, ideal si buscas tratar la causa de tu lesión desde un enfoque holístico. El osteópata interviene sobre la estructura lesionada para restablecer la función, teniendo en cuenta tu historia, postura y modo de vida.",
    bullets: [
      "Necesitas flexibilidad con tu horario",
      "Tienes lesiones antiguas o actuales que afectan tu día a día",
      "Prefieres un tratamiento adaptado a tu morfología",
      "Buscas prevenir futuras lesiones",
    ],
    cta: "Conocer Osteopatía",
    href: "#osteopatia",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  },
  {
    id: "acupuntura",
    title: "Acupuntura",
    subtitle: "Medicina Tradicional China · Qi y meridianos · Equilibrio energético",
    description:
      "Una experiencia complementaria basada en la MTC, ideal si buscas restaurar el equilibrio yin/yang. A través de agujas en los meridianos, auriculoterapia y fitoterapia, circulamos el Qi para mejorar tu bienestar.",
    bullets: [
      "Te conectas con temas como ansiedad, insomnio o estrés",
      "Quieres un enfoque que combine cuerpo y energía",
      "Buscas alivio en dolor, migrañas o circulación",
      "Te interesa la medicina tradicional como complemento",
    ],
    cta: "Conocer Acupuntura",
    href: "#acupuntura",
    image:
      "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-widest text-muted mb-4">
          Nuestros tratamientos
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 md:mb-16">
          Encuentra el tratamiento adecuado
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="bg-white shadow-elevation-1 rounded-2xl overflow-hidden hover:shadow-elevation-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] rounded-t-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - tratamiento holístico`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm mb-6">{service.subtitle}</p>
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-block text-accent font-medium hover:underline"
                >
                  {service.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
