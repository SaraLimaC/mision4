Misión M4 · Formularios y peticiones HTTP — Web Development I.

## Cómo probarlo
Ejecuta en dos terminales diferentes los siguientes comandos:
*   npx json-server db.json, en la primera
*   npm run dev en la segunda terminal

Para abrirlo simplemente se pulsa en el enlace de la segunda terminal. Se trata de una web de suscripción a una revista de videojuegos, con varios campos, como el nombre y opciones de plataformas, generos o tipo de suscripción.

Si se introducen datos incorrectos se de un aviso, al tratarse de un tipo formulario que es validado por Zod

## Uso de IA
Usé Claude para crear un css que fuera estilo neon y me devolvío el código css que usé en index

Ejemplo de prompt: realiza un diseño de estilo ciberpunk para un formulario.


Alguno prompts usados:
 -  Como añadir el modo oscuro en javascript
 -  Como puedo cambiar el color de un texto con botones para cada color
 -  Como puedo añadir una cuenta atras para ver el número de palabras que puedo escribir cambiando color y tamaño

    
## Autopsia

1. Cuando comparaba las palabras o frases había un cierto orden , tenía que darle primero a los botones y luego escribir para que validará si eran iguales, entonces cree una función checkear() que se llamaba cada vez que tocabas un botón y así el orden no importa y puedes escribir y cambiar con los botones o viceversa.


2. A la hora de comparar las palabras o frases no se realizaba una comparación justa entre colores y tamaños por lo que cambié el formato de declaración de los colores de "red" a rgb(255,0,0), con los tamañon hice los mismo y usé la unidad px.