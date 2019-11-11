import { DialogHandler, NotificationHandler } from 'common';
import { DialogLoader } from 'common/Components/Dialog/DialogLoader';
import { AuthStore, authStoreSelector } from 'containers/Auth/AuthStore';
import { SignInForm } from 'containers/Auth/SignIn/SignInForm';
import { useApi } from 'hooks';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { compose } from "recompose";
import { StAuthContainer } from "containers/Auth/styled";

interface SignInContainerViewProps {
    authStore: AuthStore
    history: any
}

function SignInContainerView({ authStore, history }: SignInContainerViewProps) {

    const { loading, error, doPost } = useApi();

    const onSubmit = payload => {
        doPost({
            url: "/auth/signin",
            config: {
                payload,
                onSuccess: (data) => {
                    authStore.setAuthData(data);
                    history.push('/home');
                },
                onError: ({ message }) => NotificationHandler.error({ message })
            }
        });
    };

    return (
        <StAuthContainer>
            {loading && <DialogLoader />}
            <SignInForm onSubmit={onSubmit} history={history} />
        </StAuthContainer>
    )
}


const enhance = compose(
    inject(authStoreSelector),
    observer,
);

export const SignInContainer = enhance(SignInContainerView as any);
