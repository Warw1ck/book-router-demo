import { useParams } from "react-router-dom"
import { BookLayout } from "./BookLayout"

export function Books() {
    const {id} = useParams()
    return(
        <>
            <h1>
                BookList
            </h1>
            <BookLayout/>
        </>
        
    )

    
}