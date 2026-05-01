import type { Metadata } from "next";
import CirugiaMamariaPageClient from "./CirugiaMamariaPageClient";

export const metadata: Metadata = {
    title: "Cirugía Mamaria en CABA | Dr. Víctor Pugliese",
    description:
        "Cirugía mamaria y aumento mamario en CABA y Buenos Aires con el Dr. Víctor Pugliese. Evaluación personalizada, resultados naturales y acompañamiento real.",
    keywords: [
        "cirugía mamaria",
        "aumento mamario",
        "aumento mamario CABA",
        "aumento mamario Buenos Aires",
        "implantes mamarios",
        "cirujano plástico mamas",
        "cirugía de mamas",
        "Dr. Víctor Pugliese",
        "cirugía plástica CABA",
        "resultados naturales",
    ],
    alternates: {
        canonical: "/cirugia-mamaria",
    },
    openGraph: {
        title: "Cirugía Mamaria en CABA | Dr. Víctor Pugliese",
        description:
            "Cirugía mamaria y aumento mamario con evaluación personalizada, resultados naturales y acompañamiento real.",
        url: "/cirugia-mamaria",
        type: "website",
        images: [
            {
                url: "/images/og-victor-pugliese.jpg",
                width: 1200,
                height: 630,
                alt: "Cirugía mamaria - Dr. Víctor Pugliese",
            },
        ],
    },
};

const cirugiaMamariaJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Cirugía mamaria",
    alternateName: "Aumento mamario",
    description:
        "Procedimiento de cirugía plástica estética orientado a mejorar la forma, volumen y armonía mamaria mediante una evaluación personalizada.",
    bodyLocation: "Mamas",
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

export default function CirugiaMamariaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(cirugiaMamariaJsonLd),
                }}
            />

            <CirugiaMamariaPageClient />
        </>
    );
}