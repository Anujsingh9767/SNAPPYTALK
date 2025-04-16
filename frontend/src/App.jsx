import React from 'react'
import Navbar from './components/Navbar'
import LoginPage from "./pages/LoginPage"
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import SignUpPage from './pages/SignUpPage'


import { Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div >
       <Navbar/>
       <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/login' element={<LoginPage/>} />
         <Route path='/setting' element={<SettingsPage/>} />
         <Route path='/signup' element={<SignUpPage/>} />
         <Route path='/profile' element={<ProfilePage/>} />
       </Routes>
    </div>
  )
}

export default App
