"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, Instagram, Mail, X, Phone } from "lucide-react";

// ============================================================
// 👉 IMPORTANTE: Reemplaza estos datos con los reales
// ============================================================
const CONTACT_DATA = {
    // Número de WhatsApp en formato internacional SIN signos
    // Ejemplo: para +57 300 123 4567 pon "573001234567"
    whatsappNumber: "+57 313 7824162",
    whatsappMessage: "Hola, me gustaría recibir asesoría migratoria",

    // Usuario de Instagram (sin el @)
    instagramUser: "globalinmigrationcol",

    // Correo electrónico
    email: "globalinmigration@gmail.com",
    emailSubject: "Consulta sobre asesoría migratoria",
};
// ============================================================

export default function ContactPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Cerrar al hacer click afuera del menú
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Cerrar con tecla Escape
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    // Construcción de URLs
    const whatsappUrl = `https://wa.me/${CONTACT_DATA.whatsappNumber}?text=${encodeURIComponent(CONTACT_DATA.whatsappMessage)}`;
    const instagramUrl = `https://instagram.com/${CONTACT_DATA.instagramUser}`;
    const mailtoUrl = `mailto:${CONTACT_DATA.email}?subject=${encodeURIComponent(CONTACT_DATA.emailSubject)}`;

    return (
        <div
            ref={menuRef}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
            {/* Menú desplegable */}
            <div
                className={`flex flex-col items-end gap-3 transition-all duration-300 origin-bottom-right ${isOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                {/* WhatsApp */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white rounded-full pl-5 pr-2 py-2 shadow-lg hover:shadow-xl transition-all hover:-translate-x-1 group"
                    aria-label="Contactar por WhatsApp"
                >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                        WhatsApp
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                        <Phone size={18} fill="white" />
                    </span>
                </a>

                {/* Instagram */}
                <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white rounded-full pl-5 pr-2 py-2 shadow-lg hover:shadow-xl transition-all hover:-translate-x-1 group"
                    aria-label="Visitar perfil de Instagram"
                >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                        Instagram
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#FCAF45] via-[#E1306C] to-[#833AB4] text-white">
                        <Instagram size={18} />
                    </span>
                </a>

                {/* Email */}
                <a
                    href={mailtoUrl}
                    className="flex items-center gap-3 bg-white rounded-full pl-5 pr-2 py-2 shadow-lg hover:shadow-xl transition-all hover:-translate-x-1 group"
                    aria-label="Enviar correo electrónico"
                >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                        Correo
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Mail size={18} />
                    </span>
                </a>
            </div>

            {/* Botón principal */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all hover:scale-110 ${isOpen
                    ? "bg-slate-900 text-white"
                    : "bg-linear-to-br from-blue-500 to-blue-600 text-white"
                    }`}
                aria-label={isOpen ? "Cerrar menú de contacto" : "Abrir menú de contacto"}
                aria-expanded={isOpen}
            >
                {/* Animación pulso (solo cuando está cerrado) */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30" />
                )}

                <span className="relative">
                    {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                </span>
            </button>
        </div>
    );
}
