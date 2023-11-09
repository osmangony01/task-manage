'user client'

import Image from 'next/image';
import search from "../../public/search.svg";
import furit1 from "../../public/furit1.svg";
import furit2 from "../../public/furit2.svg";
import furit3 from "../../public/furit3.svg";
import data from '@/utilies/data';

const LeftSidebar = () => {
    //console.log(data)
    return (
        <>
            <div className="border-2 border-[#E65527] border-opacity-10 flex p-1 rounded-[10px]">
                <button className="w-1/2 rounded-[10px] px-1 py-[10px] text-center bg-[#fde6df] text-sm text-[#E65527] font-semibold">
                    Fruits
                </button>
                <button className="w-1/2 px-1 py-[10px] text-center text-sm font-semibold">
                    Vegetables
                </button>
            </div>
            <div className="my-4 relative">
                <input type="text" placeholder='Search Best Food Name' className='py-1 pl-[15px] pr-1 w-full h-[40px] border-2 border-[#E65527] border-opacity-10 placeholder:text-sm outline-none rounded-lg focus:border-[#fcb29b]' />
                <span className='absolute top-1 right-1 cursor-pointer'>
                    <Image src={search} width={32} height={32} className="" alt="img" />
                </span>
            </div>
            <div>
                <p className="text-sm">Fruits List</p>
                {
                    data?.map((item, i) => {
                        return <div key={i} className={`border-2 border-[#E65527] ${i != 0 && 'border-opacity-10'} flex px-[10px] py-2 rounded-[10px] my-2`}>
                            <span><Image src={i == 0 ? furit1 : i == 1 ? furit2 : furit3} width={44} height={44} alt="img"></Image></span>
                            <span className='pl-4 flex flex-col '>
                                <span className='text-sm font-semibold'>{item.name}</span>
                                <span className='text-[14px]'>Vitamin: {item.vitamin}</span>
                            </span>
                        </div>
                    })
                }
            </div>
        </>
    );
};

export default LeftSidebar;