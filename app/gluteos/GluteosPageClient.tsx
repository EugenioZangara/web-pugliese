"use client";

import { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GluteosPage() {
    const heroRef = useRef<HTMLElement | null>(null);
    const infoRef = useRef<HTMLElement | null>(null);
    const objetivosRef = useRef<HTMLElement | null>(null);
    const procesoRef = useRef<HTMLElement | null>(null);
    const resultadosRef = useRef<HTMLElement | null>(null);
    const testimoniosRef = useRef<HTMLElement | null>(null);
    const ctaRef = useRef<HTMLElement | null>(null);

    const infoContentRef = useRef<HTMLDivElement | null>(null);
    const objetivosItemsRef = useRef<HTMLDivElement[]>([]);
    const procesoItemsRef = useRef<HTMLDivElement[]>([]);
    const resultImagesRef = useRef<HTMLDivElement[]>([]);
    const testimoniosTitleRef = useRef<HTMLDivElement | null>(null);
    const ctaContentRef = useRef<HTMLDivElement | null>(null);

    const objetivos = [
        "Mejorar forma y proyección",
        "Aumentar volumen de manera armónica",
        "Corregir asimetrías",
        "Mejorar proporción corporal",
        "Lograr un resultado natural",
    ];

    const proceso = [
        {
            number: "01",
            title: "Evaluación corporal",
            text: "Analizamos tu anatomía, proporciones, objetivos y expectativas para definir una estrategia segura.",
        },
        {
            number: "02",
            title: "Diseño personalizado",
            text: "No buscamos un volumen estándar, sino una forma coherente con tu cuerpo y tu armonía general.",
        },
        {
            number: "03",
            title: "Seguimiento real",
            text: "El acompañamiento postoperatorio ayuda a controlar la evolución y transitar el proceso con tranquilidad.",
        },
    ];

    const testimonios = [
        {
            image: "/images/testimonios/testimonio-1.jpg",
            quote:
                "Buscaba mejorar la forma sin que se viera exagerado, y el resultado fue muy natural.",
            category: "Cirugía de glúteos",
            tag: "Naturalidad",
        },
        {
            image: "/images/testimonios/testimonio-2.png",
            quote:
                "Me explicó qué podía lograrse en mi caso y eso me dio mucha seguridad.",
            category: "Evaluación personalizada",
            tag: "Confianza",
        },
        {
            image: "/images/testimonios/testimonio-3.png",
            quote:
                "Sentí acompañamiento en todo el proceso, especialmente después de la cirugía.",
            category: "Seguimiento",
            tag: "Acompañamiento real",
        },
        {
            image: "/images/testimonios/testimonio-4.png",
            quote:
                "Quería verme más armónica, no cambiar por completo, y eso fue lo que logramos.",
            category: "Armonía corporal",
            tag: "Resultado natural",
        },
        {
            image: "/images/testimonios/testimonio-5.png",
            quote:
                "La evaluación me ayudó a entender cuál era la mejor opción para mi cuerpo.",
            category: "Consulta inicial",
            tag: "Claridad",
        },
    ];

    const testimoniosLoop = [...testimonios, ...testimonios];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isMobile = window.matchMedia("(max-width: 767px)").matches;

        const ctx = gsap.context(() => {
            const animateIn = (
                target: gsap.TweenTarget,
                trigger: Element | null,
                fromVars: gsap.TweenVars = { opacity: 0, y: isMobile ? 26 : 56 },
                stagger?: number
            ) => {
                gsap.fromTo(target, fromVars, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: reduceMotion ? 0 : isMobile ? 0.55 : 0.8,
                    ease: "power2.out",
                    stagger: reduceMotion ? 0 : stagger,
                    scrollTrigger: reduceMotion
                        ? undefined
                        : {
                              trigger,
                              start: isMobile ? "top 88%" : "top 82%",
                              toggleActions: "play none none none",
                          },
                });
            };

            gsap.fromTo(
                heroRef.current,
                { opacity: 0, y: reduceMotion ? 0 : 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: reduceMotion ? 0 : 0.75,
                    ease: "power3.out",
                }
            );

            animateIn(infoContentRef.current, infoRef.current);
            animateIn(objetivosItemsRef.current, objetivosRef.current, undefined, isMobile ? 0.06 : 0.12);
            animateIn(procesoItemsRef.current, procesoRef.current, undefined, isMobile ? 0.06 : 0.14);
            animateIn(
                resultImagesRef.current,
                resultadosRef.current,
                { opacity: 0, y: isMobile ? 24 : 52, scale: 0.98 },
                isMobile ? 0.06 : 0.14
            );
            animateIn(testimoniosTitleRef.current, testimoniosRef.current);
            animateIn(ctaContentRef.current, ctaRef.current);
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Navbar />

            <main className="overflow-x-hidden bg-white text-[#25373d]">
                <section
                    ref={heroRef}
                    className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#25373d] px-5 pb-8 pt-24 text-white sm:px-6 sm:pb-10 md:items-center md:py-28"
                >
                    <img
                        src="/images/gluteos-card.png"
                        alt=""
                        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center opacity-70 grayscale saturate-0 contrast-110 brightness-[0.72] md:hidden"
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-[#25373d]/72 mix-blend-color md:hidden" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(131,160,171,0.28),transparent_32%),linear-gradient(135deg,rgba(37,55,61,0.92)_0%,rgba(37,55,61,0.74)_42%,rgba(80,96,101,0.86)_100%)] md:bg-[radial-gradient(circle_at_18%_18%,rgba(131,160,171,0.24),transparent_32%),linear-gradient(135deg,#25373d_0%,#25373d_42%,#506065_100%)]" />

                    <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[1.02fr_0.98fr] md:gap-14">
                        <div className="max-w-xl">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/35 bg-white/[0.08] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[#b7cbd2] backdrop-blur sm:text-xs sm:tracking-[0.18em]">
                                Resultados naturales
                            </span>

                            <h1 className="mb-5 text-balance text-[2.12rem] font-semibold leading-[1.04] text-white min-[390px]:text-[2.35rem] sm:text-5xl md:text-6xl">
                                Forma, volumen y armonía corporal.
                            </h1>

                            <p className="mb-6 max-w-lg text-[0.98rem] leading-7 text-white/78 sm:mb-7 sm:text-lg">
                                Una planificación personalizada para mejorar la proporción del
                                cuerpo, priorizando resultados naturales y una evaluación médica
                                honesta.
                            </p>

                            <a
                                href="https://wa.me/5491124793160"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-white/20 bg-[#25D366] px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.05em] text-white shadow-[0_16px_34px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-8"
                            >
                                Escribime y vemos tu caso
                            </a>

                            <p className="mt-3 text-center text-xs leading-5 text-white/60 sm:text-left">
                                Evaluación personalizada y acompañamiento real desde la primera consulta.
                            </p>
                        </div>

                        <div className="hidden rounded-[1.5rem] border border-white/12 bg-white/[0.06] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur md:block">
                            <div className="aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-white/10">
                                <img
                                    src="/images/gluteos-card.png"
                                    alt="Cirugía de glúteos con resultado natural"
                                    className="h-full w-full object-cover object-center opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    ref={infoRef}
                    className="relative overflow-hidden bg-[#f5f8f9] px-5 py-16 text-[#25373d] sm:px-6 md:py-24"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.1),transparent_36%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />

                    <div
                        ref={infoContentRef}
                        className="relative z-10 mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-2 md:gap-14"
                    >
                        <div>
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/45 bg-white px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#567580] shadow-sm sm:text-xs">
                                Evaluación personalizada
                            </span>

                            <h2 className="mb-5 text-balance text-[2rem] font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
                                ¿Cuándo considerar una cirugía de glúteos?
                            </h2>

                            <p className="mb-6 leading-7 text-[#506065]">
                                Muchas personas buscan mejorar forma, proyección o proporción,
                                pero cada cuerpo necesita una indicación distinta y expectativas
                                realistas.
                            </p>

                            <ul className="space-y-3.5 text-[0.97rem] leading-6 text-[#25373d]">
                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#83a0ab]" />
                                    Si querés mejorar forma y volumen de manera armónica.
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#83a0ab]" />
                                    Si buscás más proporción entre cintura, cadera y glúteos.
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#83a0ab]" />
                                    Si querés un resultado natural, sin exageraciones.
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#83a0ab]" />
                                    Si necesitás saber qué opción es segura para tu caso.
                                </li>
                            </ul>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-[#25373d]/10 bg-white p-6 shadow-[0_18px_46px_rgba(37,55,61,0.1)] md:p-8">
                            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#83a0ab]/16 blur-3xl" />

                            <div className="relative z-10">
                                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#6b8994]">
                                    Diseño personalizado
                                </p>

                                <h3 className="mb-4 text-balance text-[1.45rem] font-semibold leading-tight md:text-2xl">
                                    El objetivo no es más volumen a cualquier costo.
                                </h3>

                                <p className="leading-7 text-[#506065]">
                                    La clave está en lograr una forma proporcionada, segura y
                                    coherente con tu cuerpo. Por eso la evaluación médica define
                                    qué puede lograrse en cada caso.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    ref={objetivosRef}
                    className="relative overflow-hidden bg-[#25373d] px-5 py-16 text-white sm:px-6 md:py-24"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(131,160,171,0.2),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(86,117,128,0.18),transparent_36%)]" />
                    {/* Cuadriculado removido */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div className="mb-8 max-w-3xl md:mb-14">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/30 bg-white/[0.06] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#b7cbd2] backdrop-blur sm:text-xs">
                                Qué se puede trabajar
                            </span>

                            <h2 className="mb-5 text-balance text-[2rem] font-semibold leading-[1.08] text-white sm:text-4xl md:text-5xl">
                                Cada cuerpo necesita una planificación distinta.
                            </h2>

                            <p className="max-w-2xl leading-7 text-white/70">
                                El procedimiento se define según tu anatomía, objetivos y
                                posibilidades reales, priorizando seguridad y naturalidad.
                            </p>
                        </div>

                        <div className="grid gap-3.5 sm:grid-cols-2 md:grid-cols-5 md:gap-5">
                            {objetivos.map((item, index) => (
                                <div
                                    key={item}
                                    ref={(el) => {
                                        if (el) objetivosItemsRef.current[index] = el;
                                    }}
                                    className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-5 shadow-[0_18px_46px_rgba(0,0,0,0.16)] backdrop-blur-xl md:p-6"
                                >
                                    <span className="mb-5 block text-xs uppercase tracking-[0.18em] text-[#83a0ab]">
                                        0{index + 1}
                                    </span>

                                    <h3 className="text-base font-medium leading-snug text-white">
                                        {item}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    ref={procesoRef}
                    className="relative overflow-hidden bg-white px-5 py-16 text-[#25373d] sm:px-6 md:py-24"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.15),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.09),transparent_36%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div className="mb-8 max-w-3xl md:mb-14">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/45 bg-[#f5f8f9] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#567580] sm:text-xs">
                                Proceso
                            </span>

                            <h2 className="mb-5 text-balance text-[2rem] font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
                                Un diseño personalizado para tu cuerpo.
                            </h2>

                            <p className="max-w-2xl leading-7 text-[#506065]">
                                No se trata de aplicar una técnica estándar, sino de definir una
                                estrategia segura, proporcionada y posible para tu caso.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                            {proceso.map((item, index) => (
                                <div
                                    key={item.number}
                                    ref={(el) => {
                                        if (el) procesoItemsRef.current[index] = el;
                                    }}
                                    className="relative overflow-hidden rounded-2xl border border-[#25373d]/10 bg-[#f5f8f9] p-6 shadow-[0_18px_46px_rgba(37,55,61,0.09)] md:p-7"
                                >
                                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#83a0ab]/12 blur-3xl" />

                                    <span className="text-xs uppercase tracking-[0.18em] text-[#6b8994]">
                                        {item.number}
                                    </span>

                                    <h3 className="mb-3 mt-4 text-xl font-medium text-[#25373d]">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-7 text-[#506065]">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-2xl border border-[#25373d]/10 bg-[#25373d] p-5 text-white shadow-[0_18px_46px_rgba(37,55,61,0.12)] md:mt-10 md:flex md:items-center md:justify-between md:gap-8 md:p-6">
                            <div className="mb-5 md:mb-0">
                                <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#b7cbd2]">
                                    Evaluación personalizada
                                </p>
                                <h3 className="text-balance text-xl font-semibold leading-tight md:text-2xl">
                                    Cada caso es único. Escribime y vemos qué opción tiene sentido para vos.
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-white/68">
                                    También podés consultar por organización de la consulta si venís
                                    desde el interior o por formas de pago disponibles.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/5491124793160"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-[50px] w-full shrink-0 items-center justify-center rounded-full bg-[#25D366] px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.05em] text-white shadow-[0_16px_34px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#83a0ab] md:w-auto"
                            >
                                Consultar por WhatsApp
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    ref={resultadosRef}
                    className="relative overflow-hidden bg-[#25373d] px-5 py-16 text-white sm:px-6 md:py-24"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(131,160,171,0.2),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(86,117,128,0.18),transparent_36%)]" />
                    {/* Cuadriculado removido */}

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div className="mb-8 text-left md:mb-14 md:text-center">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/30 bg-white/[0.06] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#b7cbd2] backdrop-blur sm:text-xs">
                                Resultados reales
                            </span>

                            <h2 className="mb-4 text-balance text-[2rem] font-semibold leading-[1.08] text-white sm:text-4xl md:text-5xl">
                                Antes y después
                            </h2>

                            <p className="max-w-2xl text-base leading-7 text-white/70 md:mx-auto md:text-lg">
                                Cambios reales, con foco en proporción corporal, naturalidad y
                                planificación personalizada.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 md:gap-8">
                            <div
                                ref={(el) => {
                                    if (el) resultImagesRef.current[0] = el;
                                }}
                                className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-2.5 shadow-[0_18px_46px_rgba(0,0,0,0.16)] backdrop-blur-xl md:p-4"
                            >
                                <img
                                    src="/images/gluteos-antes-despues-1.png"
                                    alt="Resultado cirugía de glúteos antes y después"
                                    className="aspect-[4/5] w-full rounded-xl bg-[#25373d] object-contain object-center md:aspect-auto md:h-[520px] md:rounded-[1.4rem] md:object-cover"
                                />
                            </div>

                            <div
                                ref={(el) => {
                                    if (el) resultImagesRef.current[1] = el;
                                }}
                                className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-2.5 shadow-[0_18px_46px_rgba(0,0,0,0.16)] backdrop-blur-xl md:p-4"
                            >
                                <img
                                    src="/images/gluteos-antes-despues-2.png"
                                    alt="Resultado cirugía de glúteos antes y después"
                                    className="aspect-[4/5] w-full rounded-xl bg-[#25373d] object-contain object-center md:aspect-auto md:h-[520px] md:rounded-[1.4rem] md:object-cover"
                                />
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl md:mt-10 md:p-6">
                            <p className="text-sm leading-7 text-white/70">
                                Las imágenes muestran casos reales. Cada cuerpo y proceso de
                                recuperación es distinto; por eso la evaluación médica es clave
                                para definir expectativas realistas.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    ref={testimoniosRef}
                    className="relative overflow-hidden bg-white px-5 py-16 text-[#25373d] sm:px-6 md:py-24"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.09),transparent_36%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div ref={testimoniosTitleRef} className="mb-8 max-w-3xl md:mb-12">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/45 bg-[#f5f8f9] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#567580] sm:text-xs">
                                Experiencias reales
                            </span>

                            <h2 className="mb-4 text-balance text-[2rem] font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
                                Testimonios de pacientes acompañados.
                            </h2>

                            <p className="max-w-2xl text-base leading-7 text-[#506065] md:text-lg">
                                La cirugía de glúteos también requiere confianza, claridad y un
                                proceso acompañado desde la primera consulta.
                            </p>

                            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#6b8994]">
                                Imágenes ilustrativas del proceso de atención.
                            </p>
                        </div>

                        <div className="relative -mx-5 overflow-hidden sm:-mx-6">
                            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-white to-transparent md:w-24" />
                            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-white to-transparent md:w-24" />

                            <div className="flex w-max animate-[testimonialMarquee_58s_linear_infinite] gap-4 pr-4 motion-reduce:animate-none md:gap-6 md:pr-6 md:hover:[animation-play-state:paused]">
                                {testimoniosLoop.map((item, index) => (
                                    <div
                                        key={`${item.quote}-${index}`}
                                        aria-hidden={index >= testimonios.length}
                                        className="group relative w-[82vw] max-w-[330px] flex-shrink-0 overflow-hidden rounded-2xl border border-[#25373d]/10 bg-[#f5f8f9] shadow-[0_18px_46px_rgba(37,55,61,0.09)] transition duration-300 hover:border-[#83a0ab]/70 hover:bg-white md:w-[370px]"
                                    >
                                        <div className="relative h-44 overflow-hidden bg-[#25373d] md:h-48">
                                            <img
                                                src={item.image}
                                                alt="Imagen ilustrativa del proceso de atención"
                                                className="h-full w-full object-cover object-center opacity-85 transition duration-500 motion-reduce:transition-none md:group-hover:scale-[1.04]"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#25373d]/75 via-[#25373d]/15 to-transparent" />

                                            <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-white/12 px-3 py-2 text-[0.66rem] font-medium uppercase tracking-[0.14em] text-white backdrop-blur md:bottom-4 md:left-4 md:px-4">
                                                {item.tag}
                                            </span>
                                        </div>

                                        <div className="relative p-6 md:p-7">
                                            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/65 to-transparent" />

                                            <div className="mb-5 flex items-center justify-between gap-4">
                                                <span className="text-[0.66rem] font-medium uppercase tracking-[0.17em] text-[#6b8994]">
                                                    Testimonio real
                                                </span>

                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#83a0ab]/35 bg-white text-xl leading-none text-[#83a0ab]">
                                                    &rdquo;
                                                </span>
                                            </div>

                                            <p className="min-h-[112px] text-[0.98rem] leading-7 text-[#25373d]">
                                                &ldquo;{item.quote}&rdquo;
                                            </p>

                                            <div className="mt-6 flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-[#83a0ab]" />
                                                <span className="text-[0.66rem] uppercase tracking-[0.16em] text-[#506065]">
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    ref={ctaRef}
                    className="relative overflow-hidden bg-[#506065] px-5 py-16 text-white sm:px-6 md:py-28"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#506065_0%,#567580_50%,#6b8994_100%)]" />
                    {/* Cuadriculado removido */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                    <div
                        ref={ctaContentRef}
                        className="relative z-10 mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/14 bg-[#25373d]/78 px-5 py-10 text-center text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-6 md:px-12 md:py-16"
                    >
                        <div className="absolute -top-32 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#83a0ab]/18 blur-3xl" />

                        <div className="relative z-10">
                            <span className="mb-5 inline-flex rounded-full border border-[#83a0ab]/35 bg-white/[0.06] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#b7cbd2] sm:text-xs">
                                Evaluación personalizada
                            </span>

                            <h2 className="mb-5 text-balance text-[2rem] font-semibold leading-[1.08] text-white sm:text-4xl md:text-5xl">
                                Si estás pensando en una cirugía de glúteos, lo primero es evaluar tu caso.
                            </h2>

                            <p className="mx-auto mb-8 max-w-2xl leading-7 text-white/74">
                                Hablemos de tus objetivos, resolvamos tus dudas y veamos qué
                                resultado puede lograrse de forma natural y personalizada.
                            </p>

                            <a
                                href="https://wa.me/5491124793160"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/20 bg-[#25D366] px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.05em] text-white shadow-[0_16px_34px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-10"
                            >
                                Quiero chatear con el doctor
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <style jsx global>{`
                @keyframes testimonialMarquee {
                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(calc(-50% - 8px));
                    }
                }
            `}</style>
        </>
    );
}
