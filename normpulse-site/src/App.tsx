import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './package/Molecule/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
