const reasons = [
  {
    title: "25+ años de experiencia",
    description:
      "Consulta abierta desde 2001, tratando todo tipo de lesiones con enfoque personalizado.",
  },
  {
    title: "MROE 192 · Col. 1794",
    description:
      "Titulación oficial como Osteópata y Fisioterapeuta. Formación en Acupuntura y MTC.",
  },
  {
    title: "Enfoque holístico y personalizado",
    description:
      "Me adapto a tu morfología, postura, estilo de vida y necesidades en cada sesión.",
  },
  {
    title: "Tratamiento desde la causa",
    description:
      "No solo el síntoma: busco el origen del problema para restablecer tu salud.",
  },
];

export default function WhyXavi() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-widest text-muted mb-4">
          Por qué Xavi
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 md:mb-16">
          Profesionalidad y cuidado en cada sesión
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-6 md:p-8 shadow-elevation-1 rounded-2xl hover:shadow-elevation-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <h3 className="font-serif text-xl text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
