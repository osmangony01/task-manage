'use client'

import React from 'react';
import Image from 'next/image';
import { BsThreeDots } from "react-icons/bs";
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useDeleteBlogMutation } from '@/features/blog/blogApi';

const UserBlogPost = ({ post }) => {

    const [deleteBlog, {isError, isLoading, error}] = useDeleteBlogMutation();

    const handleDeletePost = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                if (result.isConfirmed) {
                    deleteBlog(id);
                    //console.log(data)
                    // if (data.status == 200) {
                    //     console.log('success')
                    // }
                }
            }
        })
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 bg-white p-4 mt-2'>
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
                <span className='px-2 py-1 border mr-2'><Link href={`/profile/edit-post/${post.id}`}>Edit</Link></span>
                <button onClick={()=>handleDeletePost(post.id)} className='px-2 py-1 border'>Delete</button>
            </div>
            <div></div>
        </div>
    );
};

export default UserBlogPost;