import type { Metadata } from "next";
import GluteosPageClient from "./GluteosPageClient";

export const metadata: Metadata = {
    title: "Cirugía de Glúteos en CABA | Dr. Víctor Pugliese",
    description:
        "Cirugía de glúteos en CABA y Buenos Aires con el Dr. Víctor Pugliese. Evaluación personalizada, resultados naturales y acompañamiento real durante todo el proceso.",
    keywords: [
        "cirugía de glúteos",
        "glúteos CABA",
        "cirugía de glúteos Buenos Aires",
        "aumento de glúteos",
        "cirujano plástico glúteos",
        "Dr. Víctor Pugliese",
        "cirugía plástica CABA",
        "resultados naturales",
    ],
    alternates: {
        canonical: "/gluteos",
    },
    openGraph: {
        title: "Cirugía de Glúteos en CABA | Dr. Víctor Pugliese",
        description:
            "Resultados naturales, evaluación personalizada y acompañamiento real en cirugía de glúteos.",
        url: "/gluteos",
        type: "website",
        images: [
            {
                url: "/images/og-victor-pugliese.jpg",
                width: 1200,
                height: 630,
                alt: "Cirugía de glúteos - Dr. Víctor Pugliese",
            },
        ],
    },
};

const gluteosJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Cirugía de glúteos",
    description:
        "Procedimiento de cirugía plástica estética orientado a mejorar la forma, armonía y proyección de los glúteos con evaluación personalizada.",
    bodyLocation: "Glúteos",
    procedureType: "Surgical",
    provider: {
        "@type": "Physician",
        name: "Dr. Víctor Pugliese",
        medicalSpecialty: "PlasticSurgery",
        areaServed: ["CABA", "Buenos Aires"],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+54 9 11 2479-3160",
            contactType: "WhatsApp",
            availableLanguage: "Spanish",
        },
    },
};

export default function GluteosPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(gluteosJsonLd),
                }}
            />

            <GluteosPageClient />
        </>
    );
}