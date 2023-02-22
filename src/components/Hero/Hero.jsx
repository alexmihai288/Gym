import React from 'react'
import { Inter } from '@next/font/google'
import { Open_Sans } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })


const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="text-white backdrop-brightness-50  flex flex-col gap-5 p-2 items-center justify-center min-h-[450px] bg-cover bg-[url('https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/hero/front.jpg')]">
        <div>
            <h1 className={`${inter.className} font-bold text-[45px] text-center max-w-[260px]`}>Welcome to Muscle & Strength</h1>
        </div>
        <div>
            <p className='text-center text-[20px] font-medium'>
                 We provide the tools you need to build the body you want. All Free.
            </p>
        </div>
        <div>
            <button className='px-2 py-3 text-[22px] hover:bg-gradient-to-l bg-gradient-to-r from-lightBlue to-blue-800'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
