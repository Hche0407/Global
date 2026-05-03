"use client";

import { useMemo, useState } from "react";

type Consulta = {
    id: number;
    nombre?: string;
    email?: string;
    telefono?: string;
    nacionalidad?: string;
    pais?: string;
    tramite?: string;
    urgencia?: string;
    mensaje?: string;
    estado?: string;
};

type Props = {
    consultas: Consulta[];
};

export default function AdminConsultasList({ consultas }: Props) {
    const [filtroTramite, setFiltroTramite] = useState("");
    const [filtroUrgencia, setFiltroUrgencia] = useState("");
    const [filtroPais, setFiltroPais] = useState("");

    const consultasFiltradas = useMemo(() => {
        return consultas.filter((consulta) => {
            const coincideTramite =
                !filtroTramite || consulta.tramite === filtroTramite;

            const coincideUrgencia =
                !filtroUrgencia || consulta.urgencia === filtroUrgencia;

            const coincidePais = !filtroPais || consulta.pais === filtroPais;

            return coincideTramite && coincideUrgencia && coincidePais;
        });
    }, [consultas, filtroTramite, filtroUrgencia, filtroPais]);

    const paisesUnicos = Array.from(
        new Set(
            consultas
                .map((consulta) => consulta.pais)
                .filter((pais): pais is string => Boolean(pais))
        )
    );

    return (
        <>
            <div className="mb-8 grid gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 md:grid-cols-3">
                <select
                    value={filtroTramite}
                    onChange={(e) => setFiltroTramite(e.target.value)}
                    className="w-full rounded-lg border p-3"
                >
                    <option value="">Filtrar por trámite</option>
                    <option value="visa">Visa</option>
                    <option value="prorroga">Prórroga</option>
                    <option value="cedula">Cédula de extranjería</option>
                    <option value="movimientos">Movimientos migratorios</option>
                    <option value="nacionalidad">Nacionalidad</option>
                    <option value="convalidacion">Convalidación</option>
                    <option value="otro">Otro</option>
                </select>

                <select
                    value={filtroUrgencia}
                    onChange={(e) => setFiltroUrgencia(e.target.value)}
                    className="w-full rounded-lg border p-3"
                >
                    <option value="">Filtrar por urgencia</option>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>

                <select
                    value={filtroPais}
                    onChange={(e) => setFiltroPais(e.target.value)}
                    className="w-full rounded-lg border p-3"
                >
                    <option value="">Filtrar por país</option>
                    {paisesUnicos.map((pais) => (
                        <option key={pais} value={pais}>
                            {pais}
                        </option>
                    ))}
                </select>
            </div>

            {consultasFiltradas.length === 0 ? (
                <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                    <p className="text-slate-600">
                        No hay consultas que coincidan con los filtros.
                    </p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {consultasFiltradas.map((consulta) => (
                        <article
                            key={consulta.id}
                            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                        >
                            <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                                        Consulta recibida
                                    </p>
                                    <h2 className="mt-2 text-2xl text-slate-900">
                                        {consulta.nombre || "Sin nombre"}
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-500">
                                        Solicitud registrada desde el formulario público del sitio.
                                    </p>
                                </div>

                                <div className="flex flex-col items-start gap-3 md:items-end">
                                    <div className="flex flex-wrap items-center gap-2">
                                        {consulta.estado && (
                                            <span
                                                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${consulta.estado === "nueva"
                                                    ? "bg-sky-100 text-sky-700"
                                                    : consulta.estado === "en revisión"
                                                        ? "bg-violet-100 text-violet-700"
                                                        : consulta.estado === "respondida"
                                                            ? "bg-emerald-100 text-emerald-700"
                                                            : "bg-slate-200 text-slate-700"
                                                    }`}
                                            >
                                                Estado: {consulta.estado}
                                            </span>
                                        )}

                                        {consulta.tramite && (
                                            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                                                {consulta.tramite}
                                            </span>
                                        )}

                                        {consulta.urgencia && (
                                            <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
                                                Urgencia: {consulta.urgencia}
                                            </span>
                                        )}
                                    </div>

                                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                            Cambiar estado
                                        </label>

                                        <select
                                            value={consulta.estado || "nueva"}
                                            onChange={async (e) => {
                                                await fetch("/api/consultas", {
                                                    method: "PATCH",
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                    },
                                                    body: JSON.stringify({
                                                        id: consulta.id,
                                                        estado: e.target.value,
                                                    }),
                                                });

                                                location.reload();
                                            }}
                                            className=".min-w-[180px] rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        >
                                            <option value="nueva">Nueva</option>
                                            <option value="en revisión">En revisión</option>
                                            <option value="respondida">Respondida</option>
                                            <option value="cerrada">Cerrada</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                        Correo
                                    </p>
                                    <p className="mt-1 text-slate-700">
                                        {consulta.email || "No registrado"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                        Teléfono
                                    </p>
                                    <p className="mt-1 text-slate-700">
                                        {consulta.telefono || "No registrado"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                        Nacionalidad
                                    </p>
                                    <p className="mt-1 text-slate-700">
                                        {consulta.nacionalidad || "No registrada"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                        País
                                    </p>
                                    <p className="mt-1 text-slate-700">
                                        {consulta.pais || "No registrado"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                        Tipo de trámite
                                    </p>
                                    <p className="mt-1 text-slate-700">
                                        {consulta.tramite || "No registrado"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                        Urgencia
                                    </p>
                                    <p className="mt-1 text-slate-700">
                                        {consulta.urgencia || "No registrada"}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 rounded-xl bg-slate-50 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                    Mensaje
                                </p>
                                <p className="mt-2 leading-7 text-slate-700">
                                    {consulta.mensaje || "Sin mensaje"}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </>
    );
}