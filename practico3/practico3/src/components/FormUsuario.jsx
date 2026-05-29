import { useState } from "react";
import styles from "../styles/FormUsuario.module.css";

const FormUsuario = ({agregarUsuario}) => {
    const [nombre, setNombre] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");

    const agregar = (e) => {
        e.preventDefault();
        //Aqui se deberia validar los input's 
        agregarUsuario(nombre, fechaNacimiento);
        setNombre("");
        setFechaNacimiento("");
    };

    return (
        <form className={styles.formulario} onSubmit={agregar}>
            <input type="text" placeholder="Ingrese nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
            <input type="date" placeholder="Ingrese fecha Nac." value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)}></input>
            <button type="submit">Guardar</button>
        </form>
    );

};

export default FormUsuario;