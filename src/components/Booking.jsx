import { Container } from 'react-bootstrap'
import ReservationForm from './ReservationForm'
import ReservationList from './ReservationList'

const Booking = () => (
  <Container>
    <ReservationList />
    <ReservationForm />
  </Container>
)

export default Booking
