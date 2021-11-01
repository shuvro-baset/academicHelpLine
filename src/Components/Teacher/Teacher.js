import React from 'react';
import { Card } from 'react-bootstrap';
import './Teacher.css'
const Teacher = (props) => {

    // destructuring teacher data.
    const {name, designation, subject, img, Qualification, number_of_lecture_per_month} = props.teacher;

    return (
        <Card className='teacher-card my-3 text-white p-4'>
            <div className="d-flex justify-content-center my-3">
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" className="img-fluid teacher-img" alt="" />
            </div>
            <p>  <b>Name:</b> {name}</p>
            <p>  <b>Designation:</b> {designation} </p>
            <p>  <b>Subject:</b> {subject}</p>
            <p>  <b>Qualification:</b> {Qualification}</p>
            <p>  <b>Lecture Number:</b> {number_of_lecture_per_month} </p>

        </Card>
    );
};

export default Teacher;