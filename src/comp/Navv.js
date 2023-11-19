import React from 'react'
import {Link} from "react-router-dom";
import "./nav.css";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Dark from './darklight/DarkMode';
export default function nav() {
  return (
    <div>
      {/* <nav className='navbar navbar-expand-md dark'>
      <Link to="/" className='navbar-brand'> home  </Link>
        <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#problemeicone1">
            <span className='navbar-toggler-icon'>hehe</span>
        </button>
        <div className='collapse navbar-collapse' id="problemeicone1">
          <ul className='navbar-nav'>
            <li className="nav-item">
            <Link className="nav-link" to='/calculator'>calculator  </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/Slider'>Slider  </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/todo'>To do list </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/API">API</Link>
            </li>
            </ul>
          </div>
        </nav> */}

{/* <> */}
{/* <Navbar bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand to="/">home</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/calculator">calculator</Link>
      <Link to="/Slider">Slider</Link>
      <Link to="todo">To do list</Link>
      <Link to="/API">API</Link>
    </Nav>
  </Container>
</Navbar>

</> */}
<div>
      <Navbar expand="lg" className="cont">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="lin" as={Link} to="/calculator">
                Calculator
              </Nav.Link>
              <Nav.Link className="lin" as={Link} to="/Slider">
                Slider
              </Nav.Link>
              <Nav.Link className="lin" as={Link} to="/todo">
                To do list
              </Nav.Link>
              <Nav.Link className="lin" as={Link} to="/API">
                API
              </Nav.Link>
              <Dark />
              
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>
    </div>
  )
}
