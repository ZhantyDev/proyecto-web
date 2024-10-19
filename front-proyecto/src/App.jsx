import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Ingresoregistro from './components/ingresoregistro/Ingresoregistro'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ingresoregistro/>} />
      </Routes>
    </Router>
  )
}

export default App
