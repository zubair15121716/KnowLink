import React from "react";

function InputField({ type, name, id, placeholder,handlechange,require }){
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="input-field"
      onChange={handlechange}
      required={require}
    />
  );
};

export default InputField;