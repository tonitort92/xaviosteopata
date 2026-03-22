"use client";

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted mb-4">
              Contacto
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Xavi Sánchez
            </h2>
            <p className="text-accent font-medium mb-8">
              OSTEÓPATA MROE 192 · FISIOTERAPEUTA COL. 1794 · ACUPUNTURA Y MTC
            </p>
            <div className="space-y-6 text-muted">
              <div>
                <a
                  href="tel:935912363"
                  className="block hover:text-foreground transition-colors"
                >
                  93 591 23 63
                </a>
              </div>
              <div>
                <a
                  href="mailto:xavisaum@gmail.com"
                  className="block hover:text-foreground transition-colors"
                >
                  xavisaum@gmail.com
                </a>
              </div>
              <div>
                <p>C/ Padró 42, 1º 2ª</p>
                <p>08291 Ripollet, Barcelona</p>
              </div>
              <div className="pt-4">
                <p className="font-medium text-foreground mb-2">Horario</p>
                <p>Lunes y miércoles: 14:00h – 20:00h</p>
                <p>Martes y jueves: 09:00h – 14:00h · 15:30h – 19:00h</p>
                <p>Viernes: 09:00h – 15:30h</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-elevation-1 h-[240px] sm:h-[280px] lg:min-h-[260px] mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.0892!2d2.1574!3d41.4969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3192342d78f%3A0x3c3b3b3b3b3b3b3b!2s08291+Ripollet%2C+Barcelona!5e0!3m2!1ses!2ses!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación consulta Xavi Sánchez - C/ Padró 42, Ripollet"
                className="w-full h-full min-h-[240px]"
              />
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 shadow-elevation-1 rounded-2xl">
            <h3 className="font-serif text-xl text-foreground mb-6">
              Enviar mensaje
            </h3>
            <form
              action="#"
              method="post"
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                  placeholder="Asunto del mensaje"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent resize-none"
                  placeholder="Escribe tu mensaje..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-white font-medium rounded-xl shadow-elevation-1 hover:shadow-elevation-2 hover:scale-[1.02] transition-all duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
