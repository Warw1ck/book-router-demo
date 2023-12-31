import { useContext } from "react";
import AuthContext from "../context/AutContext";

export function LoginPage() {
  const {user, loginUser} = useContext(AuthContext)
  return (
    <>
      <h1>
        LOGIN
      </h1>
      <form onSubmit={loginUser}>
        <input
          name="username"
          id="username"
          className="input"
          type="text"
          placeholder="Type Username"
        />
        <div></div>
        <input
          name="password"
          id="password"
          className="input"

          type="password"
          placeholder="Type Password"
        />
        <div></div>
        <button action="submit" className="button-24" role="button">
          Login
        </button>
      </form>
    </>
  );
}
