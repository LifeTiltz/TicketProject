import React from "react";
import './Errors.css'

interface ErrorProps {
  errorMsg: string;
}

export const Error: React.FC<ErrorProps> = ({ errorMsg }) => {
  return (
    <div>
      {
        <p className={"errorMsg" + errorMsg.length ? " hasError" : ""}>
          {errorMsg}
        </p>
      }
    </div>
  );
};

export default Error;
