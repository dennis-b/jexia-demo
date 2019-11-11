import { inject } from 'mobx-react';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SignInContainer, SignUpContainer } from "containers/Auth";
import { TodoContainer } from "containers/Todo/TodoContainer";

export const Routes = (props) => {
    return (
        <Switch>
            <Redirect exact from='/' to='login' />
            <Route path="/home" component={TodoContainer} />
            <Route path="/login" component={SignInContainer} />
            <Route path="/register" component={SignUpContainer} />
            <Redirect to="/404" />
        </Switch>
    );
};

export const AppRoutes = inject('routing')(Routes);
