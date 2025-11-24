import { Container, Button, Spinner } from "react-bootstrap";
import logo from "./assets/logoSimpsons.png";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [frase, setFrase] = useState({});

  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    obtenerFrase();
  }, []);

  const obtenerFrase = async () => {
    try {
      setMostrarSpinner(true);

      const respuesta = await fetch(
        "https://thesimpsonsapi.com/api/characters"
      );

      const datos = await respuesta.json();
      console.log(datos.results);

      const personajes = datos.results;
      const personajeRandom =
        personajes[Math.floor(Math.random() * personajes.length)];

      setMostrarSpinner(false);

      setFrase(personajeRandom);


    } catch (error) {
      
      console.log("Error al obtener la frase", error);

    } finally {
      // codigo opcional
    }
  };

  return (
    <>
      <Container className="text-center mb-3">
        <img src={logo} alt="logo Simpsons" className="w-50" />

        {mostrarSpinner ? (
          <div>
            <Spinner animation="grow" variant="ligth" />
            <p>Cargando...</p>
          </div>
        ) : (
          <Frase frase={frase} />
        )}

        <Button variant="warning" className="mt-4" onClick={() => obtenerFrase()}>
          Obtener Frase
        </Button>
      </Container>
    </>
  );
}

export default App;
