import React, { FC } from 'react';
import './Button.css'

interface ButtonProps {
  title: string
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  classes?: string
  imgPath?: string
}

const Button: FC<ButtonProps> = ({ title, onClick, classes = '', type = 'button', imgPath }) => {
  return (
    <div className="otherButton">
      <button type={type} className={classes} onClick={onClick}>
        {imgPath && <img className="icon" src={imgPath} alt={title} />}
        {title}
      </button>
    </div>
  );
};

export default Button;