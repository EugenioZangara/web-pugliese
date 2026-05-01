"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Cirugía Mamaria",
        href: "/cirugia-mamaria",
    },
    {
        label: "Abdomen",
        href: "/abdomen",
    },
    {
        label: "Rinoplastía",
        href: "/rinoplastia",
    },
    {
        label: "Glúteos",
        href: "/gluteos",
    },
    {
        label: "Quién soy",
        href: "/quien-soy",
    },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const isActivePath = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    };

    const navbarIsSolid = scrolled || menuOpen;

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${navbarIsSolid
                    ? "border-b border-[#25373d]/10 bg-white/92 text-[#25373d] shadow-[0_12px_35px_rgba(37,55,61,0.08)] backdrop-blur-xl"
                    : "bg-transparent text-white"
                }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* LOGO */}
                <Link
                    href="/"
                    aria-label="Ir al inicio"
                    className="relative z-10 inline-flex items-center"
                >
                    <div
                        className={`relative h-12 w-[185px] transition-all duration-300 md:h-14 md:w-[220px] ${navbarIsSolid
                                ? "brightness-100"
                                : "brightness-0 invert"
                            }`}
                    >
                        <Image
                            src="/images/logo-victor-pugliese.png"
                            alt="Dr. Víctor Pugliese - Cirujano Plástico"
                            fill
                            priority
                            sizes="(max-width: 768px) 185px, 220px"
                            className="object-contain object-left"
                        />
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
                    {navItems.map((item) => {
                        const isActive = isActivePath(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className={`relative rounded-full px-4 py-2 transition-all duration-300 ${isActive
                                        ? navbarIsSolid
                                            ? "bg-[#25373d] text-white shadow-[0_10px_25px_rgba(37,55,61,0.16)]"
                                            : "bg-white text-[#25373d] shadow-[0_10px_25px_rgba(0,0,0,0.16)]"
                                        : navbarIsSolid
                                            ? "text-[#506065] hover:bg-[#f5f8f9] hover:text-[#25373d]"
                                            : "text-white/72 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {item.label}

                                {isActive && (
                                    <span
                                        className={`absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full ${navbarIsSolid
                                                ? "bg-[#83a0ab]"
                                                : "bg-[#25373d]"
                                            }`}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* DESKTOP CTA */}
                <a
                    href="https://wa.me/5491124793160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hidden rounded-full border px-5 py-3 text-sm font-medium tracking-[0.04em] transition-all duration-300 md:inline-flex ${navbarIsSolid
                            ? "border-[#25373d] bg-[#25373d] text-white hover:-translate-y-0.5 hover:bg-[#506065]"
                            : "border-white/70 bg-white text-[#25373d] hover:-translate-y-0.5 hover:bg-[#83a0ab] hover:text-white"
                        }`}
                >
                    WhatsApp
                </a>

                {/* MOBILE BUTTON */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    className="flex h-10 w-10 items-center justify-center md:hidden"
                >
                    <span className="sr-only">
                        {menuOpen ? "Cerrar menú" : "Abrir menú"}
                    </span>

                    <span className="relative block h-4 w-6">
                        <span
                            className={`absolute left-0 top-0 h-[2px] w-6 transition-all ${menuOpen
                                    ? "translate-y-[7px] rotate-45 bg-[#25373d]"
                                    : navbarIsSolid
                                        ? "bg-[#25373d]"
                                        : "bg-white"
                                }`}
                        />

                        <span
                            className={`absolute left-0 top-[7px] h-[2px] w-6 transition-all ${menuOpen
                                    ? "opacity-0 bg-[#25373d]"
                                    : navbarIsSolid
                                        ? "bg-[#25373d]"
                                        : "bg-white"
                                }`}
                        />

                        <span
                            className={`absolute bottom-0 left-0 h-[2px] w-6 transition-all ${menuOpen
                                    ? "-translate-y-[7px] -rotate-45 bg-[#25373d]"
                                    : navbarIsSolid
                                        ? "bg-[#25373d]"
                                        : "bg-white"
                                }`}
                        />
                    </span>
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`overflow-hidden bg-white text-[#25373d] transition-all duration-300 md:hidden ${menuOpen
                        ? "max-h-[560px] border-t border-[#25373d]/10"
                        : "max-h-0"
                    }`}
            >
                <nav className="flex flex-col gap-2 px-6 py-6 text-base font-medium">
                    {navItems.map((item) => {
                        const isActive = isActivePath(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className={`flex items-center justify-between rounded-2xl px-4 py-3 transition ${isActive
                                        ? "bg-[#25373d] text-white shadow-[0_12px_30px_rgba(37,55,61,0.14)]"
                                        : "text-[#506065] hover:bg-[#f5f8f9] hover:text-[#25373d]"
                                    }`}
                            >
                                <span>{item.label}</span>

                                {isActive && (
                                    <span className="h-2 w-2 rounded-full bg-[#83a0ab]" />
                                )}
                            </Link>
                        );
                    })}

                    <a
                        href="https://wa.me/5491124793160"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex w-fit items-center justify-center rounded-full border border-[#25373d] bg-[#25373d] px-5 py-3 text-sm font-medium tracking-[0.04em] text-white transition hover:bg-[#506065]"
                    >
                        WhatsApp
                    </a>
                </nav>
            </div>
        </header>
    );
}