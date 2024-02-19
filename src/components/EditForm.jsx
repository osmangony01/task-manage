"use client"

import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { updateTodo } from "@/features/todoSlice";
import { todoFormValidation } from '@/validation/formValidation';
import { useFormik } from 'formik';

const EditForm = ({ todo }) => {
  
    const dispatch = useDispatch();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: { title: todo[0].title, description: todo[0].description },
        validationSchema: todoFormValidation,
        onSubmit: (values) => {
            const data = { id: todo[0].id, title: values.title, description: values.description };
            console.log(data)
            dispatch(updateTodo(data));
        },
    })
    
    return (
        <div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <h1 className='font-semibold text-center my-3 text-xl '>Update Todo</h1>
                <div className='flex flex-col mb-1'>
                    <label>Title</label>
                    <input
                        type='text'
                        name='title'
                        placeholder="Enter title"
                        className="border border-slate-500 px-4  outline-none py-1.5 rounded hover:border-blue-500 hover:border-2"
                        onChange={handleChange}
                        value={values.title}
                    />
                    {
                        touched.title && errors.title ? (
                            <small className="text-red-500">{errors.title}</small>
                        ) : null
                    }
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Description</label>
                    <textarea
                        type='text'
                        name='description'
                        placeholder="type here ..."
                        className="border border-slate-500 px-4 py-1.5 rounded outline-none hover:border-blue-500 hover:border-2"
                        rows={3}
                        onChange={handleChange}
                        value={values.description}
                    ></textarea>
                     {
                        touched.description && errors.description ? (
                            <small className="text-red-500">{errors.description}</small>
                        ) : null
                    }
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