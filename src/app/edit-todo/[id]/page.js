'use client'

import EditForm from '@/components/EditForm';
import { findTodo } from '@/features/todoSlice';
import { data } from 'autoprefixer';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector} from 'react-redux';

const EditTodo = ({params}) => {
    
    const { id } = params;
    const todoData = useSelector(state => state.todo.todo);
    console.log(todoData);
    const foundTodo = todoData.filter(item => item.id == id);

    console.log(foundTodo)

   
    if (!foundTodo) {
        return <div>Loading...</div>;
    } else {
        return <EditForm todo={foundTodo}></EditForm>
    }
    console.log(todo)
    
   
};

export default EditTodo;

// import { findTodo } from '@/utils/curd';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';

// const EditTodo = () => {
//     const router = useRouter();
//     const [todo, setTodo] = useState(null);

//     useEffect(() => {
//         // Ensure we are on the client-side
//         if (router && router.isReady) {
//             const { id } = router.query;
//             console.log(id)
//             const todoData = findTodo(id);
//             console.log(todoData)
//             setTodo(todoData);
//         }
//     }, [router]);

//     console.log(todo)
//     // Show loading indicator if todo is not yet fetched
//     if (!todo) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             edit
//         </div>
//     );
// };

// export default EditTodo;

