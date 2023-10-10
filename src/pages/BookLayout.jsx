import { Outlet, Link } from "react-router-dom";


export function BookLayout() {
    return(
        <>
            <nav className="bookNav">
                <ul>
                    <li>
                        <Link to="/books/1">
                            Book1
                        </Link>
                    </li>
                    <li>
                        <Link to='/books/2'>
                            Book2
                        </Link>

                    </li>
                    <li>
                        <Link to='/books/new'>
                            New Book
                        </Link>

                    </li>
                </ul>
            
            
            </nav>
        </>
    )
}