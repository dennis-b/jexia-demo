import React, { useState } from 'react';
import { StBox, StInput, StInputLabel } from "containers/Todo/styled";


export function TodoAdd({ onAdd }) {

    const [value, setValue] = useState('');

    const updateValue = (e) => setValue(e.target.value);
    const handleAdd = () => {
        onAdd(value);
        setValue('');
    };

    return (
        <StBox>
            <StInput
                onChange={updateValue}
                required
                type="text"
                value={value}
                className="todo-input"
                placeholder="What needs to be done?"
            />
            <StInputLabel onClick={handleAdd}>Add</StInputLabel>
        </StBox>
    )
}


