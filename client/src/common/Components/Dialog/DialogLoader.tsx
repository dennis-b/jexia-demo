import { DialogLoaderMask } from 'common/Components/Dialog/styled';
import React from 'react';
import Loader from 'react-loader-spinner'

export function DialogLoader() {
    return (
        <DialogLoaderMask>
            <Loader type="Watch" color="#00BFFF" height="50" width="50" />
        </DialogLoaderMask>
    )

}
