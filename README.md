# Dr. Víctor Pugliese — Sitio Web Oficial

Sitio web profesional del Dr. Víctor Pugliese, cirujano plástico en CABA y Buenos Aires.

Desarrollado con **Next.js 16**, **TypeScript**, **Tailwind CSS 4** y **GSAP**.

---

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd web-pugliese

# 2. Instalar dependencias
npm install
```

---

## Variables de entorno

Crear un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

> Si esta variable no se define, el sitio usará `https://dr-victor-pugliese.vercel.app` como URL base. Esto afecta las URLs canónicas y los metadatos Open Graph.

---

## Desarrollo local

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

---

## Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción (genera `.next/`) |
| `npm run start` | Inicia el servidor de producción (requiere build previo) |
| `npm run lint` | Ejecuta ESLint sobre el proyecto |

---

## Despliegue en producción

### Opción A — Vercel (recomendado)

1. Crear una cuenta en [vercel.com](https://vercel.com) si no se tiene una.
2. Importar el repositorio desde el dashboard de Vercel.
3. En la sección **Environment Variables**, agregar:
   - `NEXT_PUBLIC_SITE_URL` → `https://tu-dominio.com`
4. Hacer clic en **Deploy**.

Vercel detecta automáticamente Next.js y configura el build. Cada push a la rama principal dispara un nuevo deploy.

Para conectar un dominio propio:
- Ir a **Settings → Domains** en el proyecto de Vercel.
- Agregar el dominio y seguir las instrucciones para actualizar los registros DNS.

---

### Opción B — Servidor propio (VPS / hosting con Node.js)

```bash
# 1. Generar el build de producción
npm run build

# 2. Iniciar el servidor
npm run start
```

El servidor escucha en el puerto `3000` por defecto. Para usar otro puerto:

```bash
npm run start -- -p 8080
```

Se recomienda usar un proceso manager como [PM2](https://pm2.keymetrics.io/) para mantener el servidor activo:

```bash
npm install -g pm2
pm2 start "npm run start" --name web-pugliese
pm2 save
pm2 startup
```

Y configurar un reverse proxy con Nginx apuntando al puerto `3000`.

---

## Estructura del proyecto

```
web-pugliese/
├── app/                          # Rutas y páginas (Next.js App Router)
│   ├── layout.tsx                # Layout raíz: metadatos SEO, JSON-LD
│   ├── page.tsx                  # Página de inicio
│   ├── HomePageClient.tsx        # Componente cliente del home
│   ├── abdomen/                  # Página de cirugía de abdomen
│   ├── cirugia-mamaria/          # Página de cirugía mamaria
│   ├── gluteos/                  # Página de cirugía de glúteos
│   ├── rinoplastia/              # Página de rinoplastia
│   ├── quien-soy/                # Página sobre el doctor
│   ├── politica-de-privacidad/   # Política de privacidad
│   ├── terminos-y-condiciones/   # Términos y condiciones
│   ├── robots.ts                 # Genera /robots.txt
│   └── sitemap.ts                # Genera /sitemap.xml
│
├── components/                   # Componentes reutilizables
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Procedimientos.tsx
│   ├── Resultados.tsx
│   ├── Testimonios.tsx
│   ├── Filosofia.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── BackToTop.tsx
│
├── public/
│   ├── images/                   # Imágenes del sitio
│   └── videos/                   # Videos del sitio
│
├── next.config.ts                # Configuración de Next.js
├── tailwind.config.ts            # Configuración de Tailwind CSS
└── tsconfig.json                 # Configuración de TypeScript
```

---

## Datos a actualizar antes de entregar al cliente

Los siguientes valores están definidos en el código y pueden necesitar actualización:

| Dato | Archivo | Descripción |
|---|---|---|
| Número de WhatsApp | `app/HomePageClient.tsx` | Número de contacto para consultas |
| URL del sitio | `.env.local` | Dominio definitivo en producción |
| Imagen Open Graph | `public/images/og-victor-pugliese.jpg` | Imagen para compartir en redes sociales (1200×630 px) |

---

## SEO

El sitio incluye configuración SEO completa:

- Metadatos Open Graph y Twitter Card
- JSON-LD Schema.org (`Physician` + `MedicalProcedure`)
- Sitemap dinámico en `/sitemap.xml`
- Robots.txt en `/robots.txt`
- URLs canónicas por página
- Idioma configurado en `es-AR`

Para que el SEO funcione correctamente en producción, asegurarse de que `NEXT_PUBLIC_SITE_URL` apunte al dominio definitivo del cliente antes del primer deploy.

---

## Tecnologías utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 16.2.4 | Framework principal |
| React | 19 | Librería de UI |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | 4 | Estilos |
| GSAP | 3.15 | Animaciones |
