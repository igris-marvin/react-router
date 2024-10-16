import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Services } from "./pages/services/Services"
import { About } from "./pages/about/About"


function App() {

  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <NavLink to="/" className="navbar-brand">My Services</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <NavLink to="/" className="nav-link" >Home</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/services" className="nav-link" >Services</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/about" className="nav-link" >About</NavLink>
                      </li>
                  </ul>
              </div>
            </div>
        </nav>

        <header className="bg-primary text-white text-center py-5">
            <div className="container">
                <h1>Welcome to My Services</h1>
                <p className="lead">Your one-stop solution for all your needs</p>
                <a href="#" className="btn btn-secondary btn-lg">Get Started</a>
            </div>
        </header>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route index={true} element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
