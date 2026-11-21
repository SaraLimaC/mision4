import {useQuery} from "@tanstack/react-query";

import{obtenerSuscriptores} from "../servicios/suscripciones.js";

function Lista() {
    const {data, isPending,isError, error} = useQuery({
        queryKey:["suscriptores"],
        queryFn: obtenerSuscriptores,
    });
    if(isPending){
        return <p className="estado" role="status"> Cargando jugadores </p>
    }
    if(isError){
        return <p className="error" role= "alert" >{error.message}</p> 
    }
    if(data.length === 0){
        return <p className="estado">No hay suscriptores aún</p>
    }

    return(
        <ul>
            {data.map((s) =>(
                <li key={s.id}>
                    <strong>{s.alias}</strong>
                    <span>{s.plan}</span>
                    <small>
                        {s.plataformas.join(" . ")}.{s.generos.join(", ")}.desde{" "}
                        {new Date(s.fechaAlta).toLocaleDateString("es-ES")}
                    </small>
                </li>
            ))}
        </ul>
    );
}

export default Lista;