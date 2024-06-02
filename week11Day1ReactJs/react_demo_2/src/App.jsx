import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./components/pages/HomePage"
import AboutPage from "./components/pages/AboutPage"
import ContactPage from "./components/pages/ContactPage"
import ServicesPage from "./components/pages/ServicesPage"
import SpecificAccount from "./components/pages/SpecificAccount"
import BMS from './components/pages/BMS'
import ViewAllAccounts from './components/pages/ViewAllAccounts'


const App = () => {
  return (
    
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about-us' element={<AboutPage/>} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
        <Route path='/bms' element={<BMS />} />
        <Route path='/all-accounts' element={<ViewAllAccounts />} />
        <Route path='/account/:id' element={<SpecificAccount />} />
      </Routes>
    </>
  )
}

export default App