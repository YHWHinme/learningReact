// System imports
import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
// Components import 
import './App.css'
import Home from './pages/Home'
import Favourites from './pages/Favourites'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Favourites' element={<Favourites />} />
    </Routes>
  )
}

export default App
