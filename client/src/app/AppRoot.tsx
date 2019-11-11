import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider, } from '@material-ui/styles';
import { AppDialog, AppNotification, DialogHandler, NotificationHandler } from 'common';
import { Provider } from 'mobx-react';
import React from 'react';
import { HashRouter } from 'react-router-dom'
import { ThemeProvider as StyledProvider } from 'styled-components';

import GlobalTheme from 'theme';
import { AppRoutes } from './AppRoutes';
import { ContentRoot, GlobalStyle } from './styled';

const theme = createMuiTheme({ typography: { useNextVariants: true } });

export const App = ({ history, stores }) => (
    <HashRouter>
        <Provider {...stores}>
            <StyledProvider theme={{ global: GlobalTheme }}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <ContentRoot>
                        <AppRoutes />
                        <AppDialog ref={(ref) => DialogHandler.setDialog(ref)} />
                        <AppNotification ref={(ref) => NotificationHandler.setNotification(ref)} />
                    </ContentRoot>
                </ThemeProvider>
            </StyledProvider>
        </Provider>
    </HashRouter>
);
