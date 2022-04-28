import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// Link generates a special <a /> in the DOM, which doesn't trigger the browser's default behavior (reloading the page)

const MyNavbar = ({ payoff }) => {
  //   console.log(props)

  // props looks like this:
  // {
  //     payoff: "The best pasta on the internet!"
  // }

  const location = useLocation()
  console.log('LOCATION OBJECT', location)
  // the object useLocation() gives you back is filled with info
  // about the current URL you're sitting in

  const navigate = useNavigate()
  // navigate is a function
  // navigate('/reservations')
  // navigate('/')

  // both of these hooks can be obv called just in a functional component

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        {/* Link generates a special anchor tag, which will change the URL without reload the browser*/}
        <div className="navbar-brand">Strivestaurant - {payoff}</div>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {/* Nav.Link renders as an <a /> */}
          <Link to="/menu">
            <div
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
            >
              Menu
            </div>
          </Link>
          <Link to="/reservations">
            <div
              className={`nav-link${
                location.pathname === '/reservations' ? ' active' : ''
              }`}
            >
              Reservations
            </div>
          </Link>
          {/* Nav.Link outputs an anchor tag. Because I want to wrap it */}
          {/* in my own anchor tag, the Link component, I have to refactor */}
          {/* a little bit this react bootstrap component and output a div insted */}
          <Link to="/contact">
            <div
              className={
                location.pathname === '/contact'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Contact
            </div>
          </Link>
        </Nav>
        <Button
          variant="success"
          onClick={() => {
            console.log('please go home!')
            navigate('/')
          }}
        >
          GO HOME
        </Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
