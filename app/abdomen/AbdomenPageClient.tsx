"use client";

import { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AbdomenPage() {
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
        "Mejorar el contorno abdominal",
        "Tratar exceso de piel o flacidez",
        "Recuperar definición corporal",
        "Mejorar proporción y armonía",
        "Lograr un resultado natural",
    ];

    const proceso = [
        {
            number: "01",
            title: "Evaluación inicial",
            text: "Se analiza tu anatomía, antecedentes, cambios corporales y objetivos para definir el mejor camino.",
        },
        {
            number: "02",
            title: "Planificación",
            text: "Se determina si corresponde liposucción, abdominoplastia o una estrategia combinada.",
        },
        {
            number: "03",
            title: "Seguimiento",
            text: "Acompañamiento durante el postoperatorio para una recuperación más tranquila, controlada y segura.",
        },
    ];

    const testimonios = [
        {
            image: "/images/testimonios/abdomen-1.jpg",
            quote:
                "Después de los embarazos no me sentía cómoda con mi abdomen. Me explicó todo con mucha claridad.",
            category: "Cirugía de abdomen",
            tag: "Claridad",
        },
        {
            image: "/images/testimonios/abdomen-2.jpg",
            quote:
                "Buscaba algo natural, no exagerado, y me sentí acompañada desde la primera consulta.",
            category: "Resultado natural",
            tag: "Naturalidad",
        },
        {
            image: "/images/testimonios/abdomen-3.jpg",
            quote:
                "El seguimiento después de la cirugía fue clave para transitar el proceso con tranquilidad.",
            category: "Postoperatorio",
            tag: "Seguimiento",
        },
        {
            image: "/images/testimonios/abdomen-4.jpg",
            quote:
                "Tenía muchas dudas y miedo, pero la evaluación me ayudó a entender qué era posible en mi caso.",
            category: "Evaluación personalizada",
            tag: "Confianza",
        },
        {
            image: "/images/testimonios/abdomen-5.jpg",
            quote:
                "Viajé desde el interior y me orientaron con todo el proceso.",
            category: "Pacientes del interior",
            tag: "Acompañamiento",
        },
    ];

    const testimoniosLoop = [...testimonios, ...testimonios];

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
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
                    },
                }
            );

            gsap.fromTo(
                objetivosItemsRef.current,
                { opacity: 0, y: 70 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: objetivosRef.current,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
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
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
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
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
                    },
                }
            );

            gsap.fromTo(
                testimoniosTitleRef.current,
                { opacity: 0, y: 70 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: testimoniosRef.current,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
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
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Navbar />

            <main className="bg-[#ffffff] text-[#25373d]">
                {/* HERO - OSCURO */}
                <section
                    ref={heroRef}
                    className="relative flex min-h-screen items-center overflow-hidden bg-[#25373d] px-6 pt-28 text-white"
                >
                    <div className="absolute inset-0 bg-[url('/images/abdomen-hero.jpg')] bg-cover bg-center opacity-40" />
                    <div className="absolute inset-0 bg-[#25373d]/78" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#25373d]/90 via-[#25373d]/58 to-[#25373d]/96" />

                    <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#83a0ab]/18 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#567580]/22 blur-3xl" />

                    <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
                        <div>
                            <span className="mb-6 inline-flex rounded-full border border-[#83a0ab]/35 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#83a0ab] backdrop-blur">
                                Abdomen
                            </span>

                            <h1 className="mb-8 text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
                                Recuperá armonía
                                <br />
                                <span className="text-[#83a0ab]">
                                    y definición corporal.
                                </span>
                            </h1>

                            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/76">
                                La cirugía de abdomen busca mejorar el contorno corporal,
                                tratar exceso de piel o flacidez, y lograr una silueta más
                                armónica con un abordaje personalizado.
                            </p>

                            <a
                                href="https://wa.me/5491124793160"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-[#83a0ab] bg-white px-8 py-4 text-sm font-medium tracking-[0.08em] text-[#25373d] transition hover:-translate-y-0.5 hover:bg-[#83a0ab] hover:text-white"
                            >
                                QUIERO EVALUAR MI CASO
                            </a>
                        </div>

                        <div className="hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur md:block">
                            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-white/10">
                                <img
                                    src="/images/abdomen-card.jpg"
                                    alt="Cirugía de abdomen"
                                    className="h-full w-full object-cover opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* INFO - CLARO */}
                <section
                    ref={infoRef}
                    className="relative overflow-hidden bg-[#f5f8f9] px-6 py-24 text-[#25373d]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.12),transparent_36%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />

                    <div
                        ref={infoContentRef}
                        className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2"
                    >
                        <div>
                            <span className="mb-6 inline-flex rounded-full border border-[#83a0ab]/45 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#567580] shadow-sm">
                                Evaluación personalizada
                            </span>

                            <h2 className="mb-8 text-3xl font-semibold leading-[1.08] md:text-5xl">
                                ¿Cuándo considerar
                                <br />
                                <span className="text-[#567580]">
                                    una cirugía de abdomen?
                                </span>
                            </h2>

                            <p className="mb-8 leading-relaxed text-[#506065]">
                                Muchas veces el abdomen cambia después de embarazos,
                                pérdida de peso o cambios corporales importantes. La
                                evaluación médica permite definir si el tratamiento indicado
                                es una liposucción, una abdominoplastia o una combinación.
                            </p>

                            <ul className="space-y-4 text-[#25373d]">
                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#83a0ab]" />
                                    Si hay exceso de piel o flacidez abdominal.
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#83a0ab]" />
                                    Si buscás mejorar el contorno y la definición.
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#83a0ab]" />
                                    Después de embarazos o cambios importantes de peso.
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#83a0ab]" />
                                    Si querés un resultado armónico y natural.
                                </li>
                            </ul>
                        </div>

                        <div className="relative overflow-hidden rounded-[2rem] border border-[#25373d]/10 bg-white p-8 shadow-[0_24px_70px_rgba(37,55,61,0.12)]">
                            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#83a0ab]/16 blur-3xl" />

                            <div className="relative z-10">
                                <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[#6b8994]">
                                    Diagnóstico correcto
                                </p>

                                <h3 className="mb-6 text-2xl font-semibold">
                                    No todos los abdómenes necesitan lo mismo.
                                </h3>

                                <p className="leading-relaxed text-[#506065]">
                                    La clave está en un diagnóstico correcto. No se trata
                                    de aplicar una técnica estándar, sino de entender tu
                                    cuerpo, tus objetivos y el procedimiento más seguro para
                                    tu caso.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OBJETIVOS - OSCURO */}
                <section
                    ref={objetivosRef}
                    className="relative overflow-hidden bg-[#25373d] px-6 py-24 text-white"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(131,160,171,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(86,117,128,0.2),transparent_36%)]" />
                    <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px)] [background-size:56px_56px]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div className="mb-14 max-w-3xl">
                            <span className="mb-6 inline-flex rounded-full border border-[#83a0ab]/30 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#83a0ab] backdrop-blur">
                                Qué se puede trabajar
                            </span>

                            <h2 className="mb-6 text-3xl font-semibold leading-[1.08] text-white md:text-5xl">
                                Cada abdomen necesita
                                <br />
                                <span className="text-[#83a0ab]">
                                    una planificación distinta.
                                </span>
                            </h2>

                            <p className="max-w-2xl leading-relaxed text-white/68">
                                El procedimiento se define según tu anatomía, objetivos,
                                antecedentes y posibilidades reales, priorizando seguridad y
                                naturalidad.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-5">
                            {objetivos.map((item, index) => (
                                <div
                                    key={item}
                                    ref={(el) => {
                                        if (el) objetivosItemsRef.current[index] = el;
                                    }}
                                    className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                                >
                                    <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#83a0ab]/10 blur-3xl" />

                                    <span className="mb-8 block text-sm uppercase tracking-[0.22em] text-[#83a0ab]">
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

                {/* PROCESO - BLANCO */}
                <section
                    ref={procesoRef}
                    className="relative overflow-hidden bg-white px-6 py-24 text-[#25373d]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.1),transparent_36%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div className="mb-14 max-w-3xl">
                            <span className="mb-6 inline-flex rounded-full border border-[#83a0ab]/45 bg-[#f5f8f9] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#567580]">
                                Proceso
                            </span>

                            <h2 className="mb-6 text-3xl font-semibold leading-[1.08] md:text-5xl">
                                Un proceso pensado
                                <br />
                                <span className="text-[#567580]">
                                    con criterio médico.
                                </span>
                            </h2>

                            <p className="leading-relaxed text-[#506065]">
                                Desde la primera consulta se evalúa qué procedimiento es el
                                más adecuado para tu caso, siempre priorizando seguridad,
                                naturalidad y acompañamiento.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {proceso.map((item, index) => (
                                <div
                                    key={item.number}
                                    ref={(el) => {
                                        if (el) procesoItemsRef.current[index] = el;
                                    }}
                                    className="relative overflow-hidden rounded-[2rem] border border-[#25373d]/10 bg-[#f5f8f9] p-7 shadow-[0_24px_70px_rgba(37,55,61,0.1)]"
                                >
                                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#83a0ab]/12 blur-3xl" />

                                    <span className="text-sm uppercase tracking-[0.22em] text-[#6b8994]">
                                        {item.number}
                                    </span>

                                    <h3 className="mt-4 mb-4 text-xl font-medium text-[#25373d]">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-relaxed text-[#506065]">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RESULTADOS - OSCURO */}
                <section
                    ref={resultadosRef}
                    className="relative overflow-hidden bg-[#25373d] px-6 py-24 text-white"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(131,160,171,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(86,117,128,0.2),transparent_36%)]" />
                    <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px)] [background-size:56px_56px]" />

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div className="mb-16 text-center">
                            <span className="mb-6 inline-flex rounded-full border border-[#83a0ab]/30 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#83a0ab] backdrop-blur">
                                Resultados reales
                            </span>

                            <h2 className="mb-5 text-3xl font-semibold leading-[1.08] text-white md:text-5xl">
                                Antes y después
                            </h2>

                            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/68 md:text-lg">
                                Cambios reales, con foco en proporción corporal, naturalidad
                                y planificación personalizada.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            <div
                                ref={(el) => {
                                    if (el) resultImagesRef.current[0] = el;
                                }}
                                className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                            >
                                <img
                                    src="/images/abdomen-antes-despues-1.jpg"
                                    alt="Resultado abdomen antes y después"
                                    className="h-[520px] w-full rounded-[1.4rem] object-cover"
                                />
                            </div>

                            <div
                                ref={(el) => {
                                    if (el) resultImagesRef.current[1] = el;
                                }}
                                className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                            >
                                <img
                                    src="/images/abdomen-antes-despues-2.jpg"
                                    alt="Resultado abdomen antes y después"
                                    className="h-[520px] w-full rounded-[1.4rem] object-cover"
                                />
                            </div>
                        </div>

                        <div className="mt-10 rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 backdrop-blur-xl">
                            <p className="text-sm leading-relaxed text-white/68">
                                Las imágenes muestran casos reales. Cada cuerpo, piel y proceso
                                de recuperación es distinto; por eso la evaluación médica es
                                fundamental para definir expectativas realistas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIOS - CLARO CON MARQUEE INFINITO */}
                <section
                    ref={testimoniosRef}
                    className="relative overflow-hidden bg-[#ffffff] px-6 py-24 text-[#25373d]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.1),transparent_36%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />
                    <div className="absolute -right-32 top-16 h-[420px] w-[420px] rounded-full bg-[#83a0ab]/12 blur-3xl" />
                    <div className="absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-[#567580]/10 blur-3xl" />

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div ref={testimoniosTitleRef} className="mb-12 max-w-3xl">
                            <span className="mb-6 inline-flex rounded-full border border-[#83a0ab]/45 bg-[#f5f8f9] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#567580]">
                                Experiencias reales
                            </span>

                            <h2 className="mb-5 text-3xl font-semibold leading-[1.08] md:text-5xl">
                                Testimonios
                                <br />
                                <span className="text-[#567580]">
                                    de pacientes acompañados.
                                </span>
                            </h2>

                            <p className="max-w-2xl text-base leading-relaxed text-[#506065] md:text-lg">
                                La cirugía de abdomen también requiere confianza, claridad y
                                un proceso acompañado desde la primera consulta.
                            </p>

                            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#6b8994]">
                                Imágenes ilustrativas del proceso de atención.
                            </p>
                        </div>

                        <div className="relative -mx-6 overflow-hidden">
                            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent" />
                            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent" />

                            <div className="flex w-max animate-[testimonialMarquee_48s_linear_infinite] gap-6 pr-6 hover:[animation-play-state:paused]">
                                {testimoniosLoop.map((item, index) => (
                                    <div
                                        key={`${item.quote}-${index}`}
                                        aria-hidden={index >= testimonios.length}
                                        className="group relative w-[300px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-[#25373d]/10 bg-[#f5f8f9] shadow-[0_24px_70px_rgba(37,55,61,0.1)] transition duration-300 hover:-translate-y-1 hover:border-[#83a0ab]/70 hover:bg-white md:w-[370px]"
                                    >
                                        <div className="relative h-48 overflow-hidden bg-[#25373d]">
                                            <img
                                                src={item.image}
                                                alt="Imagen ilustrativa del proceso de atención"
                                                className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.04]"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#25373d]/75 via-[#25373d]/15 to-transparent" />

                                            <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white backdrop-blur">
                                                {item.tag}
                                            </span>
                                        </div>

                                        <div className="relative p-7">
                                            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/65 to-transparent" />

                                            <div className="mb-6 flex items-center justify-between">
                                                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#6b8994]">
                                                    Testimonio real
                                                </span>

                                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#83a0ab]/35 bg-white text-2xl leading-none text-[#83a0ab]">
                                                    ”
                                                </span>
                                            </div>

                                            <p className="min-h-[120px] text-base leading-relaxed text-[#25373d]">
                                                “{item.quote}”
                                            </p>

                                            <div className="mt-8 flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-[#83a0ab]" />
                                                <span className="text-xs uppercase tracking-[0.18em] text-[#506065]">
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

                {/* CTA - TONO MEDIO PREMIUM */}
                <section
                    ref={ctaRef}
                    className="relative overflow-hidden bg-[#506065] px-6 py-32 text-white"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#506065_0%,#567580_45%,#6b8994_100%)]" />
                    <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px)] [background-size:58px_58px]" />
                    <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#25373d]/35 blur-3xl" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                    <div
                        ref={ctaContentRef}
                        className="relative z-10 mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/14 bg-[#25373d]/75 px-6 py-14 text-center text-white shadow-[0_30px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl md:px-12 md:py-16"
                    >
                        <div className="absolute -top-32 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#83a0ab]/20 blur-3xl" />
                        <div className="absolute -right-24 bottom-0 h-[300px] w-[300px] rounded-full bg-[#567580]/20 blur-3xl" />

                        <div className="relative z-10">
                            <span className="mb-7 inline-flex rounded-full border border-[#83a0ab]/35 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#83a0ab]">
                                Evaluación personalizada
                            </span>

                            <h2 className="mb-8 text-3xl font-semibold leading-[1.08] text-white md:text-5xl">
                                Si querés mejorar tu abdomen,
                                <br />
                                <span className="text-[#83a0ab]">
                                    empecemos por evaluar tu caso.
                                </span>
                            </h2>

                            <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-white/72">
                                Hablemos de tus objetivos, resolvamos tus dudas y veamos qué
                                resultado puede lograrse de forma natural y personalizada.
                            </p>

                            <a
                                href="https://wa.me/5491124793160"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-[#83a0ab] bg-white px-10 py-5 text-sm font-medium tracking-[0.08em] text-[#25373d] transition hover:-translate-y-0.5 hover:bg-[#83a0ab] hover:text-white"
                            >
                                QUIERO CHATEAR CON EL DOCTOR
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
                        transform: translateX(calc(-50% - 12px));
                    }
                }
            `}</style>
        </>
    );
}