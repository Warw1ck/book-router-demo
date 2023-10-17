import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Layout({ isAuthenticated }) {
  const LoginLinks = [
    { path: "/", name: "Home" },
    { path: "/books", name: "Books" },
  ];
  const NotLoginLinks = [
    { path: "/login", name: "Login" },
    { path: "/", name: "Register" },
  ];

  const [links, setLinks] = useState(
    isAuthenticated ? LoginLinks : NotLoginLinks
  );

  return (
    <>
      <nav>
        <ul>
        {links.map((linkInfo) => (
          <li key={linkInfo.path}>
            <NavLink to={linkInfo.path}>{linkInfo.name}</NavLink>
          </li>
        ))}
          
        </ul>
      </nav>
    </>
  );
}
