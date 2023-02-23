import React from 'react'
import Navbar from '../LandingPage/Navbar/Navbar'
import Footer from '../LandingPage/Footer/Footer'

const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer/>
    </div>
  )
}

export default MainLayout
