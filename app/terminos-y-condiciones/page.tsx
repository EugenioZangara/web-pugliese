import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
    title: "Términos y condiciones | Dr. Víctor Pugliese",
    description:
        "Términos y condiciones de uso del sitio web del Dr. Víctor Pugliese. Información sobre finalidad del sitio, consulta médica, resultados, imágenes, propiedad intelectual y enlaces externos.",
    alternates: {
        canonical: "/terminos-y-condiciones",
    },
    openGraph: {
        title: "Términos y condiciones | Dr. Víctor Pugliese",
        description:
            "Información sobre el uso del sitio, finalidad informativa, consulta médica, resultados y condiciones generales.",
        url: "/terminos-y-condiciones",
        type: "website",
    },
};

export default function TerminosYCondicionesPage() {
    return (
        <>
            <Navbar />

            <main className="bg-[#f5f8f9] text-[#25373d]">
                <section className="relative overflow-hidden px-6 pb-20 pt-36">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(131,160,171,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(86,117,128,0.12),transparent_36%)]" />

                    <div className="relative z-10 mx-auto max-w-4xl">
                        <span className="mb-6 inline-flex rounded-full border border-[#83a0ab]/45 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#567580] shadow-sm">
                            Información legal
                        </span>

                        <h1 className="mb-6 text-4xl font-semibold leading-[1.08] md:text-6xl">
                            Términos y condiciones
                        </h1>

                        <p className="max-w-3xl text-base leading-relaxed text-[#506065] md:text-lg">
                            Estos términos regulan el uso de este sitio web y la
                            interpretación de la información publicada sobre cirugía plástica
                            estética, procedimientos, resultados, contacto y contenidos.
                        </p>

                        <p className="mt-6 text-sm leading-relaxed text-[#506065]/80">
                            Última actualización: mayo de 2026.
                        </p>
                    </div>
                </section>

                <section className="px-6 pb-24">
                    <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-[#25373d]/10 bg-white p-6 shadow-[0_24px_70px_rgba(37,55,61,0.10)] md:p-10">
                        <div className="prose prose-slate max-w-none prose-headings:text-[#25373d] prose-p:text-[#506065] prose-li:text-[#506065] prose-a:text-[#567580]">
                            <h2>1. Aceptación de los términos</h2>

                            <p>
                                Al acceder y navegar este sitio web, el usuario acepta estos
                                términos y condiciones de uso. Si no estuviera de acuerdo con
                                alguno de sus puntos, se recomienda no utilizar el sitio.
                            </p>

                            <h2>2. Responsable del sitio</h2>

                            <p>
                                Este sitio corresponde al Dr. Víctor Pugliese, profesional
                                dedicado a la cirugía plástica estética, con atención en CABA
                                y Buenos Aires.
                            </p>

                            <p>
                                El canal principal de contacto informado en el sitio es
                                WhatsApp:{" "}
                                <a
                                    href="https://wa.me/5491124793160"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    11 2479-3160
                                </a>
                                .
                            </p>

                            <h2>3. Finalidad informativa del sitio</h2>

                            <p>
                                La información publicada en este sitio tiene una finalidad
                                informativa, educativa y orientativa. Su objetivo es presentar
                                información general sobre procedimientos de cirugía plástica
                                estética y facilitar el contacto para solicitar una evaluación
                                personalizada.
                            </p>

                            <p>
                                El contenido del sitio no debe interpretarse como diagnóstico,
                                indicación médica, recomendación quirúrgica individual ni
                                reemplazo de una consulta profesional.
                            </p>

                            <h2>4. Consulta médica y evaluación individual</h2>

                            <p>
                                Toda decisión vinculada a un procedimiento de cirugía plástica
                                debe realizarse luego de una evaluación médica personalizada.
                                Cada paciente presenta características, antecedentes,
                                expectativas y condiciones particulares que deben ser valoradas
                                por un profesional.
                            </p>

                            <p>
                                La información publicada en este sitio no garantiza que un
                                procedimiento sea indicado, posible o recomendable para todos
                                los casos.
                            </p>

                            <h2>5. Resultados y expectativas</h2>

                            <p>
                                Los resultados de cualquier procedimiento quirúrgico o estético
                                pueden variar según cada paciente, su anatomía, antecedentes,
                                proceso de cicatrización, hábitos, cuidados postoperatorios y
                                otros factores individuales.
                            </p>

                            <p>
                                Ningún contenido de este sitio debe interpretarse como promesa
                                de resultado, garantía de satisfacción o aseguramiento de un
                                cambio específico.
                            </p>

                            <h2>6. Imágenes, antes y después y material visual</h2>

                            <p>
                                Las imágenes, fotografías, videos o referencias visuales
                                publicadas en el sitio pueden tener finalidad ilustrativa,
                                educativa o comunicacional.
                            </p>

                            <p>
                                En caso de mostrarse resultados de antes y después, estos
                                corresponden a casos particulares y no garantizan que otros
                                pacientes obtengan los mismos resultados.
                            </p>

                            <p>
                                Algunas imágenes pueden corresponder a material real de
                                procedimientos, contextos médicos o resultados. Se presentan con
                                fines informativos y bajo criterios de comunicación profesional.
                            </p>

                            <h2>7. Contacto por WhatsApp</h2>

                            <p>
                                Los botones y enlaces de WhatsApp redirigen al usuario a una
                                plataforma externa. Al utilizar dicho canal, el usuario acepta
                                continuar la comunicación fuera de este sitio web.
                            </p>

                            <p>
                                El uso de WhatsApp se encuentra sujeto a las políticas,
                                condiciones y configuraciones de privacidad propias de dicha
                                plataforma.
                            </p>

                            <h2>8. Formularios y campañas publicitarias</h2>

                            <p>
                                En caso de incorporarse formularios, campañas publicitarias,
                                Meta Pixel, Google Analytics u otras herramientas de medición,
                                su uso estará orientado a responder consultas, mejorar la
                                experiencia del sitio, medir rendimiento y optimizar la
                                comunicación publicitaria.
                            </p>

                            <p>
                                El tratamiento de datos personales vinculados a estos recursos
                                se encuentra desarrollado en la{" "}
                                <Link href="/politica-de-privacidad">
                                    Política de privacidad
                                </Link>
                                .
                            </p>

                            <h2>9. Uso correcto del sitio</h2>

                            <p>
                                El usuario se compromete a utilizar este sitio de forma lícita,
                                respetuosa y adecuada, evitando cualquier acción que pueda
                                dañar, sobrecargar, alterar o impedir el correcto funcionamiento
                                del sitio.
                            </p>

                            <p>
                                No está permitido utilizar el sitio para enviar información
                                falsa, ofensiva, engañosa, ilícita o que pueda afectar derechos
                                de terceros.
                            </p>

                            <h2>10. Propiedad intelectual</h2>

                            <p>
                                Los contenidos de este sitio, incluyendo textos, estructura,
                                diseño, imágenes, videos, logotipo, elementos gráficos y
                                recursos visuales, pertenecen a sus respectivos titulares o se
                                utilizan con autorización.
                            </p>

                            <p>
                                No está permitida su reproducción, copia, distribución,
                                modificación o uso comercial sin autorización previa y por
                                escrito.
                            </p>

                            <h2>11. Enlaces externos</h2>

                            <p>
                                Este sitio puede contener enlaces a plataformas externas, como
                                WhatsApp, redes sociales, servicios de medición o sitios de
                                terceros.
                            </p>

                            <p>
                                El Dr. Víctor Pugliese no controla el contenido, políticas,
                                seguridad ni funcionamiento de esas plataformas externas. El
                                acceso a ellas queda bajo responsabilidad del usuario.
                            </p>

                            <h2>12. Disponibilidad del sitio</h2>

                            <p>
                                Se procurará mantener el sitio disponible y actualizado. Sin
                                embargo, no se garantiza que el acceso sea permanente,
                                ininterrumpido o libre de errores técnicos.
                            </p>

                            <p>
                                El sitio podrá modificarse, actualizarse, suspenderse o
                                discontinuarse total o parcialmente cuando resulte necesario.
                            </p>

                            <h2>13. Limitación de responsabilidad</h2>

                            <p>
                                El uso de la información publicada en este sitio es
                                responsabilidad del usuario. La información general aquí
                                presentada no reemplaza la consulta médica individual ni el
                                criterio profesional.
                            </p>

                            <p>
                                No se asumirá responsabilidad por decisiones tomadas únicamente
                                en base al contenido del sitio, sin evaluación profesional
                                correspondiente.
                            </p>

                            <h2>14. Modificaciones de los términos</h2>

                            <p>
                                Estos términos y condiciones podrán actualizarse periódicamente
                                para reflejar cambios legales, técnicos, profesionales o de
                                funcionamiento del sitio.
                            </p>

                            <p>
                                La fecha de última actualización se indicará al inicio de esta
                                página.
                            </p>

                            <h2>15. Contacto</h2>

                            <p>
                                Para consultas relacionadas con estos términos y condiciones,
                                podés comunicarte por WhatsApp al{" "}
                                <a
                                    href="https://wa.me/5491124793160"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    11 2479-3160
                                </a>
                                .
                            </p>

                            <div className="mt-10 rounded-2xl border border-[#83a0ab]/35 bg-[#f5f8f9] p-6">
                                <p className="m-0 text-sm leading-relaxed text-[#506065]">
                                    Este documento tiene carácter informativo general. Para una
                                    adecuación legal definitiva, especialmente antes de activar
                                    formularios, píxeles, analítica avanzada o campañas de
                                    remarketing, se recomienda su revisión por un profesional
                                    legal.
                                </p>
                            </div>

                            <div className="mt-10 flex flex-col gap-3 border-t border-[#25373d]/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
                                <Link
                                    href="/"
                                    className="font-medium text-[#567580] transition hover:text-[#25373d]"
                                >
                                    Volver al inicio
                                </Link>

                                <Link
                                    href="/politica-de-privacidad"
                                    className="font-medium text-[#567580] transition hover:text-[#25373d]"
                                >
                                    Ver política de privacidad
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}