import { useState } from 'react'
import './App.css'
import IntroPage from './components/IntroPage'
import Login from './components/Authentication/Login'
import Register from './components/Authentication/Register'
import SideBar from './components/students/SideBar'
import Dashboard from './components/students/dashboard'
import Header from './components/students/header'

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <main className="main-content">
        <Header />
        <Dashboard />
      </main>
    </div>
  )
}

export default App
