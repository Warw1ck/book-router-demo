import { Outlet, Link, NavLink } from "react-router-dom";


export function BookLayout() {
    return(
        <>
            <nav className="bookNav">
                <ul>
                    <li>
                        <NavLink to="/books/1">
                            Book1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/books/2'>
                            Book2
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/books/new'>
                            New Book
                        </NavLink>

                    </li>
                </ul>
            
            
            </nav>
        </>
    )
}