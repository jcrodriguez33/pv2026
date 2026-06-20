import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
import BotonLogout from "./BotonLogout";
function Header() {
    const { usuario } = useAuth();
    return (
        <nav style={{ display: "flex", backgroundColor: "cyan" }}>
            <Logo></Logo>
            <h2>Programacion Visual</h2>
            {usuario ? (
                <>
                    <span>Bienvenido {usuario}</span>
                    <BotonLogout></BotonLogout>
                </>
            ) : (
                <>
                    <span>No autenticado</span>
                </>
            )}
        </nav>
    );
}
export default Header