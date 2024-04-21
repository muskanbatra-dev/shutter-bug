import React from "react";
import "./FormInputText.css"
const FormInputText = ({ placeholder, onChange, type, value ,label}) => {
  return (
   
      <div className="form">
        <label htmlFor="">{label}</label>
        <input
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          value={value}
        />
      </div>
   
  );
};

export default FormInputText;
