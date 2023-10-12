import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DoneService = ({ service }) => {

    const {img, title, price, _id} =service;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-60 w-full' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{price}</p>

                    <Link to={`services/${_id}`}><FaArrowRight></FaArrowRight></Link>
                </div>
            </div> <br />
        </div>
    );
};

export default DoneService;