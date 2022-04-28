import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// Link generates a special <a /> in the DOM, which doesn't trigger the browser's default behavior (reloading the page)

const MyNavbar = ({ payoff }) => {
  //   console.log(props)

  // props looks like this:
  // {
  //     payoff: "The best pasta on the internet!"
  // }

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
            <div className="nav-link">Menu</div>
          </Link>
          <Link to="/reservations">
            <div className="nav-link">Reservations</div>
          </Link>
          {/* Nav.Link outputs an anchor tag. Because I want to wrap it */}
          {/* in my own anchor tag, the Link component, I have to refactor */}
          {/* a little bit this react bootstrap component and output a div insted */}
          <Link to="/contact">
            <div className="nav-link">Contact</div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
