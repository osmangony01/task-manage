import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddTodo from '../AddTodo/AddTodo';
import { ContextAPI } from '../../App';



const TodoList = () => {

    const { todos } = useContext(ContextAPI);
    console.log(todos);

    const [allTodo, setAllTodo] = useState([]);
    const [addModel, setAddModal] = useState(false);


    const handleModal = (status) => {
        setAddModal(status)
    }


    useEffect(() => {
        setAllTodo(todos);
    },[todos])

    return (
        <div className='w-[1000px] mx-auto border px-12 py-6'>
            <h1 className='text-3xl text-center pb-8 font-semibold'>Welcome to Todo App</h1>
            <div>
                <button onClick={()=>handleModal(true)} className='px-4 py-1.5 bg-blue-500 rounded my-4 font-semibold text-white hover:bg-blue-700'>Add Todo + </button>
                {
                     <AddTodo status={addModel} handleModal={handleModal} length={allTodo?.length}></AddTodo>
                }
                <div className='overflow-x-auto'>
                    <div >
                        <div className='w-full grid grid-cols-3  '>
                            <span className='border p-2 col-span-2  font-semibold text-lg'>Title</span>
                            <span className='border p-2 col-span-1 text-center font-semibold text-lg'>Action</span>
                        </div>
                            {
                                allTodo?.map((item, index) => {
                                    const { id, title } = item;
                                    return <div className='w-full grid grid-cols-3 ' key={index}>
                                        <span className='p-2 border-x border-b col-span-2'>
                                            <span>{id}. </span>
                                          <span> {title}</span>
                                        </span>
                                        <span className='p-2 text-center border-x border-b col-span-1'>
                                           <Link to={``}><button className='px-3 py-1 bg-green-500 rounded mx-2  font-semibold text-white hover:bg-green-700'>Edit</button></Link> 
                                            <button className='px-3 py-1 bg-blue-500 rounded mx-2 font-semibold text-white hover:bg-blue-700'>Delete</button>
                                            <button className='px-3 py-1 bg-blue-500 rounded mx-2  font-semibold text-white hover:bg-blue-700'>Mark</button>
                                        </span>
                                    </div>
                                })
                            }
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;