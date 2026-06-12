import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const login = () => {
        setUsuario({
            nombre: "Pedro",
            rol: "ADMIN"
        });
        localStorage.setItem("usuario", JSON.stringify({
            nombre:"Pedro",
            rol:"ADMIN"
        }));
    };
    const logout = () => {
        setUsuario(null);
        localStorage.removeItem("usuario")
    };

    useEffect(() => {
        const usuario = localStorage.getItem("usuario");
        if (usuario){
            setUsuario(JSON.parse(usuario));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    return useContext(AuthContext);
};