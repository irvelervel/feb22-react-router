import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import dishes from '../data/menu.json'

const PastaDetails = () => {
  // now I have to retrieve that argument from the address bar!
  // how did I declare that parameter in my route? pastaId

  const [pastaDetails, setPastaDetails] = useState(null)

  const params = useParams()
  console.log('PARAMS', params)
  // an object with the key/value of that parameter we declared on the <Route /> component

  const navigate = useNavigate()

  // now with params.pastaId I can get from the address bar the id of the pasta I should show the details of!

  useEffect(() => {
    // let's find the pasta with an id === params.pastaId
    // body: JSON.stringify(obj)
    let rightPastaToShow = dishes.find(
      (dish) => dish.id.toString() === params.pastaId // with == -> '4' equal to 4 :(
    )
    console.log('RIGHT PASTA', rightPastaToShow)
    if (!rightPastaToShow) {
      // this means the corresponding pasta was not found
      // is the user trying to put random things in the address bar? :)
      navigate('/not-found')
    } else {
      setPastaDetails(rightPastaToShow)
    }
  }, []) // like componentDidMount

  return (
    <Container>
      <Row className="justify-content-center my-3">
        <Col className="text-center">
          <h2>PASTA DETAILS COMPONENT</h2>
          {pastaDetails && (
            <Card>
              <Card.Img variant="top" src={pastaDetails.image} />
              <Card.Body>
                <Card.Title>{pastaDetails.name}</Card.Title>
                <Card.Text>{pastaDetails.description}</Card.Text>
                <Button variant="primary" onClick={() => navigate('/menu')}>
                  Take another one!
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default PastaDetails
