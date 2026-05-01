import type { Metadata } from "next";
import BackToTop from "../components/BackToTop";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://dr-victor-pugliese.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Dr. Víctor Pugliese | Cirugía Plástica en CABA y Buenos Aires",
    template: "%s | Dr. Víctor Pugliese",
  },

  description:
    "Cirugía plástica estética en CABA y Buenos Aires. Resultados naturales, evaluación personalizada y acompañamiento real con el Dr. Víctor Pugliese.",

  keywords: [
    "Dr. Víctor Pugliese",
    "Víctor Pugliese",
    "cirujano plástico",
    "cirugía plástica CABA",
    "cirugía plástica Buenos Aires",
    "cirugía estética",
    "resultados naturales",
    "liposucción",
    "abdominoplastia",
    "cirugía mamaria",
    "aumento mamario",
    "rinoplastia",
    "cirugía de glúteos",
  ],

  authors: [{ name: "Dr. Víctor Pugliese" }],
  creator: "Dr. Víctor Pugliese",
  publisher: "Dr. Víctor Pugliese",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Dr. Víctor Pugliese",
    title: "Dr. Víctor Pugliese | Cirugía Plástica en CABA y Buenos Aires",
    description:
      "Resultados naturales, evaluación personalizada y acompañamiento real en cirugía plástica estética.",
    images: [
      {
        url: "/images/og-victor-pugliese.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Víctor Pugliese - Cirujano Plástico",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Víctor Pugliese | Cirugía Plástica",
    description:
      "Cirugía plástica estética con resultados naturales y acompañamiento real.",
    images: ["/images/og-victor-pugliese.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "healthcare",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Víctor Pugliese",
  description:
    "Cirujano plástico especializado en cirugía plástica estética con resultados naturales y acompañamiento personalizado.",
  medicalSpecialty: "PlasticSurgery",
  areaServed: [
    {
      "@type": "City",
      name: "Ciudad Autónoma de Buenos Aires",
    },
    {
      "@type": "AdministrativeArea",
      name: "Buenos Aires",
    },
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Liposucción",
    },
    {
      "@type": "MedicalProcedure",
      name: "Cirugía mamaria",
    },
    {
      "@type": "MedicalProcedure",
      name: "Rinoplastia",
    },
    {
      "@type": "MedicalProcedure",
      name: "Cirugía de glúteos",
    },
    {
      "@type": "MedicalProcedure",
      name: "Cirugía de abdomen",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+54 9 11 2479-3160",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className="bg-black text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <div className="selection:bg-white selection:text-black">
          {children}
          <BackToTop />
        </div>
      </body>
    </html>
  );
}