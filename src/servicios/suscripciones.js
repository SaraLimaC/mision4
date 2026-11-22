import {esquemaSuscriptores} from "../esquemas/suscripcion.js";

const API_URL = import.meta.env.VITE_API_URL;
const RUTA_SUSCRIPTORES = `${API_URL}/suscriptores`;

//POST
export async function crearSuscripcion(datos){
    const r = await fetch(RUTA_SUSCRIPTORES, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(datos)
    });
    //si falla
    if(!r.ok){
        throw new Error("Error al crear la suscripción");
    }
    return r.json();
}

//GET
export async function obtenerSuscriptores(){
    const r = await fetch(RUTA_SUSCRIPTORES);   

    if(!r.ok){
        throw new Error("Error al obtener los suscriptores");
    }
    const datos = await r.json();
    const resultado = esquemaSuscriptores.safeParse(datos);
    if(!resultado.success){
        console.error("Datos corruptos del API:", resultado.error.issues);
        throw new Error("La API devolvió datos con un formato inesperado");
    }

    return resultado.data;
}