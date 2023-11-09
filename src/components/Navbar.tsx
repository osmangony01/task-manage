'use client'

import Image from "next/image";
import logo from "../../public/logo.svg";
import mode from "../../public/mode.svg";
import switchs from "../../public/switchs.svg";
import menu from "../../public/menu.svg";
import search from "../../public/search.svg";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import LeftSidebar from "./LeftSidebar";

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
                        <LeftSidebar></LeftSidebar>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;