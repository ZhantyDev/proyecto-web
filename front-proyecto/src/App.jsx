import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Ingresoregistro from './components/ingresoregistro/Ingresoregistro'
import Historial from './components/historial/Historial'
import Principal from './components/principal/Principal'
import Prestamos from './components/prestamos/Prestamos'
import Transacciones from './components/transacciones/Transacciones'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ingresoregistro/>} />
        <Route path="/historial" element={<Historial/>} />
        <Route path="/home" element={<Principal/>} />
        <Route path="/prestamos" element={<Prestamos/>} />
        <Route path="/transacciones" element={<Transacciones/>} />
      </Routes>
    </Router>
  )
}

export default App
