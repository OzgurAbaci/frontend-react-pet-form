import React from 'react';

function Input({type, name, fieldRef}){
    return(
        <input type={type} name={name} id={name} ref={fieldRef} />
    )
}

export default Input;