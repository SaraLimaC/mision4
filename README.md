Misión M4 · Formularios y peticiones HTTP — Web Development I.

## Cómo probarlo
Ejecuta en dos terminales diferentes los siguientes comandos:
*   npx json-server db.json --port 3000, en la primera
*   npm run dev en la segunda terminal

Para abrirlo simplemente se pulsa en el enlace de la segunda terminal. Se trata de una web de suscripción a una revista de videojuegos, con varios campos, como el nombre y opciones de plataformas, generos o tipo de suscripción.

Si se introducen datos incorrectos se de un aviso, al tratarse de un tipo formulario que es validado por Zod

## Uso de IA
Usé Claude para crear un css que fuera estilo neon y me devolvío el código css que usé en index.css.

Ejemplo de prompt: realiza un diseño de estilo ciberpunk para una web de suscripción a una revista de videojuegos.

Usé Claude también para el bonus de la misión de safeParse de la API y atrapar datos corruptos. Además me generó las funciones auxiliares de accesibilidad

Ejemplo de prompt: necesito usar funciones de accesibilidad que devuelvan aria-invalid,aria-describedby.

Usé ChatGPT para ayudarme con a usar json-server paso a paso y para montar los archivos de .env y el ejemplo del mismo y no subir el original a github usando gitignore.

Ejemplo de prompt: ayúdame a usar el json-server paso a paso y meterle info.
    
## Autopsia

1. Cuando estaba añadiendo los campos al formulario, en suscripción y suscripciones de tipo js ví que la contraseña no era necesaria porque no tenía porque iniciar sesión si ya estaba el email de forma de contacto, aparte que en la base de datos no quería guardar las contraseña porque va en contra de la seguridad. En suscripciones tendría que hallar la forma de evitar que se guardaran al crear la suscripción entonces decidí borrar los campos de password y repetir para comrpobarla.


2. Tenía un problema con el refine, a veces no se ejecutaba si no que se saltaba porque plan era un enum y los términos eran literal . Si no elegía un plan no me pedía la dirección y eso no es nada correcto. Opte por cambiarlos por z.string con un mensaje de error por el mínimo de elecciones y un refine en aceptarTerminos para que se aceptará usando un boleano