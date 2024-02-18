'use client'

import EditForm from '@/components/EditForm';
import { findTodo } from '@/utils/curd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const EditTodo = ({params}) => {
    
    const { id } = params;
   
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // Fetch todo data using findTodo
            const todoData = await findTodo(id);
            setTodo(todoData);
            console.log(todoData)
        };
        fetchData(); // Call the fetchData function
    }, [id]); // Re-run effect when id changes

    if (!todo) {
        return <div>Loading...</div>;
    } else {
        return <EditForm todo={todo}></EditForm>
    }
    
   
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

