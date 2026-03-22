# Xavi Sánchez Osteópata

Web rediseñada para Xavi Sánchez - Osteópata, Fisioterapeuta y Acupuntor en Ripollet, Barcelona.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Playfair Display** + **Source Sans 3** (Google Fonts)

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm start
```

## Personalización

- **Mapa**: Reemplaza la URL del iframe en `components/Contact.tsx` por el embed real de Google Maps para C/ Padró 42, Ripollet.
- **Formulario**: Integra con Formspree, Resend u otro servicio para enviar emails.
- **Imágenes**: Sustituye las URLs de Unsplash por fotos propias en `components/Hero.tsx`, `components/Profile.tsx` y `components/Services.tsx`.
