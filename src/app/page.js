'use client'

import TodoList from '@/components/TodoList';
import { getTodo } from '@/utils/curd';
import React, { createContext, useEffect, useState } from 'react';
export const TodoContextAPI = createContext(null);

const Home = () => {

  const [todo, setTodo] = useState([])
  const [reload, setReload] = useState(false);

  // fetch data from database
  const fetchTodo = async () => {
    const todo = getTodo();
    if (todo) {
      setTodo(todo);
      setReload(true)
    }
  }

  useEffect(() => {
    fetchTodo();
  }, [reload])

  const info = {
    todo,
    reload,
    setTodo,
    setReload
  }

  return (
    <TodoContextAPI.Provider value={info}>
      <div>
        <TodoList></TodoList>
      </div>
    </TodoContextAPI.Provider>
  );
};

export default Home;