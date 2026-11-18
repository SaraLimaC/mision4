import { z } from "zod";

export const esquemaInscripcion = z.object({
    nombre: z.string().min(2, "El nombre es demasiado corto"),
    email: z.email("Email no válido"),
    password: z.string().min(8, "Mínimo 8 caracteres"),
    repetir: z.string(),
    edad: z.coerce.number().int().min(18, "Debes ser mayor de edad"),
    aceptaTerminos: z.literal(true, {
    error: "Debes aceptar los términos",
}),
})
.refine((datos) => datos.password === datos.repetir, {
    error: "Las contraseñas no coinciden",
    path: ["repetir"], // a qué campo se asigna el error
});