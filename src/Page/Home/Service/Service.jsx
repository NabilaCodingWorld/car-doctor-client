import React, { useEffect, useState } from 'react';
import DoneService from './DoneService';

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                services.map(service => <DoneService key={service._id} service={service} ></DoneService>)
            }
        </div>
    );
};

export default Service;