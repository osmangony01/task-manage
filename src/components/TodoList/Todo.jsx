import { Link } from "react-router-dom";
import { deleteTodo } from "../../utils/localDB";
import { useContext } from "react";
import { ContextAPI } from "../../App";


const Todo = ({ item }) => {

    const { id, title } = item;
    const { loading, setLoading } = useContext(ContextAPI);

    const handleDeleteTodo = (todoId) => {
        deleteTodo(todoId)
        setLoading(!loading);
    }
    return (
        <div className='w-full grid grid-cols-3 '>
            <span className='p-2 border-x border-b col-span-2'>
                <span>{id}. </span>
                <span> {title}</span>
            </span>
            <span className='p-2 text-center border-x border-b col-span-1'>
                <button className='px-3 py-1 bg-green-500 rounded mx-2  font-semibold text-white hover:bg-green-700'>Edit</button>
                <button onClick={()=>handleDeleteTodo(id)} className='px-3 py-1 bg-blue-500 rounded mx-2 font-semibold text-white hover:bg-blue-700'>Delete</button>
                <button className='px-3 py-1 bg-blue-500 rounded mx-2  font-semibold text-white hover:bg-blue-700'>Mark</button>
            </span>
        </div>
    );
};

export default Todo;