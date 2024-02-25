import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogPost = ({ item, index }) => {

    // const imagePath = process.env.IMAGE_PATH;
    // console.log("path:", imagePath);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-8'>
            <div className='relative h-[250px] '>
                <Image src={`http://127.0.0.1:8000/uploads/${item.image}`} alt="t2" fill className='rounded' />
            </div>
            <div>
                <span className='text-sm'>{item.date}</span>
                <span className='pl-4 text-orange-600'>{item.category}</span>
                <h1 className='py-3 font-semibold'>{item.title}</h1>
                <div className='text-[15px]'>{item.description.slice(0,250)}...</div>
                <div className='py-3'>
                    <Link href={`/blog/${item.id}`} className="bg-gray-300 text-sm rounded px-2 py-1.5 hover:font-bold mt-4">Read more</Link>
                </div>
            </div>
            {/* <div className='relative h-[250px] '>
                <Image src="/t2.jpg" alt="t2" fill className='rounded' />
            </div>
            <div>
                <span className='text-sm'>12/12/24</span>
                <span className='pl-4 text-orange-600'>Culture</span>
                <h1 className='py-3 font-semibold'>this nature place</h1>
                <p>asdf loer aoer asdfoe asdlf ower aalsd aosdfsd lasdfoa sd asldfoasd asdf lasdf o asdlfo asdf asdf lasodf as asdfos alsdfweori asldfown vcz;lxko xczvlsdof alsdfowe aosdf asdof ajsf aowe asldfk ower olsjpqola; asodifajf aaoweri</p>
                <Link href={`/blog/${item.id}`} className="bg-gray-300 text-sm rounded px-2 py-1 hover:font-bold mt-4">Read more</Link>
            </div> */}
        </div>
    );
};

export default BlogPost;