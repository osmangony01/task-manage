import { Link } from "react-router-dom";
import { useAllUserQuery } from "../features/curd-api/userApi";
import User from "./User";


const UserList = () => {

    const { data, isLoading, isError, error } = useAllUserQuery();

    // console.log('Loading: ', isLoading);
    // console.log('Error: ', isError);
    // console.log(data); // Log the entire response object again
    const users = data && data.users; // Access the users field from the response
    console.log('user => ',users); // Log the users data
    console.log('error => ', error); // 

    let content = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    }
    else if (isError) {
        
        if (error && error.data.status == 404 && error.data.users.length == 0) { // Check for 404 status and empty users array
            
            content = <div>User not found!!</div>;
        } else {
            content = <div>There was an error, failed to fetch.</div>;
        }
    }
    else if (data?.users.length > 0) {
        content = <div className="overflow-x-auto mt-8">
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
                    {data.users.map((item, index) => <User item={item} index={index} key={item.id} />)}
                </tbody>
            </table>
        </div>
    }

    return (
        <div className=" rounded p-4 lg:p-8 my-4 border w-[95%] lg:w-[800px] mx-auto xl:w-[1000px] hover:border-blue-500 hover:shadow-lg">
            <h2 className='text-2xl text-center font-semibold'>Welcome to here</h2>
            <div className="flex justify-end mt-2">
                <Link to={'/add-user'}><button className="px-2 py-1.5 text-white bg-blue-500 hover:bg-blue-700 rounded cursor-pointer"> + Add User</button></Link>
            </div>
            {content}
        </div>
    );
};

export default UserList;