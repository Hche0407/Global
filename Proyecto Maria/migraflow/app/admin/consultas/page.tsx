import AdminConsultasList from "@/components/AdminConsultasList";
async function getConsultas() {
    const res = await fetch("http://localhost:3000/api/consultas", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("No se pudieron cargar las consultas");
    }

    return res.json();
}

export default async function AdminConsultasPage() {
    const consultas = await getConsultas();

    return (
        <main className="min-h-screen bg-slate-100 py-12">
            <div className="container-main">
                <div className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                        Panel admin
                    </p>
                    <h1 className="mt-3 text-4xl text-slate-900">Consultas recibidas</h1>
                    <p className="mt-2 text-slate-600">
                        Listado de solicitudes enviadas desde el formulario público.
                    </p>
                </div>

                <AdminConsultasList consultas={consultas} />
            </div>

        </main>

    );
}