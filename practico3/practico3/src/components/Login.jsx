import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [formLogin, setFormLogin] = useState({ email: '', password: '' });
    const { login, isAuthenticated } = useAuth()
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormLogin({ ...formLogin, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
             //Llamada a la api para obtener token y se envia en el body  las credenciales de acceso
            const res = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formLogin)
            });
            
            if (res.ok) {
                const data = await res.json();
                console.log("Respuesta API:", data);
                //Si la credeneciales son correctas se guarda el mail en el contexto de seguridad de la app.
                login(formLogin.email);
            } else {
                console.log("Credeneciales  invalidas");
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/ayuda");
        }
    }, [isAuthenticated]);

    return (
        <div>
            <form id="loginForm" method="post" onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td colspan="3" class="center-text">
                            <h2 style={{ backgroundColor: "lightgray", textAlign: "right" }}>Acceso</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>Ingrese su eMail: </td>
                        <td><input type="text" name="email" value={formLogin.email} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Ingrese su clave: </td>
                        <td><input type="password" name="password" value={formLogin.password} onChange={handleChange} required /></td>
                    </tr>
                    <tr>
                        <td align="center"><input type="reset" name="reset" value="Inicializar" /></td>
                        <td align="center"><input type="submit" name="Submit" value="Ingresar" /></td>
                    </tr>
                </table>
            </form>
        </div>
    );

}
export default Login;
