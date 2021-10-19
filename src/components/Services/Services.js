import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Service from '../Service/Service';

const Services = (props) => {


     
    
        const {useApi}=useAuth();
        

    return (
        <div className='container mt-2'>
                <Row xs={1} md={2} lg={3} className="g-4">

                {
                    useApi.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>
                        )
                }
                </Row>
             
            
        </div>
    );
};

export default Services;