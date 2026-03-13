import { useUserStore } from "../store/useUserStore";

function ProfileZustand() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  return (
    <div style={{ border: '1px solid #4A90E2', padding: '10px', marginTop: '10px' }}>
      <h2>Usuario en Zustand: {user}</h2>
      <button onClick={() => setUser("Christian (Zustand)")}>
        Cambiar nombre en Zustand
      </button>
    </div>
  );
}

export default ProfileZustand;