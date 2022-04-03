import React from "react";

interface FormInputProps {
    text: string;
    type: string;
    name: string;
    onChange: (event: any)=>void;
}

const FormInput: React.FC<FormInputProps> = ({text, type, name, onChange}) => {
    return (
        <p style={{display: "flex", width: "80%"}}>
            <span className="input-group-text" style={{width: "15%"}}>{text}</span>
            <input
                style={{width: "85%"}}
                className="form-control"
                type={`${type}`}
                name={`${name}`}
                required
                onChange={onChange}
            />
        </p>
    )
}

export default FormInput;