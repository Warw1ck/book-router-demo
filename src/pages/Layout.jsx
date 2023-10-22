import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../context/AutContext";

export function Layout() {
  const {user, logOut} = useContext(AuthContext)
  const LoginLinks = [
    { path: "/", name: "Home" },
    { path: "/books", name: "Books" }
  ];
  const NotLoginLinks = [
    { path: "/login", name: "Login" },
    { path: "/", name: "Register" },
  ];

  const links = user ? LoginLinks : NotLoginLinks;

  return (
    <>
      <nav>
        <ul>
        {links.map((linkInfo) => (
          <li key={linkInfo.path}>
            <NavLink to={linkInfo.path}>{linkInfo.name}</NavLink>
          </li>
        ))}
        {
          user && <li><a onClick={logOut}>LogOut</a></li>
        }
          
        </ul>
      </nav>
    </>
  );
}
