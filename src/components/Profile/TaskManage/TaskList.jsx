import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddTask from './AddTask';

const TaskList = () => {
    const [addTaskModal, setAddTaskModal] = useState(false);

    // to handle task pop-up modal
    const handleAddTaskModal = (status) => {
        setAddTaskModal(status)
    }

    return (
        <div className=" rounded  p-4 lg:p-8 my-4 bg-white border w-[95%] lg:w-[900px] mx-auto xl:w-[1100px] hover:border-blue-500 hover:shadow-lg">
            <h2 className='text-2xl text-center font-semibold'>Welcome to here</h2>
            <div className="flex justify-end mt-2">
                <button onClick={() => handleAddTaskModal(true)} className="px-2 py-1.5 text-white bg-blue-500 hover:bg-blue-700 rounded cursor-pointer"> + Add User</button>
            </div>
            {<AddTask status={addTaskModal} handleAddTaskModal={handleAddTaskModal}></AddTask>}
            { }
        </div>
    );
};

export default TaskList;