import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ index, item }) => {
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.bio}</td>
            <td className='flex justify-evenly items-center border p-2'>
                <span>
                   <Link to={`/edit-user/${item.id}`}> <button title='Edit'  className='px-3 py-1 border text-black hover:text-white border-blue-500 rounded mx-2  font-semibold hover:bg-blue-500'>Edit</button></Link>
                    {/* {<EditTask status={editModel} handleEditModal={handleEditModal} item={item}></EditTask>} */}
                </span>
                <button title='Delete'  className='px-3 py-1 rounded  font-semibold text-black hover:text-white border border-red-500  hover:bg-red-500'>Delete</button>
            </td>
        </tr>
    );
};

export default User;