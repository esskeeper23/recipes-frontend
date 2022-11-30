import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/shared/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import Login from './components/routes/Login'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path='/' element={ <Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route />
      </Routes>
    </div>
  )
}

export default App
