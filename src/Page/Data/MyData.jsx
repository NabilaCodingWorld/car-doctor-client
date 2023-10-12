import React from 'react';

const MyData = ({booking}) => {

    const {email, name, home} = booking;

    return (
        <div>
           <p>{email}</p>
            <p>{name}</p>
            <p>{home}</p> <br />
        </div>
    );
};

export default MyData;