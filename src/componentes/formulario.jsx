import { useForm } from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import { esquemaSuscripcion, PLATAFORMAS, GENEROS, PLANES } from "../esquemas/suscripcion.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { crearSuscripcion } from "../servicios/suscripciones.js";
function Formulario() {

    const queryClient = useQueryClient();

    const {
        register, // conecta un input al formulario
        handleSubmit, // envuelve nuestro onSubmit
        reset,
        setFocus, // para poner el foco en un input
        formState: { errors, isSubmitting },
    } = useForm({resolver: zodResolver(esquemaSuscripcion)});
    
    const mutacion = useMutation({
        mutationFn: crearSuscripcion,
        onSuccess:() => {
            reset();
            queryClient.invalidateQueries({queryKey:["suscriptores"]});
        }
    });

    function onSubmit(datos) {
        mutacion.mutate({ ...datos, fechaAlta: new Date().toISOString() });
    }
    function onError(errs){
        setFocus(Object.keys(errs)[0])

    }
    const accesibilidad = (campo)=>({
        "aria-invalid": !!errors[campo],
        "aria-describedby":errors[campo] ? `error-${campo}`:undefined,
    });

    const mensaje = (campo) => errors[campo] ? (
      <p id={`error-${campo}`} role="alert" className="error">
        {errors[campo].message}
      </p>
    ) : null;

    return (
        <form onChange={() => mutacion.reset()}onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <label htmlFor="nombre">
            Nombre
            <input id="nombre" type="text" autoComplete="name" {...accesibilidad("nombre")} {...register("nombre")} />
        </label>
        {mensaje("nombre")}

        <label htmlFor="alias">Alias de jugador</label>
        <input id="alias" type="text" autoComplete="nickname" placeholder="Ej: NeonLynx_77" {...accesibilidad("alias")} {...register("alias")}/>
        {mensaje("alias")}

        <label htmlFor="email">
            Email
        <input id="email" type="email" autoComplete="email" {...register("email")} {...accesibilidad("email")}/>
        </label>
        {mensaje("email")}
        
        <label htmlFor="edad">
            Edad
        <input id="edad" type="number" {...accesibilidad("edad")}{...register("edad")}/> 
        </label>
        {mensaje("edad")}

        <fieldset {...accesibilidad("plataformas")}>
            <legend>Plataformas</legend>
            <div className="opciones">{PLATAFORMAS.map((p) => (
              <label key={p}>
                <input type="checkbox" value={p} {...register("plataformas")}/>
                {p}
              </label>  
            ))}    
            </div>
        </fieldset>
    

        <fieldset {...accesibilidad("generos")}>
            <legend>Géneros favoritos</legend>
            <div className="opciones">{GENEROS.map((g) => (
              <label key={g}>
                <input type="checkbox" value={g} {...register("generos")}/>
                {g}
              </label>  
            ))}    
            </div>
        </fieldset>
        

        <fieldset {...accesibilidad("plan")}>
            <legend>Plan de suscripción</legend>
            <div className="opciones">
                {PLANES.map((p)=>(
                    <label key={p}>
                        <input type="radio" value={p} {...register("plan")}/>
                        {p}
                    </label>
                ))}
            </div>
        </fieldset>

        <label htmlFor="direccion">
            Dirección de envío (obligatoria según el plan escogido)
        </label>
        <input id="direccion" type="text" autoComplete="street-address"{...accesibilidad("direccion")} {...register("direccion")}></input>
        {mensaje("direccion")}

        <label htmlFor="aceptaTerminos">
            Acepto los términos
        <input type="checkbox" {...accesibilidad("aceptaTerminos")} {...register("aceptaTerminos")} />
        </label>
        {mensaje("aceptaTerminos")}
    

        <button disabled={isSubmitting || mutacion.isPending}>
            {mutacion.isPending ? "Conectando…" : "Suscribirme"}
        </button>

        {mutacion.isError && (
            <p role="alert" className="error">
            {mutacion.error.message}
            </p>
        )}
        {mutacion.isSuccess && (
            <p role="status" className="ok">
            ¡Suscripción confirmada! Bienvenido al juego.
            </p>
        )}
        </form>
    );
}

export default Formulario;