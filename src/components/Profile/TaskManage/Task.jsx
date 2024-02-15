import React, { useContext, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2';
import EditTask from './EditTask';
import { useDeleteTaskMutation } from '../../../features/task/taskApi';


const Task = ({ item, index }) => {

    const [editModel, setEditModal] = useState(false);

    const [deleteTask, {data, isLoading, isError, error, isSuccess}] = useDeleteTaskMutation();

    // to handle edit modal pop-up
    const handleEditModal = (status) => {
        setEditModal(status)
    }

    // to perform for deletion operation
    const handleDeleteTask = async (id) => {
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
                if (result.isConfirmed) {
                    deleteTask(id);
                    console.log(data)
                    // if (data.status == 200) {
                    //     console.log('success')
                    // }
                }
            }
        })
    }

    return (
        <tr className={`${(index + 1) % 2 == 0 && 'hover:bg-slate-100'}`} key={index}>
            <td className='border p-2'>{index + 1}</td>
            <td className='border p-2'>{item.task_title}</td>
            <td className='border p-2'>{item.task_due_date}</td>
            <td className='border p-2'>{item.task_priority}</td>
            <td className='border p-2'>{item.task_description}</td>
            <td className='flex justify-evenly items-center border p-2'>
                <span>
                    <button title='Update' onClick={() => handleEditModal(true)} className='p-1.5 border text-black hover:text-white border-blue-500 rounded mx-2  font-semibold hover:bg-blue-500'><FiEdit size={18}></FiEdit></button>
                    {editModel && <EditTask modal={editModel} handleEditModal={handleEditModal} id={item.id}></EditTask>}
                </span>
                <button title='Delete' onClick={() => handleDeleteTask(item.id)} className='p-1.5 rounded  font-semibold text-black hover:text-white border border-red-500  hover:bg-red-500'><FaTrashAlt size={16}></FaTrashAlt></button>
            </td>
        </tr>
    );
};

export default Task;

