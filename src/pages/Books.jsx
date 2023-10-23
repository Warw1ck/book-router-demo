import { useParams } from "react-router-dom"
import { BookLayout } from "./BookLayout"
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AutContext";

export function Books() {
    const { authToken } = useContext(AuthContext);
    const [books, setBooks] = useState([]);

    const GetAllBooks = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/books/", {
                method: "GET", // Use GET method to fetch books
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${authToken}`,
                }
            });

            if (response.status === 200) {
                const data = await response.json();
                return data;
            } else {
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
    }, [authToken]);

    return (
        <>
            <h1>BookList</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title}</li> // Display book title (or other property)
                ))}
            </ul>
            <BookLayout />
        </>
    )
}