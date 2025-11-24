import Card from 'react-bootstrap/Card';



const Frase = () => {
  return (
    <div>
        {/* <img src="" alt="" /> */}
      <Card className='text-center' >
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Frase
