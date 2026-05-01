import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
    title: "Política de privacidad | Dr. Víctor Pugliese",
    description:
        "Política de privacidad del sitio web del Dr. Víctor Pugliese. Información sobre tratamiento de datos personales, contacto por WhatsApp, formularios, cookies, Meta Pixel y Google Analytics.",
    alternates: {
        canonical: "/politica-de-privacidad",
    },
    openGraph: {
        title: "Política de privacidad | Dr. Víctor Pugliese",
        description:
            "Información sobre el tratamiento de datos personales, contacto por WhatsApp, formularios y herramientas de medición.",
        url: "/politica-de-privacidad",
        type: "website",
    },
};

export default function PoliticaDePrivacidadPage() {
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
                            Política de privacidad
                        </h1>

                        <p className="max-w-3xl text-base leading-relaxed text-[#506065] md:text-lg">
                            En esta página se explica cómo puede recopilarse, utilizarse y
                            protegerse la información personal enviada voluntariamente a
                            través de este sitio web, WhatsApp, formularios de contacto,
                            campañas publicitarias o herramientas de medición.
                        </p>

                        <p className="mt-6 text-sm leading-relaxed text-[#506065]/80">
                            Última actualización: mayo de 2026.
                        </p>
                    </div>
                </section>

                <section className="px-6 pb-24">
                    <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-[#25373d]/10 bg-white p-6 shadow-[0_24px_70px_rgba(37,55,61,0.10)] md:p-10">
                        <div className="prose prose-slate max-w-none prose-headings:text-[#25373d] prose-p:text-[#506065] prose-li:text-[#506065] prose-a:text-[#567580]">
                            <h2>1. Responsable del sitio</h2>

                            <p>
                                El presente sitio web corresponde al Dr. Víctor Pugliese,
                                profesional dedicado a la cirugía plástica estética, con
                                atención en CABA y Buenos Aires.
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

                            <h2>2. Finalidad del sitio</h2>

                            <p>
                                Este sitio tiene una finalidad informativa y de contacto. Su
                                objetivo es presentar información general sobre procedimientos
                                de cirugía plástica estética, facilitar la comunicación con el
                                consultorio y permitir que las personas interesadas soliciten
                                una evaluación personalizada.
                            </p>

                            <p>
                                La información publicada no reemplaza una consulta médica,
                                diagnóstico, indicación profesional ni evaluación personalizada.
                            </p>

                            <h2>3. Datos que pueden recopilarse</h2>

                            <p>
                                Actualmente, el sitio permite el contacto principalmente a
                                través de WhatsApp. En el futuro, también podrá incluir
                                formularios, campañas publicitarias, herramientas de analítica
                                y píxeles de seguimiento.
                            </p>

                            <p>
                                Según la forma de contacto utilizada, podrían recopilarse datos
                                enviados voluntariamente por el usuario, tales como:
                            </p>

                            <ul>
                                <li>Nombre y apellido.</li>
                                <li>Número de teléfono.</li>
                                <li>Correo electrónico.</li>
                                <li>Consulta o mensaje enviado.</li>
                                <li>Procedimiento de interés.</li>
                                <li>Ciudad o zona de residencia.</li>
                                <li>
                                    Información adicional que el usuario decida compartir
                                    voluntariamente.
                                </li>
                            </ul>

                            <h2>4. Información médica, imágenes o datos sensibles</h2>

                            <p>
                                En el marco de una consulta estética, el usuario podría decidir
                                compartir información vinculada a su salud, antecedentes médicos
                                o imágenes personales. Este tipo de información puede ser
                                considerada sensible.
                            </p>

                            <p>
                                Se recomienda no enviar imágenes, antecedentes médicos,
                                estudios o información sensible sin una indicación previa del
                                profesional o del equipo de atención.
                            </p>

                            <p>
                                Toda información de este tipo será utilizada únicamente para
                                orientar la consulta, evaluar la solicitud o coordinar una
                                atención profesional, siempre dentro del marco de la finalidad
                                para la cual fue enviada.
                            </p>

                            <h2>5. Uso de la información</h2>

                            <p>
                                Los datos enviados voluntariamente podrán ser utilizados para:
                            </p>

                            <ul>
                                <li>Responder consultas realizadas por el usuario.</li>
                                <li>Coordinar evaluaciones, turnos o comunicaciones.</li>
                                <li>Brindar información sobre procedimientos solicitados.</li>
                                <li>Realizar seguimiento de solicitudes iniciadas.</li>
                                <li>Mejorar la experiencia de navegación del sitio.</li>
                                <li>
                                    Medir el rendimiento de campañas publicitarias, en caso de
                                    utilizar herramientas como Meta Pixel o Google Analytics.
                                </li>
                            </ul>

                            <h2>6. Contacto por WhatsApp</h2>

                            <p>
                                Al hacer clic en botones o enlaces de WhatsApp, el usuario será
                                redirigido a una plataforma externa administrada por Meta
                                Platforms u otras empresas vinculadas a dicho servicio.
                            </p>

                            <p>
                                El uso de WhatsApp se encuentra sujeto a sus propias políticas
                                de privacidad, condiciones de uso y configuraciones de
                                seguridad.
                            </p>

                            <p>
                                La información enviada por WhatsApp será utilizada para
                                responder consultas, coordinar comunicaciones o brindar
                                orientación inicial sobre el motivo de contacto.
                            </p>

                            <h2>7. Formularios de contacto</h2>

                            <p>
                                En caso de incorporarse formularios en el sitio, los datos
                                solicitados serán los necesarios para responder la consulta o
                                gestionar la solicitud del usuario.
                            </p>

                            <p>
                                Al completar un formulario, el usuario acepta que la información
                                enviada sea utilizada para responder su consulta, contactarlo y
                                realizar el seguimiento correspondiente.
                            </p>

                            <h2>8. Cookies, analítica y herramientas de medición</h2>

                            <p>
                                Este sitio podrá utilizar cookies, tecnologías similares o
                                herramientas de medición para analizar el comportamiento de
                                navegación, mejorar la experiencia del usuario y evaluar el
                                rendimiento de campañas publicitarias.
                            </p>

                            <p>
                                Entre estas herramientas podrían incluirse, entre otras:
                            </p>

                            <ul>
                                <li>Google Analytics.</li>
                                <li>Google Tag Manager.</li>
                                <li>Meta Pixel.</li>
                                <li>Herramientas de medición publicitaria o remarketing.</li>
                            </ul>

                            <p>
                                Estas herramientas pueden recopilar información técnica como
                                páginas visitadas, dispositivo utilizado, navegador, ubicación
                                aproximada, eventos de navegación o interacción con anuncios.
                            </p>

                            <p>
                                El usuario podrá configurar su navegador para bloquear o
                                eliminar cookies. Sin embargo, esto podría afectar ciertas
                                funcionalidades o mediciones del sitio.
                            </p>

                            <h2>9. Campañas publicitarias y remarketing</h2>

                            <p>
                                En caso de realizar campañas publicitarias en plataformas como
                                Meta Ads, Google Ads u otras similares, podrían utilizarse
                                herramientas de medición para conocer el rendimiento de los
                                anuncios y mostrar comunicaciones relevantes a personas que
                                interactuaron previamente con el sitio.
                            </p>

                            <p>
                                Estas acciones se realizan con fines de medición, optimización y
                                comunicación publicitaria, sin que ello implique la venta de
                                datos personales.
                            </p>

                            <h2>10. Conservación de datos</h2>

                            <p>
                                Los datos enviados por el usuario podrán conservarse durante el
                                tiempo necesario para responder consultas, gestionar solicitudes,
                                coordinar atención o cumplir con obligaciones profesionales,
                                administrativas o legales que pudieran corresponder.
                            </p>

                            <h2>11. Enlaces externos</h2>

                            <p>
                                Este sitio puede contener enlaces a plataformas externas, como
                                WhatsApp, Instagram, Facebook, Google u otros servicios. El uso
                                de dichas plataformas se rige por sus propias políticas de
                                privacidad y condiciones.
                            </p>

                            <h2>12. Seguridad de la información</h2>

                            <p>
                                Se adoptarán medidas razonables para proteger la información
                                recibida y evitar accesos no autorizados, pérdida, alteración o
                                uso indebido de los datos.
                            </p>

                            <p>
                                Sin embargo, ningún sistema de transmisión o almacenamiento de
                                información en internet puede garantizar seguridad absoluta.
                            </p>

                            <h2>13. Derechos del usuario</h2>

                            <p>
                                El usuario podrá solicitar información sobre los datos enviados,
                                pedir su actualización, rectificación o eliminación cuando
                                corresponda, comunicándose a través del canal de contacto
                                informado en este sitio.
                            </p>

                            <h2>14. Cambios en esta política</h2>

                            <p>
                                Esta política podrá ser actualizada periódicamente para reflejar
                                cambios legales, técnicos, publicitarios o de funcionamiento del
                                sitio.
                            </p>

                            <h2>15. Contacto</h2>

                            <p>
                                Para consultas relacionadas con esta política o con el
                                tratamiento de datos personales, podés comunicarte por WhatsApp
                                al{" "}
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
                                    Esta política tiene carácter informativo general. Para una
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
                                    href="/terminos-y-condiciones"
                                    className="font-medium text-[#567580] transition hover:text-[#25373d]"
                                >
                                    Ver términos y condiciones
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