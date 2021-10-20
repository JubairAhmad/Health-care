import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom';
import logo from "./images/helth-care.png"
import useAuth from '../../Hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const {AllContexts}=useAuth()
    const{user,logOut}=AllContexts;
    const{displayName,photoURL, email}=user;
    
    return (

        <div className='caption'>
            <Navbar className='sticky="top" '  expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold  text-white"><img width="80px" src={logo} alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
                    <Nav.Link as={NavLink} className="text-light" to="/home">Home</Nav.Link>
                    <Nav.Link  className="text-light" as={NavLink} to="/services">Services</Nav.Link>

                    <Nav.Link  className="text-light" as={NavLink} to="/help">Help</Nav.Link>
                    <Nav.Link  className="text-light" as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link  className="text-light" as={NavLink} to="/contact">Contact</Nav.Link>
                    

                    {!user.displayName ?(<>
                    <Nav.Link as={NavLink} className='text-light' style={{fontWeight:'900'}} to="/login">Login/Sign Up</Nav.Link>

                    </>):(
                       <>
                       <span className="user-name"><img src={photoURL}  alt="" /></span>
                       <button onClick={logOut} className="log-btn text-light">Log Out</button></>
                    )}


                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
    );
};

export default Header;