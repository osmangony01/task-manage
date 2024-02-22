'use client'

import { useGetBlogQuery } from '@/features/blog/blogApi';
import useUser from '@/hooks/useUser';
import React from 'react';
import Image from 'next/image';
import { BsThreeDots } from "react-icons/bs";
import Link from 'next/link';

const BlogPost = () => {

    const user = useUser();
    //const id = user?.id;
    const { data, isLoading, isError, error } = useGetBlogQuery(user?.id);
    let content = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    }
    else if (isError) {
        if (error && error.data.status == 404 && error.data.blog.length == 0) {
            content = <div>User not found!!</div>;
        } else {
            content = <div>There was an error, failed to fetch.</div>;
        }
    }
    else if (data?.blog.length > 0) {
        content = data.blog.map((item, index) => {
            return (<div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 bg-white p-4 mt-2' key={index}>
                <div className='relative h-[250px] '>
                    <Image src="/t2.jpg" alt="t2" fill className='rounded' />
                </div>
                <div className='relative'>
                    <span className='text-sm'>12/12/24</span>
                    <span className='pl-4 text-orange-600'>Culture</span> 
                    <div className=' absolute top-0 right-0 cursor-pointer'>
                        <div>
                        <BsThreeDots size={25} />
                        </div>
                    </div>
                    <h1 className='py-3 font-semibold'>this nature place</h1>
                    <p>asdf loer aoer asdfoe asdlf ower aalsd aosdfsd lasdfoa sd asldfoasd asdf lasdf o asdlfo asdf asdf lasodf as asdfos alsdfweori asldfown vcz;lxko xczvlsdof alsdfowe aosdf asdof ajsf aowe asldfk ower olsjpqola; asodifajf aaoweri</p>
                    <button className="bg-gray-300 text-sm rounded px-2 py-1 hover:font-bold mt-4">Read more</button>
                </div>
                <div>
                    <span className='px-2 py-1 border mr-2'><Link href={`/profile/edit-post/${item.id}`}>Edit</Link></span>
                    <button className='px-2 py-1 border'>Delete</button>
                </div>
                <div></div>
            </div>)
        })

    }
    console.log(error);

    return (
        <div className='w-4/5 mx-auto '>
            <h1 className='text-xl font-semibold py-2'>All Post</h1>
            <hr className='border-black' />
            {content}
        </div>
    );
};

export default BlogPost;