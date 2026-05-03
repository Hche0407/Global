import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen overflow-hidden text-white"
        >
            {/* Imagen de fondo optimizada con Next.js Image */}
            <Image
                src="/reunion.jpg"
                alt="Equipo profesional de asesoría migratoria en reunión"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            {/* Overlay oscuro/azulado */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,10,28,0.92)_0%,rgba(4,18,45,0.85)_35%,rgba(8,27,70,0.55)_60%,rgba(8,27,70,0.2)_100%)]" />

            {/* Brillo sutil */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%)]" />

            {/* Contenido */}
            <div className="container-main relative z-10 flex min-h-screen items-center py-24 md:py-28">
                <div className="grid w-full gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                    {/* Texto izquierdo */}
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                            Asesoría migratoria profesional
                        </p>

                        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
                            Soluciones migratorias estratégicas para vivir y avanzar en
                            Colombia
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                            Brindamos acompañamiento legal claro, profesional y eficiente en
                            cada etapa de tu proceso migratorio, con una experiencia moderna,
                            organizada y humana.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a href="#contacto" className="btn-primary">
                                Solicitar consulta
                            </a>

                            <a
                                href="#servicios"
                                className="rounded-xl border border-white/35 px-6 py-3 text-white transition hover:bg-white/10"
                            >
                                Ver servicios
                            </a>
                        </div>
                    </div>

                    {/* Métricas a la derecha abajo */}
                    <div className="flex justify-start md:justify-end">
                        <div className="grid w-full max-w-xl gap-3 sm:grid-cols-3">
                            <div className="glass-card rounded-none p-5 md:rounded-tl-2xl md:rounded-bl-2xl">
                                <p className="text-3xl font-semibold">+300</p>
                                <p className="mt-2 text-sm text-white/75">
                                    Consultas atendidas
                                </p>
                            </div>

                            <div className="glass-card rounded-none p-5">
                                <p className="text-3xl font-semibold">8+</p>
                                <p className="mt-2 text-sm text-white/75">
                                    Años de experiencia
                                </p>
                            </div>

                            <div className="glass-card rounded-none p-5 md:rounded-tr-2xl md:rounded-br-2xl">
                                <p className="text-3xl font-semibold">100%</p>
                                <p className="mt-2 text-sm text-white/75">
                                    Seguimiento organizado
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
