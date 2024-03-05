import * as Yup from 'yup';

const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

export const registerValidation = Yup.object({
    name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Name is Required!'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required!'),
    password: Yup.string()
        .min(5, "Must be 5 characters or more")
        .max(30, 'Must be 30 characters or less')
        .matches(passwordRegx, { message: "Password must have at least one lowercase letter, one uppercase letter, one digit, and one special character!" })
        .required('Password is Required'),
    cpassword: Yup.string()
        .oneOf([Yup.ref('password')], "Password does not match!")
        .required('Confirm password is Required'),
})

export const loginValidation = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required!'),
    password: Yup.string()
        .min(5, "Must be 5 characters or more")
        .max(30, 'Must be 30 characters or less')
        .matches(passwordRegx, { message: "Password must have at least one lowercase letter, one uppercase letter, one digit, and one special character!" })
        .required('Password is Required'),
})


export const blogValidation = Yup.object({
    title: Yup.string()
        .required("Title is required!"),
    category: Yup.string()
        .required("Priority is required!"),
    description: Yup.string()
        .required("Description is required!"),
    image: Yup.mixed()
        .test('fileType', 'Unsupported file format', (value) => {
            if (!value) return true; // No file provided, skip validation
            return ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'].includes(value.type);
        })
        .test('fileSize', 'File too large', (value) => {
            if (!value) return true; // No file provided, skip validation
            return value.size <= 2097152; // 2MB in bytes
        })
        .required('Image is Required!')
})

export const commentValidation = Yup.object({
    comment: Yup.string()
        .max(255, 'Comment must be 255 characters or less')
        .required('Comment is required'),
})
