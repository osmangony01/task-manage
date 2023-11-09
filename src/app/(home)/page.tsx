'use client'

import LeftSidebar from '@/components/LeftSidebar';
import MainSection from '@/components/MainSection';
import RightSidebar from '@/components/RightSidebar';

const page = () => {
    return (
        <>
             <div className="hidden md2:flex md2:w-[30%] xl:w-1/5 2xl:w-[300px] bg-white  rounded-lg p-4 h-max">
                <div>
                <LeftSidebar></LeftSidebar>
                </div>
            </div>
            <MainSection></MainSection>
            <RightSidebar></RightSidebar>
        </>
    );
};

export default page;