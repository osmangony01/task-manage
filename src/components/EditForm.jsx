"use client"

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { TodoContextAPI } from '@/app/page';
import { useDispatch,useSelector} from 'react-redux';
import { updateTodo } from "@/features/todoSlice";

const EditForm = ({ todo }) => {

    // const contextValue = useContext(TodoContextAPI);
    // const { reload, setReload } = contextValue || {};
    console.log(todo)
    const dispatch = useDispatch();

    const [title, setTitle] = useState(todo[0].title);
    const [description, setDescription] = useState(todo[0].description);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { title, description, id: todo[0].id };

        if (title && description) {
            dispatch(updateTodo(data));
        }
        console.log(data);

        
        setTitle('');
        setDescription('');
    }

    return (
        <div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <h1 className='font-semibold text-center my-3 text-xl '>Update Todo</h1>
                <div className='flex flex-col mb-1'>
                    <label>Title</label>
                    <input
                        type='text'
                        placeholder="Enter title"
                        className="border border-slate-500 px-4  outline-none py-1.5 rounded hover:border-blue-500 hover:border-2"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Description</label>
                    <textarea
                        type='text'
                        placeholder="type here ..."
                        className="border border-slate-500 px-4 py-1.5 rounded outline-none hover:border-blue-500 hover:border-2"
                        rows={3}
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <div className='mt-2'>
                    <button type='submit' className="bg-blue-400  text-white py-1.5 px-3 rounded text-base hover:bg-blue-600">Update Todo</button>
                    <Link href={"/"}><button className='text-white bg-gray-500 hover:bg-black rounded px-3 py-1.5 ml-4'>Back</button></Link>
                </div>
            </form>
        </div>
    );
};

export default EditForm;