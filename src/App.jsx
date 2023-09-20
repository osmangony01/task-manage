
import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const ContextAPI = createContext(null);

const App = () => {


    const [todo, setTodo] = useState([])
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(false);
    
    const fetchTodo = async () => {
        const response = await fetch('http://localhost:5100/data')
        const data = await response.json();
        if (data) {
            setTodo(data);
        }
    }

    useEffect(() => {
        fetchTodo();
    }, [loading])
    
    const info = {
        todo,
        loading,
        setLoading,
        setTodo,
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