import React from 'react'
import { Open_Sans } from '@next/font/google'
import { Roboto_Flex } from '@next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })
const roboto = Roboto_Flex({subsets:['latin'] })


const Footer = () => {
  return (
    <div className='flex flex-col mt-14'>
        
        <div className='p-3.5 aboveFooter flex flex-col gap-2 bg-[#0687e6] text-[#fefefe]'>
            <div>
                <p className={`${openSans.className} font-bold text-[25px]`}>Free Workouts & Advice</p>
                <p className={`${roboto.className} text-[17px] font-thin`}>We send you the latest workouts, videos, expert guides and deals.</p>
            </div>
            <div className='newsletterContainer flex'>
                <input type="text" className='font-thin w-[100%] focus:shadow-[0px_0px_10px_rgba(0,0,0,.3)] py-1 px-2 text-black outline-none' placeholder='Email Address'/>
                <button className='bg-[#00508f] duration-200 hover:bg-[#034071] px-3 py-1 font-thin'>Subscribe</button>
            </div>
        </div>

        <div className="p-3.5 middleFooter bg-lightBlue grid grid-cols-2 gap-4 text-white">
                <div>
                    <h1 className={`${openSans.className} text-lg font-bold tracking-wide mb-1.5`}>CUSTOMER SERVICE</h1>
                    <div className={`text-[17px] font-thin tracking-normal ${roboto.className}`}>
                        <p className='cursor-pointer'>Help Center</p>
                        <p className='cursor-pointer'>Track Your Order</p>
                        <p className='cursor-pointer'>Account Login</p>
                        <p className='cursor-pointer'>Returns & Exchanges</p>
                        <p className='cursor-pointer'>Contact Us</p>
                    </div>
                </div>
                <div>
                    <h1 className={`${openSans.className} text-lg font-bold tracking-wide mb-1.5`}>FOLLOW</h1>
                    <div className="flex flex-row gap-2 text-xl items-center">
                        <i className="bi bi-youtube cursor-pointer"></i>
                        <i className="bi bi-instagram cursor-pointer"></i>
                        <i className="bi bi-pinterest cursor-pointer"></i>
                        <i className="bi bi-facebook cursor-pointer"></i>
                        <i className="bi bi-twitter cursor-pointer"></i>
                    </div>
                </div>
                <div>
                    <h1 className={`${openSans.className} text-lg font-bold tracking-wide mb-1.5`}>ABOUT</h1>
                    <div className={`font-thin tracking-normal`}>
                        <p className='cursor-pointer'>About Us</p>
                        <p className='cursor-pointer'>Rewards Program</p>
                        <p className='cursor-pointer'>Careers</p>
                    </div>
                </div>
                <div>
                    <h1 className={`${openSans.className} text-lg font-bold tracking-wide mb-1.5`}>WORK WITH US</h1>
                    <div className={`font-thin tracking-normal`}>
                        <p className='cursor-pointer'>Contribute to M&S</p>
                        <p className='cursor-pointer'>Affiliate Program</p>
                    </div>
                </div>
        </div>
        
        
        <div className='footerInformation bg-[#004780] p-3.5'>
            <p className='text-[#fefefe] text-center'>
                © 2006-2023, Muscle & Strength, LLC. 1180 First Street South Ext, Columbia, SC, 29209. Phone: 1-800-537-9910

                Terms of Use - Privacy Policy - Cookie Policy - Accessibility Statement - Tracking Preferences 
            </p>
        </div>
        
    </div>
  )
}

export default Footer