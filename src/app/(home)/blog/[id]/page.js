'use client'

import React from 'react';
import Image from 'next/image';
import homeImg from '/public/t3.jpeg';
import { useGetSingleBlogQuery } from '@/features/blog/blogApi';

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
        content = <div className="w-4/5 mx-auto">
            <h2 className="text-3xl font-bold pt-6">Welcome</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 items-center">

                <div className=''>
                    <h2 className='text-4xl font-semibold pb-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, in.</h2>
                    <div className='flex  gap-4 item-center pt-3'>
                        <div className='w-[40px] h-[40px] relative'>
                            <Image src='/p1.jpeg' alt='image' fill className='rounded-full' />
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
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea harum minima incidunt consequatur dolore ad itaque quasi, beatae molestiae magnam. Aut possimus fugiat neque magni quidem. Ut, corrupti sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea harum minima incidunt consequatur dolore ad itaque quasi, beatae molestiae magnam. Aut possimus fugiat neque magni quidem. Ut, corrupti sit.
                    </p>

                    <div className='py-4'>
                        <h1 className='font-semibold text-2xl py-5'>Comments</h1>
                        <form>

                            <div>
                                <textarea
                                    type='text'
                                    name="comment"
                                    placeholder='leave message ...'
                                    className='px-3 py-2.5 w-[80%] border-2 outline-none bg-white hover:border-blue-500 rounded-md placeholder:text-sm'
                                    role={2}
                                ></textarea>
                            </div>
                            <button className='px-5 py-1.5 mt-3 bg-orange-400 hover:bg-orange-600 rounded text-white'>Send</button>

                        </form>
                    </div>

                    <div className='py-4 text-sm' >
                        <div className='flex  gap-4 item-center'>
                            <div className='w-[40px] h-[40px] relative'>
                                <Image src='/p1.jpeg' alt='image' fill className='rounded-full' />
                            </div>
                            <div className='flex flex-col'>
                                <span>Jone Doe</span>
                                <span>12/12/24</span>
                            </div>
                        </div>
                        <div className='pt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea harum minima incidunt consequatur dolore ad itaque quasi, beatae molestiae magnam. Aut possimus fugiat neque magni quidem.
                        </div>
                    </div>
                    <div className='py-4'>
                        <div className='flex  gap-4 item-center'>
                            <div className='w-[40px] h-[40px] relative'>
                                <Image src='/p1.jpeg' alt='image' fill className='rounded-full' />
                            </div>
                            <div className='flex flex-col text-sm'>
                                <span>Jone Doe</span>
                                <span>12/12/24</span>
                            </div>
                        </div>
                        <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea harum minima incidunt consequatur dolore ad itaque quasi, beatae molestiae magnam. Aut possimus fugiat neque magni quidem.
                        </div>
                    </div>
                </div>
                <div className='hidden md:block md:col-span-1'>
                    <h1 className='text-xl font-semibold py-6'>Most Popular</h1>
                    <div>
                        <button className=' rounded-lg px-2 py-1 bg-orange-400 text-white'>Culture</button>
                        <p>asdflk asdfasd asdfla ds asdfl </p>
                        <span>Jhon doe</span>
                        <span>12/12/12</span>
                    </div>
                    <div>
                        <button className=' rounded-lg px-2 py-1 bg-orange-400 text-white'>Culture</button>
                        <p>asdflk asdfasd asdfla ds asdfl </p>
                        <span>Jhon doe</span>
                        <span>12/12/12</span>
                    </div>
                    <div>
                        <button className=' rounded-lg px-2 py-1 bg-orange-400 text-white'>Culture</button>
                        <p>asdflk asdfasd asdfla ds asdfl </p>
                        <span>Jhon doe</span>
                        <span>12/12/12</span>
                    </div>
                    <div>
                        <button className=' rounded-lg px-2 py-1 bg-orange-400 text-white'>Culture</button>
                        <p>asdflk asdfasd asdfla ds asdfl </p>
                        <span>Jhon doe</span>
                        <span>12/12/12</span>
                    </div>
                </div>
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