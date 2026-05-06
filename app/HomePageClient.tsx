import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const whatsappUrl = "https://wa.me/5491124793160";

const trustBullets = [
    "Resultados naturales",
    "Evaluación personalizada",
    "Acompañamiento real",
];

const procedimientos = [
    {
        title: "Rinoplastia",
        description: "Armonía facial y mejora funcional con planificación personalizada.",
        href: "/rinoplastia",
        image: "/images/rinoplastia-card.png",
    },
    {
        title: "Cirugía mamaria",
        description: "Volumen, forma y proporción con resultados naturales.",
        href: "/cirugia-mamaria",
        image: "/images/mamaria-card.jpg",
    },
    {
        title: "Abdomen",
        description: "Contorno corporal, firmeza y recuperación de la armonía abdominal.",
        href: "/abdomen",
        image: "/images/abdomen-card.jpg",
    },
    {
        title: "Glúteos",
        description: "Diseño corporal proporcionado, natural y adaptado a tu caso.",
        href: "/gluteos",
        image: "/images/gluteos-card.png",
    },
];

const resultados = [
    {
        title: "Armonía facial",
        area: "Rinoplastia",
        image: "/images/rinoplastia-antes-despues-1.jpg",
    },
    {
        title: "Proporción corporal",
        area: "Cirugía mamaria",
        image: "/images/mamaria-antes-despues-1.jpg",
    },
    {
        title: "Contorno abdominal",
        area: "Abdomen",
        image: "/images/abdomen-antes-despues-1.jpg",
    },
];

const diferenciales = [
    {
        title: "Resultados naturales y armónicos",
        text: "La planificación busca armonía, proporción y cambios coherentes con tu cuerpo.",
    },
    {
        title: "Acompañamiento real",
        text: "Seguimiento cercano antes y después del procedimiento, con información clara.",
    },
    {
        title: "Pacientes del interior",
        text: "Te acompaño en la organización de estadía, traslado, enfermería y seguimiento postoperatorio.",
    },
    {
        title: "Financiación flexible",
        text: "Opciones de financiación flexibles según cada procedimiento.",
    },
];

const faqs = [
    {
        question: "¿Cómo sé qué procedimiento es el indicado para mí?",
        answer:
            "Cada caso se evalúa de forma personalizada. En la consulta se analizan tus objetivos, tu anatomía, tus antecedentes y las posibilidades reales para definir el tratamiento más adecuado.",
    },
    {
        question: "¿Los resultados se ven naturales?",
        answer:
            "El objetivo es lograr cambios armónicos y proporcionados, respetando tu cuerpo y tus rasgos. No se busca una transformación artificial, sino una versión más equilibrada y natural.",
    },
    {
        question: "¿La primera consulta sirve para definir el plan quirúrgico?",
        answer:
            "Sí. La consulta permite conversar sobre tus expectativas, evaluar tu caso y explicar qué opciones son posibles, qué cuidados requiere el procedimiento y cómo sería el proceso.",
    },
    {
        question: "¿Puedo consultar aunque todavía no esté decidida/o?",
        answer:
            "Sí. Muchas personas consultan justamente para sacarse dudas, entender alternativas y tomar una decisión con mayor seguridad.",
    },
    {
        question: "¿Atienden pacientes del interior?",
        answer:
            "Sí. Si venís desde el interior, se puede brindar acompañamiento para organizar aspectos como estadía, traslado, enfermería y seguimiento postoperatorio.",
    },
    {
        question: "¿Hay opciones de financiación?",
        answer:
            "Sí. Hay opciones de financiación flexibles según el procedimiento y las necesidades de cada paciente.",
    },
    {
        question: "¿Cuánto tiempo lleva la recuperación?",
        answer:
            "Depende del procedimiento y de cada paciente. En la consulta se explica el tiempo estimado de recuperación, los cuidados necesarios y cuándo podrías retomar tus actividades habituales.",
    },
    {
        question: "¿Cómo puedo reservar una consulta?",
        answer:
            "Podés escribir por WhatsApp para coordinar una consulta y evaluar tu caso de forma personalizada.",
    },
];

