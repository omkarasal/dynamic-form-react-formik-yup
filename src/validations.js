import * as yup from 'yup';

const validations = yup.object().shape({
    name: yup.string()
        .min(2, 'Name is too short')
        .max(20, 'Name is too long')
        .required('Name is required'),
    email: yup.string()
        .email('Invalid email')
        .required('Email is required'),
    occupation: yup.string()
        .test('county', 'Select a value', value => value !== 'Please Select')
        .required('Occupation is required'),
    message: yup.string()
        .required('Message is required'),
    terms: yup.boolean()
        .test('terms', 'you must agree to terms', value => value !== false)
        .required('required')
})

export default validations;