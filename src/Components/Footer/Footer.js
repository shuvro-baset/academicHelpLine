import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Footer.css'
const Footer = () => {
    return (
        <Container>
            <hr  className='text-white'/>
            <Row className='text-white mt-5'>
                <Col md={3} className='d-flex flex-column'>
                    <img className="img-fluid w-25 h-50" src={logo} alt="" /> 
                    <p><i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh</p>
                    <p><i className="fas fa-phone-alt"></i> +88-016xxxxxxxx</p>
                    <p><i className="fas fa-envelope"></i> ahl@gmail.com</p>
                </Col>
                <Col md={3} className='d-flex flex-column footer-menu'>
                    <p><a href="/home">Home</a></p>
                    <p><a href="/services">Services</a></p>
                    <p><a href="/teachers">Teachers</a></p>
                    <p><a href="/about">About</a></p>
                    <p><a href="/contact">Contact</a></p>
                </Col>
                <Col md={3} className='d-flex flex-column footer-menu'>
                    <p><a href="/">Supports</a></p>
                    <p><a href="/">Help Center</a></p>
                    <p><a href="/">Feedback</a></p>
                    <p><a href="/">FAQ</a></p>
                    <p><a href="/">Terms & Conditions</a></p>
                </Col>
                <Col md={3} className='d-flex flex-column footer-menu'>
                    <p><a href="/">Resources</a></p>
                    <p><a href="/">Download App</a></p>
                    <p><a href="/">Blog</a></p>
                    <p><a href="/">What's New</a></p>
                    <p><a href="/">Security</a></p>
                </Col>
            </Row>
            <Row className="text-white">
                <div className='d-flex justify-content-center align-items-around my-3'>
                    <i className="fab fa-facebook p-4"></i>
                    <i className="fab fa-twitter p-4"></i>
                    <i className="fab fa-instagram p-4"></i>
                    <i className="fab fa-youtube p-4"></i>
                </div>
                <hr />
            </Row>

            <Row className='text-secondary text-center'>
                    <p>&copy; AHL - All rights reserved.</p>
            </Row>
        </Container>
    );
};

export default Footer;<h3>This is footer</h3>