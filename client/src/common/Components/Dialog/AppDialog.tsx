import { DialogTitle } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import { ModalCloseButton, ModalCloseIcon, ModalContainer } from 'common/Components/Dialog/styled';

import React, { Component } from 'react';
import Media from 'react-media';

interface AppDialogProps {
    width?: string
}

interface AppDialogState {
    open: boolean,
    title: string,
    data: any,
    content: any,
}


export interface AppDialogShow {
    content: any,
    title: string,
    data?: any
}

const Empty = () => <div></div>;

export class AppDialog extends Component<AppDialogProps, AppDialogState> {

    state = {
        open: false,
        title: '',
        data: {},
        content: Empty,
    };

    show = ({ content, title, data }: AppDialogShow) => {
        this.setState({ open: true, content, title, data })
    };

    hide = () => this.setState({ open: false, content: Empty, title: '', data: {} });

    handleClose = () => this.setState({ open: false, content: Empty, title: '', data: {} });

    render() {
        const { open, content, title, data } = this.state;
        const Content: any = content;

        return (
            <Media query="(max-width: 599px)">
                {matches =>
                    <>
                        <Dialog
                            fullScreen={matches}
                            open={open}
                            onClose={this.handleClose}
                            aria-labelledby="title"
                            aria-describedby="description"
                        >
                            <ModalCloseButton
                                color="primary"
                                aria-label="Add"
                                onClick={this.hide}
                            >
                                <ModalCloseIcon />
                            </ModalCloseButton>

                            <DialogTitle style={{ paddingBottom: 0 }}>{title}</DialogTitle>
                            <DialogContent>
                                <ModalContainer>
                                    {Content && <Content data={data} />}
                                </ModalContainer>
                            </DialogContent>


                        </Dialog>
                    </>
                }
            </Media>
        )
    }
}
