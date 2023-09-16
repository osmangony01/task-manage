

import { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { addTodo, editTodo, getTodos } from "../../utils/localDB";
import { ContextAPI } from "../../App";
import Swal from "sweetalert2";

const EditTodo = ({ status, handleEditModal, item }) => {

    const { loading, setLoading } = useContext(ContextAPI);
    const { title: initialTitle } = item;
    const [title, setTitle] = useState(initialTitle);

    const modal = status;
    const handleModal = () => {
        handleEditModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = { ...item, title };
        //console.log(todo)
        editTodo(todo);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Update Todo is Successful',
            showConfirmButton: false,
            timer: 1500
        })
        handleModal(false);
        setLoading(!loading)
    }
    //console.log(title)

    return (
        <span>
            {
                modal && <div className='h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-20 z-50'>
                    <div className='relative bg-white rounded-md shadow-lg w-[450px]  text-[15px] mx-auto h-[350px] '>
                        <span onClick={handleModal} className='absolute top-[15px] right-[15px] hover:bg-slate-200 p-2 rounded-full'><RxCross1 color='' size={20}></RxCross1></span>
                        <div className="p-10">
                            <form onSubmit={handleSubmit}>
                                <h1 className="text-2xl text-center pt-6 pb-8 font-semibold">Update Todo</h1>
                                <div className="flex flex-col mb-4 gap-2">
                                    <label className="text-start">Title</label>
                                    <input onChange={(e) => setTitle(e.target.value)} className="w-full border  border-slate-300 px-2 py-2 rounded hover:border-2 hover:border-slate-600 outline-none" type="text" placeholder="Enter title" value={title} required />
                                </div>
                                <div>
                                    <button type="submit" className='px-4 py-1.5 flex  bg-purple-500 rounded my-4 font-semibold text-white hover:bg-purple-700'>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </span>
    );
};

export default EditTodo;