'use client'

import LeftMostSidebar from '@/components/LeftMostSidebar';
import Navbar from '@/components/Navbar';


const HomeLayout = ({ children }) => {

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="flex">
                <div className="w-0 md:w-[65px] bg-white hidden md:flex flex-col pt-40 items-center gap-8 h-auto">
                    <LeftMostSidebar></LeftMostSidebar>
                </div>
                <div className="w-full md:w-[calc(100%-65px)]">
                    <div className="w-full 2xl:w-[1900px] 2xl:mx-auto flex px-4 pt-4 pb-[70px] gap-4">
                        {children}
                    </div>
                </div>
                <div className="h-[56px] border-t flex md:hidden justify-around items-center w-full fixed bg-white bottom-0 left-0 ">
                    <LeftMostSidebar></LeftMostSidebar>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;