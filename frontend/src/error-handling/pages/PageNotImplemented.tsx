import React from 'react';
import GoToPage from '../components/GoToPage';
import '../css/errorMessage.css';

interface PageNotImplementedProps {
  isLoggedIn: boolean;
}

const PageNotImplemented: React.FC<PageNotImplementedProps> = ({isLoggedIn}) => {
  return (
    <div className="errorContainer">
      <div className="errorImage"></div>
      <h1 className="error">Page Not Found</h1>
      <GoToPage link={isLoggedIn ? "/home": "/login"} text={isLoggedIn ? "Go Home": "Not Logged In?"} />
    </div>
  );
}

export default PageNotImplemented;
