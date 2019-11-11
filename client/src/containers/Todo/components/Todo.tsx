import { Checkbox, Fab, Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { inject } from 'mobx-react';
import React, { useState } from 'react';
import { compose } from "recompose";
import DeleteIcon from '@material-ui/icons/Delete';

import { todoStoreSelector } from "containers/Todo/TodoStore";
import { StActions, StBox, StInput } from "containers/Todo/styled";


export function TodoView({ todo, onDelete, onUpdate }) {
    const { value, completed } = todo;

    const [todoValue, setValue] = useState(value);
    const [done, setDone] = useState(completed);

    const updateValue = (e) => setValue(e.target.value);
    const handleChange = (event) => {
        setDone(event.target.checked);
        onUpdate({ todo, completed: event.target.checked })
    };
    const handleDelete = () => onDelete(todo);

    return (
        <StBox>
            <StInput
                done={done}
                onChange={updateValue}
                required
                type="text"
                value={todoValue}
                className="todo-input"
                placeholder="update todo"
            />
            <StActions>
                <Switch
                    checked={done}
                    color="primary"
                    onChange={handleChange}
                    value={'done'}
                    inputProps={{
                        'aria-label': 'primary checkbox',
                    }}
                />
                <Fab
                    color="secondary"
                    aria-label="delete"
                    size="small"
                    onClick={handleDelete}
                >
                    <DeleteIcon />
                </Fab>

                {/*<Fab color="primary" aria-label="delete" size="small">*/}
                {/*    <EditIcon />*/}
                {/*</Fab>*/}
            </StActions>
        </StBox>
    )
};

const enhance = compose(inject(todoStoreSelector));

export const Todo: any = enhance(TodoView as any)
