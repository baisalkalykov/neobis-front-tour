import React from 'react'
import Home from './pages/home/Home'
import { Navigate, Route,Routes } from 'react-router-dom'
import OneTour from './pages/onetour/OneTour'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/onetour' element={<OneTour/>}/>
    </Routes>
    </>
  )
}

export default App