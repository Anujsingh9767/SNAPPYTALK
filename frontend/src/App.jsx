import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import LoginPage from "./pages/LoginPage"
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import SignUpPage from './pages/SignUpPage'

import {Loader} from "lucide-react"
import {Toaster} from "react-hot-toast";


import { Routes , Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore'

function App() {

  
  const {authUser, checkAuth,isCheckingAuth} = useAuthStore()

  useEffect (()=>{
    checkAuth()
  },[checkAuth])

  console.log({authUser})

  if(isCheckingAuth && !authUser)return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    
  )

  return (
    <div >
       <Navbar/>
       
       <Routes>
         <Route path='/' element={authUser ? <HomePage/> : <Navigate to="/login" />} />
         <Route path='/signup' element={!authUser ? <SignUpPage/>  :<Navigate to="/" />}  />
         <Route path='/login' element={!authUser ? <LoginPage/> :<Navigate to="/" /> } />
         <Route path='/setting' element={<SettingsPage/>} />
         
         <Route path='/profile' element={<ProfilePage/>} />
       </Routes>

       <Toaster/>
    </div>
  )
}

export default App
