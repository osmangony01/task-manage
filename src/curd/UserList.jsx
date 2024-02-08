import { Link } from "react-router-dom";


const UserList = () => {
    return (
        <div className=" rounded p-4 lg:p-8 my-4 border w-[95%] lg:w-[800px] mx-auto xl:w-[1000px] hover:border-blue-500 hover:shadow-lg">
            <h2 className='text-2xl text-center font-semibold'>Welcome to here</h2>
            <div className="flex justify-end mt-2">
                <Link to={'/add-user'}><button className="px-2 py-1.5 text-white bg-blue-500 hover:bg-blue-700 rounded cursor-pointer"> + Add User</button></Link>
            </div>

            <div className="overflow-x-auto mt-8">
                <table className="table table-zebra">
                    <thead className="text-black text-base">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>password</th>
                            <th>Bio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;