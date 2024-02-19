import * as Yup from 'yup';

export const todoFormValidation = Yup.object({
    title: Yup.string()
        .max(255, 'Must be 255 characters or less')
        .required('Title is Required!'),
    description: Yup.string()
        .required('Description is Required!'),
})

