
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerValidation } from "../validation/formValidation";
import { useRegisterMutation } from "../../features/auth/authApi";
import { ErrorMessage, useFormik } from "formik";


const SignUp = () => {
    const navigate = useNavigate();
    const [register, { data: user, isLoading, isError, error: uError, isSuccess }] = useRegisterMutation();

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: { name: "", email: "", password: "", cpassword: "" },
        validationSchema: registerValidation,
        onSubmit: (values) => {
            console.log(values)
            const { name, email, password } = values;
            register({ name, email, password });
        },
    })

    if (isSuccess && !isLoading && !isError) {
        navigate("/profile", { replace: true }); 
    }

    console.log("user : ", user);
    console.log('isError : ', isError);
    console.log("isLoading : ", isLoading);
    console.log("uError : ", uError);
    console.log("isSuccess : ", isSuccess);
    


    return (
        <div className='pt-6'>
            <div className='w-2/5 max-sm:w-11/12 max-md:w-3/4 max-lg:w-1/2 bg-white mx-auto py-8 px-12 max-sm:px-4 shadow rounded'>
                <h3 className='text-center text-3xl font-semibold'>Sign Up</h3>
                <hr className='my-6' />
                <form action="" className='px-4' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5'>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className='input-control hover:border-blue-400 focus:border-blue-400'
                            placeholder='Enter your name'
                            onChange={handleChange}
                            value={values.name}
                        />
                        {errors.name && <small className="text-red-500">{errors.name}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block mb-1.5'>Email</label>
                        <input
                            type="text"
                            name="email"
                            className='input-control hover:border-blue-400 focus:border-blue-400'
                            placeholder='Enter your email'
                            onChange={handleChange}
                            value={values.email}
                        />
                        {errors.email && <small className="text-red-500">{errors.email}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5'>Password</label>
                        <input
                            type="password"
                            name="password"
                            className='input-control hover:border-blue-400 focus:border-blue-400'
                            placeholder='Enter your password'
                            onChange={handleChange}
                            value={values.password}
                        />
                         {errors.password && <small className="text-red-500">{errors.password}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5'>Confirm Password</label>
                        <input
                            type="password"
                            name="cpassword"
                            className='input-control hover:border-blue-400 focus:border-blue-400'
                            placeholder='Enter your confirm password'
                            onChange={handleChange}
                            value={values.cpassword}
                        />
                        {errors.cpassword && <small className="text-red-500">{errors.cpassword}</small>}
                    </div>
                    <button type="submit" className='w-full py-2 mt-5 bg-white border border-purple-400 hover:bg-purple-800 text-base text-black hover:text-white rounded' >Sign Up</button>
                    <p className='mt-2 text-sm  text-slate-600 text-end'>Already have an account? <Link to="/" className='text-blue-700 font-semibold'>Sign In</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;