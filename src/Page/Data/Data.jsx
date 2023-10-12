import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MyData from './MyData';

const Data = () => {

    const {user} = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/data?email=${user.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])

    return (
        <div>
            {
                bookings.map(booking => <MyData key={booking._id} booking={booking} ></MyData>)
            }
        </div>
    );
};

export default Data;