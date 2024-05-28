import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Aboutus from './Aboutus';
import './navbar.css';  // Import the navbar CSS file

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="navbar-custom" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Football Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/productlist"}>Products</Nav.Link>
            <Nav.Link as={Link} to={"/product"}>Add Product</Nav.Link>
            <Nav.Link as={Link} to={"/Aboutus"}>About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