export default function Home() {
    return (
        <>
            <Navbar />

            <main className="overflow-x-hidden bg-white text-[#25373d]">
                <section className="relative flex min-h-[100svh] items-start overflow-hidden bg-[#25373d] px-5 pb-10 pt-24 text-white sm:px-6 sm:items-center sm:py-12 sm:pt-28 lg:py-24 lg:pt-32">
                    <video
                        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center opacity-70 grayscale saturate-0 contrast-110 brightness-[0.72]"
                        src="/videos/hero.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-[#25373d]/72 mix-blend-color" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(131,160,171,0.28),transparent_32%),linear-gradient(135deg,rgba(37,55,61,0.92)_0%,rgba(37,55,61,0.74)_42%,rgba(80,96,101,0.86)_100%)]" />
                    {/* Cuadriculado removido */}
                    <div className="absolute -right-28 bottom-10 h-[320px] w-[320px] rounded-full bg-[#83a0ab]/16 blur-3xl md:h-[480px] md:w-[480px]" />

                    <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
                        <div className="max-w-2xl lg:max-w-xl">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/35 bg-white/[0.08] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[#c3d4da] backdrop-blur sm:text-xs sm:tracking-[0.18em]">
                                Dr. Víctor Pugliese
                            </span>

                            <h1 className="mb-4 text-balance text-[2.38rem] font-semibold leading-[1.02] text-white min-[390px]:text-[2.6rem] sm:mb-5 sm:text-5xl sm:leading-[0.98] lg:text-[4rem]">
                                Más que una cirugía.
                                <br />
                                Un cambio real, acompañado.
                            </h1>

                            <p className="mb-5 max-w-lg text-[1.03rem] leading-7 text-white/80 sm:mb-6 sm:text-lg">
                                Cirugía plástica con resultados naturales, evaluación personalizada
                                y seguimiento cercano en cada etapa.
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
                                {trustBullets.map((item) => (
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
                                    src="/images/VICTOR.jpg"
                                    alt="Dr. Víctor Pugliese"
                                    className="h-[520px] w-full rounded-xl object-cover object-[center_18%]"
                                />
                                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/16 bg-[#25373d]/78 p-4 backdrop-blur">
                                    <p className="text-sm leading-6 text-white/82">
                                        Evaluación médica clara, planificación segura y una búsqueda:
                                        verte natural, no distinta.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#f5f8f9] px-5 py-14 sm:px-6 md:py-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.1),transparent_36%)]" />

                    <div className="relative z-10 mx-auto grid max-w-6xl gap-8 rounded-2xl border border-[#25373d]/10 bg-white p-5 shadow-[0_18px_50px_rgba(37,55,61,0.08)] sm:p-7 md:grid-cols-[1fr_0.75fr] md:items-center md:p-8">
                        <div>
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/45 bg-[#f5f8f9] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#567580] sm:text-xs">
                                Confianza médica
                            </span>

                            <h2 className="mb-4 text-balance text-[1.8rem] font-semibold leading-[1.08] sm:text-4xl">
                                Una consulta para entender tu caso, no para apurarte a decidir.
                            </h2>

                            <p className="leading-7 text-[#506065]">
                                Cada paciente llega con una historia, una expectativa y una búsqueda
                                distinta. Por eso, cada procedimiento empieza con una evaluación
                                personalizada, planificación médica y acompañamiento cercano.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-2.5 text-center text-sm font-medium text-[#25373d] md:grid-cols-1 md:text-left">
                            {["Naturalidad", "Seguridad", "Claridad"].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-[#25373d]/10 bg-[#f5f8f9] px-3 py-3"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-6 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-8 max-w-3xl md:mb-10">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/45 bg-[#f5f8f9] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#567580] sm:text-xs">
                                Procedimientos
                            </span>

                            <h2 className="mb-4 text-balance text-[2rem] font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
                                Encontrá el procedimiento que querés evaluar.
                            </h2>

                            <p className="max-w-2xl leading-7 text-[#506065]">
                                Cada cirugía se define según tu anatomía, tus objetivos y lo que
                                puede lograrse de forma segura y natural.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {procedimientos.map((item) => (
                                <article
                                    key={item.title}
                                    className="overflow-hidden rounded-2xl border border-[#25373d]/10 bg-[#f5f8f9] shadow-[0_16px_40px_rgba(37,55,61,0.08)]"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="aspect-[16/9] w-full object-cover object-center"
                                    />

                                    <div className="p-5">
                                        <h3 className="mb-2 text-xl font-semibold text-[#25373d]">
                                            {item.title}
                                        </h3>
                                        <p className="mb-5 text-sm leading-6 text-[#506065]">
                                            {item.description}
                                        </p>
                                        <Link
                                            href={item.href}
                                            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[#83a0ab]/55 bg-white px-5 py-3 text-sm font-semibold text-[#25373d] transition hover:-translate-y-0.5 hover:bg-[#25373d] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#83a0ab]"
                                        >
                                            Ver procedimiento
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#25373d] px-5 py-14 text-white sm:px-6 md:py-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(131,160,171,0.2),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(86,117,128,0.18),transparent_36%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px)] opacity-[0.045] [background-size:56px_56px]" />

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div className="mb-8 max-w-3xl md:mb-10">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/30 bg-white/[0.06] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#b7cbd2] backdrop-blur sm:text-xs">
                                Casos reales
                            </span>

                            <h2 className="mb-4 text-balance text-[2rem] font-semibold leading-[1.08] text-white sm:text-4xl md:text-5xl">
                                Esto no es un filtro. Son cambios reales, con planificación y acompañamiento.
                            </h2>

                            <p className="max-w-2xl leading-7 text-white/70">
                                Un preview sobrio de resultados para mostrar el tipo de criterio que
                                guía cada procedimiento.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            {resultados.map((item) => (
                                <article
                                    key={item.title}
                                    className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-2.5 shadow-[0_16px_42px_rgba(0,0,0,0.16)] backdrop-blur-xl"
                                >
                                    <img
                                        src={item.image}
                                        alt={`${item.area} antes y después`}
                                        className="aspect-[4/3] w-full rounded-xl bg-[#25373d] object-contain object-center md:aspect-[4/5]"
                                    />
                                    <div className="px-2 py-4">
                                        <p className="text-xs uppercase tracking-[0.16em] text-[#b7cbd2]">
                                            {item.area}
                                        </p>
                                        <h3 className="mt-2 text-lg font-semibold text-white">
                                            {item.title}
                                        </h3>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-7 rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl md:flex md:items-center md:justify-between md:gap-8 md:p-6">
                            <p className="mb-5 text-sm leading-7 text-white/72 md:mb-0">
                                Cada cuerpo y cada recuperación son distintos. La consulta permite
                                definir expectativas realistas para tu caso.
                            </p>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-[50px] w-full shrink-0 items-center justify-center rounded-full bg-[#25D366] px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.05em] text-white shadow-[0_16px_34px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:w-auto"
                            >
                                Consultar mi caso
                            </a>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#f5f8f9] px-5 py-14 sm:px-6 md:py-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.09),transparent_36%)]" />

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div className="mb-8 max-w-3xl md:mb-10">
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/45 bg-white px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#567580] shadow-sm sm:text-xs">
                                Diferenciales
                            </span>

                            <h2 className="mb-4 text-balance text-[2rem] font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
                                Claridad, cercanía y una indicación pensada para vos.
                            </h2>

                            <p className="max-w-2xl leading-7 text-[#506065]">
                                La experiencia no termina en la cirugía: empieza con una consulta
                                clara y continúa con seguimiento real.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {diferenciales.map((item, index) => (
                                <article
                                    key={item.title}
                                    className="rounded-2xl border border-[#25373d]/10 bg-white p-5 shadow-[0_16px_40px_rgba(37,55,61,0.08)]"
                                >
                                    <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#25373d] text-sm font-semibold text-white">
                                        {index + 1}
                                    </span>
                                    <h3 className="mb-3 text-lg font-semibold text-[#25373d]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-6 text-[#506065]">
                                        {item.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-white px-5 py-14 text-[#25373d] sm:px-6 md:py-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.08),transparent_36%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />

                    <div className="relative z-10 mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.82fr_1.18fr] md:gap-12">
                        <div>
                            <span className="mb-4 inline-flex rounded-full border border-[#83a0ab]/45 bg-[#f5f8f9] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#567580] shadow-sm sm:text-xs">
                                Preguntas frecuentes
                            </span>

                            <h2 className="mb-4 text-balance text-[2rem] font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
                                Dudas comunes antes de reservar una consulta.
                            </h2>

                            <p className="max-w-xl leading-7 text-[#506065]">
                                Estas respuestas te orientan, pero cada indicación se define con
                                una evaluación personalizada y expectativas realistas.
                            </p>
                        </div>

                        <div className="grid gap-3">
                            {faqs.map((item) => (
                                <details
                                    key={item.question}
                                    className="group rounded-2xl border border-[#25373d]/10 bg-[#f5f8f9] p-5 shadow-[0_16px_40px_rgba(37,55,61,0.08)] open:border-[#83a0ab]/55 open:bg-white"
                                >
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold leading-snug text-[#25373d] marker:hidden">
                                        <span>{item.question}</span>
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#83a0ab]/45 text-lg leading-none text-[#567580] transition group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>

                                    <p className="mt-4 text-sm leading-7 text-[#506065]">
                                        {item.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#506065] px-5 py-14 text-white sm:px-6 md:py-24">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#506065_0%,#567580_50%,#6b8994_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px)] opacity-[0.08] [background-size:58px_58px]" />

                    <div className="relative z-10 mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/14 bg-[#25373d]/78 px-5 py-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-6 md:px-12 md:py-16">
                        <span className="mb-5 inline-flex rounded-full border border-[#83a0ab]/35 bg-white/[0.06] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#b7cbd2] sm:text-xs">
                            Consulta inicial
                        </span>

                        <h2 className="mb-5 text-balance text-[2rem] font-semibold leading-[1.08] text-white sm:text-4xl md:text-5xl">
                            Si lo venís pensando, podemos evaluarlo en consulta.
                        </h2>

                        <p className="mx-auto mb-8 max-w-2xl leading-7 text-white/74">
                            Escribime y vemos tu caso con una mirada médica, realista y
                            personalizada.
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
