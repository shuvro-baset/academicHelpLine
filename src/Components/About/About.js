import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center my-5 text-white">
                <Col md={10}>
                <div className='about-container'>
                    <div className="about-text">
                        <h1 className='text-center fw-bolder'>About Us</h1>
                        <p className="p-3 text-justify"> We help students develop the skills and knowledge they need for a bright future. Best in Class students benefit from individual attention, active instruction in small groups,
                            and engaging course material aligned with common standards.
                            Our programs move 5-12 students of all abilities towards the top of their class, 
                            but our mission doesn't end there.
                            At Best in Class, our mission is twofold: build good human ; build successful students. 
                            Education is the door to the future. We want to leave a legacy and a lasting positive impact on our students and teachers alike. 
                            We know how important great teachers are and we want to support their individual growth, 
                            so that they can continue to change the lives of their students.
                        </p>
                    </div>
                    <div className="color-overlay"></div>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;<h3>This is about us</h3>