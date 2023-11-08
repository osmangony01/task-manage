import LeftMostSidebar from '@/components/LeftMostSidebar';
import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">
                <LeftMostSidebar></LeftMostSidebar>
                <div>

                </div>
            </div>
        </div>
    );
};

export default page;