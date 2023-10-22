import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
const AuthContext = createContext()

export default AuthContext


export function AuthProvider({children}) {
    //Qwer54321
    const [authToken, changeToken] = useState(localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')):null)
    const [user, changeUser] = useState(localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')):null)
    const loginUser = async (e)=>{
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    "username": e.target.username.value,
                    "password": e.target.password.value
                }   
            )
        })
        const data = await response.json()
        console.log(data)
        console.log(response.status)
        if (response.status === 200) {
            changeUser(jwt_decode(data.access))
            changeToken(data)
            localStorage.setItem('authToken', JSON.stringify(data))
            
        }else{
            alert('Response is not Ok')
        }
    }
    const logout = ()=>{
        changeToken(null)
        changeUser(null)
        localStorage.removeItem('authToken')
    }
    const context = {
        'user': user,
        'loginUser': loginUser,
        'authToken': authToken,
        'logOut': logout
    }
    
    return(
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
    
}