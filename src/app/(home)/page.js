

import Feature from '@/components/Feature';
import Footer from '@/components/Footer';
import PopularCategory from '@/components/PopularCategory';
import RecentPost from '@/components/RecentPost';
import React from 'react';


const HomePage = () => {
    return (
        <div>
            <Feature></Feature>
            <PopularCategory></PopularCategory>
            <RecentPost></RecentPost>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;