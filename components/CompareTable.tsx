const rows = [
  {
    label: "Enfoque",
    osteopatia: "Estructura, tejidos, articulaciones",
    acupuntura: "Energía, meridianos, órganos",
  },
  {
    label: "Técnicas",
    osteopatia: "Manipulaciones, masaje, estiramientos",
    acupuntura: "Agujas, auriculoterapia, fitoterapia",
  },
  {
    label: "Indicaciones",
    osteopatia: "Lesiones musculoesqueléticas, dolor de espalda, esguinces",
    acupuntura: "Ansiedad, dolor, insomnio, migrañas, estrés",
  },
  {
    label: "Sesión típica",
    osteopatia: "45–60 min",
    acupuntura: "30–45 min",
  },
];

export default function CompareTable() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-narrow">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 md:mb-16">
          Compara tratamientos
        </h2>
        <div className="overflow-x-auto bg-white shadow-elevation-1 rounded-2xl p-6 md:p-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 md:px-6 font-medium text-muted text-sm uppercase tracking-wider">
                  {" "}
                </th>
                <th className="text-left py-4 px-4 md:px-6 font-serif text-lg text-foreground">
                  Osteopatía
                </th>
                <th className="text-left py-4 px-4 md:px-6 font-serif text-lg text-foreground">
                  Acupuntura
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-border last:border-0"
                >
                  <td className="py-4 px-4 md:px-6 font-medium text-foreground">
                    {row.label}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-muted">
                    {row.osteopatia}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-muted">
                    {row.acupuntura}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-muted text-sm">
          ¿Tienes dudas?{" "}
          <a href="#contacto" className="text-accent hover:underline">
            Contacta para una consulta
          </a>
        </p>
      </div>
    </section>
  );
}
