import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import Button from "../common/components/button/Button";

type HeaderProps = {
  isLoggedIn: boolean;
  changeState?: (i: number) => void
};

const Header: React.FC<HeaderProps> = ({ isLoggedIn, changeState }: HeaderProps) => {
  const history = useHistory();

  const loggedInButtons = [
    {
      name: "Shop",
      onClick: () => {
        changeState && changeState(0)
        // history.push('/shop')
      },
      className: "loggedin-button",
      icon: "/icons/store.png",
    },
    {
      name: "Cart",
      onClick: () => {
        changeState && changeState(1)
        // history.push('/cart')
      },
      className: "loggedin-button",
      icon: "/icons/shopicon.png",
    },
    {
      name: "Tickets",
      onClick: () => history.push("/tickets"),
      className: "loggedin-button",
      icon: "/icons/ticket-icon2.png",
    },
    {
      name: "Profile",
      onClick: () => history.push("/profile"),
      className: "loggedin-button",
      icon: "/icons/userprofile.png",
    },
    {
      name: "Log out",
      onClick: () => {
        localStorage.removeItem('token')
        history.push("/login")
      },
      className: "loggedin-button",
      icon: "/icons/logout.png",
    },
  ];

  const loggedOutButtons = [
    {
      name: "Log in",
      onClick: () => history.push("/login"),
      className: "loggedout-button",
      icon: "/icons/loginicon.png",
    },
    {
      name: "Register",
      onClick: () => history.push("/register"),
      className: "loggedout-button",
      icon: "/icons/register-logo.png",
    },
  ];

  const buttons = isLoggedIn ? loggedInButtons : loggedOutButtons;

  return (
    <nav className="header">
      <div
        className="logo-container"
        onClick={() => history.push(isLoggedIn ? "/" : "/login")}
      >
        <img className="logo" src="/icons/foxticket-logo.png" alt="logo" />
      </div>
      <div className="links">
        <ul>
          {buttons.map((button, i) => (
            <li key={`Header-${i}`}>
              <Button
                title={button.name}
                onClick={button.onClick}
                classes={button.className}
                imgPath={button.icon}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
