import React, { useContext, useState } from 'react';
import EditTask from '../EditTask/EditTask';
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TaskContextAPI } from '../Profile';
import axiosInstance from '../../../routes/axiosInstance';
import Swal from 'sweetalert2';

const Task = ({ item, index }) => {

    const { reload, setReload } = useContext(TaskContextAPI);
    const [editModel, setEditModal] = useState(false);

    // to handle edit modal pop-up
    const handleEditModal = (status) => {
        setEditModal(status)
    }

    // to perform for deletion operation
    const handleDeleteTask = async (taskId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                async function deleteTask() {
                    const res = await axiosInstance.delete(`/task/${taskId}`);
                    const data = res.data;
                    if (data.ok) {
                        setReload(!reload);
                        Swal.fire(
                            'Deleted!',
                            'Task data has been deleted.',
                            'success'
                        )
                    }
                }
                deleteTask();
            }
        })
    }

    const date = new Date(item.dueDate)
    
    return (
        <tr className={`${(index + 1) % 2 == 0 && 'hover:bg-slate-100'}`} key={index}>
            <td className='border p-2'>{index + 1}</td>
            <td className='border p-2'>{item.taskTitle}</td>
            <td className='border p-2'>{`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`}</td>
            <td className='border p-2'>{item.priority}</td>
            <td className='border p-2'>{item.description}</td>
            <td className='flex justify-evenly items-center border p-2'>
                <span>
                    <button title='Update' onClick={() => handleEditModal(true)} className='p-1.5 border text-black hover:text-white border-blue-500 rounded mx-2  font-semibold hover:bg-blue-500'><FiEdit size={18}></FiEdit></button>
                    {<EditTask status={editModel} handleEditModal={handleEditModal} item={item}></EditTask>}
                </span>
                <button title='Delete' onClick={() => handleDeleteTask(item._id)} className='p-1.5 rounded  font-semibold text-black hover:text-white border border-red-500  hover:bg-red-500'><FaTrashAlt size={16}></FaTrashAlt></button>
            </td>
        </tr>
    );
};

export default Task;

