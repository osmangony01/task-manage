import React, { useContext, useState } from 'react';
import axiosInstance from '../../../routes/axiosInstance';
import { RxCross1 } from "react-icons/rx";
import Swal from 'sweetalert2';
import { TaskContextAPI } from '../Profile';
import { useForm } from 'react-hook-form';

const EditTask = ({ status, handleEditModal, item }) => {

    const { reload, setReload } = useContext(TaskContextAPI);
    const modal = status;
    const { register: taskHandle, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            taskTitle: item.taskTitle,
            dueDate: new Date(item.dueDate).toISOString().slice(0, 10),
            priority: item.priority,
            description: item.description,
          },
    });

    //  // to handle edit modal pop-up
    const handleModal = () => {
        handleEditModal(false)
    }

    // handle to update task
    const updateTask = async (taskData) => {
        const res = await axiosInstance.patch('/task', { ...taskData });
        const data = res.data;
        //console.log(data);
        if (data.ok) {
            setReload(!reload);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Task is updated successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    // handle submit for update task
    const onSubmit = (data) => {
        const taskData = {id:item._id, ...data };
        updateTask(taskData)
        handleEditModal(false);
    }

    return (
        <div>
            {
                modal && <div className='h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-20 z-50'>
                    <div className='relative bg-white rounded-md shadow-lg w-[500px]  text-[15px] mx-auto h-[570px] '>
                        <span onClick={handleModal} className='absolute top-[15px] right-[15px] hover:bg-slate-200 p-2 rounded-full'><RxCross1 color='' size={20}></RxCross1></span>
                        <div className="p-10">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1 className='text-center font-semibold text-2xl pb-4'>Update Task</h1>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Title</label>
                                    <input type='text'
                                        name="taskTitle"
                                        {...taskHandle("taskTitle", { required: true })}
                                        className='task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2' placeholder='Enter title'
                                    />
                                     {errors.taskTitle && <span className="text-red-600 text-sm">The title field is required</span>}
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Due Date</label>
                                    <input
                                        type='date'
                                        name="dueDate"
                                        {...taskHandle("dueDate", { required: true })}
                                        className='task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2'
                                    />
                                    {errors.dueDate && <span className="text-red-600 text-sm">The date field is required</span>}
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Priority Level</label>
                                    <select
                                        name="priority"
                                        {...taskHandle("priority", { required: true })}
                                        className='task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2'
                                    >
                                        <option value="" disabled>Select a priority level</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High" >High</option>
                                    </select>
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Description</label>
                                    <textarea
                                        type="text"
                                        name="description"
                                        {...taskHandle("description", { required: true })}
                                        rows={3}
                                        className="task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2"
                                        placeholder="Type description"
                                    ></textarea>
                                      {errors.description && <span className="text-red-600 text-sm">The description field is required</span>}
                                </div>
                                <div className='mt-4'> <button type='submit' className='text-right px-4 py-1.5 bg-[#5e3cf7fb] text-white rounded shadow-md hover:bg-[#3d3bbefb]'>Update Task</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default EditTask;