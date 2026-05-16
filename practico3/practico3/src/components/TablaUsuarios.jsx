import { use, useEffect, useState } from "react";
import Titulo from "./Titulo";
import { obtenerUsuarios } from "../service/usuarioService";

function TablaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        setUsuarios(obtenerUsuarios());
    }, []);

    const eliminar = (id) =>{
        console.log(`Se elimina  usuario con id ${id}`);
        setUsuarios(usuarios => usuarios.filter(usuario => usuario.id !== id));
    }

    const editar = ({usuario}) =>{
        console.log(`Usuario seleccionado ${usuario.nombre}`);
    }

    return (
        <div>
            <Titulo valor={"Listado Usuarios"}></Titulo>
            <table border={1} style={{borderCollapse:'collapse'}}>
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
                            <td><a href="#" onClick={() => editar({usuario})} >Editar</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TablaUsuarios;
