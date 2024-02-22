'use client'

import { useGetSingleBlogQuery } from '@/features/blog/blogApi';
import React from 'react';
import EditPostForm from './EditPostForm';

const EditPost = ({ params }) => {
    const { id } = params;
    console.log("id : ", id);

    const { data, isLoading, isError, error } = useGetSingleBlogQuery(id);
    console.log("error : ", error);
    if (data) {
        console.log("data : ", data);
        return <EditPostForm post={data.blog} />
    }

    // return (
    //     <div>
    //         edit form
    //     </div>
    // );
};

export default EditPost;