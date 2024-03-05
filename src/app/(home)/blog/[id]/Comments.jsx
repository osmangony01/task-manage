'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { useAllCommentQuery } from '@/features/comment/commentApi';
import { BsThreeDots } from "react-icons/bs";
import Swal from 'sweetalert2';
import CommentUDOperation from './CommentUDOperation';

const Comments = ({ id }) => {

    const { data, isLoading, isError, error } = useAllCommentQuery(id);

    let content = null;
    if (isLoading) {
        content = <div>Loading...</div>;
    }
    else if (isError) {
        if (error && error.data.status == 404) {
            content = <div>Comment is not found!!</div>;
        } else {
            content = <div>There was an error, failed to fetch.</div>;
        }
    }
    else if (data?.comment) {
        content = data.comment.map((item, index) => {
            return <div className='py-4 text-sm' key={index}>
                <div className='flex justify-between'>
                    <div className='flex gap-4 item-center'>
                        <div className='w-[40px] h-[40px] relative'>
                            <Image src='/p1.jpeg' alt='image' fill className='rounded-full' />
                        </div>
                        <div className='flex flex-col'>
                            <span>Jone Doe</span>
                            <span>
                                {new Date(item.updated_at).toLocaleDateString("en-US", { day: "numeric", month: "numeric", year: "numeric", })}
                            </span>
                        </div>
                    </div>
                    <div><CommentUDOperation key={index} item={item}/></div>
                </div>
                <div className='pt-2'>{item.comment}</div>
            </div>
        })
    }
    return (
        <>{content}</>
    );
};

export default Comments;