import type { Metadata } from "next";
import AbdomenPageClient from "./AbdomenPageClient";

export const metadata: Metadata = {
    title: "Cirugía de Abdomen en CABA | Dr. Víctor Pugliese",
    description:
        "Cirugía de abdomen y abdominoplastia en CABA y Buenos Aires con el Dr. Víctor Pugliese. Evaluación personalizada, resultados naturales y acompañamiento real.",
    keywords: [
        "cirugía de abdomen",
        "abdominoplastia",
        "abdominoplastia CABA",
        "abdominoplastia Buenos Aires",
        "cirugía abdominal",
        "cirujano plástico abdomen",
        "Dr. Víctor Pugliese",
        "cirugía plástica CABA",
        "resultados naturales",
    ],
    alternates: {
        canonical: "/abdomen",
    },
    openGraph: {
        title: "Cirugía de Abdomen en CABA | Dr. Víctor Pugliese",
        description:
            "Abdominoplastia y cirugía de abdomen con evaluación personalizada, resultados naturales y acompañamiento real.",
        url: "/abdomen",
        type: "website",
        images: [
            {
                url: "/images/og-victor-pugliese.jpg",
                width: 1200,
                height: 630,
                alt: "Cirugía de abdomen - Dr. Víctor Pugliese",
            },
        ],
    },
};

const abdomenJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Cirugía de abdomen",
    alternateName: "Abdominoplastia",
    description:
        "Procedimiento de cirugía plástica estética orientado a mejorar la firmeza, forma y armonía del abdomen mediante una evaluación personalizada.",
    bodyLocation: "Abdomen",
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

export default function AbdomenPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(abdomenJsonLd),
                }}
            />

            <AbdomenPageClient />
        </>
    );
}