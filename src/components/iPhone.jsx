import React from 'react';
import iPhone from '../images/iphonebanner.jpg'
import Air from '../images/phoneair.jpg'
const IPhone = () => {
    return (
        <>
            <div className='m-5 mb-100'>
                <div className='flex justify-center'>
                    <div className='absolute w-full'>
                        <img src={iPhone} alt="Iphone 17 Pro" className='w-full h-[400px]' />
                    </div>
                    <div className='absolute text-white text-center'>
                        <h1 className='text-[50px]'>iPhone 17 Pro</h1>
                        <h1 className='text-[29px]'>All out Pro.</h1>
                        <div className='flex w-70 my-4 justify-evenly [&>*]:p-2 [&>*]:px-5 [&>*]:rounded-full'>
                        <button className='bg-blue-500 text-white '>Learn more</button>
                        <button className='border border-blue-500 text-blue-500'>Buy</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border'>
                <div className='flex justify-center'>
                    <div className='absolute'>
                        <img src={Air} alt="Iphone Air" />
                    </div>
                    <div className='absolute text-center'>
                        <h1 className='text-[50px]'>iPhone Air</h1>
                        <h1 className='text-center text-[23px]'>The thinnest iPhone ever.<br/>
                        With the power of pro inside</h1>
                        <div className='flex justify-evenly [&>*]:border [&>*]:px-5 [&>*]:py-2 [&>*]:rounded-full m-1'>
                            <button className='border-blue-500 text-white bg-blue-500 '>Learn more.</button>
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IPhone;
