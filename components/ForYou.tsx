const items = [
  {
    title: "Dolor crónico o lesiones recurrentes",
    description:
      "Cuando el dolor persiste a pesar de tratamientos previos o reaparece una y otra vez.",
  },
  {
    title: "Recuperación deportiva o postural",
    description:
      "Cuando buscas recuperar la funcionalidad tras una lesión o mejorar tu postura y movimiento.",
  },
  {
    title: "Ansiedad, estrés o insomnio",
    description:
      "Cuando el cuerpo acumula tensión y necesitas restablecer el equilibrio energético.",
  },
  {
    title: "Camino hacia una vida más saludable",
    description:
      "Cuando quieres acompañamiento en tu proceso hacia el bienestar integral.",
  },
];

export default function ForYou() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-widest text-muted mb-4">
          ¿Es esto para ti?
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 md:mb-16">
          Experiencias que te ayudan a avanzar
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 md:p-8 bg-white shadow-elevation-1 rounded-2xl hover:shadow-elevation-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <h3 className="font-serif text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
