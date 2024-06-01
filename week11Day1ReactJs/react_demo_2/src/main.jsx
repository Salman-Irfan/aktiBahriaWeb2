import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Footer from './components/layouts/Footer.jsx'
import NavBar from './components/layouts/NavBar.jsx'
import { BrowserRouter } from 'react-router-dom'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <>
      <NavBar />
      {/* for index.html App.jsx is the single source of truth */}
      <App />
      <Footer />
    </>
  </BrowserRouter>
)
