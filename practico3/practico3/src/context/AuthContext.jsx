import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    const login = (nombre) => {
       // console.log(nombre)
        setUsuario(nombre);
        localStorage.setItem("usuario", nombre);
        const usuarioe = localStorage.getItem("usuario");
        console.log(usuarioe);
    };

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem("usuario")
    };

    useEffect(() => {
        const usuario = localStorage.getItem("usuario");
        if (usuario){
            console.log(usuario);
            setUsuario(usuario);
        }
    }, [usuario]);

    const isAuthenticated = !!usuario;

    return (
        <AuthContext.Provider value={{ usuario, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider