import React from 'react'
import Ad from '../LandingPage/Ad/Ad'
import Navbar from '../LandingPage/Navbar/Navbar'
import Footer from '../LandingPage/Footer/Footer'
import SideMenu from '../LandingPage/SideMenu/SideMenu'
import { useState } from 'react'


const MainLayout = ({children}) => {
    const [sideMenu,setSideMenu] = useState(false);
    const [outOfSide,setOutOfSide] = useState(false)
  return (
    <div onClick={()=>{
        if(sideMenu && outOfSide)
          setSideMenu(false)
      }}>
        <div>
          <Ad/>
          <Navbar setSideMenu={setSideMenu}/>
          {sideMenu && <SideMenu setOutOfSide={setOutOfSide}/>}
          {sideMenu && <div className="darker absolute z-40 top-0 bottom-0 left-0 right-0 backdrop-brightness-50">
                            
                        </div>
          }
        </div>

          <div className='min-h-screen'>
            {children}
          </div>

        <div className=''>
          <Footer/>
        </div>
    </div>
  )
}

export default MainLayout
