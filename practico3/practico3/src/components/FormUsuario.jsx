import { useEffect, useState } from "react";
import styles from "../styles/FormUsuario.module.css";
import { useParams, useNavigate } from "react-router";
import { obtenerUsuario } from "../service/usuarioService";

//Inicializo el fomulario  para dar de alta un usuario.
const initialForm = {
    id: 0,
    name: "",
    email: "",
    password:"",
    role:"admin",
    avatar: "https://i.imgur.com/yhW6Yw1.jpg" 
};

const FormUsuario = ({ guardar }) => {
    const [form, setForm] = useState(initialForm);
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //Si id es distinto de null obtenemos el usuario  con es id, caso contrario  inicializamos el formulario por que se trata de un alta.
        if (id) {
            console.log(id);
            fetch('https://api.escuelajs.co/api/v1/users/' + id)
                .then((res) => {
                    if (!res.ok) throw new Error('Error al cargar el usuario');
                    return res.json();
                })
                .then((data) => {
                    console.log('Usuario encontrado:', data);
                    setForm(data);
                })
                .catch((err) => {
                    console.log(err.message);
                });

        } else {
            setForm(initialForm);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Aqui se deberia validar los input's 
        guardar(form);
        setForm(initialForm);
        navigate("/", { replace: true });
    };

    return (
        <form className={styles.formulario} onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}></input>
            <input type="text" placeholder="Ingrese email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}></input>
            <input type="password" placeholder="Ingrese password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}></input>            
            <button type="submit">Guardar</button>
        </form>
    );

};

export default FormUsuario;