"use client";

import { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AbdomenPage() {
    const heroRef = useRef<HTMLElement | null>(null);
    const infoRef = useRef<HTMLElement | null>(null);
    const resultadosRef = useRef<HTMLElement | null>(null);
    const procesoRef = useRef<HTMLElement | null>(null);
    const ctaRef = useRef<HTMLElement | null>(null);

    const infoContentRef = useRef<HTMLDivElement | null>(null);
    const resultImagesRef = useRef<HTMLImageElement[]>([]);
    const procesoItemsRef = useRef<HTMLDivElement[]>([]);
    const ctaContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                heroRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.1,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(
                infoContentRef.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: infoRef.current,
                        start: "top 85%",
                        end: "top 35%",
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                resultImagesRef.current,
                { opacity: 0, y: 80, scale: 0.96 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: resultadosRef.current,
                        start: "top 85%",
                        end: "top 25%",
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                procesoItemsRef.current,
                { opacity: 0, y: 70 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: procesoRef.current,
                        start: "top 85%",
                        end: "top 30%",
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                ctaContentRef.current,
                { opacity: 0, y: 70 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 85%",
                        end: "top 35%",
                        scrub: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Navbar />

            <main className="bg-black text-white">
                {/* HERO */}
                <section
                    ref={heroRef}
                    className="relative min-h-screen flex items-center px-6 pt-28 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/images/abdomen-hero.jpg')] bg-cover bg-center opacity-45" />
                    <div className="absolute inset-0 bg-black/65" />

                    <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                        <div>
                            <span className="inline-block text-sm tracking-[0.3em] uppercase text-gray-400 mb-6">
                                Abdomen
                            </span>

                            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
                                Recuperá armonía
                                <br />
                                <span className="text-gray-400">
                                    y definición corporal.
                                </span>
                            </h1>

                            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
                                La cirugía de abdomen busca mejorar el contorno corporal,
                                tratar exceso de piel o flacidez, y lograr una silueta más
                                armónica con un abordaje personalizado.
                            </p>

                            <a
                                href="https://wa.me/5491124793160"
                                target="_blank"
                                className="inline-block border border-white px-8 py-4 text-sm tracking-wide hover:bg-white hover:text-black transition"
                            >
                                QUIERO EVALUAR MI CASO
                            </a>
                        </div>

                        <div className="hidden md:block border border-white/20 p-6">
                            <div className="aspect-[4/5] bg-white/10 overflow-hidden">
                                <img
                                    src="/images/abdomen-card.jpg"
                                    alt="Cirugía de abdomen"
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* INFO */}
                <section ref={infoRef} className="py-24 px-6 border-t border-white/10">
                    <div
                        ref={infoContentRef}
                        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                                ¿Cuándo considerar una cirugía de abdomen?
                            </h2>

                            <p className="text-gray-400 leading-relaxed mb-8">
                                Muchas veces el abdomen cambia después de embarazos, pérdida de
                                peso o cambios corporales importantes. La evaluación médica
                                permite definir si el tratamiento indicado es una liposucción,
                                una abdominoplastia o una combinación.
                            </p>

                            <ul className="space-y-4 text-gray-300">
                                <li>• Si hay exceso de piel o flacidez abdominal.</li>
                                <li>• Si buscás mejorar el contorno y la definición.</li>
                                <li>• Después de embarazos o cambios importantes de peso.</li>
                                <li>• Si querés un resultado armónico y natural.</li>
                            </ul>
                        </div>

                        <div className="border border-white/20 p-8">
                            <h3 className="text-2xl font-semibold mb-6">
                                No todos los abdómenes necesitan lo mismo.
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                La clave está en un diagnóstico correcto. No se trata de aplicar
                                una técnica estándar, sino de entender tu cuerpo, tus objetivos
                                y el procedimiento más seguro para tu caso.
                            </p>
                        </div>
                    </div>
                </section>

                {/* RESULTADOS */}
                <section
                    ref={resultadosRef}
                    className="bg-white text-black py-24 px-6"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                                Resultados antes y después
                            </h2>

                            <p className="text-gray-500">
                                Cambios reales, con foco en proporción, naturalidad y seguridad.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <img
                                ref={(el) => {
                                    if (el) resultImagesRef.current[0] = el;
                                }}
                                src="/images/abdomen-antes-despues-1.jpg"
                                alt="Resultado abdomen antes y después"
                                className="w-full object-cover"
                            />

                            <img
                                ref={(el) => {
                                    if (el) resultImagesRef.current[1] = el;
                                }}
                                src="/images/abdomen-antes-despues-2.jpg"
                                alt="Resultado abdomen antes y después"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* PROCESO */}
                <section ref={procesoRef} className="py-24 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="max-w-3xl mb-14">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                                Un proceso pensado con criterio médico
                            </h2>

                            <p className="text-gray-400 leading-relaxed">
                                Desde la primera consulta se evalúa qué procedimiento es el más
                                adecuado para tu caso, siempre priorizando seguridad,
                                naturalidad y acompañamiento.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div
                                ref={(el) => {
                                    if (el) procesoItemsRef.current[0] = el;
                                }}
                                className="border border-white/20 p-6"
                            >
                                <span className="text-gray-500 text-sm">01</span>
                                <h3 className="text-xl font-medium mt-3 mb-4">
                                    Evaluación inicial
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Se analiza tu anatomía, antecedentes y objetivos para definir
                                    el mejor camino.
                                </p>
                            </div>

                            <div
                                ref={(el) => {
                                    if (el) procesoItemsRef.current[1] = el;
                                }}
                                className="border border-white/20 p-6"
                            >
                                <span className="text-gray-500 text-sm">02</span>
                                <h3 className="text-xl font-medium mt-3 mb-4">
                                    Planificación
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Se determina si corresponde liposucción, abdominoplastia o una
                                    estrategia combinada.
                                </p>
                            </div>

                            <div
                                ref={(el) => {
                                    if (el) procesoItemsRef.current[2] = el;
                                }}
                                className="border border-white/20 p-6"
                            >
                                <span className="text-gray-500 text-sm">03</span>
                                <h3 className="text-xl font-medium mt-3 mb-4">
                                    Seguimiento
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Acompañamiento durante el postoperatorio para una recuperación
                                    más tranquila y controlada.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section
                    ref={ctaRef}
                    className="bg-black text-white py-32 px-6 text-center border-t border-white/10"
                >
                    <div ref={ctaContentRef} className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-10 leading-tight">
                            Si querés mejorar tu abdomen,
                            <br />
                            empecemos por evaluar tu caso.
                        </h2>

                        <p className="text-gray-400 mb-12">
                            Hablemos de tus objetivos y veamos cuál es la mejor alternativa
                            para vos.
                        </p>

                        <a
                            href="https://wa.me/5491124793160"
                            target="_blank"
                            className="inline-block border border-white px-10 py-5 text-sm tracking-wide hover:bg-white hover:text-black transition"
                        >
                            QUIERO CHATEAR CON EL DOCTOR
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}