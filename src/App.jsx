
import Formulario from './componentes/Formulario.jsx';
import Lista from "./componentes/lista.jsx";

function App() {
   return (
    <main>
      <header>
        <h1>
          NEON <span>CONTINUE</span>
        </h1>
        <p>La revista de videojuegos para quienes nunca pulsan «Salir».</p>
      </header>

      <section aria-labelledby="titulo-alta">
        <h2 id="titulo-alta">Alta de suscriptor</h2>
        <Formulario />
      </section>

      <section aria-labelledby="titulo-lista">
        <h2 id="titulo-lista">Jugadores suscritos</h2>
        <Lista />
      </section>
    </main>
  );
}
}

export default App

//set, post, put y patch, delete eso tiene que hacer, crud.
//json-server, app que corre en node, que simula una api rest, para hacer pruebas de front.
//le paso un fichero jason con datos de partida, por ejemplo su generamos coches, marcas y concesionario
//podemos concetar por endpoints, por ejemplo /coches, /marcas, /concesionarios y hacer peticiones get, post, put, patch y delete.
//si hacemos https:3080/coches nos devuelve todos los coches, si hacemos https:3080/coches/1 nos devuelve el coche con id 1, si hacemos post a /coches con un json de un coche nos lo añade, si hacemos put a /coches/1 con un json de un coche nos lo actualiza, si hacemos patch a /coches/1 con un json de un coche nos lo actualiza parcialmente y si hacemos delete a /coches/1 nos lo borra.
