import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => (
  <Container>
    <Row className="justify-content-center mt-4">
      <Col className="text-center">
        <h2>404 - Pasta not found</h2>
        <div>Click here to go home!</div>
      </Col>
    </Row>
  </Container>
)

export default NotFound
