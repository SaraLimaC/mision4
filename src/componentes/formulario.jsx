import { useForm } from "react-hook-form";
import { esquemaInscripcion } from "../esquemas/inscripcion";
import { zodResolver } from "@hookform/resolvers/zod";

function Formulario() {
    const {
        register, // conecta un input al formulario
        handleSubmit, // envuelve nuestro onSubmit
        reset,
        formState: { errors, isSubmitting },
    } = useForm({resolver: zodResolver(esquemaInscripcion)});
    
    // Solo se ejecuta si la validación pasa. data = { email, password }
    function onSubmit(data) {
        console.log(data);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
        Nombre
        <input {...register("nombre")} />
        </label>
        {errors.nombre && <p className="error">{errors.nombre.message}</p>}
        <label>
        Email
        <input type="email" {...register("email")} />
        </label>
        {errors.email && <p className="error">{errors.email.message}</p>}
        <label>
        Contraseña
        <input type="password" {...register("password")} />
        </label>
        {errors.password && <p className="error">{errors.password.message}</p>}
        <label>
        Repetir contraseña
        <input type="password" {...register("repetir")} />
        </label>
        {errors.repetir && <p className="error">{errors.repetir.message}</p>}
        <label>
        <input type="checkbox" {...register("aceptaTerminos")} />
        Acepto los términos
        </label>
        {errors.aceptaTerminos && (
        <p className="error">{errors.aceptaTerminos.message}</p>
        )}
        <button disabled={isSubmitting}>
        {isSubmitting ? "Registrando…" : "Crear cuenta"}
        </button>
        </form>
    );
}

export default Formulario;