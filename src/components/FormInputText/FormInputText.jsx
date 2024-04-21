import React from "react";
import "./FormInputText.css"
const FormInputText = ({ placeholder, onChange, type, value, legend }) => {
  return (
    <fieldset>
      <legend>
        <p>{legend}</p>
      </legend>
      <div className="form">
        <input
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          value={value}
        />
      </div>
    </fieldset>
  );
};

export default FormInputText;
