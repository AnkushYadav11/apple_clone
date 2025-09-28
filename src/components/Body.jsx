import React from 'react';
import Banner from '../images/banner.mp4'
const Body = () => {
    return (
        <>
            <div className='flex justify-center'>
                <video src={Banner} className='relative h-155 w-full' controls={false} autoPlay muted></video>
                <div className='p-2 absolute text-center my-80'>
                <h1 className='font-bold text-[52px] text-gray-800'>Gifts full of joy.</h1>
                <h3 className='text-[27px] font-thin'>Enjoy up to ₹10000 instant cashback on your favourite products<br/>
                    with eligible cards. Plus up to 12 months of No Cost EMI.
                </h3>
                <a href="/"><button className='border border-blue-600 text-blue-600 p-2 rounded-full px-4.5 hover:bg-blue-600 hover:text-white'>
                    Shop
                </button></a>
                </div>
            </div>
        </>
    );
}

export default Body;
