import { Button } from '@material-ui/core';
import { DialogHandler, SpRow, SpText } from 'common';
import { SignUpContainer } from 'containers/Auth';
import { AuthModalContainer, AuthRedirectLink } from 'containers/Auth/styled';
import { Formik } from 'formik';
import React from 'react';
import { Form, Input } from 'react-formik-ui'
import { ValidationSchema } from './/Validation';

export function SignInForm({ onSubmit, history }) {

    const showRegister = () =>  history.push('/register')

    return (
        <AuthModalContainer>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={ValidationSchema}
                onSubmit={onSubmit}
                render={({ submitForm }) => (
                    <Form mode='themed' style={{ width: '20rem' }}>

                        <SpRow mb={1}>
                            <Input name='email' label='Email' required />
                        </SpRow>

                        <SpRow mb={1}>
                            <Input name='password' label='Password' type='password' required />
                        </SpRow>

                        <SpRow>
                            <Button
                                onClick={submitForm}
                                variant="contained"
                                color="secondary"
                            >
                                SIGN IN
                            </Button>
                        </SpRow>

                        <SpRow mt={1}>
                            <SpText size={0.6} mr={0.4}>Donn't have an account? </SpText>
                            <AuthRedirectLink size={0.6} onClick={showRegister}>Register</AuthRedirectLink>
                        </SpRow>


                    </Form>
                )}
            />
        </AuthModalContainer>
    )
}
