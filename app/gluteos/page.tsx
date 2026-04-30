"use client";

import { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GluteosPage() {
    const heroRef = useRef<HTMLElement | null>(null);
    const infoRef = useRef<HTMLElement | null>(null);
    const tecnicaRef = useRef<HTMLElement | null>(null);
    const procesoRef = useRef<HTMLElement | null>(null);
    const ctaRef = useRef<HTMLElement | null>(null);

    const infoContentRef = useRef<HTMLDivElement | null>(null);
    const tecnicaContentRef = useRef<HTMLDivElement | null>(null);
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
                tecnicaContentRef.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: tecnicaRef.current,
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
                    <div className="absolute inset-0 bg-[url('/images/gluteos-hero.jpg')] bg-cover bg-center opacity-45" />
                    <div className="absolute inset-0 bg-black/65" />

                    <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                        <div>
                            <span className="inline-block text-sm tracking-[0.3em] uppercase text-gray-400 mb-6">
                                Glúteos
                            </span>

                            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
                                Volumen y forma
                                <br />
                                <span className="text-gray-400">
                                    con armonía corporal.
                                </span>
                            </h1>

                            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
                                La cirugía de glúteos busca mejorar la forma, proyección y
                                proporción corporal con una planificación personalizada y un
                                resultado natural.
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
                                    src="/images/gluteos-card.jpg"
                                    alt="Cirugía de glúteos"
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
                                ¿Cuándo considerar una cirugía de glúteos?
                            </h2>

                            <p className="text-gray-400 leading-relaxed mb-8">
                                No siempre se trata de aumentar volumen. Muchas veces el
                                objetivo es mejorar la forma, equilibrar proporciones y lograr
                                una silueta más armónica.
                            </p>

                            <ul className="space-y-4 text-gray-300">
                                <li>• Si buscás mejorar volumen o proyección.</li>
                                <li>• Si querés una silueta más proporcionada.</li>
                                <li>• Si hubo cambios corporales importantes.</li>
                                <li>• Si buscás un resultado natural, no exagerado.</li>
                            </ul>
                        </div>

                        <div className="border border-white/20 p-8">
                            <h3 className="text-2xl font-semibold mb-6">
                                La clave está en respetar tu cuerpo.
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                Cada paciente necesita una evaluación distinta. El objetivo no
                                es copiar una forma, sino diseñar un resultado posible, seguro y
                                armónico con tu anatomía.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TÉCNICA */}
                <section ref={tecnicaRef} className="bg-white text-black py-24 px-6">
                    <div
                        ref={tecnicaContentRef}
                        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                                Diseño personalizado, no resultados en serie.
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-8">
                                La elección de la técnica depende de tu cuerpo, tus objetivos y
                                la evaluación médica. En algunos casos puede buscarse volumen,
                                en otros definición o mejora de proporciones.
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
                                “El mejor resultado es el que se integra con tu cuerpo y se ve
                                natural.”
                            </p>
                        </div>
                    </div>
                </section>

                {/* PROCESO */}
                <section ref={procesoRef} className="py-24 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="max-w-3xl mb-14">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                                Un proceso con acompañamiento real
                            </h2>

                            <p className="text-gray-400 leading-relaxed">
                                Desde la consulta inicial hasta el postoperatorio, el objetivo
                                es que tomes una decisión informada, segura y acompañada.
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
                                    Evaluación corporal
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Se analiza tu anatomía, proporciones y objetivos para definir
                                    el mejor enfoque.
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
                                    Se define la estrategia quirúrgica buscando naturalidad,
                                    seguridad y armonía.
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
                                    Postoperatorio
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Seguimiento posterior para acompañar la recuperación y
                                    controlar la evolución.
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
                            Si buscás mejorar forma y proporción,
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