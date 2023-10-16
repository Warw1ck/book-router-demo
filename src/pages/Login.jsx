export function LoginPage() {
  return (
    <>
      <form>
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
