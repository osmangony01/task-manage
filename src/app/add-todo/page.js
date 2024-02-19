"use client"

import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from "@/features/todoSlice";
import { todoFormValidation } from '@/validation/formValidation';
import { useFormik } from 'formik';


const AddTodo = () => {

    const len = useSelector((state) => state.todo.todo.length);
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: { title: "", description: "" },
        validationSchema: todoFormValidation,
        onSubmit: (values) => {
            const data = { id: len + 1, title: values.title, description: values.description };
            console.log(data)
            dispatch(addTodo(data));
        },
    })

    return (
        <div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <h1 className='font-semibold text-center my-3 text-xl '>Create Todo</h1>
                <div className='flex flex-col mb-1'>
                    <label>Title</label>
                    <input
                        type='text'
                        name="title"
                        placeholder="Enter title"
                        className="border border-slate-500 px-4  outline-none py-1.5 rounded hover:border-blue-500 hover:border-2"
                        onChange={handleChange}
                        value={values.title}
                    />
                    {/* {errors.title && <small className="text-red-500">{errors.title}</small>} */}
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
                        placeholder="type here ..."
                        name='description'
                        className="border border-slate-500 px-4 py-1.5 rounded outline-none hover:border-blue-500 hover:border-2"
                        rows={3}
                        onChange={handleChange}
                        value={values.description}
                    ></textarea>
                    {/* {errors.description && <small className="text-red-500">{errors.description}</small>} */}
                    {
                        touched.description && errors.description ? (
                            <small className="text-red-500">{errors.description}</small>
                        ) : null
                    }
                </div>
                <div className='mt-2'>
                    <button type='submit' className="bg-blue-400  text-white py-1.5 px-3 rounded text-base hover:bg-blue-600">Add Todo</button>
                    <Link href={"/"}><button className='text-white bg-gray-500 hover:bg-black rounded px-3 py-1.5 ml-4'>Back</button></Link>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;