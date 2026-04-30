"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Procedimientos() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const ctaRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "top 30%",
                    scrub: true,
                },
            });

            tl.fromTo(
                titleRef.current,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                }
            )
                .fromTo(
                    cardsRef.current,
                    {
                        opacity: 0,
                        y: 80,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.25,
                        ease: "none",
                    },
                    0.2
                )
                .fromTo(
                    ctaRef.current,
                    {
                        opacity: 0,
                        y: 40,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        ease: "none",
                    },
                    0.65
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-black text-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* TITULO */}
                <h2
                    ref={titleRef}
                    className="text-3xl md:text-4xl font-semibold mb-12"
                >
                    Procedimientos destacados
                </h2>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* CARD 1 */}
                    <div
                        ref={(el) => {
                            if (el) cardsRef.current[0] = el;
                        }}
                        className="border border-white/20 p-6 hover:border-white transition"
                    >
                        <h3 className="text-xl font-medium mb-4">Liposucción</h3>

                        <p className="text-gray-400 text-sm mb-6">
                            Definición corporal con resultados naturales y proporcionales.
                        </p>

                        <a href="#" className="text-sm underline hover:text-gray-300">
                            Ver más
                        </a>
                    </div>

                    {/* CARD 2 */}
                    <div
                        ref={(el) => {
                            if (el) cardsRef.current[1] = el;
                        }}
                        className="border border-white/20 p-6 hover:border-white transition"
                    >
                        <h3 className="text-xl font-medium mb-4">Cirugía mamaria</h3>

                        <p className="text-gray-400 text-sm mb-6">
                            Aumento, reducción o levantamiento con diseño personalizado.
                        </p>

                        <a href="#" className="text-sm underline hover:text-gray-300">
                            Ver más
                        </a>
                    </div>

                    {/* CARD 3 */}
                    <div
                        ref={(el) => {
                            if (el) cardsRef.current[2] = el;
                        }}
                        className="border border-white/20 p-6 hover:border-white transition"
                    >
                        <h3 className="text-xl font-medium mb-4">Glúteos</h3>

                        <p className="text-gray-400 text-sm mb-6">
                            Mejora de forma y volumen respetando la armonía corporal.
                        </p>

                        <a href="#" className="text-sm underline hover:text-gray-300">
                            Ver más
                        </a>
                    </div>
                </div>

                {/* CTA */}
                <div ref={ctaRef} className="mt-16 flex justify-center">
                    <a
                        href="https://wa.me/5491124793160"
                        target="_blank"
                        className="border border-white px-8 py-4 text-sm tracking-wide hover:bg-white hover:text-black transition"
                    >
                        CONTACTAR
                    </a>
                </div>
            </div>
        </section>
    );
}