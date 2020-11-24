import React from 'react';

function ErrorMessage({children}){
    return(
        <p style={{color: `red`}}>{children}</p>
    )
}

export default ErrorMessage;