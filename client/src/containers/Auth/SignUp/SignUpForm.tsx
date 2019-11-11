import { Button } from '@material-ui/core';
import { SpCol, SpRow, SpText } from 'common';
import { ValidationSchema } from 'containers/Auth/SignUp/Validation';
import { AuthModalContainer, AuthRedirectLink } from 'containers/Auth/styled';
import { Formik } from 'formik';
import React from 'react';
import { Form, Input } from 'react-formik-ui'

export function SignUpForm({ onSubmit, history }) {

    const showSignIn = () => history.push('/login');

    return (
        <AuthModalContainer>
            <Formik
                initialValues={{ name: '', email: '', password: '', passwordConfirm: '' }}
                validationSchema={ValidationSchema}
                onSubmit={onSubmit}
                render={({ submitForm }) => (
                    <Form mode='themed'>

                        <SpRow mb={1}>
                            <Input name='name' label='Name' required />
                        </SpRow>

                        <SpRow mb={1}>
                            <Input name='email' label='Email' required />
                        </SpRow>

                        <SpRow spacing={24} mb={1}>
                            <SpCol md={6}>
                                <Input name='password' label='Password' type='password' required />
                            </SpCol>
                            <SpCol md={6}>
                                <Input name='passwordConfirm' label='Confirm Password' type='password' required />
                            </SpCol>
                        </SpRow>

                        <SpRow>
                            <Button
                                onClick={submitForm}
                                variant="contained"
                                color="secondary"
                            >
                                CREATE ACCOUNT
                            </Button>
                        </SpRow>

                        <SpRow mt={1}>
                            <SpText size={0.6} mr={0.4}>Already have an account? </SpText>
                            <AuthRedirectLink size={0.6} onClick={showSignIn}>Login</AuthRedirectLink>
                        </SpRow>

                    </Form>
                )}
            />
        </AuthModalContainer>
    )
}
