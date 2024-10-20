import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Ingresoregistro from './components/ingresoregistro/Ingresoregistro'
import Historial from './components/historial/Historial'
import Principal from './components/principal/Principal'
import Prestamos from './components/prestamos/Prestamos'
import Transferencias from './components/transferencias/Transferencias'
import Depositos from './components/depositos/Depositos'
import Retiros from './components/retiros/Retiros'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ingresoregistro/>} />
        <Route path="/historial" element={<Historial/>} />
        <Route path="/home" element={<Principal/>} />
        <Route path="/prestamos" element={<Prestamos/>} />
        <Route path="/transferencias" element={<Transferencias/>} />
        <Route path="/depositos" element={<Depositos/>} />
        <Route path="/retiros" element={<Retiros/>} />
      </Routes>
    </Router>
  )
}

export default App
