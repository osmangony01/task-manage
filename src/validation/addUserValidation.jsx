import * as Yup from 'yup';

const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

export const addUserValidation = Yup.object({
    name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Name is Required!'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required!'),
    password: Yup.string()
        .min(5, "Must be 5 characters or more")
        .max(30, 'Must be 30 characters or less')
        .matches(passwordRegx, {message: "Password must have at least one lowercase letter, one uppercase letter, one digit, and one special character!"})
        .required('Password is Required'),
    cpassword: Yup.string()
        .oneOf([Yup.ref('password')], "Password does not match!")
        .required('Confirm password is Required'),
    bio: Yup.string()
        
})