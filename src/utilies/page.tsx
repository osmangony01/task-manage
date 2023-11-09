'use client'

import LeftMostSidebar from '@/components/LeftMostSidebar';
import LeftSidebar from '@/components/LeftSidebar';
import MainSection from '@/components/MainSection';
import Navbar from '@/components/Navbar';
import RightSidebar from '@/components/RightSidebar';
import Image from "next/image";
import icon1 from "../../public/sb-icon1.svg";
import icon2 from "../../public/sb-icon2.svg";
import icon3 from "../../public/sb-icon3.svg";
import icon4 from "../../public/sb-icon4.svg";
import icon5 from "../../public/sb-icon5.svg";

const page = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="flex">
                <div className="w-0 md:w-[65px] bg-white hidden md:flex flex-col pt-40 items-center gap-8 h-auto">
                <LeftMostSidebar></LeftMostSidebar>
                </div>
               
                <div className="w-full md:w-[calc(100%-65px)]">
                    <div className="w-full 2xl:w-[1900px] 2xl:mx-auto flex px-4 pt-4 pb-[70px] gap-4">
                        <LeftSidebar></LeftSidebar>
                        <MainSection></MainSection>
                        <RightSidebar></RightSidebar>
                    </div>
                </div>
                <div className="h-[56px] border-t flex md:hidden justify-around items-center w-full fixed bg-white bottom-0 left-0 ">
                    <span>
                        <Image src={icon1} width={36} height={36} className="" alt="img" />
                    </span>
                    <span>
                        <Image src={icon2} width={36} height={36} className="" alt="img" />
                    </span>
                    <span>
                        <Image src={icon3} width={36} height={36} className="" alt="img" />
                    </span>
                    <span>
                        <Image src={icon4} width={36} height={36} className="" alt="img" />
                    </span>
                    <span>
                        <Image src={icon5} width={36} height={36} className="" alt="img" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default page;