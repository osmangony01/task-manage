import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAddCommentMutation } from '@/features/comment/commentApi';
import useUser from '@/hooks/useUser';
import { commentValidation } from '@/validation/formValidation';

const CommentForm = ({id}) => {

    const user = useUser();
    const [addComment, { data, isLoading, isError, error }] = useAddCommentMutation();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: { comment: "" },
        validationSchema: commentValidation,
        onSubmit: (values) => {
            const user_id = user?.id;
            const data = {
                blog_id: id,
                user_id: user_id,
                comment: values.comment
            };
            console.log(values);
            addComment(data);
        },
    })

    return (
        <div className='py-4'>
            <h1 className='font-semibold text-2xl py-5'>Comments</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea
                        type='text'
                        name="comment"
                        placeholder='leave message ...'
                        className='px-3 py-2.5 w-[80%] border-2 outline-none bg-white hover:border-blue-500 rounded-md placeholder:text-sm'
                        role={2}
                        onChange={handleChange}
                        value={values.comment}
                    ></textarea>
                    {touched.comment && errors.comment ? (<p className="text-red-500 text-sm">{errors.comment}</p>) : null}
                </div>
                <div>
                    <button type='submit' className='px-5 py-1.5 mt-3 bg-orange-400 hover:bg-orange-600 rounded text-white'>Send</button>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;