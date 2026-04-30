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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-gray-200 text-black"
                    : "bg-black/20 backdrop-blur-sm text-white"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="flex flex-col leading-tight">
                    <span className="text-lg font-semibold">Dr. Víctor Pugliese</span>
                    <span
                        className={`text-xs transition ${scrolled ? "text-gray-500" : "text-white/70"
                            }`}
                    >
                        Cirujano Plástico
                    </span>
                </Link>

                {/* NAV LINKS */}
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

                {/* CTA */}
                <a
                    href="https://wa.me/5491124793160"
                    target="_blank"
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${scrolled
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-white text-black hover:bg-gray-200"
                        }`}
                >
                    WhatsApp
                </a>
            </div>
        </header>
    );
}