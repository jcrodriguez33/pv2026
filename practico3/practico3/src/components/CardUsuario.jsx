import styles from "../styles/CardUsuario.module.css";
import {Link, Route, Routes} from "react-router";
import FormUsuario from "./FormUsuario";

const CardUsuario = ({usuario, mostrarFecha}) => {    
    return(
        <>
         <article className={styles.card}>
            <h3>{usuario.id}</h3>
            <p>{usuario.nombre}</p>
            <button className={styles.boton} onClick={() => mostrarFecha(usuario)} title="Mostrar Fecha Nacimiento" >
            🔎
            </button>
            <Link to={`/editar/${usuario.id}`}>Editar</Link>
         </article>
         </>
    );
}
export default CardUsuario;
