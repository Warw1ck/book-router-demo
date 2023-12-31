import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
const AuthContext = createContext();

export default AuthContext;

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [authToken, setToken] = useState(
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [user, setUser] = useState(
    localStorage.getItem("authToken")
      ? jwt_decode(localStorage.getItem("authToken"))
      : null
  );

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      setUser(jwt_decode(data.access));
      setToken(data);
      localStorage.setItem("authToken", JSON.stringify(data));
      // Display a success message on the UI
    } else {
      // Display an error message on the UI
      alert("Login failed. Please check your credentials.");
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
  };



  const updateToken = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refresh: String(authToken?.refresh),
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      setUser(jwt_decode(data.access));
      setToken(data);
      localStorage.setItem("authToken", JSON.stringify(data));
    } else {
      // Handle token refresh error, e.g., by logging the user out or showing an error message.
    }
    if (loading) {
      setLoading(false);
    }
    console.log(`Print Data from UpdateToken:`)
    console.log(data)
    return data

  };

  useState(() => {
    if (loading) {
      updateToken();
    }
  }, [authToken, loading]);


  const context = {
    user: user,
    authToken: authToken,

    loginUser: loginUser,
    logOut: logout,
    updateToken: updateToken,

  };


  return (
    <AuthContext.Provider value={context}>
      {loading ? <div className="lds-dual-ring"></div> : children}
    </AuthContext.Provider>
  );
}