import React from 'react';
import Airpods from '../images/airpods.jpg'
import IPhone from '../images/iphones.jpg';
import Watch11 from '../images/series11.png'
import Watch13 from '../images/watch.jpg'
import Watchs from '../images/watchs.jpg'
import Watch1 from '../images/ultra3.jpg'
import Iphone2 from '../images/iphone.jpg'
import Watch3 from '../images/watchse3.png'
import Treadin from '../images/tradein.png'
const Cards = () => {
    return (
        <>
            <div className='flex gap-2 flex-wrap'>
                <div className='w-[49%] h-[70vh] flex justify-center'>
                    <img src={IPhone} alt="iphones" className='relative h-auto w-[98%]' />
                    <div className='absolute text-center text-center my-10'>
                        <h1 className='text-[35px]'>iPhone 17</h1>
                        <h1>Magichromic.</h1>
                    
                    <div className='flex [&>*]:border [&>*]:rounded-full [&>*]:px-5 [&>*]:py-2 my-2 '>
                        <button className='mx-2 border-blue-500 text-white bg-blue-500'>Learn more.</button>
                        <button>Buy</button>
                    </div>
                    </div>
                </div>

                <div className='w-[49%] h-[70vh] flex justify-center'>
                    <img src={Airpods} alt="iphones" className='relative h-auto w-[98%]' />
                    <div className='absolute text-center text-center my-10'>
                        <h1 className='text-[35px]'>AirPods Pro 3</h1>
                        <h1>The world's best in-ear <br/> Active 
                        Noise Cancellation.</h1>
                    
                    <div className='flex [&>*]:border [&>*]:rounded-full [&>*]:px-5 [&>*]:py-2 my-2 '>
                        <button className='mx-2 border-blue-500 text-white bg-blue-500'>Learn more.</button>
                        <button>Buy</button>
                    </div>
                    </div>
                </div>

                <div className='w-[49%] h-[70vh] flex justify-center'>
                    <img src={Watch13} alt="iphones" className='relative h-auto w-[98%]' />
                    <div className='absolute text-center text-center my-10'>
                        <img src={Watch11} alt="Watch Series 11" />
                        <h1>The ulitimate watch for a healthy life</h1>
                    
                    <div className='flex [&>*]:border [&>*]:rounded-full [&>*]:px-5 [&>*]:py-2 my-2 '>
                        <button className='mx-2 border-blue-500 text-white bg-blue-500'>Learn more.</button>
                        <button>Buy</button>
                    </div>
                    </div>
                </div>

                <div className='w-[49%] h-[70vh] flex justify-center'>
                    <img src={Watchs} alt="iphones" className='relative h-auto w-[98%]' />
                    <div className='absolute text-center text-center my-10'>
                        <img src={Watch3} alt="Watch SE 3" />
                        <h1>Walk it. Talk it. Track it. Love it.</h1>
                    
                    <div className='flex [&>*]:border [&>*]:rounded-full [&>*]:px-5 [&>*]:py-2 my-2 '>
                        <button className='mx-2 border-blue-500 text-white bg-blue-500'>Learn more.</button>
                        <button>Buy</button>
                    </div>
                    </div>
                </div>

                <div className='w-[49%] h-[70vh] flex justify-center'>
                    <img src={Watch1} alt="iphones" className='relative h-auto w-[98%]' />
                    <div className='absolute text-center text-center my-10 text-white'>
                        <h1 className='text-[35px]'> Watch ULTRA 3.</h1>
                        <h1>Personal beast.</h1>
                    
                    <div className='flex [&>*]:border [&>*]:rounded-full [&>*]:px-5 [&>*]:py-2 my-2 '>
                        <button className='mx-2 border-blue-500 text-white bg-blue-500'>Learn more.</button>
                        <button className='border border-blue-500 text-blue-500'>Buy</button>
                    </div>
                    </div>
                </div>

                <div className='w-[49%] h-[70vh] flex justify-center'>
                    <img src={Iphone2} alt="iphones" className='relative h-auto w-[98%]' />
                    <div className='absolute text-center text-center my-10'>
                        <img src={Treadin} alt="Trade in phones" />
                        <h1>Upgrade and save.<br/>it's that easy.</h1>
                    
                    <div className='flex [&>*]:border [&>*]:rounded-full [&>*]:px-5 [&>*]:py-2 my-2 '>
                        <button className='mx-2 border-blue-500 text-white bg-blue-500'>Learn more.</button>
                        <button>Buy</button>
                    </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Cards;
