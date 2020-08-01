import React from 'react'
import './App.css'

import logo from './img/logo-white.png'

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </header>
    </div>
  )
}

export default App
