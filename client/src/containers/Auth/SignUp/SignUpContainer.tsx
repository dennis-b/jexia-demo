import { DialogHandler, NotificationHandler } from 'common';
import { DialogLoader } from 'common/Components/Dialog/DialogLoader';
import { AuthStore, authStoreSelector } from 'containers/Auth/AuthStore';
import { SignUpForm } from 'containers/Auth/SignUp/SignUpForm';
import { useApi } from 'hooks';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { compose } from "recompose";
import { StAuthContainer } from "containers/Auth/styled";


interface SignUpContainerViewProps {
    authStore: AuthStore
    history: any
}

function SignUpContainerView({ authStore, history }: SignUpContainerViewProps) {

    const { loading, error, doPost } = useApi();

    const onSubmit = values => {
        doPost({
            url: "/auth/signup",
            config: {
                payload: values,
                onSuccess: (data) => {
                    authStore.setAuthData(data);
                    history.push('/login');
                },
                onError: ({ message }) => NotificationHandler.error({ message })
            }
        });
    };

    return (
        <StAuthContainer>
            {loading && <DialogLoader />}
            <SignUpForm onSubmit={onSubmit} history={history}/>
        </StAuthContainer>
    )
}


const enhance = compose(
    inject(authStoreSelector),
    observer,
);

export const SignUpContainer = enhance(SignUpContainerView as any);
