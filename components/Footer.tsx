import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#25373d] px-6 py-14 text-white">
            {/* BACKGROUND SOBRIO */}
            <div className="absolute inset-0 bg-[#25373d]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.14),transparent_34%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />

            <div className="relative z-10 mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
                {/* MARCA */}
                <div>
                    <Link
                        href="/"
                        aria-label="Ir al inicio - Dr. Víctor Pugliese"
                        className="mb-6 inline-flex items-center"
                    >
                        <div className="relative h-20 w-[285px] brightness-0 invert md:h-24 md:w-[350px]">
                            <Image
                                src="/images/logo-victor-pugliese.png"
                                alt="Dr. Víctor Pugliese - Cirujano Plástico"
                                fill
                                sizes="(max-width: 768px) 285px, 350px"
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    <p className="max-w-xs text-sm leading-relaxed text-white/65">
                        Cirugía plástica estética en CABA y Buenos Aires con resultados
                        naturales, evaluación personalizada y acompañamiento real en todo
                        el proceso.
                    </p>
                </div>

                {/* NAVEGACIÓN */}
                <div>
                    <h3 className="mb-5 text-sm uppercase tracking-[0.25em] text-[#83a0ab]">
                        Navegación
                    </h3>

                    <nav
                        aria-label="Navegación principal del footer"
                        className="flex flex-col gap-3 text-sm text-white/68"
                    >
                        <Link href="/" className="transition hover:text-[#83a0ab]">
                            Inicio
                        </Link>

                        <Link
                            href="/cirugia-mamaria"
                            className="transition hover:text-[#83a0ab]"
                        >
                            Cirugía mamaria
                        </Link>

                        <Link href="/abdomen" className="transition hover:text-[#83a0ab]">
                            Cirugía de abdomen
                        </Link>

                        <Link
                            href="/rinoplastia"
                            className="transition hover:text-[#83a0ab]"
                        >
                            Rinoplastia
                        </Link>

                        <Link href="/gluteos" className="transition hover:text-[#83a0ab]">
                            Cirugía de glúteos
                        </Link>

                        <Link
                            href="/quien-soy"
                            className="transition hover:text-[#83a0ab]"
                        >
                            Dr. Víctor Pugliese
                        </Link>
                    </nav>
                </div>

                {/* CONTACTO */}
                <div>
                    <h3 className="mb-5 text-sm uppercase tracking-[0.25em] text-[#83a0ab]">
                        Contacto
                    </h3>

                    <div className="flex flex-col gap-4 text-sm text-white/68">
                        <a
                            href="https://wa.me/5491124793160"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contactar por WhatsApp al Dr. Víctor Pugliese"
                            className="transition hover:text-[#83a0ab]"
                        >
                            WhatsApp: 11 2479-3160
                        </a>

                        <p className="max-w-xs leading-relaxed text-white/55">
                            Solicitá una evaluación personalizada para conocer qué
                            procedimiento puede adaptarse mejor a tu caso.
                        </p>

                        <a
                            href="https://wa.me/5491124793160"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Reservar consulta por WhatsApp con el Dr. Víctor Pugliese"
                            className="inline-flex w-fit items-center justify-center rounded-full border border-[#83a0ab] bg-white px-6 py-3 text-xs font-medium tracking-[0.08em] text-[#25373d] transition hover:-translate-y-0.5 hover:bg-[#83a0ab] hover:text-white"
                        >
                            RESERVAR CONSULTA
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mx-auto mt-12 flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
                <p>© 2026 Dr. Víctor Pugliese. Todos los derechos reservados.</p>

                <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                    <Link
                        href="/politica-de-privacidad"
                        className="transition hover:text-[#83a0ab]"
                    >
                        Política de privacidad
                    </Link>

                    <Link
                        href="/terminos-y-condiciones"
                        className="transition hover:text-[#83a0ab]"
                    >
                        Términos y condiciones
                    </Link>
                </div>
            </div>

            <div className="relative z-10 mx-auto mt-4 max-w-6xl text-xs leading-relaxed text-white/35">
                La información publicada en este sitio es orientativa y no reemplaza
                una consulta médica personalizada.
            </div>
        </footer>
    );
}