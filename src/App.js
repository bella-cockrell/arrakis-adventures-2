import React from 'react'
import './App.css'

import logo from './img/logo-white.png'

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo_box">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary_main">Outdoors</span>
            <span className="heading-primary_sub">is where life happens</span>
          </h1>
          <a href="#tours" className="btn btn-white">
            Discover our tours
          </a>
        </div>
      </header>
      <section className="tours" id="tours"></section>
    </div>
  )
}

export default App
