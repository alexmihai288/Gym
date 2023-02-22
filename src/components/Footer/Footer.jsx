import React from 'react'
import { Open_Sans } from '@next/font/google'
import { Roboto } from '@next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })
const roboto = Roboto({subsets:['latin'],weight:'400' })


const Footer = () => {
  return (
    <div className='flex flex-col'>
        
        <div className='p-3.5 aboveFooter flex flex-col gap-2 bg-[#0687e6] text-[#fefefe]'>
            <div>
                <p className='font-medium text-[25px]'>Free Workouts & Advice</p>
                <small className='text-[17px] font-thin'>We send you the latest workouts, videos, expert guides and deals.</small>
            </div>
            <div className='newsletterContainer flex'>
                <input type="text" className='font-thin w-[100%] focus:shadow-[0px_0px_10px_rgba(0,0,0,.3)] py-1 px-2 text-black outline-none' placeholder='Email Address'/>
                <button className='bg-[#00508f] duration-200 hover:bg-[#034071] px-3 py-1 font-thin'>Subscribe</button>
            </div>
        </div>

        <div className="p-3.5 middleFooter bg-lightBlue grid grid-cols-2 gap-4 text-white">
                <div>
                    <h1 className={`${openSans.className} text-lg font-bold tracking-wide mb-1.5`}>CUSTOMER SERVICE</h1>
                    <div className={`font-thin tracking-normal`}>
                        <p>Help Center</p>
                        <p>Track Your Order</p>
                        <p>Account Login</p>
                        <p>Returns & Exchanges</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div>
                    <h1 className={`${openSans.className} text-lg font-bold tracking-wide mb-1.5`}>FOLLOW</h1>
                    <div className="flex flex-row gap-2 text-xl items-center">
                        <i class="bi bi-youtube"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-pinterest"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                    </div>
                </div>
                <div>
                    <h1 className={`${openSans.className} text-lg font-bold tracking-wide mb-1.5`}>ABOUT</h1>
                    <div className={`font-thin tracking-normal`}>
                        <p>About Us</p>
                        <p>Rewards Program</p>
                        <p>Careers</p>
                    </div>
                </div>
                <div>
                    <h1 className={`${openSans.className} text-lg font-bold tracking-wide mb-1.5`}>WORK WITH US</h1>
                    <div className={`font-thin tracking-normal`}>
                        <p>Contribute to M&S</p>
                        <p>Affiliate Program</p>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default Footer