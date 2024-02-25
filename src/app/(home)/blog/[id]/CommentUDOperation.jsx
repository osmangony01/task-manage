'use client'

import React, { useState } from 'react';
import { useAllCommentQuery, useDeleteCommentMutation } from '@/features/comment/commentApi';
import { BsThreeDots } from "react-icons/bs";
import Swal from 'sweetalert2';
import CommentEditForm from './CommentEditForm';

const CommentUDOperation = ({ item }) => {

    const [commentControl, setCommentControl] = useState(false);
    const [editComment, setEditComment] = useState(false);
    const [deleteComment, { isError, error}] = useDeleteCommentMutation();

    const handleEditComment = (status) => {
        setEditComment(status);
    }


    const handleComment = (id) =>{
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
                    deleteComment(id);
                }
            }
        })
    }

    return (
        <div className="relative text-sm" >
            <div className="cursor-pointer px-2 py-0.5 rounded hover:bg-blue-500 text-black hover:text-white" onClick={() => setCommentControl(!commentControl)}>
                <BsThreeDots size={18} />
            </div>
            {
                commentControl && <div className="absolute right-0 top-7 z-10 border rounded border-blue-300">
                    <ul className="menu menu-compact p-1.5 shadow-lg bg-base-100  rounded-md border w-[170px]">
                        <li onClick={() => handleEditComment(true)}  className='hover:bg-blue-500 hover:text-white rounded-md'><span>Edit ...</span></li>
                        <li className='hover:bg-blue-500 hover:text-white rounded-md' onClick={() => handleComment(item.id)}><a>Delete ...</a></li>
                    </ul>
                    <CommentEditForm status={editComment} handleEditComment={handleEditComment} item={item}/>
                </div>
            }
        </div>
    );
};

export default CommentUDOperation;