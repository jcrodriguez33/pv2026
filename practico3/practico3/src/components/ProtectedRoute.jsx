
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
     //Si el usuario no esta autentificado se direcciona  a login, esto para paginas protegidas.
    if (!isAuthenticated) return <Navigate to="/login" replace />
    return children;
}
export default ProtectedRoute;