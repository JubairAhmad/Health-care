import React from 'react';
import { Card,Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const HomeCard = (props) => {

    const {img, detail ,id, service}=props.service

    return (
        
        <div>
            <Col className='card'>
      <Card>
        <Card.Img variant="top" height='200px' src={img} />
        <Card.Body>
          <Card.Title>{service}</Card.Title>
          <Card.Text>
            {detail}
          </Card.Text>
          <NavLink to={`/service/${id}`}><button >detail</button></NavLink>
        </Card.Body>
        
      </Card>
      
    </Col>
        </div>
    );
};

export default HomeCard;