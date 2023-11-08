import LeftMostSidebar from '@/components/LeftMostSidebar';
import LeftSidebar from '@/components/LeftSidebar';
import MainSection from '@/components/MainSection';
import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">
                <LeftMostSidebar></LeftMostSidebar>
                <div className="w-full md:w-[calc(100%-65px)]">
                    <div className="w-full 2xl:w-[1900px] 2xl:mx-auto flex p-4 gap-4">
                        <LeftSidebar></LeftSidebar>
                        <MainSection></MainSection>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;