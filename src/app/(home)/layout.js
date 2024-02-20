
import Navbar from '@/components/Navbar';
import React from 'react';


const HomeLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default HomeLayout;