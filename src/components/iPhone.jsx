import React from 'react';
import iPhone from '../images/iphonebanner.jpg'
const IPhone = () => {
    return (
        <>
        <div className=''>
            <div className='h-[50px] flex justify-center'>
                <img src={iPhone} alt="Phone" className='h-[400px] w-full' />
            </div>
            <div></div>
        </div>  
        </>
    );
}

export default IPhone;
