"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Resultados() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const ctaRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "top 25%",
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
                    imagesRef.current,
                    {
                        opacity: 0,
                        y: 80,
                        scale: 0.95,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        stagger: 0.18,
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
                    0.75
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-white text-black py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* TITULO */}
                <div ref={titleRef} className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Esto no es un filtro
                    </h2>
                    <p className="text-gray-500">
                        Son resultados reales de pacientes reales
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* BLOQUE 1 */}
                    <div className="space-y-4">
                        <img
                            ref={(el) => {
                                if (el) imagesRef.current[0] = el;
                            }}
                            src="/images/antes1.jpg"
                            alt="Antes"
                            className="w-full object-cover"
                        />
                        <img
                            ref={(el) => {
                                if (el) imagesRef.current[1] = el;
                            }}
                            src="/images/despues1.jpg"
                            alt="Después"
                            className="w-full object-cover"
                        />
                    </div>

                    {/* BLOQUE 2 */}
                    <div className="space-y-4">
                        <img
                            ref={(el) => {
                                if (el) imagesRef.current[2] = el;
                            }}
                            src="/images/antes2.jpg"
                            alt="Antes"
                            className="w-full object-cover"
                        />
                        <img
                            ref={(el) => {
                                if (el) imagesRef.current[3] = el;
                            }}
                            src="/images/despues2.jpg"
                            alt="Después"
                            className="w-full object-cover"
                        />
                    </div>
                </div>

                {/* CTA */}
                <div ref={ctaRef} className="mt-16 flex justify-center">
                    <a
                        href="https://wa.me/5491124793160"
                        target="_blank"
                        className="border border-black px-8 py-4 text-sm tracking-wide hover:bg-black hover:text-white transition"
                    >
                        QUIERO MI CAMBIO
                    </a>
                </div>
            </div>
        </section>
    );
}