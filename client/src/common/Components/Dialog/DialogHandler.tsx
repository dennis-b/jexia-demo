import { AppDialog, AppDialogShow } from 'common';

export class DialogHandler {
    static dialog: AppDialog;

    static setDialog(dialog) {
        this.dialog = dialog;
    }

    static getDilog() {
        return this.dialog;
    }

    static show({ content, title = '', data }: AppDialogShow) {
        return this.dialog.show({ content, title, data });
    }

    static hide() {
        return this.dialog.hide();
    }
}
