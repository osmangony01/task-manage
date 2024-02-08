import { Link } from "react-router-dom";
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import { addUserValidation } from "../validation/addUserValidation";

const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    bio: ""
};

const AddUser = () => {

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: addUserValidation,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (

        <div className='rounded py-4 px-8 my-2 border w-[95%] md:w-[500px] mx-auto  hover:border-purple-300 hover:shadow-lg'>
            <h3 className='text-center text-2xl font-semibold'>Add User</h3>
            <hr className='my-6' />
            <form onSubmit={handleSubmit} >
                <div className='mb-3'>
                    <label htmlFor="" className='text-sm'>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder='Enter your name'
                        className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
                        onChange={handleChange}
                        value={values.name}
                    />
                    {errors.name && <small>{errors.name}</small>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="" className='text-sm'>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder='Enter your email'
                        className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
                        onChange={handleChange}
                        value={values.email}
                    />
                    {errors.email && <small>{errors.email}</small>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="" className='text-sm'>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder='Enter your password'
                        className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
                        onChange={handleChange}
                        value={values.password}
                    />
                    {errors.password && <small>{errors.password}</small>}
                </div>
                <div className='mb-6'>
                    <label htmlFor="" className='text-sm'>Confirm Password</label>
                    <input
                        type="password"
                        name="cpassword"
                        placeholder='Enter confirm password'
                        className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
                        onChange={handleChange}
                        value={values.cpassword}
                    />
                    {errors.cpassword && <small>{errors.cpassword}</small>}
                </div>
                <div className='mb-6'>
                    <label htmlFor="" className='text-sm'>Write Bio</label>
                    <textarea
                        type="text"
                        name="bio"
                        placeholder='write bio ...'
                        className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
                        onChange={handleChange}
                    ></textarea>
                    {errors.bio && <small>{errors.bio}</small>}
                </div>
                <div className="">
                    <button type='submit' className='py-1.5 px-5 text-white border bg-purple-500 hover:bg-purple-800 text-base hover:text-white rounded-md hover:font-semibold' >Save</button>
                    <Link to="/">
                        <button className='ml-2 py-1.5 px-5 bg-white border border-gray-500  hover:bg-gray-600 text-base text-black hover:text-white rounded-md hover:font-semibold' >Back</button></Link>
                </div>
            </form>
        </div>
    );
};

export default AddUser;

// it is also working

{/* <div className='rounded py-4 px-8 my-2 border w-[95%] md:w-[500px] mx-auto  hover:border-purple-300 hover:shadow-lg'>
    <h3 className='text-center text-2xl font-semibold'>Add User</h3>
    <hr className='my-6' />
    <Formik
        initialValues={initialValues}
        validationSchema={addUserValidation}
        onSubmit={(values) => {
            console.log(values)
        }}
    >
        <Form>
            <div className='mb-3'>
                <label htmlFor="" className='text-sm'>Name</label>
                <Field
                    type="text"
                    name="name"
                    placeholder='Enter your name'
                    className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
                />
                <small><ErrorMessage name="name" /></small>
            </div>
            <div className='mb-3'>
                <label htmlFor="" className='text-sm'>Email</label>
                <Field
                    type="email"
                    name="email"
                    placeholder='Enter your email'
                    className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
                />
                <ErrorMessage name="email" />
            </div>
            <div className='mb-3'>
                <label htmlFor="" className='text-sm'>Password</label>
                <Field
                    type="password"
                    name="password"
                    placeholder='Enter your password'
                    className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
                />
                <ErrorMessage name="password" />
            </div>
            <div className='mb-6'>
                <label htmlFor="" className='text-sm'>Confirm Password</label>
                <Field
                    type="password"
                    name="cpassword"
                    placeholder='Enter confirm password'
                    className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
                />
                <ErrorMessage name="cpassword" />
            </div>
            <div className='mb-6'>
                <label htmlFor="" className='text-sm'>Write Bio</label>
                <Field
                    type="text"
                    name="bio"
                    placeholder='write bio ...'
                    className='input-control hover:border-purple-500  focus:border-purple-500 focus:border-2'
                    as="textarea"
                />
                <ErrorMessage name="bio" />
            </div>
            <div className="">
                <button type='submit' className='py-1.5 px-5 text-white border bg-purple-500 hover:bg-purple-800 text-base hover:text-white rounded-md hover:font-semibold' >Save</button>
                <Link to="/">
                    <button className='ml-2 py-1.5 px-5 bg-white border border-gray-500  hover:bg-gray-600 text-base text-black hover:text-white rounded-md hover:font-semibold' >Back</button></Link>
            </div>
        </Form>
    </Formik>

</div > */}