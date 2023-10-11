import { Outlet, Link, NavLink } from "react-router-dom";


export function Layout(params) {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/books'>
                            Books
                        </NavLink>

                    </li>
                </ul>
            
            
            </nav>
        </>
    )
}