import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDeleteUserMutation } from '../features/curd-api/userApi';

const User = ({ index, item }) => {

    const [deleteUser, { data, isLoading, isError, isSuccess }] = useDeleteUserMutation();

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(id);
                console.log(data)
                if (data.status == 200) {
                    console.log('success')
                }
            }
        })
    }

    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            {/* <td>{item.password}</td> */}
            <td>{item.bio}</td>
            <td className='flex justify-evenly items-center border p-2'>
                <span>
                    <Link to={`/edit-user/${item.id}`}> <button title='Edit' className='px-3 py-1 border text-black hover:text-white border-blue-500 rounded mx-2  font-semibold hover:bg-blue-500'>Edit</button></Link>
                    {/* {<EditTask status={editModel} handleEditModal={handleEditModal} item={item}></EditTask>} */}
                </span>
                <button onClick={() => handleDeleteUser(item.id)} title='Delete' className='px-3 py-1 rounded  font-semibold text-black hover:text-white border border-red-500  hover:bg-red-500'>Delete</button>
            </td>
        </tr>
    );
};

export default User;