import { Link, useParams } from "react-router-dom";
import { useGetUserQuery } from "../features/curd-api/userApi";
import EditForm from "./EditForm";


const EditUser = () => {

    const { id } = useParams();

    console.log(id)

    const { data, isLoading, isError, error } = useGetUserQuery(id);

    let content = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    }
    else if (isError) {
        content = <div>There was an error, failed to fetch.</div>;
    }
    if (data && data.users) {
        console.log(data.users)
        content = <EditForm user={data.users} id={id} key={id} />
    }

    return content;
}

export default EditUser;


// const Form = ({ user }) => {
//     // const [userAdd, { isLoading, isError, error: uError, isSuccess }] = useUserAddMutation();

//     console.log(user)
//     const { values, errors, handleChange, handleSubmit } = useFormik({
//         initialValues: {
//             name: user.name,
//             email: user.email,
//             password: user.password,
//             cpassword: user.password,
//             bio: user.bio,
//         },
//         validationSchema: addUserValidation,
//         onSubmit: (values) => {
//             console.log(values)
//             // const { name, email, password, bio } = values;
//             // userAdd({ name, email, password, bio });
//         },
//     })

//     // console.log("user : ", user);
//     // console.log('isError : ', isError);
//     // console.log("isLoading : ", isLoading);
//     // console.log("uError : ", uError);

//     return (

//         <div className='rounded py-4 px-8 my-2 border w-[95%] md:w-[500px] mx-auto  hover:border-purple-300 hover:shadow-lg'>
//             <h3 className='text-center text-2xl font-semibold'>Add User</h3>
//             <hr className='my-6' />
//             <form onSubmit={handleSubmit} >
//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-sm'>Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder='Enter your name'
//                         className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
//                         onChange={handleChange}
//                         value={values.name}
//                     />
//                     {errors.name && <small>{errors.name}</small>}
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-sm'>Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder='Enter your email'
//                         className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
//                         onChange={handleChange}
//                         value={values.email}
//                     />
//                     {errors.email && <small>{errors.email}</small>}
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-sm'>Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder='Enter your password'
//                         className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
//                         onChange={handleChange}
//                         value={values.password}
//                     />
//                     {errors.password && <small>{errors.password}</small>}
//                 </div>
//                 <div className='mb-6'>
//                     <label htmlFor="" className='text-sm'>Confirm Password</label>
//                     <input
//                         type="password"
//                         name="cpassword"
//                         placeholder='Enter confirm password'
//                         className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
//                         onChange={handleChange}
//                         value={values.cpassword}
//                     />
//                     {errors.cpassword && <small>{errors.cpassword}</small>}
//                 </div>
//                 <div className='mb-6'>
//                     <label htmlFor="" className='text-sm'>Write Bio</label>
//                     <textarea
//                         type="text"
//                         name="bio"
//                         placeholder='write bio ...'
//                         className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
//                         onChange={handleChange}
//                     ></textarea>
//                     {errors.bio && <small>{errors.bio}</small>}
//                 </div>
//                 <div className="">
//                     <button type='submit' className='py-1.5 px-5 text-white border bg-purple-500 hover:bg-purple-800 text-base hover:text-white rounded-md hover:font-semibold' >Save</button>
//                     <Link to="/">
//                         <button className='ml-2 py-1.5 px-5 bg-white border border-gray-500  hover:bg-gray-600 text-base text-black hover:text-white rounded-md hover:font-semibold' >Back</button></Link>
//                 </div>
//             </form>
//         </div>
//     );
// };



