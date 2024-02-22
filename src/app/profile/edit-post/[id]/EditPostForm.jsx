'use client'

import { useUpdateBlogMutation } from '@/features/blog/blogApi';
import useUser from '@/hooks/useUser';
import React, { useState } from 'react';

const EditPostForm = ({ post }) => {

    const [updateBlog, { data, isLoading, isError, isSuccess, error }] = useUpdateBlogMutation();
    const user = useUser();
    const [title, setTitle] = useState(post.title);
    const [category, setCategory] = useState(post.category);
    const [description, setDescription] = useState(post.description);
    const [image, setImage] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();

        const user_id = user?.id;
        const date = new Date();
        const currentDate = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        console.log(title, currentDate, category, description, user_id);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('date', currentDate);
        formData.append('image', image);
        formData.append('user_id', user_id);
        formData.append('description', description);

        console.log(formData)
        updateBlog({id:post.id, data:formData});

    };

    return (
        <div>
            <div className="w-3/4 mx-auto border hover:border-violet-400 mt-6 px-10 py-5 rounded mb-10 bg-white">
                <h1 className='text-xl font-semibold text-center py-5'>Update Blog</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label>Title </label>
                        <input
                            type='text'
                            name='title'
                            className='input-control hover:border-blue-500'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />

                    </div>

                    <div className='mb-3'>
                        <label>Category </label>
                        <select
                            name="category"
                            className='input-control placeholder:text-sm hover:border-blue-500'
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="Culture">Culture</option>
                            <option value="Travel">Travel</option>
                            <option value="Food">Food</option>
                            <option value="Style">Style</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Coding">Coding</option>
                        </select>

                    </div>

                    <div className='mb-3'>
                        <label>Description </label>
                        <textarea
                            type='text'
                            name='description'
                            className='input-control hover:border-blue-500'
                            rows={3}
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        ></textarea>

                    </div>

                    <div className='mb-3'>
                        <label>Choose Image </label>
                        <input
                            type='file'
                            name='image'
                            className='input-control hover:border-blue-500'
                            onChange={(e) => setImage(e.target.files[0])}
                        />

                    </div>

                    <div className=''>
                        <button type='submit' className='px-4 py-1.5 mt-3 rounded text-white bg-violet-400 hover:bg-violet-600'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPostForm;