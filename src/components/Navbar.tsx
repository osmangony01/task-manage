'use client'

import Image from "next/image";
import { FaSearch } from 'react-icons/fa';
import logo from "../../public/logo.svg";
import mode from "../../public/mode.svg";
import switchs from "../../public/switchs.svg";
import menu from "../../public/menu.svg";
import search from "../../public/search.svg";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { useState } from "react";
import furit1 from "../../public/furit1.svg";
import furit2 from "../../public/furit2.svg";
import furit3 from "../../public/furit3.svg";
import data from "../utilies/data";

const Navbar = () => {
    const [sidebarControl, setSidebarControl] = useState(false)

    return (
        <div className="h-[60px] py-[10px] pl-[26px] pr-[15px] w-full z-10 bg-white flex justify-between items-center sticky top-0">
            <div>
                <Image src={logo} width={71} height={36} className="" alt="img" />
            </div>
            <div className="relative w-full max-w-[390px] hidden md2:flex">
                <input type="text" placeholder='Search Best Food' className='py-1 pl-[15px] pr-1 w-full h-[40px] border-2 placeholder:text-sm placeholder:text-slate-500 outline-none rounded-lg focus:border-[#fcb29b]' />
                <span className='absolute top-1 right-1 cursor-pointer'>
                    <Image src={search} width={32} height={32} className="" alt="img" />
                </span>
            </div>
            <div className="flex justify-center items-start gap-5">
                <span className='flex md2:hidden cursor-pointer' onClick={() => setSidebarControl(!sidebarControl)}>
                    <Image src={search} width={32} height={32} className="" alt="img" />
                </span>
                <span className="cursor-pointer">
                    <Image src={mode} width={32} height={32} className="" alt="img" />
                </span>
                <span className="cursor-pointer">
                    <Image src={switchs} width={32} height={32} className="" alt="img" />
                </span>
                <span className="cursor-pointer" onClick={() => setSidebarControl(!sidebarControl)}>
                    <Image src={menu} width={32} height={32} className="" alt="img" />
                </span>
            </div>

            {/* toggle sidebar */}

            <div className={`h-screen fixed top-0 left-0 md2:hidden bg-black bg-opacity-20 z-50 ${sidebarControl ? "w-full overflow-hidden" : "w-0"} transition-all duration-0`}>
            <span onClick={()=>setSidebarControl(!sidebarControl)} className={`absolute top-[15px] left-[310px] hover:bg-white bg-slate-100 p-2 rounded-full border border-white ${sidebarControl ? "flex" : "hidden"}`}><RxCross1 color='' size={20}></RxCross1></span>
                <div className={`relative h-full transition-all duration-500 text-black bg-white border-2 border-purple-400 overflow-y-auto overflow-hidden md2:hidden rounded-lg ${sidebarControl ? " w-[300px]" : "w-0"}`}>
                    <div className="p-4">
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
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Navbar;