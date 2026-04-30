import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10 px-6 py-14">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {/* MARCA */}
                <div>
                    <Link href="/" className="inline-block mb-4">
                        <span className="block text-xl font-semibold">
                            Dr. Víctor Pugliese
                        </span>
                        <span className="block text-sm text-gray-500">
                            Cirujano Plástico
                        </span>
                    </Link>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Cirugía plástica con resultados naturales, evaluación personalizada
                        y acompañamiento real en todo el proceso.
                    </p>
                </div>

                {/* NAVEGACIÓN */}
                <div>
                    <h3 className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-5">
                        Navegación
                    </h3>

                    <nav className="flex flex-col gap-3 text-sm text-gray-300">
                        <Link href="/" className="hover:text-white transition">
                            Home
                        </Link>

                        <Link
                            href="/cirugia-mamaria"
                            className="hover:text-white transition"
                        >
                            Cirugía Mamaria
                        </Link>

                        <Link href="#" className="hover:text-white transition">
                            Abdomen
                        </Link>

                        <Link href="#" className="hover:text-white transition">
                            Rinoplastía
                        </Link>

                        <Link href="#" className="hover:text-white transition">
                            Glúteos
                        </Link>

                        <Link href="#" className="hover:text-white transition">
                            Quién soy
                        </Link>
                    </nav>
                </div>

                {/* CONTACTO */}
                <div>
                    <h3 className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-5">
                        Contacto
                    </h3>

                    <div className="flex flex-col gap-4 text-sm text-gray-300">
                        <a
                            href="https://wa.me/5491124793160"
                            target="_blank"
                            className="hover:text-white transition"
                        >
                            WhatsApp: 11 2479-3160
                        </a>

                        <p className="text-gray-500 leading-relaxed">
                            Solicitá una evaluación personalizada para conocer la mejor opción
                            para tu caso.
                        </p>

                        <a
                            href="https://wa.me/5491124793160"
                            target="_blank"
                            className="inline-block w-fit border border-white px-5 py-3 text-xs tracking-wide hover:bg-white hover:text-black transition"
                        >
                            RESERVAR CONSULTA
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-gray-500">
                <p>© 2026 Dr. Víctor Pugliese. Todos los derechos reservados.</p>

                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition">
                        Política de privacidad
                    </a>
                    <a href="#" className="hover:text-white transition">
                        Términos y condiciones
                    </a>
                </div>
            </div>
        </footer>
    );
}