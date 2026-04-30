"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CTA() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "top 35%",
                    scrub: true,
                },
            });

            tl.fromTo(
                contentRef.current,
                {
                    opacity: 0,
                    y: 70,
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                }
            ).fromTo(
                buttonRef.current,
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.96,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "none",
                },
                0.25
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-black text-white py-32 px-6 text-center"
        >
            <div ref={contentRef} className="max-w-3xl mx-auto">
                {/* TEXTO */}
                <h2 className="text-3xl md:text-5xl font-semibold mb-10 leading-tight">
                    Estás a un paso de un cambio real
                </h2>

                {/* SUB */}
                <p className="text-gray-400 mb-12">
                    Hablemos de tu caso y evaluamos juntos la mejor opción para vos
                </p>

                {/* BOTON */}
                <a
                    ref={buttonRef}
                    href="https://wa.me/5491124793160"
                    target="_blank"
                    className="inline-block border border-white px-10 py-5 text-sm tracking-wide hover:bg-white hover:text-black transition"
                >
                    QUIERO CHATEAR CON EL DOCTOR
                </a>
            </div>
        </section>
    );
}