import Navbar from "./components/Navbar"
import Registro from "./pages/Registro"
import ListaUsuarios from "./pages/ListaUsuarios"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {
  //agregando la clave del localstorage (para almacenas los datos del usuario)
  const usuariosLocalStorage = localStorage.getItem("listaUsuarios")

  // estado para manejar la lista de usuarios (?:) => condicion (operador ternario) / if-else
  const [listaUsuarios, setListaUsuarios] = useState(usuariosLocalStorage ? JSON.parse(usuariosLocalStorage) : [])

  return (

    <BrowserRouter>
      {/** paso1: BrowserRouter: Componente principal que conlleva las rutas de la aplicacion */}
      <>
        <Navbar />
        <main className="contenedor">
          {/** Paso2: caja donde vamos almacenar las rutas */}
          <Routes>
            {/** Paso 3: definiendo cada RUTA */}
            <Route path="/" element={<Registro listaUsuarios={listaUsuarios} setListaUsuarios={setListaUsuarios} />} />
            <Route path="/usuarios" element={<ListaUsuarios listaUsuarios={listaUsuarios} />} />

            {/** ruta donde se valida que si no existe, manda la pagina 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
      </>
    </BrowserRouter>
  )
}

export default App