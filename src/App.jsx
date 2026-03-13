import Profile from "./components/Profile"; 
import Login from "./components/login";     
import { useRouter } from "./context/useRouter"; 
import { useUserStore } from "./store/useUserStore"; 

function App() {
  const { path, push } = useRouter();
  
  const userZustand = useUserStore((state) => state.user);
  const setUserZustand = useUserStore((state) => state.setUser);
  const logoutZustand = useUserStore((state) => state.logout);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Entrega: Hooks y Estado Global</h1>
      
      <nav style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <button onClick={() => push("/")}>Ver Contexto (Nativo)</button>
        <button onClick={() => push("/zustand")}>Ver Zustand (Librería)</button>
      </nav>

      <hr />

      <main>
        {path === "/" && (
          <section>
            <h3>Evidencia: useRouter + useContext</h3>
            <div style={{ background: "#f9f9f9", padding: "10px", borderRadius: "8px" }}>
              <Profile /> 
              <Login />   
            </div>
          </section>
        )}

        {path === "/zustand" && (
          <section style={{ border: "2px solid #4A90E2", padding: "15px", borderRadius: "8px" }}>
            <h3>Evidencia: Zustand Store</h3>
            <p>Usuario en Store: <strong>{userZustand || "Sesión cerrada"}</strong></p>
            <button onClick={() => setUserZustand("Christian (Zustand Mode)")}>
              Cambiar en Zustand
            </button>
            <button onClick={logoutZustand} style={{ marginLeft: "10px" }}>
              Cerrar Sesión
            </button>
          </section>
        )}

        {path !== "/" && path !== "/zustand" && (
          <h2>404 - Ruta no encontrada</h2>
        )}
      </main>
    </div>
  );
}

export default App;