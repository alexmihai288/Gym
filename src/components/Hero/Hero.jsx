import React from 'react'
import { Open_Sans } from '@next/font/google'
import { Roboto } from '@next/font/google'
const openSans = Open_Sans({subsets:['latin']})
const roboto = Roboto({subsets:['latin'],weight:'400'})


const Hero = () => {
  return (
    <div className="heroWrapper relative">
      <div className="text-white flex flex-col gap-5 p-2 items-center justify-center min-h-[450px] lg:min-h-[40em] bg-cover bg-[url('https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/hero/front.jpg')]">
        <div className='z-20'>
            <h1 className={`${openSans.className} font-bold text-[2rem] xs:text-[3em] md:text-[3.5em] text-center max-w-[260px]`}>Welcome to Muscle & Strength</h1>
        </div>
        <div className='z-20'>
            <p className={`${roboto.className} text-center text-[1em] md:text-[1.5em] xs:text-[1.2em]`}>
                 We provide the tools you need to build the body you want. All Free.
            </p>
        </div>
        <div className={`z-20 ${roboto.className}`}>
            <button className='px-2 py-3 text-[1.2em] xs:text-[1.3em] hover:bg-gradient-to-l bg-gradient-to-r from-lightBlue to-blue-800'>Learn More</button>
        </div>
      </div>
      <div className="darker absolute w-[100%] h-[100%] z-10 top-0 bottom-0 left-0 right-0 backdrop-brightness-50">
        
      </div>
    </div>
  )
}

export default Hero
