import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import {NavLink} from "react-router-dom"


const Header = ()=> {
  return (
    <Navbar className="navbar " expand="lg">
      <Container>
        <Navbar.Brand to="/" className="fs-2 text-orange">MINI SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbarScroll me-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/show">Products</Link>
            <Link to="book">Books</Link>
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