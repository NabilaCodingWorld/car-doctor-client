import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubmitData from '../../SubmitData/SubmitData';

const Order = () => {

    const order = useLoaderData();

    const { img, description } = order;

    return (
        <div>
            <center> <br />
                <img src={img} alt="" /> <br />

                <p>{description}</p>
            </center> <br />

            <SubmitData></SubmitData>
        </div>
    );
};

export default Order;