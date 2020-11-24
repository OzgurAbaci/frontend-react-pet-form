import React from 'react';
import {useFormContext} from 'react-hook-form';
import Label from "../Atoms/Label";
import Input from "../Atoms/Input";
import ErrorMessage from "../Atoms/ErrorMessage";

function TextInput({label, name, fieldRef}) {
    const {errors} = useFormContext();
    return (
        <div>
            <Label name={name}>{label}</Label>
            <Input
                type="text"
                fieldRef={fieldRef}
                name={name}
            />
            {errors[name] && <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>}

        </div>
    );
}

export default TextInput;