import CircularProgress from '@material-ui/core/CircularProgress';
import { todoStoreSelector, WithTodoStore } from 'containers/Todo/TodoStore';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { compose } from 'recompose';
import get from 'lodash/get';
import { TodoList } from "./components/TodoList";
import { StTodoContainer, StLoaderContainer, StTitle, StTodoContent } from "./styled";
import { useApi } from "hooks/useApi";
import { TodoAdd } from "containers/Todo/components/TodoAdd";
import { NotificationHandler } from "common/Components";


interface TodoContainerProps extends WithTodoStore {
}

function TodoContainerView({ todoStore }: TodoContainerProps) {

    const { loading, error, data } = useApi({
        url: '/todos',
        config: {
            method: 'get',
            onSuccess: (data) => todoStore.setTodos(get(data, 'todos', []))
        }
    });

    const { doPost, doPut } = useApi();

    const onAdd = (value) => {
        doPost({
            url: "/todos",
            config: {
                payload: { value },
                onSuccess: ({ todo }) => todoStore.addTodo(todo),
                onError: ({ message }) => NotificationHandler.error({ message })
            }
        });
    };

    const onDelete = ({ id }) => {
        doPost({
            url: "/todos/delete",
            config: {
                payload: { id },
                onSuccess: ({ todo }) => todoStore.removeTodo(todo),
                onError: ({ message }) => NotificationHandler.error({ message })
            }
        });
    };

    const onUpdate = ({ todo: { id }, completed }) => {
        doPut({
            url: "/todos",
            config: {
                payload: { id, completed },
                onError: ({ message }) => NotificationHandler.error({ message })
            }
        });
    };


    if (loading) {
        return (
            <StLoaderContainer justify='center' container>
                <CircularProgress />
            </StLoaderContainer>
        )
    }
    return (
        <StTodoContainer>
            <StTitle>todos</StTitle>

            <StTodoContent>
                <TodoAdd onAdd={onAdd} />
                <TodoList onDelete={onDelete} onUpdate={onUpdate} />
            </StTodoContent>

        </StTodoContainer>

    )
}

const enhance = compose(
    inject(todoStoreSelector),
    observer,
);

//@ts-ignore
export const TodoContainer = enhance(TodoContainerView);
