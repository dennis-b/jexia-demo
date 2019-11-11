import Api, { AsyncRequest } from 'api';
import { BaseStore } from 'common';
import { action, observable } from 'mobx';
import { AppStore } from '../../app/AppStore';


export interface WithTodoStore {
    todoStore: TodoStore
}

export const todoStoreSelector = ({ appStore }) => ({ todoStore: appStore.todoStore });

export class TodoStore extends BaseStore {

    @observable todos = [];

    constructor(rootStore: AppStore) {
        super(rootStore);
    }

    @action
    setTodos(todos) {
        this.todos = todos;
    }

    @action
    addTodo(todo) {
        this.todos = [todo, ...this.todos];
    }

    @action
    removeTodo({ id }) {
        this.todos = this.todos.filter(todo => todo.id != id)
    }

}
