
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
import { Link, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

//import './static/css/style.css'
function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [accion, setAccion] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Obtenemos lista de usuarios");
    //setUsuarios(obtenerUsuarios());
    const cargarUsuariosAPI = async () => {
      try {
        //Llamada a la api para obtener los usuarios
        const respuesta = await fetch(`https://api.escuelajs.co/api/v1/users`);
        if (respuesta.ok) {
          const data = await respuesta.json();
          console.log('Usuarios obtenidos de la API:', data);
          setUsuarios(data);
        }
      } catch (error) {
        console.error('Error al conectar con la API:', error);
      }
    }

    cargarUsuariosAPI();

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

  const guardar = (usuario) => {
    console.log(usuario);
    //Aqui hacer la validaciones  correspondientes    
    //Llamada a la api para registrar un nuevo usuario y se envia en el body  los datos del mismo
    fetch('https://api.escuelajs.co/api/v1/users/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    }).then(async (res) => {
      if (!res.ok) {
        //Si  hay errores de validación en los datos enviados  se muestra por consola los mensajes
        const dataError = await res.json();
        console.log(dataError.message);
        throw new Error(dataError.message);
      } else {
        return await res.json();
      }
    }).then((data) => {
      //Se el usuario se registra exitosamente  se redirige  a /
      window.location.href = '/'
    }).catch((err) => {
      console.log(err.message);
    });
    inputRef.current = "guardar"
  };

  return (
    <div>
      <Header></Header>
      {/* <NavBar></NavBar> */}
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Inicio</Link>
        <Link to="/crear" style={{ marginRight: '1rem' }}>Crear</Link>
        <Link to="/ayuda">Ayuda</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} >   </Route>
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
          path='/crear' element={<FormUsuario guardar={guardar}></FormUsuario>}>
        </Route>
        <Route
          path='/ayuda' element={
            //Se envuelve el componente con ProtectedRoute (pagina protegida)
            <ProtectedRoute>
              <h3>Aqui deberia mostrar la ayuda de la app</h3>
            </ProtectedRoute>
          }>
        </Route>
        <Route
          path="/editar/:id" element={<FormUsuario guardar={guardar}></FormUsuario>}
        />
      </Routes>

    </div>
  )
}

export default App
