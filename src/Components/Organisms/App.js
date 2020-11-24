import './App.css';
import React from 'react';
import { useForm, FormProvider, useFormContext } from "react-hook-form";


function App() {
  const methods = useForm();
  const onsubmit = data => console.log(data);
  return (
      <FormProvider {methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <NestedInput />
        </form>
      </FormProvider>
  );
}

function NestedInput() {
  const {register} = useFormContext();
  return <input name="test" ref = {register} />
}
export default App;
