import { useState } from "react";
import userContextProvider from "../context/userContextProvider";
import userContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   useContext use

  const { setUser } = userContextProvider(userContext);

  function handleSubmit(e) {
    e.prevantDefault();
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
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="pasword"
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;
