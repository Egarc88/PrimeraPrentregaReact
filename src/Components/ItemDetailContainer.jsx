import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from './CartWidget';


const ItemDetailContainer = () => {
    return(
        <>

<header>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Expertos En Carnes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div>
      <CartWidget/>
    </div>

    </header>

        <section className="item-detail-container">
    <h2 className="item-list-container-title">TV y Video</h2>
        
        </section>

        <div className='row categories-container'>
    <Card className='categories-card' style={{ width: '18rem' }}>
    <p className='card-title'>Televisor Samsung 65"</p>
      <Card.Img className='categories-img' variant="top" />
    
      <Card.Body>
      <Button className="categories-button" variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>

    <div>
    <Link to={'/'} className="back-btn btn-dark">Regresar</Link>
    </div>

    </>
    )
}



export default ItemDetailContainer