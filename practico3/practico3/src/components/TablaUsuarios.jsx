import { use, useEffect, useState } from "react";
import Titulo from "./Titulo";
import { obtenerUsuarios, eliminarUsuario } from "../service/usuarioService";

function TablaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState("");

    useEffect(() => {
        setUsuarios(obtenerUsuarios());
    }, []);


    useEffect(() => {
        console.log(`Se actualizo el nombre a ${nombre}`);
    }, [nombre]);

    const eliminar = (id) => {
        //setUsuarios(usuarios => usuarios.filter(usuario => usuario.id !== id));
        eliminarUsuario(id);
        setUsuarios(obtenerUsuarios().slice()); //se crea una copia del array para forzar la actualización del estado
    }

    const editar = ({ usuario }) => {
        console.log(`Usuario seleccionado ${usuario.nombre}`);
    }

    const buscar = () => {
        console.log("Se busca usuarios por nombre, si se envia vacia se muestran todos  los usuarios");
        if (nombre === "") {
            setUsuarios(obtenerUsuarios());
            return;
        }
        setUsuarios(usuarios => usuarios.filter(usuario => usuario.nombre.toLowerCase().includes(nombre.toLowerCase())));
    }

    return (
        <div>
            <Titulo valor={"Listado Usuarios"}></Titulo>
            <input type="text" placeholder="Buscar por nombre..." id="nombre" onChange={(e) => setNombre(e.target.value)} ></input>
            <button onClick={buscar}>Buscar</button>
            <table border={1} style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Fecha Nac.</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) =>
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.fechaNacimiento}</td>
                            <td><a href="#" onClick={() => eliminar(usuario.id)} >Eliminar</a></td>
                            <td><a href="#" onClick={() => editar({ usuario })} >Editar</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TablaUsuarios;
