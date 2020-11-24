import React from 'react';
import Label from "./Label";

function RadioButton({name, value, fieldRef, onChange}) {
    return (
        <div>
            <input
                type="radio"
                name={name}
                value={value}
                id={value}
                ref={fieldRef}
                onChange={onChange}
            />
            <Label type="radio" name={value}>{value}</Label>
        </div>
    )
}

export default RadioButton;