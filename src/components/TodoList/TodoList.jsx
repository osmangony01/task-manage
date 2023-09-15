import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTodosApi } from '../../utils/todoApi';


const TodoList = () => {


    //const allTodos = getTodosApi();
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setTodos(json));
    }, [])


    console.log(todos);


    return (
        <div className='w-[1000px] mx-auto border px-12 py-6'>
            <h1 className='text-3xl text-center pb-8 font-semibold'>Welcome to Todo App</h1>
            <div>
                <Link to={`/add-todo`}> <button className='px-4 py-1.5 bg-blue-500 rounded my-4 font-semibold text-white hover:bg-blue-700'>Add Todo + </button></Link>
                <div className='overflow-x-auto'>
                    <div >
                        <div className='w-full grid grid-cols-3 '>
                            <span className='border p-2 col-span-2 '>Title</span>
                            <span className='border p-2 col-span-1'>Action</span>
                        </div>
                        {
                            todos?.map((item, index) => {
                                const { id, title, completed } = item;
                                return <div className='w-full grid grid-cols-3' key={index}>
                                    <span className='p-2 border-x border-b col-span-2'>{title}</span>
                                    <span className='p-2 text-center border-x border-b col-span-1'>
                                        <button className='px-3 py-1 bg-green-500 rounded mx-2  font-semibold text-white hover:bg-green-700'>Edit</button>
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