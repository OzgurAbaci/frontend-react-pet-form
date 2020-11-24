import React from 'react';
import RadioButton from "../Atoms/RadioButton";
import {useFormContext} from "react-hook-form";
import ErrorMessage from "../Atoms/ErrorMessage";

function RadioSelect({name, options, fieldRef, onChange, showError = false}) {
    const {errors} = useFormContext();

    return (
        <>
            {options.map((option) => {
                return (
                    <RadioButton
                        name={name}
                        value={option}
                        fieldRef={fieldRef}
                        key={option}
                        onChange={()=>{onChange(option)}}
                    />
                )

            })}
            {(errors[name] && showError) && <ErrorMessage>{errors[name].message || 'Error'}</ErrorMessage>}
        </>
    )
}

export default RadioSelect;