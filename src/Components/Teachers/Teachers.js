import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    // set teacher data using useState method
    const [teachers, setTeachers] = useState([]);

    // loading teacher data.
    useEffect(() => {
        fetch('./teachers-data.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <Container>
            <Row>
            {
                // showing teacher data 
                teachers.map(teacher => 
                <Col md={4}
                key={teacher.id} // passing key value for ignoring react warning
                >
                    <Teacher
                        teacher={teacher} // pass teacher data
                    ></Teacher>
                </Col>
                )
            }
            </Row>
        </Container>
    );
};

export default Teachers;