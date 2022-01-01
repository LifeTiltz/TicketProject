import React, { FC } from 'react';

interface ButtonProps {
  type: string
  title: string
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ type, title, onClick }) => {
  return (
    <button className={type} onClick={onClick}>{title}</button>
  );
};

export default Button;