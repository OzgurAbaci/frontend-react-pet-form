import React, {useState} from 'react';
import RadioSelect from "./RadioSelect";
import Input from "../Atoms/Input";
import {useFormContext} from "react-hook-form";
import ErrorMessage from "../Atoms/ErrorMessage";

function SelectOrOther({name, options, fieldRef, otherString = 'Other'}) {
    const {errors} = useFormContext();
    const extendedOptions = options.concat(otherString);
    const [chosen, setChosen] = useState('')
    return (
        <>
            <RadioSelect
                name={name}
                options={extendedOptions}
                fieldRef={fieldRef}
                onChange={setChosen}
            />
            {(chosen === otherString) && <div><Input name={name} fieldRef={fieldRef}/></div>}
            {errors[name] && <ErrorMessage>{errors[name].message || 'Error'}</ErrorMessage>}

        </>


)
}

export default SelectOrOther