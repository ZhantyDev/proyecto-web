import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id = "root">
      <div class = "cuadrito">
        <h1>inicio de sesion</h1>
        <input type="text" name='input_usuario' class = 'item' placeholder='Usuario' />
        <input type="text" name='input_contraseña' class = 'item' placeholder='Contraseña' />
        <button class = 'botonStyle'>Iniciar</button>
      </div>

    </div>
    </>
  )
}

export default App
