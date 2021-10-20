import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Help.css'

const Help = () => {
    return (
        <div className='container'>
            
            <Row className='my-3'  xs={1} md={2} >
                <Col className="my-auto about-content" >

                <div>
            <h1>What kind of help do you need?</h1>
            <div className='help-container '>
                <div className='help-call'> <h2>please, contact us in below phone number</h2>
                <small><h3>+973 8624 786 461</h3></small>
                </div>
                <div className='help-call'>
                    <h1>Or</h1>
                    <h1>please write your problems in below input feild with your email and phone number.</h1>
                    <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="number" placeholder="input your phone number" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            <Link to='/helpresponse'><input type="submit" value="submit" /></Link>
                        </Form.Group>

                    </Form>
                </div>
            </div>
          </div>
          
                </Col>
            </Row>

          
        </div>
    );
};

export default Help;