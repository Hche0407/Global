export default function PerfilPage() {
    return (
        <main className="min-h-screen bg-slate-100 py-12">
            <div className="container-main">
                {/* Encabezado */}
                <div className="mb-10 overflow-hidden .rounded-[32px] hero-bg px-8 py-10 text-white shadow-xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                        Panel de usuario
                    </p>

                    <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
                        Bienvenido a tu perfil
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                        Desde aquí podrás consultar el estado de tu solicitud, revisar tu
                        configuración y gestionar tu acceso dentro de la plataforma.
                    </p>
                </div>

                {/* Tarjetas */}
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Configuración */}
                    <a
                        href="/perfil/configuracion"
                        className="group rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-700">
                            ⚙️
                        </div>

                        <h2 className="text-2xl text-slate-900">Configuración</h2>

                        <p className="mt-3 leading-7 text-slate-600">
                            Administra tus datos básicos, preferencias y opciones de acceso a
                            la plataforma.
                        </p>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                            Ver opción
                        </p>
                    </a>

                    {/* Estado de la consulta */}
                    <a
                        href="/perfil/estado-consulta"
                        className="group rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-700">
                            📄
                        </div>

                        <h2 className="text-2xl text-slate-900">Estado de la consulta</h2>

                        <p className="mt-3 leading-7 text-slate-600">
                            Consulta el avance de tu solicitud y visualiza el estado actual de
                            tu caso de forma clara y organizada.
                        </p>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                            Ver opción
                        </p>
                    </a>

                    {/* Cerrar sesión */}
                    <a
                        href="/"
                        className="group rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-2xl text-rose-700">
                            ↩️
                        </div>

                        <h2 className="text-2xl text-slate-900">Cerrar sesión</h2>

                        <p className="mt-3 leading-7 text-slate-600">
                            Sal de tu perfil y regresa a la página principal de la plataforma.
                        </p>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
                            Salir
                        </p>
                    </a>
                </div>
            </div>
        </main>
    );
}