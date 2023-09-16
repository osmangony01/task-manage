import { useContext, useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import { ContextAPI } from '../../App';
import Todo from './Todo';



const TodoList = () => {

    const { todos } = useContext(ContextAPI);
    //console.log(todos);

    const [allTodo, setAllTodo] = useState([]);
    const [addModel, setAddModal] = useState(false);

    const handleModal = (status) => {
        setAddModal(status)
    }

    useEffect(() => {
        setAllTodo(todos);
    }, [todos])


    return (
        <div className=' w-full lg:w-[1000px] mx-auto border px-12 py-6'>
            <h1 className='text-3xl text-center pb-8 font-semibold'>Welcome to Todo App</h1>
            <div>
                <button onClick={() => handleModal(true)} className='px-4 py-1.5 bg-blue-500 rounded my-4 font-semibold text-white hover:bg-blue-700'>Add Todo + </button>
                {
                    <AddTodo status={addModel} handleModal={handleModal} length={allTodo?.length}></AddTodo>
                }
                <div className='overflow-x-auto w-full '>
                    <table className='table w-full'>
                        <thead className=''>
                            <tr>
                                <th className='border p-2 col-span-2  font-semibold text-lg'>Title</th>
                                <th className='border p-2 col-span-1 text-center font-semibold text-lg'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allTodo?.map((item, index) => {
                                    return <Todo item={item} key={index}></Todo>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;


