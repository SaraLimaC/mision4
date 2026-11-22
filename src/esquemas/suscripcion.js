import { z } from "zod";

//definimos las opciones de la revista
export const PLATAFORMAS =["PC", "PlayStation", "Xbox", "Switch"];
export const GENEROS =["Acción", "Aventura", "Deportes", "Estrategia", "RPG", "Indie", "Terror", "Simulación"];
export const PLANES =["digital", "papel","mixto"];

//esquema de la suscripción
export const esquemaSuscripcion = z.object({
    nombre: z.string().trim().min(2, "El nombre es demasiado corto").max(50,"El nombre es demasiado largo"),

    alias: z.string().trim().min(3,"El alias debe tener al menos 3 caracteres").max(20,"El alias debe ser menor de 20 caracteres"),

    email: z.email("Email no válido"),

    edad: z.coerce.number("introduce unicamente números").int("necesario un número entero").min(18, "Debes ser mayor de edad"),

    plataformas: z.array(z.enum(PLATAFORMAS)).min(1, "Elige al menos 1 de las plataformas disponibles"),

    generos:z.array(z.enum(GENEROS)).min(1,"Elige al menos 1 de los géneros disponibles"),

    plan: z.enum(PLANES, {error: "Elige un plan de suscripción"}),

    direccion: z.string().trim().max(150,"La dirección es muy larga"),

    aceptaTerminos: z.literal(true, {error: "Debes aceptar los términos"}),
})

.refine(
    (datos) => !["papel", "mixto"].includes(datos.plan) || datos.direccion.length >= 8,
    { error: "La dirección es obligatoria para papel o mixto", path: ["direccion"] }
);

//esquema de la respuesta API , el bonus
export const esquemaSuscriptor = z.object({
    id:z.string(),
    nombre: z.string(),
    alias:z.string(),
    email: z.email(),
    edad: z.number(),
    plataformas: z.array(z.string()),
    generos: z.array(z.string()),
    plan: z.string(),
    direccion: z.string(),
    aceptaTerminos: z.literal(true),
    fechaAlta: z.string(),
})

export const esquemaSuscriptores = z.array(esquemaSuscriptor)