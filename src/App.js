import './App.css'
// let's import the bootstrap .css file
import 'bootstrap/dist/css/bootstrap.min.css' // this is needed since react-bootstrap doesn't bring
// automatically the bootstrap css file
import MyNavbar from './components/MyNavbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
          <Route
            path="*"
            element={
              <div>
                <h1>404 - Pasta not found</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
