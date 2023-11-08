import React from 'react';
import textT from "/public/textT.svg";
import upIcon from "/public/up.svg";
import range from "/public/range.svg";
import Image from 'next/image';

const RightSidebar = () => {

    return (
        <div className='hidden xl:flex xl:w-1/5 2xl:w-[300px] bg-white  rounded-lg p-4 h-max'>
            <div className='border-2 py-2 px-3 rounded-lg '>
                <div className='flex justify-between items-center pt-1 mb-6'>
                    <span className='flex items-center gap-2'>
                        <span><Image src={textT} width={20} height={20} alt="img"></Image></span>
                        <span className='text-sm text-[#E65527] font-semibold'>Settings</span>
                    </span>
                    <span><Image src={upIcon} width={20} height={20} alt="img"></Image></span>
                </div>
                <div className='flex justify-between items-center text-sm font-semibold mb-5'>
                    <span>Paragraph font size</span>
                    <span className='text-[#E65527]'>10</span>
                </div>
                <div className='mb-6'>
                    <input type="range" name="size"
                    />
                    {/* className='border-0 appearance-none accent-orange-500  h-[2px] w-full outline-0 p-0 m-0  bg-[#E65527]'
                    <Image src={range}  height={30} alt='imag' className='w-full'></Image> */}

                </div>
                <div className=' mb-6'>
                    <label className='text-sm font-semibold '>Choose Vitamin Type</label>
                    <select className='w-full mt-1 border bg-slate-100 px-4 text-sm outline-none focus:border-[#fcb29b] py-2 rounded-md'>
                        <option>All Vitamin</option>
                        <option>A</option>
                        <option>C</option>
                        <option>B6</option>
                        <option>K</option>
                    </select>
                </div>
                <div className='flex justify-between items-center mb-6'>
                    <span className='text-sm font-semibold'>Turn Off Subtitle</span>
                    <span>
                        <label className="switch">
                            <input type="checkbox" />
                                <span className="slider round"></span>
                        </label>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;