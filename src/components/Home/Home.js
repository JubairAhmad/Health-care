import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Banner from './Banner/Banner';
import './Home.css'
import { Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {

    
    const {useApi}=useAuth()

    return (
        <div className='container home'>
            <Banner></Banner>
            <div className='services'>
                <div className='img1'>
                    <NavLink to="/services">
                        <img src="https://www.nahdionline.com/media/wysiwyg/11april/EpresSEn.gif" alt=""  width='290'/>
                    </NavLink>
                </div>
                <div className='img2'>
                    <NavLink to="/services">
                        <img src="https://www.nahdionline.com/media/wysiwyg/11april/EdoctorSEn.gif" alt=""  width='290'/>
                    </NavLink>
                </div>
                <div className='img3'>
                    <NavLink to="/services">
                        <img src="https://www.nahdionline.com/media/wysiwyg/11april/AskSEn.gif"  width='290' alt="" />
                    </NavLink>

                </div>
            </div>

            <div className='mt-4'>
            {
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    useApi.slice(0,5).map(service => <HomeCard
                    key={service.id}
                    service={service}
                    ></HomeCard>
                        )
                }
                </Row>
            }
            </div>
        </div>
    );
};

export default Home;


