import React from 'react'
import './App.css'

import logo from './img/logo-blue.png'

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo_box">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary_main">Arrakis Adventures</span>
            <span className="heading-primary_sub">
              where the water is scarce but the fun is unlimited
            </span>
          </h1>
          <a href="#tours" className="btn btn-white btn-animated">
            Book a holiday today
          </a>
        </div>
      </header>
      <section className="tours" id="tours"></section>
    </div>
  )
}

export default App
