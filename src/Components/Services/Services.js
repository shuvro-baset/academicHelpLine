import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    // set service data using useState method.
    const [service, setService] = useState([])

    // loading service data.
    useEffect(() => {
        fetch('./service-data.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    
    return (
        <Container>
            <Row>
                {
                // showing service data dynamically.
                service.map(serve => 
                    <Col md={4} className='my-3' key={serve.id}>
                        <Service
                        
                        serve={serve}
                        ></Service>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default Services;<h3>This is services</h3>