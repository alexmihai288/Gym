import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='bg-lightBlue p-3 flex flex-col gap-3'>
          <div className="flex flex-row items-center justify-between">
            <div className='flex flex-row items-center gap-6'>
                <i className="bi bi-list text-4xl text-white"></i>
                <div className='flex flex-col items-center'>
                  <Image className='w-8 h-8' alt='romanian-flag' width={4050} height={4050} src="https://www.muscleandstrength.com/sites/all/themes/mnsnew/images/flags/svg/ro.svg"/>
                  <small className='-m-1 text-white'>USD</small>
                </div>
            </div>
            <div className='logo'>
                <Image className='w-[55px] h-[45px] object-cover' alt='logo' width={4050} height={4050} src="https://cdn.discordapp.com/attachments/724220064223592541/1077908865745702972/image.png"/>
            </div>
            <div className='flex flex-row items-center gap-6 text-white'>
              <div className="relative">
                  <i className="bi bi-cart-fill text-3xl z-0"></i>
                  <div className="z-10 flex items-center justify-center absolute rounded-full bg-lightBlue border border-white w-4 h-4 -top-1 -right-1">
                    1
                  </div>
              </div>
                <i className="bi bi-person-circle text-3xl"></i>
            </div>
          </div>
    
      <div className="searchBarContainer flex">
        <div className='w-[100%]'>
          <input type={"text"} className="outline-none h-[100%] w-[100%] px-3 rounded-tl-sm rounded-bl-sm text-[14px]" placeholder="Search products,brands,workouts..."/>
        </div>
        <div className="bg-[#0577CB] flex items-center text-white text-[20px] cursor-pointer py-1 px-3">
          <i className='bi bi-search mb-1'></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar