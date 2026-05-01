import type { Metadata } from "next";
import QuienSoyPageClient from "./QuienSoyPageClient";

export const metadata: Metadata = {
    title: "Dr. Víctor Pugliese | Cirujano Plástico en CABA",
    description:
        "Conocé al Dr. Víctor Pugliese, cirujano plástico en CABA y Buenos Aires. Cirugía plástica estética con resultados naturales, evaluación personalizada y acompañamiento real.",
    keywords: [
        "Dr. Víctor Pugliese",
        "Víctor Pugliese",
        "cirujano plástico CABA",
        "cirujano plástico Buenos Aires",
        "cirugía plástica CABA",
        "cirugía estética Buenos Aires",
        "resultados naturales",
        "acompañamiento real",
    ],
    alternates: {
        canonical: "/quien-soy",
    },
    openGraph: {
        title: "Dr. Víctor Pugliese | Cirujano Plástico en CABA",
        description:
            "Cirugía plástica estética con resultados naturales, evaluación personalizada y acompañamiento real.",
        url: "/quien-soy",
        type: "profile",
        images: [
            {
                url: "/images/og-victor-pugliese.jpg",
                width: 1200,
                height: 630,
                alt: "Dr. Víctor Pugliese - Cirujano Plástico en CABA",
            },
        ],
    },
};

const doctorJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Víctor Pugliese",
    description:
        "Cirujano plástico enfocado en resultados naturales, evaluación personalizada y acompañamiento real.",
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
            name: "Cirugía de glúteos",
        },
        {
            "@type": "MedicalProcedure",
            name: "Cirugía de abdomen",
        },
    ],
};

export default function QuienSoyPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(doctorJsonLd),
                }}
            />

            <QuienSoyPageClient />
        </>
    );
}