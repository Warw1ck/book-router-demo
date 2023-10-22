import { useContext } from "react"
import AuthContext from "../context/AutContext"

export function Home() {
    const {user} = useContext(AuthContext)
    return(
        <>
            <h1>Hello {user.username}</h1>
        </>
    )
    
}