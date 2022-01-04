import React from "react";

interface CheckboxProps {
  isChecked: boolean;
  handleChangeBox: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className: string;
  href: string;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <div>
      <label htmlFor={props.label}>
        <a href={props.href}>{props.label}</a>
      </label>
      <input
        type="checkbox"
        id={props.label}
        checked={props.isChecked}
        onChange={props.handleChangeBox}
      />
    </div>
  );
};
export default Checkbox;
