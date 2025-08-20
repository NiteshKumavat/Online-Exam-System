import { useState } from 'react'
import './App.css'
import IntroPage from './components/IntroPage'
import Login from './components/Authentication/Login'
import Register from './components/Authentication/Register'
import SideBar from './components/students/SideBar'
import Dashboard from './components/students/dashboard'
import Header from './components/students/header'
import Exam from './components/students/Exam'

function App() {
  return (
    <div className="app-container">
        <SideBar />
      <div className="content">
        <div className="header-content">
          <Header />
        </div>
        <div className="features">
          <Exam />
        </div>
      </div>
    </div>
  )
}

export default App
