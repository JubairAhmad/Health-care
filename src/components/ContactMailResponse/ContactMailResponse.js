import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ContactMailResponse.css'

const ContactMailResponse = () => {
    return (
        <div className='container ContactMailResponse'>





            <Row className='my-3'  xs={1} md={2} >
                <Col className="my-auto about-content" >
                
                <h1>Thank you dear Sir or Madam,</h1>
            <p>We have got your mail. We'll contact with you soon. Until please wait.</p>
            <p>Thank You So Much.</p>

               </Col>
            </Row>

            



            
        </div>
    );
};

export default ContactMailResponse;