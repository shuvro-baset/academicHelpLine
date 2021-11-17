import React from 'react';
import { Card } from 'react-bootstrap';
import './Teacher.css'
const Teacher = (props) => {

    // destructuring teacher data.
    const {name, designation, subject, img} = props.teacher;

    return (
        <Card className='teacher-card my-3 text-white '>
            <Card.Body className="d-flex flex-row justify-content-evenly align-items-center">
                <div className="d-flex justify-content-center">
                    <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" className="img-fluid teacher-img" alt="" />
                </div>
                <div>
                    <p>  <b>Name:</b> {name}</p>
                    <p>  <b>Designation:</b> {designation} </p>
                    <p>  <b>Subject:</b> {subject}</p>
                </div>
            </Card.Body>
            <Card.Footer className="py-3 card-footer-div d-flex flex-row justify-content-evenly align-items-center">
                <i className="social-icon fab fa-facebook"></i>
                <i className="social-icon fab fa-twitter"></i>
                <i className="social-icon fab fa-youtube"></i>
                <i className="social-icon fab fa-instagram"></i>
                <i className="social-icon fab fa-whatsapp"></i>
            </Card.Footer>
        </Card>
    );
};

export default Teacher;