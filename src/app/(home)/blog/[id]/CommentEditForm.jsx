import React from 'react';
import { useFormik } from 'formik';
import { RxCross1 } from "react-icons/rx";
import { useUpdateCommentMutation } from '@/features/comment/commentApi';
import { commentValidation } from '@/validation/formValidation';

const CommentEditForm = ({ status, handleEditComment, item }) => {

    const modal = status;

    const [updateComment, { data, isLoading, isError, error, isSuccess }] = useUpdateCommentMutation();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: { comment: item.comment },
        validationSchema: commentValidation,
        onSubmit: (values) => {
            const data = {
                blog_id: item.blog_id,
                user_id: item.user_id,
                comment: values.comment
            };
            console.log(data);
            updateComment({ id:item.id, data });
        },
    })
    if (isSuccess && !isError) {
        handleEditComment(false)
    }
    // to handle add pop-up modal
    const handleModal = () => {
        handleEditComment(false)
    }

    return (
        <div>
             {
                modal && <div className='h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-20 z-50'>
                    <div className='relative bg-white rounded-md shadow-lg w-[500px]  text-[15px] mx-auto  '>
                        <span onClick={handleModal} className='absolute top-[15px] right-[15px] hover:bg-slate-200 p-2 rounded-full'><RxCross1 color='' size={20}></RxCross1></span>
                        <div className="p-6">
                            <form onSubmit={handleSubmit}>
                                <h1 className='font-semibold text-base pb-4'>Edit Comment</h1>
                                <div className='flex flex-col mt-3'>
                                    <textarea
                                        type="text"
                                        name="comment"
                                        className="task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2"
                                        rows={3}
                                        placeholder="write here..."
                                        onChange={handleChange}
                                        value={values.comment}
                                        ></textarea>
                                    {touched.comment && errors.comment ? (<p className="text-red-500 text-sm">{errors.comment}</p>) : null}
                                </div>
                                <div className='mt-4'> <button type='submit' className='text-right px-3 py-1.5 bg-[#5e3cf7fb] text-white rounded shadow-md hover:bg-[#3d3bbefb]'>Update</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default CommentEditForm;