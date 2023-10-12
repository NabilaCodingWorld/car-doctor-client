import React from 'react';
import img from '../../../assets/about_us/person.jpg'
import img1 from '../../../assets/about_us/parts.jpg'

const Cover = () => {
    return (
        <div className='grid md:grid-cols-2 gap-36 justify-center items-center my-20'>

            <div>
                <img src={img} alt="" />
                <img className='relative  left-60 -top-40 border-8 rounded-2xl w-96' src={img1} alt="" />
            </div>

            <div>
                <p className='text-[#FF3811] text-xl font-bold mb-2'>About Us</p>

                <p className='text-4xl font-bold'>We are qualified <br /> & of experience <br />in this field</p> <br />

                <p className='text-gray-400'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p><br />

                <p className='text-gray-400'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <button className="btn btn-error mt-3">Get More Info</button>
            </div>
        </div>
    );
};

export default Cover;