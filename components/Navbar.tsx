"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || menuOpen
                    ? "bg-white/90 backdrop-blur-md border-b border-gray-200 text-black"
                    : "bg-black/20 backdrop-blur-sm text-white"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="flex flex-col leading-tight">
                    <span className="text-lg font-semibold">Dr. Víctor Pugliese</span>
                    <span
                        className={`text-xs transition ${scrolled || menuOpen ? "text-gray-500" : "text-white/70"
                            }`}
                    >
                        Cirujano Plástico
                    </span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`transition ${isActive
                                        ? scrolled
                                            ? "text-black font-semibold"
                                            : "text-white font-semibold"
                                        : "opacity-70 hover:opacity-100"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* DESKTOP CTA */}
                <a
                    href="https://wa.me/5491124793160"
                    target="_blank"
                    className={`hidden md:inline-block px-4 py-2 rounded-full text-sm font-medium transition ${scrolled
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-white text-black hover:bg-gray-200"
                        }`}
                >
                    WhatsApp
                </a>

                {/* MOBILE BUTTON */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    className="md:hidden flex h-10 w-10 items-center justify-center"
                >
                    <span className="sr-only">
                        {menuOpen ? "Cerrar menú" : "Abrir menú"}
                    </span>

                    <span className="relative block h-4 w-6">
                        <span
                            className={`absolute left-0 top-0 h-[2px] w-6 transition-all ${menuOpen
                                    ? "translate-y-[7px] rotate-45 bg-black"
                                    : scrolled
                                        ? "bg-black"
                                        : "bg-white"
                                }`}
                        />

                        <span
                            className={`absolute left-0 top-[7px] h-[2px] w-6 transition-all ${menuOpen
                                    ? "opacity-0 bg-black"
                                    : scrolled
                                        ? "bg-black"
                                        : "bg-white"
                                }`}
                        />

                        <span
                            className={`absolute left-0 bottom-0 h-[2px] w-6 transition-all ${menuOpen
                                    ? "-translate-y-[7px] -rotate-45 bg-black"
                                    : scrolled
                                        ? "bg-black"
                                        : "bg-white"
                                }`}
                        />
                    </span>
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden overflow-hidden bg-white text-black transition-all duration-300 ${menuOpen ? "max-h-[520px] border-t border-gray-200" : "max-h-0"
                    }`}
            >
                <nav className="px-6 py-6 flex flex-col gap-5 text-base font-medium">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`transition ${isActive ? "font-semibold text-black" : "text-gray-500"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}

                    <a
                        href="https://wa.me/5491124793160"
                        target="_blank"
                        className="mt-2 inline-block w-fit rounded-full bg-green-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        WhatsApp
                    </a>
                </nav>
            </div>
        </header>
    );
}