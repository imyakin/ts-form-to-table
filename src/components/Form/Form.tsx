import React, { ChangeEvent } from "react";
import FormInput from "./FormInput";

interface FormProps {
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmitHandler: (event: any) => void;
}

const Form: React.FC<FormProps> = ({onChangeHandler, onSubmitHandler}) => {
    return (
    <form onSubmit={onSubmitHandler} style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <FormInput onChange={onChangeHandler} text="First name: " name="firstname" type="text"/>
        <FormInput onChange={onChangeHandler} text="Last name: " name="lastname" type="text"/>
        <FormInput onChange={onChangeHandler} text="Email: " name="email" type="email"/>
        <FormInput onChange={onChangeHandler} text="Date of birth" name="dateofbirth" type="date"/>
        <FormInput onChange={onChangeHandler} text="Phone: " name="phone" type="tel"/>
        <div style={{display: 'flex', width: "20%", justifyContent: "space-between"}}>
            <button className="btn btn-primary" type={'submit'} style={{width: '45%'}}>Submit</button>
            <button className="btn btn-secondary" type={'reset'} style={{width: '45%'}}>Reset</button>
        </div>
    </form>
    )
}

export default Form;