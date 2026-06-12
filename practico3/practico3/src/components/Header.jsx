import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
import BotonLogout from "./BotonLogout";
function Header() {
    const { usuario, login } = useAuth();
    return (
        <nav style={{ display: "flex", backgroundColor: "cyan" }}>
            <Logo></Logo>
            <h2>Programacion Visual</h2>
            {usuario ? (
                <>
                    <span>Bienvenido {usuario.nombre}</span>
                    <BotonLogout></BotonLogout>
                </>
            ) : (
                <>
                    <span>No autenticado</span>
                    <button onClick={login}>Iniciar sesion</button>
                </>
            )}
        </nav>
    );
}
export default Header