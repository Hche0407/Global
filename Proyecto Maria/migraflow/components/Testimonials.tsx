"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
    name: string;
    origin: string;
    procedure: string;
    rating: number; // 1 a 5
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: "María Rodríguez",
        origin: "Venezuela",
        procedure: "Cédula de extranjería",
        rating: 5,
        quote:
            "El acompañamiento fue excelente desde el primer momento. Me explicaron cada paso con claridad y mi cédula salió en el tiempo prometido.",
    },
    {
        name: "Carlos Méndez",
        origin: "Perú",
        procedure: "Visa de trabajo",
        rating: 5,
        quote:
            "Profesionalismo y atención humana en cada etapa. Me sentí acompañado durante todo el proceso de mi visa de trabajo en Colombia.",
    },
    {
        name: "Ana Sofía García",
        origin: "Ecuador",
        procedure: "Convalidación de título",
        rating: 5,
        quote:
            "La convalidación de mi título fue mucho más sencilla con su asesoría. Resolvieron todas mis dudas de forma clara y oportuna.",
    },
    {
        name: "Luis Hernández",
        origin: "México",
        procedure: "Nacionalidad",
        rating: 4,
        quote:
            "Un equipo muy profesional. El proceso para obtener la nacionalidad fue largo pero el acompañamiento marcó la diferencia.",
    },
    {
        name: "Valentina Torres",
        origin: "Argentina",
        procedure: "Prórroga de visa",
        rating: 5,
        quote:
            "Recomiendo totalmente sus servicios. Atención rápida, clara y sin sorpresas. Mi prórroga se gestionó sin contratiempos.",
    },
];

// Componente de estrellas
function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1" role="img" aria-label={`${rating} de 5 estrellas`}>
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    size={18}
                    className={
                        star <= rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-slate-200 text-slate-200"
                    }
                />
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const totalSlides = testimonials.length;

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToIndex = (index: number) => {
        setCurrentIndex(index);
    };

    // Autoplay: avanza cada 5 segundos
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            goToNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [goToNext, isPaused]);

    return (
        <section id="testimonios" className="bg-white py-24">
            <div className="container-main">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                        Testimonios
                    </p>
                    <h2 className="mt-4 text-4xl font-semibold leading-[1.2] tracking-[-0.02em] text-slate-900 sm:text-5xl">
                        Lo que dicen nuestros clientes
                    </h2>
                    <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
                        La confianza de quienes hemos acompañado es nuestro mejor aval.
                    </p>
                </div>

                {/* Carrusel */}
                <div
                    className="mt-16 relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Contenedor del slide actual */}
                    <div className="overflow-hidden rounded-3xl">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <article
                                    key={index}
                                    className="w-full shrink-0 px-4"
                                    aria-hidden={index !== currentIndex}
                                >
                                    <div className="bg-linear-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 sm:p-12 mx-2">
                                        <Quote className="text-blue-200" size={40} />

                                        <div className="mt-4">
                                            <StarRating rating={testimonial.rating} />
                                        </div>

                                        <blockquote className="mt-6 text-lg sm:text-xl text-slate-700 leading-8 italic">
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </blockquote>

                                        <div className="mt-8 border-t border-slate-200 pt-6">
                                            <p className="font-semibold text-slate-900 text-lg">
                                                {testimonial.name}
                                            </p>
                                            <p className="mt-1 text-sm text-slate-500">
                                                {testimonial.origin} · {testimonial.procedure}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Botones de navegación */}
                    <button
                        type="button"
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50 transition z-10"
                        aria-label="Testimonio anterior"
                    >
                        <ChevronLeft size={20} className="text-slate-700" />
                    </button>

                    <button
                        type="button"
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50 transition z-10"
                        aria-label="Siguiente testimonio"
                    >
                        <ChevronRight size={20} className="text-slate-700" />
                    </button>

                    {/* Indicadores (puntos) */}
                    <div className="mt-8 flex justify-center gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => goToIndex(index)}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                    ? "w-8 bg-blue-600"
                                    : "w-2 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                aria-label={`Ir al testimonio ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
