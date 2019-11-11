import React from 'react';
import { Todo } from './Todo';
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { todoStoreSelector } from "containers/Todo/TodoStore";


export function TodoListView({ todoStore: { todos }, onDelete, onUpdate }) {

    return (
        <>
            {todos.map((todo) =>
                <Todo
                    todo={todo}
                    key={todo.id}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />)
            }
        </>
    )
}

const enhance = compose(
    inject(todoStoreSelector),
    observer,
);

//@ts-ignore
export const TodoList = enhance(TodoListView) as any;
