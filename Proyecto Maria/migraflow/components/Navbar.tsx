"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#ventajas", label: "Ventajas" },
    { href: "#testimonios", label: "Testimonios" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detectar scroll para cambiar el fondo del navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cerrar menú al hacer click en un link
    const handleLinkClick = () => setIsOpen(false);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-slate-950/85 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent border-b border-white/10"
                }`}
        >
            <div className="container-main flex items-center justify-between py-4 text-white">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3"
                    aria-label="GlobalInmigration - Inicio"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-lg font-bold">
                        G
                    </div>

                    <div>
                        <p className="text-lg font-semibold leading-none">GlobalInmigration</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">
                            Legal &amp; Migration
                        </p>
                    </div>
                </Link>

                {/* Navegación desktop */}
                <nav
                    className="hidden items-center gap-8 text-sm text-white/85 md:flex"
                    aria-label="Navegación principal"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="transition hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA desktop */}
                <div className="hidden md:block">
                    <a href="#contacto" className="btn-primary text-sm">
                        Solicitar consulta
                    </a>
                </div>

                {/* Botón hamburguesa móvil */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-white/20 hover:bg-white/10 transition"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Menú móvil */}
            <div
                id="mobile-menu"
                className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
                    }`}
            >
                <nav
                    className="container-main flex flex-col gap-1 py-4 bg-slate-950/95 backdrop-blur-md"
                    aria-label="Navegación móvil"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="px-4 py-3 text-white/85 hover:bg-white/10 rounded-lg transition"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        onClick={handleLinkClick}
                        className="btn-primary mt-2 mx-4 text-sm"
                    >
                        Solicitar consulta
                    </a>
                </nav>
            </div>
        </header>
    );
}
