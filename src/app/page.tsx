import LeftMostSidebar from '@/components/LeftMostSidebar';
import LeftSidebar from '@/components/LeftSidebar';
import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">
                <LeftMostSidebar></LeftMostSidebar>
                <div className="w-full md:w-[calc(100%-65px)]">
                    <div className="w-full grid grid-cols-5 p-4 gap-4">
                        <LeftSidebar></LeftSidebar>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;