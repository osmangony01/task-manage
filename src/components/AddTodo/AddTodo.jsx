import { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { addTodo, getTodos } from "../../utils/localDB";
import { ContextAPI } from "../../App";
import Swal from "sweetalert2";

const AddTodo = ({ status, handleModal, length }) => {

    const { loading, setLoading } = useContext(ContextAPI);
    const [title, setTitle] = useState('')

    const modal = status;
    const handleAddModal = () => {
        handleModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const todos = getTodos();
        const len = todos.length + 1;
        const todo = { userId: 1, id: len, title, completed: false };
        addTodo(todo);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Added Todo is Successful',
            showConfirmButton: false,
            timer: 1500
        })
        

        handleModal(false);
        setLoading(!loading)
    }

    return (
        <div>
            {
                modal && <div className='h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-20 z-50'>
                    <div className='relative bg-white rounded-md shadow-lg w-[450px]  text-[15px] mx-auto h-[350px] '>
                        <span onClick={handleAddModal} className='absolute top-[15px] right-[15px] hover:bg-slate-200 p-2 rounded-full'><RxCross1 color='' size={20}></RxCross1></span>
                        <div className="p-10">
                            <form onSubmit={handleSubmit}>
                                <h1 className="text-2xl text-center pt-6 pb-8 font-semibold">Create a Todo</h1>
                                <div className="flex flex-col mb-4 gap-2">
                                    <label>Title</label>
                                    <input onChange={(e) => setTitle(e.target.value)} className="w-full border  border-slate-300 px-2 py-1.5 rounded hover:border-2 hover:border-slate-600 outline-none" type="text" placeholder="Enter title" required />
                                </div>
                                <div>
                                    <button type="submit" className='px-4 py-1.5 bg-purple-500 rounded my-4 font-semibold text-white hover:bg-purple-700'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default AddTodo;