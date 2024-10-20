import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Ingreso from './components/ingreso/ingreso'
import Registro from './components/registro/registro'
import Historial from './components/historial/Historial'
import Principal from './components/principal/Principal'
import Prestamos from './components/prestamos/Prestamos'
import Transferencias from './components/transferencias/Transferencias'
import Depositos from './components/depositos/Depositos'
import Retiros from './components/retiros/Retiros'
import Nosotros from './components/sobreNos/nosotros'
import Ayuda from './components/ayuda/ayuda'
import Perfil from './components/perfil/perfil'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ingreso/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/historial" element={<Historial/>} />
        <Route path="/home" element={<Principal/>} />
        <Route path="/prestamos" element={<Prestamos/>} />
        <Route path="/transferencias" element={<Transferencias/>} />
        <Route path="/depositos" element={<Depositos/>} />
        <Route path="/retiros" element={<Retiros/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/ayuda" element={<Ayuda/>} />
        <Route path="/perfil" element={<Perfil/>} />

        
      </Routes>
    </Router>
  )
}

export default App
