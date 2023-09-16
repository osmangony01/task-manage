import { Link } from "react-router-dom";
import { deleteTodo, updateCompetedMark } from "../../utils/localDB";
import { useContext, useEffect, useState } from "react";
import { ContextAPI } from "../../App";
import EditTodo from "../EditTodo/EditTodo";
import Swal from "sweetalert2";



const Todo = ({ item }) => {

    const { id, title, completed } = item;
    const { loading, setLoading } = useContext(ContextAPI);
    const [editModel, setEditModal] = useState(false);
    const [complete, setComplete] = useState(null);


    const handleEditModal = (status) => {
        setEditModal(status)
    }

    const handleDeleteTodo = (todoId) => {
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
                deleteTodo(todoId)
                setLoading(!loading);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

            }

        })

    }

    const handleCompeted = () => {
        const newTodo = { ...item, completed: true }
        console.log(newTodo);
        updateCompetedMark(newTodo);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mark as Todo is Completed!',
            showConfirmButton: false,
            timer: 1500
        })
        setLoading(!loading);
    }

    console.log(complete);
    useEffect(() => {
        if (complete) {
            handleCompeted();
        }
    }, [complete])

    return (
        <tr className=''>
            <td className='p-2 border-x border-b'>
                <span>{id}. </span>
                <span> {title}</span>
            </td>
            <td className='p-2  border-x border-b '>
                <span className="">
                    <span>
                        <button onClick={() => handleEditModal(true)} className='px-3 py-1 my-1 text-[15px]  border text-black hover:text-white border-green-500 rounded mx-2  font-semibold hover:bg-green-700'>Edit</button>
                        {
                            <EditTodo status={editModel} handleEditModal={handleEditModal} item={item}></EditTodo>
                        }
                    </span>
                    <button onClick={() => handleDeleteTodo(id)} className='px-3 py-1 text-[15px] rounded my-1 mx-2 font-semibold text-black hover:text-white border border-orange-600 hover:bg-orange-700'>Delete</button>
                    <span className="pl-6 my-1">
                        {
                            completed == true ? "Completed" : <input onChange={(e) => setComplete(e.target.value)} type="checkbox" />
                        }

                    </span>
                </span>
            </td>
        </tr>
    );
};

export default Todo;