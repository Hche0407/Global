export default function LoginPage() {
    return (
        <main className="min-h-screen bg-slate-100">
            <div className="grid min-h-screen md:grid-cols-2">
                {/* Lado izquierdo */}
                <section className="hero-bg flex items-center px-8 py-16 text-white md:px-16">
                    <div className="max-w-xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                            Acceso de usuarios
                        </p>

                        <h1 className="mt-4 text-5xl leading-[1.05] tracking-[-0.02em]">
                            Inicia sesión y gestiona tus solicitudes
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-white/80">
                            Accede a una experiencia organizada para consultar el estado de tus
                            procesos, revisar información y mantener comunicación de manera
                            clara y profesional.
                        </p>
                    </div>
                </section>

                {/* Lado derecho */}
                <section className="flex items-center justify-center px-6 py-16">
                    <div className="w-full max-w-md .rounded-[32px] bg-white p-8 shadow-xl ring-1 ring-slate-200">
                        <div className="mb-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                                Bienvenido
                            </p>
                            <h2 className="mt-3 text-3xl text-slate-900">
                                Iniciar sesión
                            </h2>
                            <p className="mt-2 text-slate-500">
                                Ingresa tus datos para acceder a tu cuenta.
                            </p>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    placeholder="correo@ejemplo.com"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    placeholder="********"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full">
                                Ingresar
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm text-slate-500">
                            ¿No tienes cuenta?{" "}
                            <a href="/registro" className="font-medium text-blue-600 hover:underline">
                                Regístrate
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}