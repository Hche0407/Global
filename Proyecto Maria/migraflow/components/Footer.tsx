import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-white">
            <div className="container-main py-16">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Marca y descripción */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-lg font-bold">
                                G
                            </div>
                            <div>
                                <p className="text-lg font-semibold leading-none">
                                    GlobalInmigration
                                </p>
                                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">
                                    Legal &amp; Migration
                                </p>
                            </div>
                        </div>
                        <p className="mt-6 text-sm leading-6 text-white/70">
                            Asesoría migratoria profesional en Colombia. Acompañamos cada caso
                            con enfoque estratégico, claro y humano.
                        </p>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                            Contacto
                        </h3>
                        <ul className="mt-6 space-y-4 text-sm text-white/70">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="mt-0.5 shrink-0 text-blue-400" />
                                <a
                                    href="mailto:contacto@globalinmigration.com"
                                    className="hover:text-white transition"
                                >
                                    contacto@globalinmigration.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="mt-0.5 shrink-0 text-blue-400" />
                                <a
                                    href="tel:+573000000000"
                                    className="hover:text-white transition"
                                >
                                    +57 300 000 0000
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 shrink-0 text-blue-400" />
                                <span>Bogotá, Colombia</span>
                            </li>
                        </ul>
                    </div>

                    {/* Enlaces */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                            Enlaces
                        </h3>
                        <ul className="mt-6 space-y-3 text-sm text-white/70">
                            <li>
                                <a href="#nosotros" className="hover:text-white transition">
                                    Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#servicios" className="hover:text-white transition">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#ventajas" className="hover:text-white transition">
                                    Ventajas
                                </a>
                            </li>
                            <li>
                                <a href="#contacto" className="hover:text-white transition">
                                    Contacto
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/politica-privacidad"
                                    className="hover:text-white transition"
                                >
                                    Política de privacidad
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-white/60">
                    <p>
                        &copy; {currentYear} GlobalInmigration. Todos los derechos
                        reservados.
                    </p>
                    <p>Bogotá, Colombia</p>
                </div>
            </div>
        </footer>
    );
}
