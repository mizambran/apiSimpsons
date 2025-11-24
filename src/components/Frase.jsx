import Card from "react-bootstrap/Card";

const Frase = ({ frase }) => {
 

    
  return (
    <div>
      <img
        src={`https://cdn.thesimpsonsapi.com/${200}${frase.portrait_path}`}
        alt="" 
        
      />
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            {frase.name} 
            </Card.Title>
          <Card.Text>
            {frase.phrases}
            </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Frase;
