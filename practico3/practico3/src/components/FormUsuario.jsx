import { useEffect, useState } from "react";
import styles from "../styles/FormUsuario.module.css";
import { useParams, useNavigate } from "react-router";
import { obtenerUsuario } from "../service/usuarioService";

//Inicializo el fomulario  para dar de alta un usuario.
const initialForm = {
    id: 0,
    nombre: "",
    fechaNacimiento: ""
};

const FormUsuario = ({ agregarUsuario }) => {
    const [form, setForm] = useState(initialForm);
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //Si id es distinto de null obtenemos el usuario  con es id, caso contrario  inicializamos el formulario por que se trata de un alta.
        if (id) {
            const usuario = obtenerUsuario(Number(id))
            setForm(usuario);
        } else {
            setForm(initialForm);
        }
    }, [id]);

    const agregar = (e) => {
        e.preventDefault();      
        //Aqui se deberia validar los input's 
        agregarUsuario(form.nombre, form.fechaNacimiento);
        setForm(initialForm);
        navigate("/", { replace: true });
    };

    return (
        <form className={styles.formulario} onSubmit={agregar}>
            <input type="text" placeholder="Ingrese nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })}></input>
            <input type="date" placeholder="Ingrese fecha Nac." value={form.fechaNacimiento} onChange={(e) => setForm({ ...form, fechaNacimiento: e.target.value })}></input>
            <button type="submit">Guardar</button>
        </form>
    );

};

export default FormUsuario;