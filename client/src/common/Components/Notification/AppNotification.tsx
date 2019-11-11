import { IconButton, Portal, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { SpText } from 'common';
import React, { Component } from 'react';
import AppTheme from 'theme';

enum NotificationType {
    ERROR = 'error',
    INFO = 'info'
}

interface AppNotificationProps {
}

interface AppNotificationState {
    open: boolean,
    message: string,
    type: NotificationType,
}


export class AppNotification extends Component<AppNotificationProps, AppNotificationState> {

    state = {
        open: false,
        message: '',
        type: NotificationType.INFO,
    };

    info = ({ message }) => this.setState({ open: true, message, type: NotificationType.INFO });

    error = ({ message }) => this.setState({ open: true, message, type: NotificationType.ERROR });

    hide = () => this.setState({ open: false, message: '', type: null });

    handleClose = () => this.setState({ open: false, message: '', type: null });

    render() {
        const { open, message, type } = this.state;
        const textColor = NotificationType.INFO == type ? AppTheme.text.gray : AppTheme.text.pink;
        return (
            <Portal>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
                    open={open}
                    autoHideDuration={5000}
                    onClose={this.handleClose}
                    ContentProps={{ 'aria-describedby': 'message-id', }}
                    message={<SpText textcolor={textColor}>{message}</SpText>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </Portal>
        );
    }
}
