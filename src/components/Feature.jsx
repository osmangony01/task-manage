import React from 'react';
import Image  from 'next/image';
import homeImg from '/public/t3.jpeg';

const Feature = () => {
    return (
        <div className="w-4/5 mx-auto">
        <h2 className="text-3xl font-bold pt-6">Welcome</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 items-center">
            <div className='h-[330px] relative rounded'>
                <Image  src='/t1.webp'  alt='home image' fill className='rounded'/>
            </div>
            <div className=''>
                <h2 className='text-xl font-semibold pb-2'>Who we are</h2>
                <p>
                    Welcome to PlaySmart, where the world of play comes alive! We are more than just an online marketplace; we are a gateway to joy, imagination, and endless possibilities. Our platform is built on the foundation of creating memorable moments for both young and young-at-heart individuals who cherish the magic of toys.
                </p>
                <button className="bg-gray-300 text-sm rounded px-3 py-2 hover:font-bold mt-4">Read more</button>
            </div>
        </div>
    </div>
    );
};

export default Feature;