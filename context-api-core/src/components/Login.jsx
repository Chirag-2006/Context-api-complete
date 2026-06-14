import { useContext, useState } from "react";
import userContext from "../context/UserContext";
// import UserContextProvider from "../context/UserContextProvider";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   useContext use

  const { setUser } = useContext(userContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({
      username,
      password,
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      <br />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="pasword"
      />
      <br />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;
