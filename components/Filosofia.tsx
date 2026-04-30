"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Filosofia() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                {
                    opacity: 0,
                    y: 80,
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        end: "top 35%",
                        scrub: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-black text-white py-24 px-6">
            <div
                ref={contentRef}
                className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
            >
                {/* TEXTO */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                        Más que una cirugía.
                        <br />
                        <span className="text-gray-400">
                            Una forma de acompañarte.
                        </span>
                    </h2>

                    <ul className="space-y-4 text-gray-300 text-base">
                        <li>• Procedimientos seguros, con criterio médico profesional</li>

                        <li>
                            • Acompañamiento completo y personalizado en todo el proceso
                        </li>

                        <li>
                            • Asesoramiento integral para pacientes del interior
                            <br />
                            <span className="text-gray-500 text-sm">
                                (estadía, traslado y cuidado postoperatorio)
                            </span>
                        </li>

                        <li>• Resultados naturales, pensados para tu cuerpo</li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="flex justify-center md:justify-end">
                    <a
                        href="https://wa.me/5491124793160"
                        target="_blank"
                        className="border border-white px-8 py-5 text-sm tracking-wide hover:bg-white hover:text-black transition"
                    >
                        QUIERO HABLAR CON EL DR
                    </a>
                </div>
            </div>
        </section>
    );
}