import { Shield, Users, Zap, HeartHandshake } from "lucide-react";

const benefits = [
    {
        icon: Shield,
        title: "Confidencialidad total",
        description:
            "Tu información se trata con el más alto estándar de seguridad y discreción profesional.",
    },
    {
        icon: Users,
        title: "Atención personalizada",
        description:
            "Cada caso es atendido de manera individual, con seguimiento dedicado y comunicación clara.",
    },
    {
        icon: Zap,
        title: "Procesos ágiles",
        description:
            "Trámites organizados y eficientes para que avances en tu proceso migratorio sin demoras.",
    },
    {
        icon: HeartHandshake,
        title: "Enfoque humano",
        description:
            "Detrás de cada trámite hay una historia. Te acompañamos con empatía y compromiso real.",
    },
];

export default function Benefits() {
    return (
        <section id="ventajas" className="section-light py-24">
            <div className="container-main">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                        Ventajas
                    </p>
                    <h2 className="mt-4 text-4xl font-semibold leading-[1.2] tracking-[-0.02em] text-slate-900 sm:text-5xl">
                        ¿Por qué elegirnos?
                    </h2>
                    <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
                        Combinamos rigor legal con calidez humana. Estos son los pilares que
                        nos diferencian.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={benefit.title}
                                className="rounded-2xl bg-white p-7 shadow-sm transition hover:shadow-md"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-600 text-white">
                                    <Icon size={22} />
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                    {benefit.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
