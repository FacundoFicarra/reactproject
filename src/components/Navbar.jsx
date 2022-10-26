import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";

export default function BasicExample() {
    
    const [colorx, setColorx] = useState("black")
    /*
    
    useEffect(()=>{
        //montaje/nace
        console.log("AAAAAAAAAAAAAAAAAAA")

        //desmontaje/muerte
        return ()=>{
            console.log("AAABBB")
        }
    },[])
    useEffect(()=>{
        console.log("aaaaaaa")
    }, [categoria])
*/



return (
    <div style={{backgroundColor: colorx}}> 
    <button onClick={()=>{setColorx("red")
        }}>AAAAAAAAAAAAA</button>
    
    <Navbar bg="dark" variant="dark">
        <Container>
            <img src="https://www.pngall.com/wp-content/uploads/4/Cyber-Security-PNG.png" width="100rem" alt="cyber person"></img>
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
    </div>
);
}

