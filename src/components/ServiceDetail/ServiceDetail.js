import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const {Id}=useParams()

    const {useApi}=useAuth()

   
    const [data, setData]=useState({});
    useEffect(()=>{
        const datas= useApi?.find(i=>i.id==Id)
         setData(datas)
     },[Id])

    
    return (
        <div className=' container detail'>
            <div><img width='500px' src={data?.img} alt="" /></div>
            <div>
                <p>{data?.service}</p>
                <p>{data?.detail}</p>
                <NavLink to='/booking'><button>Book this Service</button></NavLink>
            </div>
        </div>
    );
};

export default ServiceDetail;