import React from 'react';
import {useFormContext} from "react-hook-form";
import Label from "../Atoms/Label";
import Input from "../Atoms/Input";
import ErrorMessage from "../Atoms/ErrorMessage";

function NumberInput({label, name, fieldRef}){
    const {errors} = useFormContext();
    return(
        <div>
            <Label name={name}>{label}</Label>
            <Input name={name} fieldRef={fieldRef} type="number"/>
            {errors[name] && <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>}
        </div>
    )
}

export default NumberInput;