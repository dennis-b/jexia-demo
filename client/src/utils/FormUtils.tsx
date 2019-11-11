import * as Yup from 'yup';

type FormValidTypes = {
    errors: any
    dirty: boolean
    validationFn?: () => boolean
}

const defaultValidationFn = () => true;

export const isFormValid = ({ errors = {}, dirty, validationFn = defaultValidationFn }: FormValidTypes) => {
    return Object.keys(errors).length === 0 && dirty && validationFn()
};


export const validateForm = getValidationSchema => values => {
    const validationSchema = getValidationSchema(values);
    try {
        validationSchema.validateSync(values, { abortEarly: false });
        return {}
    } catch (error) {
        return getErrorsFromValidationError(error)
    }
};

export function getErrorsFromValidationError(validationError) {
    const FIRST_ERROR = 0;
    return validationError.inner.reduce((errors, error) => {
        return {
            ...errors,
            [error.path]: error.errors[FIRST_ERROR],
        }
    }, {})
}


function equalTo(ref: any, msg: any) {
    return Yup.mixed().test({
        name: 'equalTo',
        exclusive: false,
        message: msg || '${path} must be the same as ${reference}',
        params: {
            reference: ref.path,
        },
        test: function (value: any) {
            return value === this.resolve(ref);
        },
    });
}

Yup.addMethod(Yup.string, 'equalTo', equalTo);
