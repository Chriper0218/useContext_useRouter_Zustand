import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);

  return (
    <button onClick={() => setUser("Nuevo Usuario")}>
      Cambiar usuario
    </button>
  );
}

export default Login;