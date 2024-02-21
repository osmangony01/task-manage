import React from 'react';
import Image from 'next/image';

const BlogPost = ({ item, index }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-8'>
            <div className='relative h-[250px] '>
                <Image src="/t2.jpg" alt="t2" fill className='rounded' />
            </div>
            <div>
                <span className='text-sm'>12/12/24</span>
                <span className='pl-4 text-orange-600'>Culture</span>
                <h1 className='py-3 font-semibold'>this nature place</h1>
                <p>asdf loer aoer asdfoe asdlf ower aalsd aosdfsd lasdfoa sd asldfoasd asdf lasdf o asdlfo asdf asdf lasodf as asdfos alsdfweori asldfown vcz;lxko xczvlsdof alsdfowe aosdf asdof ajsf aowe asldfk ower olsjpqola; asodifajf aaoweri</p>
                <button className="bg-gray-300 text-sm rounded px-2 py-1 hover:font-bold mt-4">Read more</button>
            </div>
        </div>
    );
};

export default BlogPost;