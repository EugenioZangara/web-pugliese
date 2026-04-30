"use client";

import { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RinoplastiaPage() {
    const heroRef = useRef<HTMLElement | null>(null);
    const infoRef = useRef<HTMLElement | null>(null);
    const funcionalRef = useRef<HTMLElement | null>(null);
    const procesoRef = useRef<HTMLElement | null>(null);
    const ctaRef = useRef<HTMLElement | null>(null);

    const infoContentRef = useRef<HTMLDivElement | null>(null);
    const funcionalContentRef = useRef<HTMLDivElement | null>(null);
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
                funcionalContentRef.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: funcionalRef.current,
                        start: "top 85%",
                        end: "top 35%",
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
                    <div className="absolute inset-0 bg-[url('/images/rinoplastia-hero.jpg')] bg-cover bg-center opacity-45" />
                    <div className="absolute inset-0 bg-black/65" />

                    <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                        <div>
                            <span className="inline-block text-sm tracking-[0.3em] uppercase text-gray-400 mb-6">
                                Rinoplastía
                            </span>

                            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
                                Armonía facial
                                <br />
                                <span className="text-gray-400">sin perder naturalidad.</span>
                            </h1>

                            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
                                La rinoplastía no es una cirugía estándar. Cada nariz, cada
                                rostro y cada objetivo requieren diagnóstico, planificación y un
                                diseño personalizado.
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
                                    src="/images/rinoplastia-card.jpg"
                                    alt="Rinoplastía con resultado natural"
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUÉ ES */}
                <section ref={infoRef} className="py-24 px-6 border-t border-white/10">
                    <div
                        ref={infoContentRef}
                        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                                ¿Qué es una rinoplastía?
                            </h2>

                            <p className="text-gray-400 leading-relaxed mb-8">
                                Es una cirugía que modifica la forma de la nariz para mejorar la
                                armonía facial y, en muchos casos, también la respiración.
                            </p>

                            <ul className="space-y-4 text-gray-300">
                                <li>• Corrección de giba o “joroba” nasal.</li>
                                <li>• Ajuste de punta caída, larga, ancha o gruesa.</li>
                                <li>• Tratamiento de nariz desviada o asimetrías.</li>
                                <li>• Evaluación de problemas funcionales como tabique.</li>
                            </ul>
                        </div>

                        <div className="border border-white/20 p-8">
                            <h3 className="text-2xl font-semibold mb-6">
                                No todos los rostros necesitan lo mismo.
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                La clave está en un diseño personalizado y natural. El objetivo
                                no es cambiar tu identidad, sino buscar una versión más armónica
                                de tu rostro.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FUNCIONAL */}
                <section
                    ref={funcionalRef}
                    className="bg-white text-black py-24 px-6"
                >
                    <div
                        ref={funcionalContentRef}
                        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                                No es solo estética.
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-8">
                                Muchas rinoplastías incluyen corrección del tabique nasal o
                                evaluación funcional. Por eso, una buena consulta no solo mira la
                                forma de la nariz, también considera cómo respirás.
                            </p>

                            <a
                                href="https://wa.me/5491124793160"
                                target="_blank"
                                className="inline-block border border-black px-8 py-4 text-sm tracking-wide hover:bg-black hover:text-white transition"
                            >
                                CONSULTAR POR MI CASO
                            </a>
                        </div>

                        <div className="border border-black/20 p-8">
                            <p className="text-2xl md:text-3xl font-semibold leading-tight">
                                “La rinoplastía no se trata de cambiarte, sino de lograr una
                                versión más armónica y natural.”
                            </p>
                        </div>
                    </div>
                </section>

                {/* PROCESO */}
                <section ref={procesoRef} className="py-24 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="max-w-3xl mb-14">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                                ¿Cómo es la cirugía y recuperación?
                            </h2>

                            <p className="text-gray-400 leading-relaxed">
                                La recuperación es progresiva. El cambio inicial puede verse
                                rápido, pero el resultado definitivo necesita tiempo para que la
                                nariz se desinflame completamente.
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
                                    Duración
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Generalmente dura entre 1 y 2 horas, según cada caso.
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
                                    Anestesia
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Habitualmente se realiza con anestesia general ambulatoria.
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
                                    Recuperación
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Puede haber inflamación, moretones y férula durante los
                                    primeros días. Los resultados son progresivos.
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
                            Si estás pensando en una rinoplastía,
                            <br />
                            lo primero es una buena evaluación.
                        </h2>

                        <p className="text-gray-400 mb-12">
                            Hablemos de tu caso y evaluemos juntos qué resultado sería
                            armónico, natural y seguro para vos.
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