'use client'

import React from 'react';
import Image from 'next/image';
import { useGetSingleBlogQuery } from '@/features/blog/blogApi';
import CommentForm from './CommentForm';
import Comments from './Comments';
import MostPopular from '@/components/MostPopular';

const BlogPage = ({ params }) => {

    const { id } = params;
    console.log(id);
    const { data, isError, isLoading, error } = useGetSingleBlogQuery(id);

    let content = null;
    if (isLoading) {
        content = <div>Loading...</div>;
    }
    else if (isError) {
        if (error && error.data.status == 404) {
            content = <div>Blog is not found!!</div>;
        } else {
            content = <div>There was an error, failed to fetch.</div>;
        }
    }
    else if (data?.blog) {
        const { title, description, image } = data.blog;
        const imagePath = `http://127.0.0.1:8000/uploads/${image}`;
        console.log(imagePath);

        content = <div className="w-4/5 mx-auto">
            {/* <h2 className="text-3xl font-bold pt-6">Welcome</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 items-center">
                <div className=''>
                    <h2 className='text-4xl font-semibold pb-2'> {title }</h2>
                    <div className='flex  gap-4 item-center pt-3'>
                        <div className='w-[40px] h-[40px] relative'>
                            <Image src={imagePath} alt='img' fill className='rounded-full' />
                        </div>
                        <div className='flex flex-col'>
                            <span>Jone Doe</span>
                            <span>12/12/24</span>
                        </div>
                    </div>
                </div>
                <div className='h-[330px] relative rounded'>
                    <Image src='/t1.webp' alt='home image' fill className='rounded' />
                </div>
            </div>

            <div className='grid grid-cols-1, lg:grid-cols-3 mt-10 gap-10'>
                <div className='col-span-3 md:col-span-2'>
                    <div>{description}</div>
                    <CommentForm id={id} />
                    <Comments id={id}></Comments>
                </div>
               <MostPopular />
            </div>
        </div>
    }

    return (
        <>
            {content}
        </>

    );
};

export default BlogPage;