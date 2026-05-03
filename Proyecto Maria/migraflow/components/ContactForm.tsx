"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// Esquema de validación
const contactSchema = z.object({
    nombre: z
        .string()
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(100, "El nombre es demasiado largo"),
    email: z
        .string()
        .email("Por favor ingresa un correo electrónico válido"),
    telefono: z
        .string()
        .min(7, "Ingresa un número de teléfono válido")
        .regex(/^[0-9+\-\s()]+$/, "Solo se permiten números y símbolos básicos")
        .optional()
        .or(z.literal("")),
    nacionalidad: z
        .string()
        .min(2, "Por favor ingresa tu nacionalidad")
        .optional()
        .or(z.literal("")),
    pais: z.string().min(1, "Selecciona el país desde donde consultas"),
    tramite: z.string().min(1, "Selecciona el tipo de trámite"),
    urgencia: z.string().optional().or(z.literal("")),
    mensaje: z
        .string()
        .min(20, "Por favor describe tu caso con al menos 20 caracteres")
        .max(1000, "El mensaje es demasiado largo"),
    consentimiento: z.boolean().refine((val) => val === true, {
        message: "Debes aceptar la política de tratamiento de datos",
    }),
});

type ContactFormData = z.infer<typeof contactSchema>;

type SubmitStatus = "idle" | "success" | "error";

