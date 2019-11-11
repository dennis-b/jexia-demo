import { AppNotification } from 'common';

export class NotificationHandler {
    static notification: AppNotification;

    static setNotification(dialog) {
        this.notification = dialog;
    }

    static getNotification() {
        return this.notification;
    }

    static info({ message = '' }) {
        return this.notification.info({ message });
    }

    static error({ message = '' }) {
        return this.notification.error({ message });
    }
}
