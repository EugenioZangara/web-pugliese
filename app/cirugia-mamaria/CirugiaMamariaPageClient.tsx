"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const whatsappUrl = "https://wa.me/5491124793160";

const beneficios = [
    "Resultados naturales",
    "Diseño personalizado",
    "Acompañamiento real",
];

const objetivos = [
    "Mejorar forma y volumen",
    "Recuperar proporción",
    "Corregir asimetrías",
    "Acompañar cambios post embarazo",
    "Buscar armonía corporal",
];

const proceso = [
    {
        number: "01",
        title: "Evaluación corporal",
        text: "Analizamos tu anatomía, tejido, proporciones y expectativas para definir una opción segura.",
    },
    {
        number: "02",
        title: "Planificación",
        text: "No se busca un molde, sino una forma y volumen coherentes con tu cuerpo.",
    },
    {
        number: "03",
        title: "Seguimiento",
        text: "Acompañamiento antes y después de la cirugía para transitar el proceso con claridad.",
    },
];

export default function CirugiaMamariaPage() {
    return (
        <>
            <Navbar />

            <main className="overflow-x-hidden bg-white text-[#25373d]">
                <section className="relative flex min-h-[100svh] items-start overflow-hidden bg-[#25373d] px-5 pb-10 pt-24 text-white sm:px-6 sm:items-center sm:py-12 sm:pt-28 lg:py-24 lg:pt-32">
                    <img
                        src="/images/mamaria-hero.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center opacity-70 grayscale saturate-0 contrast-110 brightness-[0.72] lg:hidden"
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-[#25373d]/72 mix-blend-color lg:hidden" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(131,160,171,0.28),transparent_32%),linear-gradient(135deg,rgba(37,55,61,0.92)_0%,rgba(37,55,61,0.74)_42%,rgba(80,96,101,0.86)_100%)] lg:bg-[radial-gradient(circle_at_18%_18%,rgba(131,160,171,0.24),transparent_32%),linear-gradient(135deg,#25373d_0%,#25373d_42%,#506065_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px)] opacity-[0.045] [background-size:54px_54px]" />
                    <div className="absolute -right-28 bottom-10 h-[320px] w-[320px] rounded-full bg-[#83a0ab]/16 blur-3xl md:h-[480px] md:w-[480px]" />

                    <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
                        <div className="max-w-2xl lg:max-w-xl">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/35 bg-white/[0.08] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[#c3d4da] backdrop-blur sm:text-xs sm:tracking-[0.18em]">
                                Cirugía mamaria
                            </span>

                            <h1 className="mb-4 text-balance text-[2.38rem] font-semibold leading-[1.02] text-white min-[390px]:text-[2.6rem] sm:mb-5 sm:text-5xl sm:leading-[0.98] lg:text-[4rem]">
                                Forma, volumen
                                <br />
                                y proporción natural.
                            </h1>

                            <p className="mb-5 max-w-lg text-[1.03rem] leading-7 text-white/80 sm:mb-6 sm:text-lg">
                                Cirugía mamaria con evaluación personalizada, criterio médico y
                                resultados pensados para tu cuerpo.
                            </p>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/20 bg-[#25D366] px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.05em] text-white shadow-[0_16px_34px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-8"
                            >
                                Reservar consulta por WhatsApp
                            </a>

                            <div className="mt-5 grid gap-2.5 text-sm text-white/78 sm:flex sm:flex-wrap">
                                {beneficios.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2 sm:rounded-full sm:border sm:border-white/12 sm:bg-white/[0.07] sm:px-3.5 sm:py-2 sm:backdrop-blur"
                                    >
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#83a0ab]/45 text-[0.68rem] leading-none text-[#c3d4da] sm:h-1.5 sm:w-1.5 sm:border-0 sm:bg-[#83a0ab] sm:text-transparent">
                                            ✓
                                        </span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <div className="relative ml-auto max-w-[430px] overflow-hidden rounded-2xl border border-white/14 bg-white/[0.07] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                                <img
                                    src="/images/mamaria-hero.jpg"
                                    alt="Cirugía mamaria con resultados naturales"
                                    className="h-[520px] w-full rounded-xl object-cover object-center grayscale saturate-0 contrast-105 brightness-[0.92]"
                                />
                                <div className="absolute inset-3 rounded-xl bg-[#25373d]/38 mix-blend-color" />
                                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/16 bg-[#25373d]/78 p-4 backdrop-blur">
                                    <p className="text-sm leading-6 text-white/82">
                                        El objetivo no es copiar un resultado, sino diseñar uno posible para vos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#f5f8f9] px-5 py-14 sm:px-6 md:py-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.1),transparent_36%)]" />

                    <div className="relative z-10 mx-auto grid max-w-6xl gap-8 rounded-2xl border border-[#25373d]/10 bg-white p-5 shadow-[0_18px_50px_rgba(37,55,61,0.08)] sm:p-7 md:grid-cols-[1fr_0.78fr] md:items-center md:p-8">
                        <div>
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/45 bg-[#f5f8f9] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#567580] sm:text-xs">
                                Evaluación personalizada
                            </span>

                            <h2 className="mb-4 text-balance text-[1.8rem] font-semibold leading-[1.08] sm:text-4xl">
                                Una decisión estética con planificación médica.
                            </h2>

                            <p className="leading-7 text-[#506065]">
                                Muchas pacientes buscan mejorar proporciones, recuperar armonía o
                                sentirse más cómodas con su cuerpo. La consulta ayuda a definir qué
                                puede lograrse de forma segura y natural.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#25373d]/10 bg-[#f5f8f9] p-5">
                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#6b8994]">
                                Diseño personalizado
                            </p>
                            <p className="text-balance text-xl font-semibold leading-tight text-[#25373d]">
                                Volumen, forma y proporción deben pensarse para tu cuerpo, no para una tendencia.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#25373d] px-5 py-14 text-white sm:px-6 md:py-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(131,160,171,0.2),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(86,117,128,0.18),transparent_36%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px)] opacity-[0.045] [background-size:56px_56px]" />

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div className="mb-8 max-w-3xl md:mb-10">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/30 bg-white/[0.06] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#b7cbd2] backdrop-blur sm:text-xs">
                                Qué se puede trabajar
                            </span>

                            <h2 className="mb-4 text-balance text-[2rem] font-semibold leading-[1.08] text-white sm:text-4xl md:text-5xl">
                                Cada cuerpo necesita una indicación distinta.
                            </h2>
                        </div>

                        <div className="grid gap-3.5 sm:grid-cols-2 md:grid-cols-5 md:gap-5">
                            {objetivos.map((item, index) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 shadow-[0_16px_42px_rgba(0,0,0,0.16)] backdrop-blur-xl"
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

                <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-6 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-8 max-w-3xl md:mb-10">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/45 bg-[#f5f8f9] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#567580] sm:text-xs">
                                Proceso
                            </span>

                            <h2 className="mb-4 text-balance text-[2rem] font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
                                Claro, personalizado y acompañado.
                            </h2>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            {proceso.map((item) => (
                                <article
                                    key={item.number}
                                    className="rounded-2xl border border-[#25373d]/10 bg-[#f5f8f9] p-6 shadow-[0_16px_40px_rgba(37,55,61,0.08)]"
                                >
                                    <span className="text-xs uppercase tracking-[0.18em] text-[#6b8994]">
                                        {item.number}
                                    </span>
                                    <h3 className="mb-3 mt-4 text-xl font-semibold text-[#25373d]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-7 text-[#506065]">
                                        {item.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#25373d] px-5 py-14 text-white sm:px-6 md:py-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(131,160,171,0.2),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(86,117,128,0.18),transparent_36%)]" />

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div className="mb-8 max-w-3xl md:mb-10">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/30 bg-white/[0.06] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#b7cbd2] backdrop-blur sm:text-xs">
                                Resultados reales
                            </span>

                            <h2 className="mb-4 text-balance text-[2rem] font-semibold leading-[1.08] text-white sm:text-4xl md:text-5xl">
                                Antes y después, con expectativas realistas.
                            </h2>

                            <p className="max-w-2xl leading-7 text-white/70">
                                Cada cuerpo, tejido y recuperación son distintos. Por eso la
                                evaluación médica es fundamental.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 md:gap-8">
                            {["/images/mamaria-antes-despues-1.jpg", "/images/mamaria-antes-despues-2.jpg"].map((image) => (
                                <div
                                    key={image}
                                    className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-2.5 shadow-[0_16px_42px_rgba(0,0,0,0.16)] backdrop-blur-xl md:p-4"
                                >
                                    <img
                                        src={image}
                                        alt="Resultado de cirugía mamaria antes y después"
                                        className="aspect-[4/3] w-full rounded-xl bg-[#25373d] object-contain object-center md:aspect-[4/5]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#506065] px-5 py-14 text-white sm:px-6 md:py-24">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#506065_0%,#567580_50%,#6b8994_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px)] opacity-[0.08] [background-size:58px_58px]" />

                    <div className="relative z-10 mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/14 bg-[#25373d]/78 px-5 py-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-6 md:px-12 md:py-16">
                        <span className="mb-5 inline-flex rounded-full border border-[#83a0ab]/35 bg-white/[0.06] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#b7cbd2] sm:text-xs">
                            Evaluación personalizada
                        </span>

                        <h2 className="mb-5 text-balance text-[2rem] font-semibold leading-[1.08] text-white sm:text-4xl md:text-5xl">
                            Si estás pensando en una cirugía mamaria, podemos evaluarlo en consulta.
                        </h2>

                        <p className="mx-auto mb-8 max-w-2xl leading-7 text-white/74">
                            Escribime y vemos cuál puede ser la mejor alternativa para vos.
                        </p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/20 bg-[#25D366] px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.05em] text-white shadow-[0_16px_34px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-10"
                        >
                            Escribirme por WhatsApp
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
