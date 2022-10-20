import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";

export default function BasicExample() {
return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Inicio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Implantes</Nav.Link>
                <Nav.Link href="#link">Soporte</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        
        <CartWidget></CartWidget>
    </Navbar>
    
);
}


/*export default function Navbar({conBoton, color, funcionLogin}){
    console.log(conBoton);
    console.log(color);
    return (
    <div>
        <div style={{backgroundColor: color}}>
            logo--colocar logo
            <ul>
                <li>
                    <a href="https://google.com">ir a google</a>
                </li>
                <li>
                    <a href="https://google.com">ir a google</a>
                </li>
                <li>
                    <a href="https://google.com">ir a google</a>
                </li>
                <li>
                    <a href="https://google.com">ir a google</a>
                </li>
            </ul>
            {conBoton? <button onClick={() => funcionLogin()}>LOGIN</button> : ""} ESTO ES UN IF
            
        </div>
    </div>
    )
}*/