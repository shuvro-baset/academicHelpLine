import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='my-5 p-5'>
            <h1 className="notFound-text text-center fw-bolder">Page Not Found</h1>
            <p className="text-white text-center fw-bolder">Please try valid url link.</p>
        </div>
    );
};

export default NotFound;