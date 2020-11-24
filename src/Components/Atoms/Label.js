import React from 'react';

function Label({name, children, type}){
    return(
        <label htmlFor={name}>{children} {(!type || (type!="radio")) && ":"} </label>
    );
}

export default Label;