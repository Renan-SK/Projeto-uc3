import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Principal from './pages/principal'
import Racismo from './pages/racismo'
import Homofobia from './pages/homofobia'
import Transfobia from './pages/transfobia'
import Misoginia from './pages/misoginia'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="*" element={<h1>Not found</h1>} />
        <Route path="/Racismo" element={<Racismo/>} />
        <Route path="/Homofobia" element={<Homofobia/>} />
        <Route path="/Transfobia" element={<Transfobia/>} />
        <Route path="/Misoginia" element={<Misoginia/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
