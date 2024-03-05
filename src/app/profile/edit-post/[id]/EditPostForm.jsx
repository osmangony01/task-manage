'use client'

import { useUpdateBlogMutation } from '@/features/blog/blogApi';
import useUser from '@/hooks/useUser';
import { blogValidation } from '@/validation/formValidation';
import React, { useState } from 'react';
import { useFormik } from 'formik';

const EditPostForm = ({ post }) => {

    const [loading, setLoading] = useState(false);
    const [updateBlog, { data, isLoading, isError, isSuccess, error }] = useUpdateBlogMutation();
    const user = useUser();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: { title: post.title, description: post.category, category: post.description, image: null },
        validationSchema: blogValidation,
        onSubmit: async (values, { resetForm }) => {
            
            const user_id = user?.id;
            const date = new Date();
            const currentDate = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;

            const formData = new FormData();
            formData.append('title', values.title);
            formData.append('category', values.category);
            formData.append('date', currentDate);
            formData.append('image', values.image);
            formData.append('user_id', user_id);
            formData.append('description', values.description);
            setLoading(true);

            try {
                await updateBlog({id:post.id, data:formData});
                // resetForm(); // Reset the form fields after successful submission
                // setFieldValue('image', null);
                setLoading(false)
            } catch (error) {
                console.error('Error creating blog:', error);
            }
        },
    })

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const user_id = user?.id;
    //     const date = new Date();
    //     const currentDate = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    //     console.log(title, currentDate, category, description, user_id);

    //     const formData = new FormData();
    //     formData.append('title', title);
    //     formData.append('category', category);
    //     formData.append('date', currentDate);
    //     formData.append('image', image);
    //     formData.append('user_id', user_id);
    //     formData.append('description', description);

    //     console.log(formData)
    //     updateBlog({id:post.id, data:formData});

    // };

    return (
        <div>
            <div className="w-3/4 mx-auto border hover:border-violet-400 mt-6 px-10 py-5 rounded mb-10 bg-white">
                <h1 className='text-xl font-semibold text-center py-5'>Update Blog</h1>
                {isSuccess && <h2 className='text-base text-green-500 py-4 text-center font-semibold'>Blog updated successfully</h2>}
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label>Title </label>
                        <input
                            type='text'
                            name='title'
                            className='input-control hover:border-blue-500'
                            onChange={handleChange}
                            value={values.title}
                        />
                        {touched.title && errors.title ? (<small className="text-red-500">{errors.title}</small>) : null}
                    </div>

                    <div className='mb-3'>
                        <label>Category </label>
                        <select
                            name="category"
                            className='input-control placeholder:text-sm hover:border-blue-500'
                            onChange={handleChange}
                            value={values.category}
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="Culture">Culture</option>
                            <option value="Travel">Travel</option>
                            <option value="Food">Food</option>
                            <option value="Style">Style</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Coding">Coding</option>
                        </select>
                        {touched.category && errors.category ? (<small className="text-red-500">{errors.category}</small>) : null}
                    </div>

                    <div className='mb-3'>
                        <label>Description </label>
                        <textarea
                            type='text'
                            name='description'
                            className='input-control hover:border-blue-500'
                            rows={3}
                            onChange={handleChange}
                            value={values.description}
                        ></textarea>
                        {touched.description && errors.description ? (<small className="text-red-500">{errors.description}</small>) : null}
                    </div>

                    <div className='mb-3'>
                        <label>Choose Image </label>
                        <input
                            type='file'
                            name='image'
                            className='input-control hover:border-blue-500'
                            onChange={(e) => setFieldValue('image', e.target.files[0])}
                        />
                        {touched.image && errors.image ? (<small className="text-red-500">{errors.image}</small>) : null}
                    </div>

                    <div className=''>
                        <button type='submit' className='px-4 py-2 mt-3 rounded text-white bg-violet-400 hover:bg-violet-600 flex items-center gap-3'><span>Update</span> {loading && <span class="loading loading-spinner loading-md"></span>}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPostForm;