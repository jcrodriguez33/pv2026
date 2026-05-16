
import './App.css'
import Header from './components/Header'
import Saludo from './components/Saludo'
import TablaUsuarios from './components/TablaUsuarios'
//import './static/css/style.css'
function App() {


  return (
    <div>
      <Header></Header>
      <Saludo nombre={"Mariana"}></Saludo>
      <TablaUsuarios></TablaUsuarios>
    </div>
  )
}

export default App
