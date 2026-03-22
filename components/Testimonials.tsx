const testimonials = [
  {
    quote:
      "Después de años con dolor de espalda, Xavi encontró la causa real. No me conformé con mejorar el síntoma; mi vida cambió. Lo recomiendo totalmente.",
    author: "María G.",
    treatment: "Osteopatía",
    date: "Marzo 2024",
  },
  {
    quote:
      "La acupuntura me ayudó con la ansiedad y el insomnio cuando nada más funcionaba. Trato cercano y profesional. Muy agradecida.",
    author: "Laura M.",
    treatment: "Acupuntura",
    date: "Febrero 2024",
  },
  {
    quote:
      "Llegué con una lesión deportiva y en pocas sesiones recuperé la funcionalidad. Enfoque holístico que marca la diferencia.",
    author: "Pau R.",
    treatment: "Osteopatía",
    date: "Enero 2024",
  },
  {
    quote:
      "Un profesional que escucha, observa y trata desde la raíz. La combinación de osteopatía y acupuntura fue clave para mí.",
    author: "Carmen S.",
    treatment: "Osteopatía + Acupuntura",
    date: "Diciembre 2023",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-widest text-muted mb-4">
          Testimonios
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 md:mb-16">
          Experiencias que resuenan
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white p-6 md:p-8 shadow-elevation-1 rounded-2xl hover:shadow-elevation-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-medium text-foreground">{t.author}</p>
                <p className="text-sm text-muted">
                  {t.treatment} · {t.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
