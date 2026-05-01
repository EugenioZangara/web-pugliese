import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Cirugía Plástica en CABA | Dr. Víctor Pugliese",
  description:
    "Cirugía plástica estética en CABA y Buenos Aires con el Dr. Víctor Pugliese. Liposucción, cirugía mamaria, rinoplastia, abdomen y glúteos con resultados naturales y acompañamiento real.",
  keywords: [
    "cirugía plástica CABA",
    "cirugía plástica Buenos Aires",
    "cirujano plástico CABA",
    "Dr. Víctor Pugliese",
    "Víctor Pugliese",
    "liposucción",
    "cirugía mamaria",
    "aumento mamario",
    "rinoplastia",
    "abdominoplastia",
    "cirugía de glúteos",
    "resultados naturales",
    "acompañamiento real",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cirugía Plástica en CABA | Dr. Víctor Pugliese",
    description:
      "Resultados naturales, evaluación personalizada y acompañamiento real en cirugía plástica estética.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/og-victor-pugliese.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Víctor Pugliese - Cirugía Plástica en CABA",
      },
    ],
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dr. Víctor Pugliese",
  description:
    "Cirugía plástica estética en CABA y Buenos Aires con foco en resultados naturales, evaluación personalizada y acompañamiento real.",
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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+54 9 11 2479-3160",
    contactType: "WhatsApp",
    availableLanguage: "Spanish",
  },
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
      name: "Cirugía de abdomen",
    },
    {
      "@type": "MedicalProcedure",
      name: "Cirugía de glúteos",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd),
        }}
      />

      <HomePageClient />
    </>
  );
}