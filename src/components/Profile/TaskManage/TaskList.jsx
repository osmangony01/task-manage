import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddTask from './AddTask';
import { useAllTaskQuery, useGetTaskQuery } from '../../../features/task/taskApi';
import useUser from '../../../hooks/useUser';
import Task from './Task';

const TaskList = () => {

    const user = useUser();
    const [addTaskModal, setAddTaskModal] = useState(false);

    // to handle task pop-up modal
    const handleAddTaskModal = (status) => {
        setAddTaskModal(status)
    }

    const { data, isLoading, isError, error } = useGetTaskQuery(user?.id);

    let content = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    }
    else if (isError) {

        if (error && error.data.status == 404 && error.data.tasks.length == 0) { // Check for 404 status and empty users array

            content = <div>User not found!!</div>;
        } else {
            content = <div>There was an error, failed to fetch.</div>;
        }
    }
    else if (data?.tasks.length > 0) {
        content = <div className="overflow-x-auto mt-8">
            <table className="table table-zebra">
                <thead className="text-black text-base">
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
                    {data.tasks.map((item, index) => {
                        return <Task item={item} index={index} key={index}></Task>
                    })}
                </tbody>
            </table>
        </div>
    }

    return (
        <div className=" rounded  p-4 lg:p-8 my-4 bg-white border w-[95%] lg:w-[900px] mx-auto xl:w-[1100px] hover:border-blue-500 hover:shadow-lg">
            <h2 className='text-2xl text-center font-semibold'>Welcome to here</h2>
            <div className="flex justify-end mt-2">
                <button onClick={() => handleAddTaskModal(true)} className="px-2 py-1.5 text-white bg-blue-500 hover:bg-blue-700 rounded cursor-pointer"> + Add Task</button>
            </div>
            {<AddTask status={addTaskModal} handleAddTaskModal={handleAddTaskModal}></AddTask>}
            { content}
        </div>
    );
};

export default TaskList;