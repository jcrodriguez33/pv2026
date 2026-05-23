import CardUsuario from "./CardUsuario";
import styles from "../styles/ListaUsuarios.module.css";
const ListaUsuarios = ({usuarios, mostrarFecha}) => {
    return(
        <div className={styles.lista}>
            {
                usuarios.map((usuario) => (
                    <CardUsuario usuario={usuario} mostrarFecha={mostrarFecha}></CardUsuario>
                ))
            }
        </div>
    );

}
export default ListaUsuarios;