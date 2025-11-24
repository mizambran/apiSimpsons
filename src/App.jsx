import { Container, Button, Spinner } from "react-bootstrap"
import logo from './assets/logoSimpsons.png'
import Frase from "./components/Frase"



function App() {



  return (
    <>
    <Container className="text-center my-5 col-12" >
    <img src={logo} alt="logo Simpsons" className="w-50" />
    <div>
    <Spinner animation="grow" variant="ligth" />
    </div>
      <Frase></Frase>
      <Button variant="warning" className="mt-4">Enviar</Button>
    
    
    </Container>
    </>
  )
}

export default App
