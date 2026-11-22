
import Formulario from "./componentes/formulario.jsx";
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

export default App

