export default function Services() {
    const services = [
        "Visas en Colombia",
        "Prórroga de permanencia",
        "Cédula de extranjería",
        "Movimientos migratorios",
        "Nacionalidad colombiana",
        "Convalidación de títulos",
    ];

    return (
        <section id="servicios" className="bg-white py-24">
            <div className="container-main">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                    Servicios
                </p>

                <h2 className="mt-4 text-4xl leading-tight text-slate-900 sm:text-5xl">
                    Soluciones migratorias integrales
                </h2>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-lg"
                        >
                            <h3 className="text-lg font-semibold text-slate-900">
                                {service}
                            </h3>

                            <p className="mt-3 text-sm text-slate-600">
                                Asesoría profesional y acompañamiento en cada etapa del proceso.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}