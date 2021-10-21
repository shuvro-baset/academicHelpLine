import React from 'react';
import { Navbar, Container, Nav,  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import logo from '../../images/logo.png';
const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className='text-white'>
                    <img className="img-fluid w-25 h-25" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className="menu" to="/home">Home</NavLink>
                    <NavLink className="menu" to="/services">Services</NavLink>
                    <NavLink className="menu" to="/teachers">Teacher</NavLink>
                    <NavLink className="menu" to="/about">About</NavLink>
                    <NavLink className="menu" to="/contact">Contact</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;