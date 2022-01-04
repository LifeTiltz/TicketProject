import React from "react";

interface InputProps {
  inputValue: string;
  name: string;
  onChange: (name: string, value: string) => void;
  type: string;
}

export const Input: React.FC<InputProps> = ({
  inputValue,
  onChange,
  type,
  name,
}) => {
  return (
    <div className="form-inputs">
      <div className="form-input">
        <label htmlFor={name}></label>
        <input
          onChange={(e) => onChange(name, e.target.value)}
          placeholder={name}
          id={name}
          className="input-field"
          name={name}
          value={inputValue}
          type={type}
        ></input>
      </div>
    </div>
  );
};

export default Input;
