'use client'

import Image from "next/image";
import { FaSearch } from 'react-icons/fa';
import logo from "../../public/logo.svg";
import mode from "../../public/mode.svg";
import switchs from "../../public/switchs.svg";
import menu from "../../public/menu.svg";
import search from "../../public/search.svg";

const Navbar = () => {
    return (
        <div className="h-[60px] py-[10px] pl-[26px] pr-[15px] w-full bg-white flex justify-between items-center">
            <div>
                <Image src={logo} width={71} height={36} className="" alt="img" />
            </div>
            <div className="relative w-full max-w-[390px] hidden md:flex">
                <input type="text" placeholder='Search Best Food' className='py-1 pl-[15px] pr-1 w-full h-[40px] border-2 placeholder:text-sm placeholder:text-slate-500 outline-none rounded-lg focus:border-[#fcb29b]' />
                <span className='absolute top-1 right-1 cursor-pointer'>
                    <Image src={search} width={32} height={32} className="" alt="img" />
                </span>
            </div>
            <div className="flex justify-center items-start gap-5">
            <span className='flex md:hidden cursor-pointer'>
                    <Image src={search} width={32} height={32} className="" alt="img" />
                </span>
                <span className="cursor-pointer">
                    <Image src={mode} width={32} height={32} className="" alt="img" />
                </span>
                <span className="cursor-pointer">
                    <Image src={switchs} width={32} height={32} className="" alt="img" />
                </span>
                <span className="cursor-pointer">
                    <Image src={menu} width={32} height={32} className="" alt="img" />
                </span>
            </div>
        </div>
    );
};

export default Navbar;