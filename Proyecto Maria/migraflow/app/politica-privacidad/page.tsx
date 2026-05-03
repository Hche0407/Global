import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ContactPopup from "@/components/ContactPopup";

export default function HomePage() {
    return (
        <main>
            <Navbar />
            <Hero />

            <section id="nosotros" className="bg-slate-100 py-24">
                <div className="container-main grid gap-16 md:grid-cols-2 md:items-center">
                    {/* Imagen */}
                    <div className="relative w-full max-w-xl">
                        {/* fondo decorativo */}
                        <div className="absolute -right-6 -bottom-6 h-full w-full rounded-4xl bg-slate-300/40" />

                        {/* imagen */}
                        <div className="relative overflow-hidden rounded-4xl shadow-xl">
                            <Image
                                src="/abogada.jpg"
                                alt="Abogada especialista en derecho migratorio brindando asesoría profesional"
                                width={600}
                                height={700}
                                className="h-full w-full object-cover"
                            />

                            {/* overlay suave */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
                        </div>
                    </div>

                    {/* Texto */}
                    <div className="max-w-xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                            Nosotros
                        </p>

                        <h2 className="mt-4 text-4xl font-semibold leading-[1.2] tracking-[-0.02em] text-slate-900 sm:text-5xl">
                            Asesoría migratoria con enfoque estratégico y humano
                        </h2>

                        <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
                            GlobalInmigration nace como una iniciativa para brindar asesoría
                            migratoria personalizada, con una experiencia moderna, organizada
                            y profesional.
                        </p>

                        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                            Acompañamos cada caso de forma clara y transparente, facilitando
                            la revisión y el seguimiento de cada trámite con dedicación y
                            rigor legal.
                        </p>
                    </div>
                </div>
            </section>

            <Services />
            <Benefits />
            <Testimonials />
            <ContactForm />
            <Footer />

            {/* Botón flotante de contacto rápido */}
            <ContactPopup />
        </main>
    );
}
