import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Book } from "./Book"

export function NewBook() {
    const [searchParam, setSearchParams ] = useSearchParams({n:1})
    const number = searchParam.get('n')
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page refresh
        navigate(`/books/${number}`);
      };

    return(
    <>
        <h1>NewBook</h1>
        <form method="submit" onSubmit={handleSubmit}>
            <div class="input-group">
            <label class="label">Your Number</label>
            <input autocomplete="off" name="Email" id="Email" className="input" type="number" value={number} onChange={(e) => {setSearchParams({n:e.target.value})}}/>
            <div></div></div>
            
            <button action='submit' class="button-24" role="button">Get Book</button>

        </form>
    </>)
    
}