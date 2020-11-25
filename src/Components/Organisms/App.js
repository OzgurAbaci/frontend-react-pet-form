import './App.css';
import React from 'react';
import {useForm, FormProvider} from "react-hook-form";
import TextInput from "../Molecules/TextInput";
import NumberInput from "../Molecules/NumberInput";
import SelectOrOther from "../Molecules/SelectOrOther";
import ErrorMessage from "../Atoms/ErrorMessage";

function App() {
    const methods = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <FormProvider {...methods}>
            <form id='myform' onSubmit={methods.handleSubmit(onSubmit)}>
                <TextInput
                    label="Voornaam"
                    name="first-name"
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: 'Naam mag niet leeg zijn'
                        }
                    })}
                />
                <TextInput
                    label="Achternaam"
                    name="last-name"
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "Achternaam mag niet leeg zijn"
                        }
                    })}
                />
                <NumberInput
                    label="Leeftijd"
                    name="age"
                    fieldRef={methods.register({
                        min: {
                            value: 18,
                            message: "Leeftijd moet minstens 18 zijn"
                        },
                        required: {
                            value: true,
                            message: "Leeftijd moet ingevuld zijn"
                        }
                    })}
                />
                <TextInput
                    label="Postcode"
                    name="postal-code"
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "Postcode is een verplicht veld"
                        },
                        pattern: {
                            value: /[0-9]{4} ?[a-zA-Z]{2}/,
                            message: "Voer een geldige postcode in"
                        }
                    })}
                />
                <NumberInput
                    label="Huisnummer zonder toevoeging"
                    name="house-number"
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "Voer een huisnummer in"
                        }
                    })}
                />
                <SelectOrOther
                    name='fav-animal'
                    options={['Kat', 'Hond', 'Hamster', 'Muis']}
                    otherString='Anders'
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "Kies een van de opties of vul het vakje voor anders in"
                        }
                    })}
                />
                <textarea
                    form='myform'
                    name='remarks'
                    placeholder='Opmerkingen'
                    cols='50'
                    rows='7'
                    ref={methods.register()}
                />
                <input type='hidden' name='banaan' value='appel' />
                <div>
                    <input
                        type='checkbox'
                        name='terms'
                        id='terms-and-conditions'
                        ref={methods.register({
                            required: {
                                value: true,
                                message: "Je dient de voorwaarden te accepteren"
                            }
                        })}
                    />
                    <label htmlFor='terms-and-conditions'>Ik accepteer de voorwaarden.</label>
                    {methods.errors['terms'] &&
                    <div><ErrorMessage>{methods.errors['terms'].message}</ErrorMessage></div>}
                </div>
                <div>
                    <button type="submit">Verstuur</button>
                </div>

            </form>
        </FormProvider>
    )
}

export default App;
