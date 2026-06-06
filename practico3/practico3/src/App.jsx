
import './App.css'
import Header from './components/Header'
import ListaUsuario from './components/ListaUsuarios';
import Saludo from './components/Saludo'
import TablaUsuarios from './components/TablaUsuarios'
import { obtenerUsuarios, agregar } from "./service/usuarioService";
import { useEffect, useRef, useState } from 'react';
import ListaUsuarios from './components/ListaUsuarios';
import Titulo from './components/Titulo';
import FormUsuario from './components/FormUsuario';
import { Link, Routes, Route} from 'react-router-dom'

//import './static/css/style.css'
function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [accion, setAccion] = useState("");
  const inputRef = useRef(null);
  
  useEffect(() => {
    console.log("Obtenemos lista de usuarios");
    setUsuarios(obtenerUsuarios());
    if (inputRef.current === null) {
      setAccion("");
    }
  }, []);

  useEffect(() => {
    if (inputRef.current !== null) {
      setAccion("Se actualizo el array de usuarios");
    } else {
      setAccion("");
    }

  }, [usuarios]);

  const mostrarFecha = ((usuario) => {
    alert(`La fecha es : ${usuario.fechaNacimiento}`)
  });

  const buscar = () => {
    console.log("Se busca usuarios por nombre, si se envia vacia se muestran todos  los usuarios");
    if (nombre === "") {
      setUsuarios(obtenerUsuarios());
      inputRef.current = null;
      return;
    }
    setUsuarios(usuarios => usuarios.filter(usuario => usuario.nombre.toLowerCase().includes(nombre.toLowerCase())));
    inputRef.current = "buscar"
  }

  const agregarUsuario = (nombre, fechaNacimiento) => {    
    const nuevoUsuario = {
      id: Date.now(),
      nombre: nombre,
      fechaNacimiento: fechaNacimiento
    };
    agregar(nuevoUsuario);
    setUsuarios([...usuarios, nuevoUsuario]);
    inputRef.current = "guardar"
   
  };

  return (
    <div>
      <Header></Header>
      {/* <NavBar></NavBar> */}
      <nav>
        <Link to="/" style={{marginRight:'1rem'}}>Inicio</Link>
        <Link to="/crear" style={{marginRight:'1rem'}}>Crear</Link>
        <Link to="/ayuda">Ayuda</Link>
      </nav>
      <Routes>
        <Route
          path="/" element={
            <>
              <Titulo valor={"Listado Usuarios"}></Titulo>
              <input type="text" placeholder="Buscar por nombre..." id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} ></input>
              <button onClick={buscar}>Buscar</button>
              <ListaUsuarios usuarios={usuarios} mostrarFecha={mostrarFecha} ></ListaUsuarios>
              {accion && <h2>{accion}</h2>}
            </>
          }
        />
        <Route
          path='/crear' element={<FormUsuario agregarUsuario={agregarUsuario}></FormUsuario>}>
        </Route>
        <Route
          path='/ayuda' element={
            <h3>Aqui deberia mostrar la ayuda de la appp</h3>
          }>
        </Route>
        <Route
          path="/editar/:id" element={<FormUsuario></FormUsuario>}
        />
      </Routes>

    </div>
  )
}

export default App