export default function ContactForm() {
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            nombre: "",
            email: "",
            telefono: "",
            nacionalidad: "",
            pais: "",
            tramite: "",
            urgencia: "",
            mensaje: "",
            consentimiento: false,
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        setSubmitStatus("idle");
        try {
            const response = await fetch("/api/consultas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Error en el envío");
            }

            setSubmitStatus("success");
            reset();

            // Auto-ocultar mensaje de éxito después de 6 segundos
            setTimeout(() => setSubmitStatus("idle"), 6000);
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
            setSubmitStatus("error");
        }
    };

    return (
        <section id="contacto" className="bg-slate-900 py-24 text-white">
            <div className="container-main grid gap-12 md:grid-cols-2">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                        Consulta
                    </p>

                    <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
                        Solicita asesoría migratoria
                    </h2>

                    <p className="mt-6 text-white/70">
                        Completa el formulario y te brindaremos una orientación clara,
                        organizada y profesional sobre tu caso.
                    </p>

                    <div className="mt-8 space-y-4 text-white/80">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 shrink-0 text-blue-400" size={20} />
                            <p>Respuesta personalizada en menos de 48 horas</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 shrink-0 text-blue-400" size={20} />
                            <p>Información tratada con total confidencialidad</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 shrink-0 text-blue-400" size={20} />
                            <p>Acompañamiento profesional en cada etapa</p>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 rounded-2xl bg-white p-6 text-black sm:p-8"
                    noValidate
                >
                    {/* Mensaje de éxito */}
                    {submitStatus === "success" && (
                        <div
                            role="alert"
                            className="flex items-start gap-3 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800"
                        >
                            <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
                            <div>
                                <p className="font-semibold">¡Solicitud enviada con éxito!</p>
                                <p className="text-sm mt-1">
                                    Te contactaremos pronto para darte seguimiento a tu consulta.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Mensaje de error */}
                    {submitStatus === "error" && (
                        <div
                            role="alert"
                            className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4 text-red-800"
                        >
                            <AlertCircle className="mt-0.5 shrink-0" size={20} />
                            <div>
                                <p className="font-semibold">No pudimos enviar tu solicitud</p>
                                <p className="text-sm mt-1">
                                    Por favor intenta nuevamente o contáctanos por otro medio.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Nombre */}
                    <div>
                        <label htmlFor="nombre" className="form-label">
                            Nombre completo <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="nombre"
                            type="text"
                            autoComplete="name"
                            className="form-input"
                            aria-invalid={errors.nombre ? "true" : "false"}
                            aria-describedby={errors.nombre ? "nombre-error" : undefined}
                            {...register("nombre")}
                        />
                        {errors.nombre && (
                            <p id="nombre-error" className="form-error" role="alert">
                                {errors.nombre.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="form-label">
                            Correo electrónico <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            className="form-input"
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            {...register("email")}
                        />
                        {errors.email && (
                            <p id="email-error" className="form-error" role="alert">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Teléfono */}
                    <div>
                        <label htmlFor="telefono" className="form-label">
                            Teléfono
                        </label>
                        <input
                            id="telefono"
                            type="tel"
                            autoComplete="tel"
                            className="form-input"
                            aria-invalid={errors.telefono ? "true" : "false"}
                            aria-describedby={errors.telefono ? "telefono-error" : undefined}
                            {...register("telefono")}
                        />
                        {errors.telefono && (
                            <p id="telefono-error" className="form-error" role="alert">
                                {errors.telefono.message}
                            </p>
                        )}
                    </div>

                    {/* Nacionalidad */}
                    <div>
                        <label htmlFor="nacionalidad" className="form-label">
                            Nacionalidad
                        </label>
                        <input
                            id="nacionalidad"
                            type="text"
                            className="form-input"
                            {...register("nacionalidad")}
                        />
                    </div>

                    {/* País */}
                    <div>
                        <label htmlFor="pais" className="form-label">
                            País desde donde consultas <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="pais"
                            className="form-input"
                            aria-invalid={errors.pais ? "true" : "false"}
                            aria-describedby={errors.pais ? "pais-error" : undefined}
                            {...register("pais")}
                        >
                            <option value="">Selecciona un país</option>
                            <option value="colombia">Colombia</option>
                            <option value="venezuela">Venezuela</option>
                            <option value="mexico">México</option>
                            <option value="peru">Perú</option>
                            <option value="ecuador">Ecuador</option>
                            <option value="argentina">Argentina</option>
                            <option value="chile">Chile</option>
                            <option value="brasil">Brasil</option>
                            <option value="espana">España</option>
                            <option value="estados_unidos">Estados Unidos</option>
                            <option value="canada">Canadá</option>
                            <option value="panama">Panamá</option>
                            <option value="costa_rica">Costa Rica</option>
                            <option value="republica_dominicana">República Dominicana</option>
                            <option value="otro">Otro</option>
                        </select>
                        {errors.pais && (
                            <p id="pais-error" className="form-error" role="alert">
                                {errors.pais.message}
                            </p>
                        )}
                    </div>

                    {/* Trámite */}
                    <div>
                        <label htmlFor="tramite" className="form-label">
                            Tipo de trámite <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="tramite"
                            className="form-input"
                            aria-invalid={errors.tramite ? "true" : "false"}
                            aria-describedby={errors.tramite ? "tramite-error" : undefined}
                            {...register("tramite")}
                        >
                            <option value="">Selecciona un trámite</option>
                            <option value="visa">Visa</option>
                            <option value="prorroga">Prórroga</option>
                            <option value="cedula">Cédula de extranjería</option>
                            <option value="movimientos">Movimientos migratorios</option>
                            <option value="nacionalidad">Nacionalidad</option>
                            <option value="convalidacion">Convalidación</option>
                            <option value="otro">Otro</option>
                        </select>
                        {errors.tramite && (
                            <p id="tramite-error" className="form-error" role="alert">
                                {errors.tramite.message}
                            </p>
                        )}
                    </div>

                    {/* Urgencia */}
                    <div>
                        <label htmlFor="urgencia" className="form-label">
                            Nivel de urgencia
                        </label>
                        <select
                            id="urgencia"
                            className="form-input"
                            {...register("urgencia")}
                        >
                            <option value="">Selecciona un nivel</option>
                            <option value="baja">Baja</option>
                            <option value="media">Media</option>
                            <option value="alta">Alta</option>
                        </select>
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label htmlFor="mensaje" className="form-label">
                            Describe tu caso <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="mensaje"
                            rows={5}
                            className="form-input resize-y"
                            aria-invalid={errors.mensaje ? "true" : "false"}
                            aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                            {...register("mensaje")}
                        />
                        {errors.mensaje && (
                            <p id="mensaje-error" className="form-error" role="alert">
                                {errors.mensaje.message}
                            </p>
                        )}
                    </div>

                    {/* Consentimiento - Habeas Data */}
                    <div>
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                className="mt-1 h-4 w-4 cursor-pointer accent-blue-600"
                                aria-invalid={errors.consentimiento ? "true" : "false"}
                                {...register("consentimiento")}
                            />
                            <span className="text-sm text-slate-700">
                                Acepto la{" "}
                                <a
                                    href="/politica-privacidad"
                                    className="text-blue-600 underline hover:text-blue-800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    política de tratamiento de datos personales
                                </a>{" "}
                                conforme a la Ley 1581 de 2012.{" "}
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        {errors.consentimiento && (
                            <p className="form-error" role="alert">
                                {errors.consentimiento.message}
                            </p>
                        )}
                    </div>

                    {/* Botón submit con loading state */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 animate-spin" size={18} />
                                Enviando...
                            </>
                        ) : (
                            "Enviar solicitud"
                        )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                        Tus datos están protegidos y solo serán usados para responder a tu
                        consulta.
                    </p>
                </form>
            </div>
        </section>
    );
}
