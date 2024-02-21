import React from 'react';

const PopularCategory = () => {
    return (
        <div className="w-4/5 mx-auto mt-12">
            <h1 className='text-xl font-semibold'>Popular Categories</h1>
            <div className='flex flex-wrap justify-between py-4'>
                <div className='border px-3 py-3 rounded w-[150px] my-2 mx-1 bg-gray-200'>Style</div>
                <div className='border px-3 py-3 rounded w-[150px] my-2 mx-1 bg-purple-300'>Coding</div>
                <div className='border px-3 py-3 rounded w-[150px] my-2 mx-1 bg-violet-300'>Fashion</div>
                <div className='border px-3 py-3 rounded w-[150px] my-2 mx-1 bg-blue-300'>Food</div>
                <div className='border px-3 py-3 rounded w-[150px] my-2 mx-1 bg-orange-200'>Culture</div>
                <div className='border px-3 py-3 rounded w-[150px] my-2 mx-1 bg-green-300'>Travel</div>
            </div>
        </div>
    );
};

export default PopularCategory;