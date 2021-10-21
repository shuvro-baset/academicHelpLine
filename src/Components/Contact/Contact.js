import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <Row  className='d-flex justify-content-center align-items-center my-5'>
                <h1 className='text-center text-white'>Contact Us</h1>
                <Col md={6}>
                <Form className='text-white'>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                            <Form.Label>Your Massage</Form.Label>
                            
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a Massage"
                                style={{ height: '100px' }}
                                />
                            
                        </Form.Group>
                    <Button variant="primary" className='btn btn-primary' type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
            
        </Container>
    );
};

export default Contact;