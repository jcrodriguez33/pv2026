
import './App.css'
import Header from './components/Header'
import ListaUsuario from './components/ListaUsuarios';
import Saludo from './components/Saludo'
import TablaUsuarios from './components/TablaUsuarios'
import { obtenerUsuarios } from "./service/usuarioService";
import { useEffect, useState } from 'react';
import ListaUsuarios from './components/ListaUsuarios';
import Titulo from './components/Titulo';

//import './static/css/style.css'
function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    setUsuarios(obtenerUsuarios());
  }, []);

  const mostrarFecha = ((usuario) => {
    alert(`La fecha es : ${usuario.fechaNacimiento}`)  
  });


  return (
    <div>
      <Header></Header>
      {/* <NavBar></NavBar> */}
      <Titulo valor={"Listado Usuarios"}></Titulo>
      <TablaUsuarios></TablaUsuarios>
      <ListaUsuarios usuarios={usuarios} mostrarFecha={mostrarFecha} ></ListaUsuarios>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
