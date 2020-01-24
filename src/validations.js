import * as yup from 'yup';

const validations = yup.object().shape({
    name: yup.string()
        .min(1, 'Too short')
        .max(20, 'Too long')
        .required('Required'),
    email: yup.string()
        .email('Invalid email')
        .required('Required'),
    occupation: yup.string()
        .test('county', 'cannot be empty', value => value !== 'Please Select')
        .required('required'),
    message: yup.string()
        .required('required'),
    terms: yup.string()
        .test('terms', 'you must agree to terms', value => value !== false)
        .required('required')
})

export default validations;