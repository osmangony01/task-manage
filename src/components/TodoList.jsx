'use client'

import React from 'react';
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { deleteTodo } from '@/features/todoSlice';

const TodoList = () => {

    const todo = useSelector((state) => state.todo.todo);
    //console.log(todo)
    const dispatch = useDispatch();
    let content = null;
    
    const handleDeleteTodo = (id) => {
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
                    dispatch(deleteTodo(id))
                   
                }
            }
        })
        
    }

    if (todo) {
        content = todo.map((item, index) => {
            return (
                <div key={index} className="p-4 border border-slate-300 my-3  flex justify-between gap-5 items-start  rounded hover:border-blue-500">
                    <div>
                        <div className="font-semibold text-lg">{item.title}</div>
                        <div className='text-base'>{item.description}</div>
                    </div>
                    <div className="flex gap-2">
                        <Link href={`/edit-todo/${item.id}`} className='p-1.5 border hover:text-white text-blue-500 border-blue-500 rounded mx-2  font-semibold hover:bg-blue-500'><FiEdit size={18}></FiEdit></Link>
                        <button onClick={() => handleDeleteTodo(item.id)} className='p-1.5 rounded text-red-500 font-semibold hover:text-white border border-red-500  hover:bg-red-500'><FaTrashAlt size={16}></FaTrashAlt></button>
                    </div>
                </div>
            )
        });
    }

    return <>
        {
            content
        }
    </>
};

export default TodoList;