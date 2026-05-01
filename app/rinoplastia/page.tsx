import type { Metadata } from "next";
import RinoplastiaPageClient from "./RinoplastiaPageClient";

export const metadata: Metadata = {
    title: "Rinoplastia en CABA | Dr. Víctor Pugliese",
    description:
        "Rinoplastia en CABA y Buenos Aires con el Dr. Víctor Pugliese. Evaluación personalizada para mejorar la armonía facial, la forma de la nariz y, en algunos casos, la respiración.",
    keywords: [
        "rinoplastia",
        "rinoplastia CABA",
        "rinoplastia Buenos Aires",
        "cirugía de nariz",
        "cirujano plástico rinoplastia",
        "tabique nasal",
        "armonía facial",
        "Dr. Víctor Pugliese",
        "cirugía plástica CABA",
    ],
    alternates: {
        canonical: "/rinoplastia",
    },
    openGraph: {
        title: "Rinoplastia en CABA | Dr. Víctor Pugliese",
        description:
            "Rinoplastia con evaluación personalizada, resultados naturales y acompañamiento real.",
        url: "/rinoplastia",
        type: "website",
        images: [
            {
                url: "/images/og-victor-pugliese.jpg",
                width: 1200,
                height: 630,
                alt: "Rinoplastia - Dr. Víctor Pugliese",
            },
        ],
    },
};

const rinoplastiaJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Rinoplastia",
    description:
        "Procedimiento de cirugía plástica orientado a modificar la forma de la nariz para mejorar la armonía facial y, en algunos casos, la respiración.",
    bodyLocation: "Nariz",
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

export default function RinoplastiaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(rinoplastiaJsonLd),
                }}
            />

            <RinoplastiaPageClient />
        </>
    );
}