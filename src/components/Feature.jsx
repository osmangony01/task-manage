import React from 'react';
import Image  from 'next/image';


const Feature = () => {
    return (
        <div className="w-4/5 mx-auto">
        <h2 className="text-3xl font-bold pt-6">Welcome</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 items-center">
            <div className='h-[330px] relative rounded'>
                <Image  src='/t1.webp'  alt='home image' fill className='rounded'/>
            </div>
            <div className=''>
                <h2 className='text-3xl font-semibold pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea harum minima incidunt consequatur dolore ad itaque quasi, beatae molestiae magnam. Aut possimus fugiat neque magni quidem. Ut, corrupti sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea harum minima incidunt consequatur dolore ad itaque quasi, beatae molestiae magnam. Aut possimus fugiat neque magni quidem. Ut, corrupti sit.
                </p>
                <button className="bg-gray-300 text-sm rounded px-3 py-2 hover:font-bold mt-4">Read more</button>
            </div>
        </div>
    </div>
    );
};

export default Feature;