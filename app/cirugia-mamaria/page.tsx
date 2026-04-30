"use client";

import { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CirugiaMamariaPage() {
    const heroRef = useRef<HTMLElement | null>(null);
    const infoRef = useRef<HTMLElement | null>(null);
    const resultadosRef = useRef<HTMLElement | null>(null);
    const testimoniosRef = useRef<HTMLElement | null>(null);
    const ctaRef = useRef<HTMLElement | null>(null);

    const infoContentRef = useRef<HTMLDivElement | null>(null);
    const resultImagesRef = useRef<HTMLImageElement[]>([]);
    const testimoniosItemsRef = useRef<HTMLDivElement[]>([]);
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
                testimoniosItemsRef.current,
                { opacity: 0, x: 90 },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: testimoniosRef.current,
                        start: "top 85%",
                        end: "top 35%",
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
                    <div className="absolute inset-0 bg-[url('/images/mamaria-hero.jpg')] bg-cover bg-center opacity-45" />
                    <div className="absolute inset-0 bg-black/65" />

                    <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                        <div>
                            <span className="inline-block text-sm tracking-[0.3em] uppercase text-gray-400 mb-6">
                                Cirugía Mamaria
                            </span>

                            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
                                Resultados naturales,
                                <br />
                                <span className="text-gray-400">pensados para tu cuerpo.</span>
                            </h1>

                            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
                                Una cirugía mamaria no debería responder a un molde. Cada caso
                                necesita evaluación, planificación y criterio estético
                                profesional.
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
                                    src="/images/mamaria-card.jpg"
                                    alt="Cirugía mamaria con resultados naturales"
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROBLEMA / SOLUCIÓN */}
                <section ref={infoRef} className="py-24 px-6 border-t border-white/10">
                    <div
                        ref={infoContentRef}
                        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                                ¿Cuándo considerar una cirugía mamaria?
                            </h2>

                            <p className="text-gray-400 leading-relaxed mb-8">
                                Muchas pacientes no buscan “cambiar por completo”, sino recuperar
                                armonía, mejorar proporciones o sentirse más seguras con su
                                cuerpo.
                            </p>

                            <ul className="space-y-4 text-gray-300">
                                <li>• Si querés mejorar la forma y el volumen.</li>
                                <li>• Después de cambios como embarazo o pérdida de peso.</li>
                                <li>• Si buscás mayor confianza y armonía corporal.</li>
                                <li>• Si querés un resultado natural, no exagerado.</li>
                            </ul>
                        </div>

                        <div className="border border-white/20 p-8">
                            <h3 className="text-2xl font-semibold mb-6">
                                El objetivo no es copiar un resultado.
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                El objetivo es diseñar una opción posible, segura y coherente
                                con tu cuerpo. Por eso la consulta inicial es clave: permite
                                evaluar tu caso, despejar dudas y planificar el procedimiento
                                con criterio.
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
                                Cambios reales, con foco en naturalidad y proporción.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <img
                                ref={(el) => {
                                    if (el) resultImagesRef.current[0] = el;
                                }}
                                src="/images/mamaria-antes-despues-1.jpg"
                                alt="Resultado cirugía mamaria antes y después"
                                className="w-full object-cover"
                            />

                            <img
                                ref={(el) => {
                                    if (el) resultImagesRef.current[1] = el;
                                }}
                                src="/images/mamaria-antes-despues-2.jpg"
                                alt="Resultado cirugía mamaria antes y después"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* TESTIMONIOS */}
                <section
                    ref={testimoniosRef}
                    className="bg-black text-white py-24 px-6 overflow-hidden"
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
                            Testimonios
                        </h2>

                        <div className="flex gap-6 overflow-x-auto pb-4">
                            {[
                                "Me explicó todo con claridad y eso me dio mucha tranquilidad.",
                                "Buscaba algo natural, y el resultado fue justo lo que quería.",
                                "Me sentí acompañada desde la primera consulta.",
                                "El postoperatorio fue mucho más tranquilo de lo que imaginaba.",
                            ].map((texto, index) => (
                                <div
                                    key={index}
                                    ref={(el) => {
                                        if (el) testimoniosItemsRef.current[index] = el;
                                    }}
                                    className="min-w-[280px] md:min-w-[340px] border border-white/20 p-6 flex-shrink-0"
                                >
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        “{texto}”
                                    </p>
                                </div>
                            ))}
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
                            Si lo estás pensando,
                            <br />
                            lo vemos en consulta.
                        </h2>

                        <p className="text-gray-400 mb-12">
                            Hablemos de tu caso y evaluemos la mejor opción para vos.
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