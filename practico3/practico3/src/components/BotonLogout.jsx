import { useAuth } from "../context/AuthContext";
const BotonLogout = () => {
    const { usuario, logout } = useAuth();
    if (!usuario) return null;
    return (
        <button onClick={logout}>
            Cerrar sesión
        </button>
    );
};
export default BotonLogout;