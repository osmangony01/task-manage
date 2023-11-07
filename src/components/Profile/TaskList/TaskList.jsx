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

    const handleSearch = (e) => {
        const value = e.target.search.value;
        console.log(value);s
    }

    // to assign task of this components state form context api
    useEffect(() => {
        setAllTask(tasks);
    }, [tasks])

    //console.log(allTask)

    return (
        <div className=' w-full lg:w-[1000px] mx-auto border px-12 pt-6 pb-10 bg-white mt-3 h-full'>
            <h1 className='text-2xl text-center pb-8 font-semibold'>Welcome to Task Manager</h1>
            <div>
                <div>
                    <button onClick={() => handleAddModal(true)} className='px-4 py-1.5 bg-blue-500 rounded my-4 font-semibold text-white hover:bg-blue-700'>Add Task + </button>
                    {<AddTask status={addModel} handleAddModal={handleAddModal}></AddTask>}
                </div>
                <div>
                    <input name='search' onChange={handleSearch} type="text" placeholder='Search by name' className='border border-purple-500 outline-none mb-3 rounded p-2 hover:border-[#5e3cf7fb] hover:border-2 w-[300px]' />
                </div>

                <div className='overflow-x-auto w-full '>
                    <table className='table table-zebra w-full'>
                        {allTask.length >= 1 && <thead className='bg-blue-100'>
                            <tr>
                                <th className='border p-3 text-center'>#</th>
                                <th className='border p-3 text-center'>Title</th>
                                <th className='border p-3 text-center'>Due Date</th>
                                <th className='border p-3 text-center'>Priority</th>
                                <th className='border p-3 text-center'>Description</th>
                                <th className='border p-3 text-center'>Action</th>
                            </tr>
                        </thead>}
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