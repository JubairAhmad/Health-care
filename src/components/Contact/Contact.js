import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <div className='container'>


<Row className='my-3'  xs={1} md={2} >
                <Col className="my-auto about-content" >
                <h2>If you want to contact us, so please use one of method in below methods.</h2>
            <div>
            <div className='contact'>
                <div>
                    <h4>please call us</h4>
                    <p>+973 85193 78 519</p>
                    <p>+931 86193 84 739</p>
                </div>
                <div>
                    <NavLink to='/contactmailresponse'><h3>please mail use</h3></NavLink>
                </div>
            </div>
            </div>


               </Col>
            </Row>


            
        </div>
    );
};

export default Contact;