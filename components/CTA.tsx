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
            className="relative overflow-hidden bg-[#f5f8f9] px-6 py-32 text-[#25373d]"
        >
            {/* BACKGROUND CLARO PREMIUM */}
            <div className="absolute inset-0 bg-[#f5f8f9]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(131,160,171,0.28),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(86,117,128,0.12),transparent_34%),radial-gradient(circle_at_90%_75%,rgba(107,137,148,0.12),transparent_32%)]" />

            <div className="absolute inset-0 opacity-[0.45] bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(245,248,249,0.9))]" />

            <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-[#83a0ab]/55 to-transparent" />

            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#83a0ab]/18 blur-3xl" />
            <div className="absolute -bottom-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#506065]/14 blur-3xl" />

            <div
                ref={contentRef}
                className="relative z-10 mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-[#25373d]/10 bg-[#25373d] px-6 py-14 text-center text-white shadow-[0_30px_90px_rgba(37,55,61,0.28)] md:px-12 md:py-16"
            >
                {/* LUCES INTERNAS */}
                <div className="absolute -top-32 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#83a0ab]/20 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-[300px] w-[300px] rounded-full bg-[#567580]/20 blur-3xl" />

                <div className="relative z-10">
                    <span className="mb-7 inline-flex items-center rounded-full border border-[#83a0ab]/35 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#83a0ab]">
                        Evaluación personalizada
                    </span>

                    <h2 className="mb-8 text-3xl font-semibold leading-[1.08] text-white md:text-6xl">
                        Estás a un paso
                        <br />
                        <span className="text-[#83a0ab]">
                            de un cambio real.
                        </span>
                    </h2>

                    <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
                        Hablemos de tu caso y evaluemos juntos la mejor opción para vos,
                        con criterio médico, naturalidad y acompañamiento real.
                    </p>

                    <div className="mx-auto mb-10 grid max-w-2xl gap-3 text-left md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#83a0ab]">
                                01
                            </p>
                            <p className="text-sm text-white/78">
                                Evaluación de tu caso
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#83a0ab]">
                                02
                            </p>
                            <p className="text-sm text-white/78">
                                Orientación personalizada
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#83a0ab]">
                                03
                            </p>
                            <p className="text-sm text-white/78">
                                Próximo paso claro
                            </p>
                        </div>
                    </div>

                    <a
                        ref={buttonRef}
                        href="https://wa.me/5491124793160"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-[#83a0ab] bg-white px-10 py-5 text-sm font-medium tracking-[0.08em] text-[#25373d] shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-[#83a0ab] hover:text-white"
                    >
                        QUIERO CHATEAR CON EL DOCTOR
                    </a>
                </div>
            </div>
        </section>
    );
}