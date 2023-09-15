import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getTodos, saveTodosToLocalDB } from "./utils/localDB";

export const ContextAPI = createContext(null);

const App = () => {

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(false);
    
    const fetchTodos = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json();
        if (data) {
            saveTodosToLocalDB('todos', data);
            setReload(true);
        }
    }

    useEffect(() => {
        fetchTodos();
    }, [reload])

    const allTodo = getTodos();
    useEffect(() => {
        setTodos(allTodo);
    },[allTodo, loading])

    console.log(todos);
    const info = {
        todos,
        loading,
        setLoading,
        setTodos,
    }

    return (
        <ContextAPI.Provider value={info}>
            <div>
                <Outlet></Outlet>
            </div>
        </ContextAPI.Provider>
    );
};

export default App;