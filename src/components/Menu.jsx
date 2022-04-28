import { Col, Row, Container, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import dishes from '../data/menu.json'

const Menu = () => (
  <Container>
    {dishes.map((pasta) => (
      <Row key={pasta.id} className="justify-content-center my-3">
        <Col className="text-center">
          <Link to={'/details/' + pasta.id}>
            <img src={pasta.image} alt="pasta-img" />
          </Link>
          <h4>
            <div>{pasta.name}</div>
            <div>
              <Badge variant="warning">{pasta.price}</Badge>
            </div>
            <div>
              <Badge variant="danger">{pasta.label}</Badge>
            </div>
          </h4>
        </Col>
      </Row>
    ))}
  </Container>
)

export default Menu
