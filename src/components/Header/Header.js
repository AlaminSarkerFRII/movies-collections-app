import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import {NavLink} from "react-router-dom"


const Header = ()=> {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand to="/">FilMoja</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="about">About</Nav.Link>
            <Nav.Link to="show">Link</Nav.Link>
            <Nav.Link to="book">Books</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/login" className="btn btn-primary">sign up</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;