'use client'

import EditForm from '@/components/EditForm';
import React from 'react';
import { useSelector } from 'react-redux';

const EditTodo = ({ params }) => {

    const { id } = params;
    const todoData = useSelector(state => state.todo.todo);
    //console.log(todoData);
    const foundTodo = todoData.filter(item => item.id == id);

    //console.log(foundTodo)

    if (!foundTodo) {
        return <div>Loading...</div>;
    } else {
        return <EditForm todo={foundTodo}></EditForm>
    }
    //console.log(todo)

};

export default EditTodo;


