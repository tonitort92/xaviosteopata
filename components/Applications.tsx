const osteopathyApplications = [
  {
    title: "Estructuras articulares",
    items: [
      "Columna vertebral",
      "Cráneo",
      "Maxilofacial",
      "Hombro",
      "Codo",
      "Rodilla",
      "Cadera",
      "Pie",
    ],
  },
  {
    title: "Tejidos vivos",
    items: [
      "Sanguíneo",
      "Pulmonar",
      "Nervioso",
      "Óseo",
      "Conjuntivo",
    ],
  },
  {
    title: "Órganos",
    items: [
      "Hígado",
      "Vejiga",
      "Intestinos",
      "Estómago",
      "Riñón",
      "Vesícula biliar",
    ],
  },
];

const acupunctureBenefits = [
  "Poner fin a cuadros de ansiedad y estrés",
  "Aliviar dolores musculares, cefaleas y migrañas",
  "Ayudar a perder peso en cuadros de obesidad",
  "Mejorar la circulación sanguínea",
  "Eliminar definitivamente el hábito de fumar",
  "Poner fin a problemas de insomnio",
];

export default function Applications() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-widest text-muted mb-4">
          Aplicación
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 md:mb-16">
          Campos de aplicación de la osteopatía
        </h2>
        <p className="text-muted max-w-3xl mb-12 leading-relaxed">
          La osteopatía beneficia a todos sin distinción de edad, desde recién
          nacidos hasta gente mayor. Va destinada a todas aquellas personas que
          presentan disfunciones a nivel de la estructura mecánica, visceral o
          craneal-neurológica. La única herramienta del osteópata son sus manos,
          con ellas realiza ajustes que no son ni traumáticos ni dolorosos.
        </p>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {osteopathyApplications.map((group) => (
            <div key={group.title}>
              <h3 className="font-serif text-xl text-foreground mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-muted text-sm flex items-center gap-2">
                    <span className="text-accent">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-12 md:pt-16">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
            Beneficios de la Acupuntura
          </h3>
          <p className="text-muted max-w-3xl mb-8 leading-relaxed">
            La Acupuntura forma parte de la Medicina Tradicional China. Restaura el
            desequilibrio energético (yin/yang) a través de agujas en los
            meridianos, reforzada con Auriculoterapia y Fitoterapia.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {acupunctureBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2 text-muted"
              >
                <span className="text-accent mt-0.5">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
