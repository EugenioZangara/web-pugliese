"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Testimonios() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const itemsRef = useRef<HTMLDivElement[]>([]);

    const testimonios = [
        "Me sentí acompañada en todo el proceso, no solo en la cirugía.",
        "Los resultados fueron súper naturales, justo lo que buscaba.",
        "Viajé desde el interior y me ayudaron con todo.",
        "Tenía miedo, pero la contención fue clave.",
        "Volvería a elegirlo sin dudar.",
        "No es solo estética, es confianza.",
        "El seguimiento después de la cirugía fue excelente.",
        "Me cambió la forma de verme y sentirme.",
    ];

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
            ).fromTo(
                itemsRef.current,
                {
                    opacity: 0,
                    x: 90,
                },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.15,
                    ease: "none",
                },
                0.2
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-black text-white py-24 px-6 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                {/* TITULO */}
                <h2 ref={titleRef} className="text-3xl md:text-4xl font-semibold mb-12">
                    Testimonios reales
                </h2>

                {/* SCROLL */}
                <div className="flex gap-6 overflow-x-auto pb-4">
                    {testimonios.map((texto, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) itemsRef.current[index] = el;
                            }}
                            className="min-w-[280px] md:min-w-[320px] border border-white/20 p-6 flex-shrink-0 hover:border-white transition"
                        >
                            <p className="text-gray-300 text-sm leading-relaxed">
                                “{texto}”
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}