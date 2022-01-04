import React from "react";

interface DropDownProps {
    name: string;
    isActive: boolean
    children: any
}

const DropDown: React.FC<DropDownProps> = ({ name, isActive, children }) => {
    return <div className={name + (!isActive ? " hidden" : "")}>{children}</div>
}

export default DropDown


