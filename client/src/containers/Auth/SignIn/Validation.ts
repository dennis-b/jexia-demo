import * as Yup from 'yup';

export const ValidationSchema = () => {
    return Yup.object().shape({
        password: Yup
            .string()
            .min(3, '3 characters minimum')
            .required('Password is Required'),

        email: Yup
            .string()
            .email('Please Insert Valid Email')
            .required('Email Required'),

    })
}
