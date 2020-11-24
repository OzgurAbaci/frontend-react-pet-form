import React from 'react';

function Input({type, name, fieldRef, value}) {
    return (
        <input
            type={type}
            name={name}
            id={name}
            ref={fieldRef}
            value={value}
        />
    )
}

export default Input;