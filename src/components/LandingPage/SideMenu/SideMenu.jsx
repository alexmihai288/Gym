import React from 'react'
import { Roboto } from '@next/font/google'

const roboto = Roboto({ subsets: ['latin'],weight:['400'] })

const SideMenu = (props) => {
  const {setOutOfSide}=props;
  return (
    <div onMouseEnter={()=>setOutOfSide(false)} onMouseLeave={()=>setOutOfSide(true)} id='sideMenu' className={`${roboto.className} z-50 top-0 bottom-0 max-h-[100vh] fixed bg-lightBlue text-white flex flex-col`}>
      <div className='flex items-center p-3 justify-between gap-20 border-b-2'>
        <div className='flex items-center gap-2'>
            <i className="bi bi-cup-straw text-xl"></i>
            <p className='text-lg'>Store</p>
        </div>
        <i className="bi bi-caret-right-fill"></i>
      </div>
      <div className='flex items-center p-3 justify-between gap-20 border-b-2'>
        <div className='flex items-center gap-2'>
            <i className="bi bi-activity text-xl"></i>
            <p className='text-lg'>Workouts</p>
        </div>
        <i className="bi bi-caret-right-fill"></i>
      </div>
      <div className='flex items-center p-3 justify-between gap-20 border-b-2'>
        <div className='flex items-center gap-2'>
            <i className="bi bi-heart-pulse-fill text-xl"></i>
            <p className='text-lg'>Exercises</p>
        </div>
        <i className="bi bi-caret-right-fill"></i>
      </div>
      <div className='flex items-center p-3 justify-between gap-20 border-b-2'>
        <div className='flex items-center gap-2'>
            <i className="bi bi-card-text text-xl"></i>
            <p className='text-lg'>Articles </p>
        </div>
        <i className="bi bi-caret-right-fill"></i>
      </div>
      <div className='flex items-center p-3 justify-between gap-20 border-b-2'>
        <div className='flex items-center gap-2'>
            <i className="bi bi-egg-fried text-xl"></i>
            <p className='text-lg'>Diet Plans</p>
        </div>
        <i className="bi bi-caret-right-fill"></i>
      </div>      
      <div className='flex items-center p-3 justify-between gap-20 border-b-2'>
        <div className='flex items-center gap-2'>
            <i className="bi bi-gear text-xl"></i>
            <p className='text-lg'>Tools</p>
        </div>
        <i className="bi bi-caret-right-fill"></i>
      </div>
    </div>
  )
}               

//<i class="bi bi-x-circle" onClick={()=>setSideMenu(prevState=>!prevState)}></i>

export default SideMenu