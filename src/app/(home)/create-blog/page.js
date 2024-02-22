'use client'

import { useCreateBlogMutation } from '@/features/blog/blogApi';
import useUser from '@/hooks/useUser';
// import { blogValidation } from '@/validation/formValidation';
// import { useFormik } from 'formik';
import React, { useState } from 'react';

const CreateBlog = () => {

    const user = useUser();
    
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    
    const [createBlog, { data: blog, isLoading, isError, error: uError, isSuccess }] = useCreateBlogMutation();

    // const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    //     initialValues: { title: "", description: "", category: "", image:  },
    //     validationSchema: blogValidation,
    //     onSubmit: (values) => {
    //         //console.log(values)
    //         const date = new Date();
    //         const user_id = user?.id;
    //         console.log(user_id);

    //         const data = {
    //             user_id: user_id,
    //             title: values.title,
    //             description: values.description,
    //             category: values.category,
    //             image: values.image,
    //             date: date,
    //         }
    //         console.log(data)
    //         createBlog(data);
    //     },
    // })

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
        
        createBlog(formData)

    };
   
    return (
        <div>
            <div className="w-3/4 mx-auto border hover:border-violet-400 mt-6 px-10 py-5 rounded mb-10 shadow-lg">
                <h1 className='text-xl font-semibold text-center py-5'>Create Blog</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label>Title </label>
                        <input
                            type='text'
                            name='title'
                            className='input-control hover:border-blue-500'
                            onChange={(e)=>setTitle(e.target.value)}
                            value={title}
                        />
                        
                    </div>

                    <div className='mb-3'>
                        <label>Category </label>
                        <select
                            name="category"
                            className='input-control placeholder:text-sm hover:border-blue-500'
                            onChange={(e)=>setCategory(e.target.value)}
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
                            onChange={(e)=>setDescription(e.target.value)}
                            value={description}
                        ></textarea>
                        
                    </div>

                    <div className='mb-3'>
                        <label>Choose Image </label>
                        <input
                            type='file'
                            name='image'
                            className='input-control hover:border-blue-500'
                            onChange={(e)=>setImage(e.target.files[0])}
                        />
                        
                    </div>

                    <div className=''>
                        <button type='submit' className='px-4 py-1.5 mt-3 rounded text-white bg-violet-400 hover:bg-violet-600'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// const CreateBlog = () => {

//     const user = useUser();
//     const [createBlog, { data: blog, isLoading, isError, error: uError, isSuccess }] = useCreateBlogMutation();
//     const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
//         initialValues: { title: "", description: "", category: "", image:  },
//         validationSchema: blogValidation,
//         onSubmit: (values) => {
//             //console.log(values)
//             const date = new Date();
//             const user_id = user?.id;
//             console.log(user_id);

//             const data = {
//                 user_id: user_id,
//                 title: values.title,
//                 description: values.description,
//                 category: values.category,
//                 image: values.image,
//                 date: date,
//             }
//             console.log(data)
//             createBlog(data);
//         },
//     })

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         setFieldValue("image", file); 
//         console.log(file.name); 
//     };
   
//     return (
//         <div>
//             <div className="w-3/4 mx-auto border hover:border-violet-400 mt-6 px-10 py-5 rounded">
//                 <h1 className='text-xl font-semibold text-center py-5'>Create Blog</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className='mb-3'>
//                         <label>Title </label>
//                         <input
//                             type='text'
//                             name='title'
//                             className='input-control hover:border-blue-500'
//                             onChange={handleChange}
//                             value={values.title}
//                         />
//                         {touched.title && errors.title ? (<small className="text-red-500">{errors.title}</small>) : null}
//                     </div>

//                     <div className='mb-3'>
//                         <label>Category </label>
//                         <select
//                             name="category"
//                             className='input-control placeholder:text-sm hover:border-blue-500'
//                             onChange={handleChange}
//                             value={values.category}
//                         >
//                             <option value="" disabled>Select Category</option>
//                             <option value="Culture">Culture</option>
//                             <option value="Travel">Travel</option>
//                             <option value="Food">Food</option>
//                             <option value="Style">Style</option>
//                             <option value="Fashion">Fashion</option>
//                             <option value="Coding">Coding</option>
//                         </select>
//                         {touched.category && errors.category ? (<small className="text-red-500">{errors.category}</small>) : null}
//                     </div>

//                     <div className='mb-3'>
//                         <label>Description </label>
//                         <textarea
//                             type='text'
//                             name='description'
//                             className='input-control hover:border-blue-500'
//                             rows={3}
//                             onChange={handleChange}
//                             value={values.description}
//                         ></textarea>
//                         {touched.description && errors.description ? (<small className="text-red-500">{errors.description}</small>) : null}
//                     </div>

//                     <div className='mb-3'>
//                         <label>Choose Image </label>
//                         <input
//                             type='file'
//                             name='image'
//                             className='input-control hover:border-blue-500'
//                             onChange={handleImageChange}
//                         />
//                         {touched.image && errors.image ? (<small className="text-red-500">{errors.image}</small>) : null}
//                     </div>

//                     <div className=''>
//                         <button type='submit' className='px-4 py-1.5 mt-3 rounded text-white bg-violet-400 hover:bg-violet-600'>Create</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

export default CreateBlog;