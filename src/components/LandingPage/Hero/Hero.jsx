import React from 'react'
import { Open_Sans } from '@next/font/google'
import { Roboto } from '@next/font/google'
const openSans = Open_Sans({subsets:['latin']})
const roboto = Roboto({subsets:['latin'],weight:'400'})


const Hero = () => {
  return (
    <div  className="heroWrapper relative z-10">
      <div className="text-white bg-cover bg-[url('https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/hero/front.jpg')]">
        <div className='flex flex-col gap-5 p-2 items-center justify-center min-h-[440px] lg:min-h-[39.70em] bg-[rgba(0,0,0,.45)]'>
          <div className='z-20'>
              <h1 className={`${openSans.className} font-bold text-[2rem] md:text-[3.5em] text-center max-w-[260px] md:max-w-[10em]`}>Welcome to Muscle & Strength</h1>
          </div>
          <div className='z-20'>
              <p className={`${roboto.className} text-center text-[1em] md:text-[1.5em] md:max-w-[550px] xs:text-[1.2em]`}>
                  We provide the tools you need to build the body you want. All Free.
              </p>
          </div>
          <div className={`z-20 ${roboto.className}`}>
              <button className='px-2 py-3 text-[1.2em] xs:text-[1.3em] hover:bg-gradient-to-l bg-gradient-to-r from-lightBlue to-blue-800'>Learn More</button>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Hero
