// System imports
import { useState } from 'react'
// Components import 
import './App.css'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Favourites' element={<Favourites />} />
    </Routes>
  )
}

export default App
