import { AuthStore } from 'containers/Auth/AuthStore';
import { TodoStore } from 'containers/Todo/TodoStore';
import { action, observable } from "mobx";

export const appStoreSelector = ({ appStore }) => ({ appStore });

export class AppStore {

    @observable name: string = '';

    todoStore: TodoStore;
    authStore: AuthStore;

    constructor() {
        this.todoStore = new TodoStore(this);
        this.authStore = new AuthStore(this);
    }

    @action
    setName = (name: any) => this.name = name;


}
