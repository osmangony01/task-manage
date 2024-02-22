'use client'

import { useGetBlogQuery } from '@/features/blog/blogApi';
import useUser from '@/hooks/useUser';
import React from 'react';
import Image from 'next/image';
import { BsThreeDots } from "react-icons/bs";
import Link from 'next/link';
import UserBlogPost from './UserBlogPost';

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
            return <UserBlogPost key={index} post={item} />
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