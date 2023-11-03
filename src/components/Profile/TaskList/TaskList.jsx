import React, { useContext, useEffect, useState } from 'react';
import AddTask from '../AddTask/AddTask';
import { TaskContextAPI } from '../Profile';
import Task from './Task';


const TaskList = () => {

    const { tasks } = useContext(TaskContextAPI);
    const [allTask, setAllTask] = useState([]);
    const [addModel, setAddModal] = useState(false);

    // to handle task pop-up modal
    const handleAddModal = (status) => {
        setAddModal(status)
    }

    useEffect(() => {
        setAllTask(tasks);
    }, [tasks])
    console.log(allTask)
    return (
        <div className=' w-full lg:w-[1000px] mx-auto border px-12 py-6 bg-white mt-3 h-full'>
            <h1 className='text-2xl text-center pb-8 font-semibold'>Welcome to Task Manager</h1>
            <div>
                <button onClick={() => handleAddModal(true)} className='px-4 py-1.5 bg-blue-500 rounded my-4 font-semibold text-white hover:bg-blue-700'>Add Task + </button>
                {
                    <AddTask status={addModel} handleAddModal={handleAddModal}></AddTask>
                }
                <div className='overflow-x-auto w-full '>
                    <table className='table w-full'>
                        <thead className='bg-blue-100'>
                            <tr>
                                <th className='border p-3 text-center'>#</th>
                                <th className='border p-3 text-center'>Title</th>
                                <th className='border p-3 text-center'>Due Date</th>
                                <th className='border p-3 text-center'>Priority</th>
                                <th className='border p-3 text-center'>Description</th>
                                <th className='border p-3 text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allTask?.map((item, index) => {
                                    return <Task item={item} index={index}></Task>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TaskList;