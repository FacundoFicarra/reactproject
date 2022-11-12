import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";

const pages = [
    { label: "Home", link: "/" },
    { label: "Checkout", link: "/checkout" },
    { label: "Militar", link: "/category/militar" },
    { label: "comun", link: "category/comun"},
    { label: "test", link:"/TestEventos"}
];


export default function BasicExample() {
    
    const [colorx] = useState("black")

return (
    <div style={{backgroundColor: colorx}}> 
    

    <Navbar bg="dark" variant="dark">
        <Container>
            <img src="https://www.pngall.com/wp-content/uploads/4/Cyber-Security-PNG.png" width="100rem" alt="cyber person"></img>
            {/*<Navbar.Brand href="#home">Inicio</Navbar.Brand>*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                {/*pages.map((page)=>(<a key={page.label}><Nav.Link to={page.link}>{page.label}</Nav.Link></a>))*/}
                {/*<Nav.Link to={page.link}>{page.label}</Nav.Link>*/}
                {pages.map((page)=>(<Nav.Link to={page.link}>{page.label}</Nav.Link>))}
                </Nav>
                {/* <Link to={page.link}>{page.label}</Link>*/}
            </Navbar.Collapse>
        </Container>
        
        <CartWidget></CartWidget>
    </Navbar>
    </div>
);
}

