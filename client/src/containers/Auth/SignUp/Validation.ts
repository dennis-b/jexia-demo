import * as Yup from 'yup';

export const ValidationSchema = () => {
    return Yup.object().shape({
        name: Yup
            .string()
            .required('Name Is required'),

        password: Yup
            .string()
            .min(3, '3 characters minimum')
            .required('Password is Required'),

        email: Yup
            .string()
            .email('Please Insert Valid Email')
            .required('Email Required'),

        passwordConfirm: Yup
            .string()
            .min(3, '3 characters minimum')
            .equalTo(Yup.ref('password'), 'Passwords must match')
            .required('Passwords must match'),
    })
}
