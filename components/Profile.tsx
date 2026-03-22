import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-border/50 shadow-elevation-2 order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
              alt="Xavi Sánchez - Osteópata y Fisioterapeuta en Ripollet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-widest text-muted mb-4">
              El profesional
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Xavi Sánchez
            </h2>
            <p className="text-accent font-medium mb-6">
              OSTEÓPATA MROE 192 · FISIOTERAPEUTA COL. 1794 · ACUPUNTURA Y MTC
            </p>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Soy Osteópata, Fisioterapeuta, Acupuntor. Desde la apertura de la
                consulta en 2001 hago tratamientos personalizados, con más de 25
                años de experiencia tratando todo tipo de lesiones. Mi herramienta
                de trabajo son las manos, y mi manera de tratar las lesiones es
                holística. Para mí, todo está en relación.
              </p>
              <p>
                El Osteópata capta muchas cosas, le interesan las sensaciones, las
                emociones, trabaja con los 5 sentidos. No me conformo con mejorar
                el síntoma doloroso: hay que mejorar la vida del paciente. Le
                acompaño en su camino hacia una vida saludable.
              </p>
              <p>
                Cuando un paciente llega a la consulta, escucho atentamente lo que
                me explica, observo, palpo, toco, le interrogo. Realizo una
                exploración física con diferentes test funcionales. Percibo su
                momento de la lesión, su fuerza vital. Sólo así llego a un
                diagnóstico de convergencia para tratar la CAUSA del problema.
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-white font-medium rounded-xl shadow-elevation-1 hover:shadow-elevation-2 hover:scale-[1.02] transition-all duration-300"
            >
              Solicitar consulta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
