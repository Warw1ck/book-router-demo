import { useParams } from "react-router-dom"
import { BookLayout } from "./BookLayout"
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AutContext";

export function Books() {
    const { updateToken } = useContext(AuthContext);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const GetAllBooks = async () => {
        const authToken = await updateToken()
        try {
            const response = await fetch("http://127.0.0.1:8000/api/books/", {
                method: "GET", // Use GET method to fetch books
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${authToken?.access}`,
                }
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log(data)
                setLoading(false)
                return data;
            } else {
                setLoading(false)
                console.log('Failed to fetch books');
                return [];
            }
        } catch (error) {
            console.error('Error while fetching books:', error);
            return [];
        }
    }

    useEffect(() => {
        GetAllBooks()
            .then(data => setBooks(data))
            .catch(error => console.error('Error in GetAllBooks:', error));
    }, []);

    return (
        loading ? <div className="lds-dual-ring"></div> :
        <>
            <h1>BookList</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.Title} - {book.Author}</li> // Display book title (or other property)
                ))}
            </ul>
            <BookLayout />
        </>
    )
}