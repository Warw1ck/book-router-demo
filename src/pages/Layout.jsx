import { Outlet, Link } from "react-router-dom";


export function Layout(params) {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/books'>
                            Books
                        </Link>

                    </li>
                </ul>
            
            
            </nav>
        </>
    )
}