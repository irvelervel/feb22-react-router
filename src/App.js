import './App.css'
// let's import the bootstrap .css file
import 'bootstrap/dist/css/bootstrap.min.css' // this is needed since react-bootstrap doesn't bring
// automatically the bootstrap css file
import MyNavbar from './components/MyNavbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import { Container } from 'react-bootstrap'
import ReservationList from './components/ReservationList'
import ReservationForm from './components/ReservationForm'
import Booking from './components/Booking'
import Menu from './components/Menu'
import PastaDetails from './components/PastaDetails'

// we're going to introduce the routing system in Strivestaurant.
// how does it work?
// <Route /> is going to serve a component on a specific path
// path -> '/', '/about', '/reservations', etc.

// BrowserRouter is a WRAPPER! you want to wrap all your routing logic into it!
// it's actually not providing any visual element

// Routes is another wrapper, but it can just contain Route elements
// use Routes to delimit the portions of JSX that you want to conditionally mount based on the URL

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* the props are useful for passing a dynamic value upon invocation of the component */}
        <MyNavbar payoff="The best pasta on the internet!" />
        {/* the Navbar component is not going to part of Routes, */}
        {/* because we want the navbar to be ALWAYS present in our app! */}
        <Routes>
          {/* this Routes components sets up a conditional redering */}
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Booking />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/details/:pastaId" element={<PastaDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* you'll get mounted ONE <Route /> per <Routes /> container */}
      </div>
    </BrowserRouter>
    // ADVANCED ROUTING AHEAD (with sub-routes for '/reservations')
    //   <BrowserRouter>
    //   <div>
    //     {/* the props are useful for passing a dynamic value upon invocation of the component */}
    //     <MyNavbar payoff="The best pasta on the internet!" />
    //     {/* the Navbar component is not going to part of Routes, */}
    //     {/* because we want the navbar to be ALWAYS present in our app! */}
    //     <Routes>
    //       {/* this Routes components sets up a conditional redering */}
    //       <Route path="/" element={<Home />} />
    //       <Route path="/reservations">
    //         <Route
    //           index
    //           element={<h2>welcome to the reservations section!</h2>}
    //         />
    //         <Route path="form" element={<ReservationForm />} />
    //         <Route path="list" element={<ReservationList />} />
    //         <Route path="*" element={<NotFound />} />
    //       </Route>
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //     {/* you'll get mounted ONE <Route /> per <Routes /> container */}
    //   </div>
    // </BrowserRouter>
  )
}

export default App
