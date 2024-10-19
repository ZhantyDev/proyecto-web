import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Ingresoregistro from './components/ingresoregistro/Ingresoregistro'
import Historial from './components/historial/Historial'
import Principal from './components/principal/Principal'
import Prestamos from './components/prestamos/Prestamos'
<<<<<<< HEAD
=======
import Transacciones from './components/transacciones/Transacciones'
>>>>>>> 61d180d494854accde9c25bd12ec10f3a6a84e6d


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ingresoregistro/>} />
        <Route path="/historial" element={<Historial/>} />
        <Route path="/home" element={<Principal/>} />
        <Route path="/prestamos" element={<Prestamos/>} />
<<<<<<< HEAD
=======
        <Route path="/transacciones" element={<Transacciones/>} />
>>>>>>> 61d180d494854accde9c25bd12ec10f3a6a84e6d
      </Routes>
    </Router>
  )
}

export default App
