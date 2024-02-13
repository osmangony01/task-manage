
import { useState } from 'react';
import { FaEye, FaEyeSlash, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { loginValidation } from '../validation/formValidation';
import { useLoginMutation } from '../../features/auth/authApi';


const SignIn = () => {

    const [passShow, setPassShow] = useState(true);
    const navigate = useNavigate();

    const [login, { data: user, isLoading, isError, error: uError, isSuccess }] = useLoginMutation();

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: loginValidation,
        onSubmit: (values) => {
            console.log(values)
            const { email, password } = values;
            login({email, password});
        },
    })

    if (isSuccess && !isLoading && !isError) {
        navigate("/profile", { replace: true }); 
    }

    console.log("user : ", user);
    console.log('isError : ', isError);
    console.log("isLoading : ", isLoading);
    console.log("isSuccess : ", isSuccess);
    console.log("uError : ", uError);
   

    return (
        <div className='pt-8 pb-16'>
            <div className='w-2/5 max-sm:w-11/12 max-md:w-2/4 lg:w-1/3 bg-white mx-auto py-10 px-10 max-sm:px-4 shadow rounded'>
                <h3 className='text-center text-3xl font-semibold max-sm:text-2xl'>Sign In</h3>
                <hr className='my-6' />
                
                <form  className='px-4' onSubmit={handleSubmit} >
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
                        {errors.email && <small className='text-red-500'>{errors.email}</small>}
                    </div>
                    <div className='mb-3 relative'>
                        <label htmlFor="" className='block  mb-1.5'>Password</label>
                        <input
                            type={passShow ? "password" : "text"}
                            name="password"
                            className='input-control hover:border-blue-400 focus:border-blue-400'
                            placeholder='Enter your password'
                            onChange={handleChange}
                            value={values.password}
                        />
                        <small onClick={() => setPassShow(!passShow)} className='absolute right-6 top-11 text-base text-slate-600' required>
                            {passShow ? <span>{<FaEyeSlash></FaEyeSlash>}</span> : <span>{<FaEye></FaEye>}</span>}
                        </small>
                        {errors.password && <small className='text-red-500'>{errors.password}</small>}
                    </div>
                    <button type="submit" className='w-full py-2 mt-5 bg-white border border-purple-400 hover:bg-purple-800 text-base text-black hover:text-white rounded'>Sign In</button>
                    <p className='mt-2 text-sm  text-slate-600 text-end'>Don't have an account? <Link to="/sign-up" className='text-blue-700 font-semibold'>Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;