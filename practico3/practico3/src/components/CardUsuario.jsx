import styles from "../styles/CardUsuario.module.css";

const CardUsuario = ({usuario, mostrarFecha}) => {
    return(
         <article className={styles.card}>
            <h3>{usuario.id}</h3>
            <p>{usuario.nombre}</p>
            <button className={styles.boton} onClick={() => mostrarFecha(usuario)} title="Mostra Fecha Nacimiento" >
            🔎
            </button>
         </article>
    );
}
export default CardUsuario;
