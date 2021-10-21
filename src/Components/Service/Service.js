import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css'
const Service = (props) => {
    // destructuring service data 
    const {title, description, img, price} = props.serve;
    
    return (
        <Card className='custom-card text-white my-3'>
            <img src={img} alt="" className="img-fluid" />
            <Card.Body className="card-body">
                <h6 className="text-center mt-3">{title}</h6>
                <hr />
                <p>{description}</p>
            </Card.Body>
            <Card.Footer>
                <p>Fee: &#2547; {price}</p>
            </Card.Footer>
        </Card>
    );
};

export default Service;