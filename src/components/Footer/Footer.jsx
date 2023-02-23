import React from 'react'
import Image from 'next/image'
import { Open_Sans } from '@next/font/google'
import { Roboto_Flex } from '@next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })
const roboto = Roboto_Flex({subsets:['latin'] })


const Footer = () => {
  return (
    <div className='flex flex-col mt-14 relative'>
        
        <div className='p-3.5 aboveFooter gap-2 bg-[#0687e6] md:px-16 md:py-6 text-[#fefefe]'>
            <div className='max-w-[1300px] mx-auto flex flex-col md:flex-row md:gap-8'>
                    <div>
                        <p className={`${openSans.className} font-bold text-[25px]`}>Free Workouts & Advice</p>
                        <p className={`${roboto.className} text-[17px] font-thin`}>We send you the latest workouts, videos, expert guides and deals.</p>
                    </div>
                    <div className='newsletterContainer mt-2 xs:mt-0 flex flex-col gap-1 xxs:gap-0 xxs:flex-row md:flex-1 flex-[1] md:items-center justify-end'>
                        <input type="text" className='font-thin w-[100%] focus:shadow-[0px_0px_10px_rgba(0,0,0,.3)] sm:min-w-[200px] max-w-md py-1 px-2 text-black outline-none' placeholder='Email Address'/>
                        <button className='bg-[#00508f] duration-200 hover:bg-[#034071] px-3 py-1 font-thin'>Subscribe</button>
                    </div>
            </div>
   
        </div>

        <div className="p-3.5 middleFooter bg-lightBlue text-white  md:px-16 md:py-6">
            <div className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-1 max-w-[1300px] mx-auto'>

                <div>
                    <h1 className={`${openSans.className} text-lg font-bold tracking-wide mb-1.5`}>CUSTOMER SERVICE</h1>
                    <div className={`text-[17px] font-thin tracking-normal ${roboto.className} flex flex-col items-start`}>
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
                    <h1 className={`${openSans.className} text-lg font-bold tracking-wide mb-1.5 `}>ABOUT</h1>
                    <div className={`font-thin tracking-normal flex flex-col items-start`}>
                        <p className='cursor-pointer'>About Us</p>
                        <p className='cursor-pointer'>Rewards Program</p>
                        <p className='cursor-pointer'>Careers</p>
                    </div>
                </div>
                <div>
                    <h1 className={`${openSans.className} text-lg font-bold tracking-wide mb-1.5`}>WORK WITH US</h1>
                    <div className={`font-thin tracking-normal flex flex-col items-start`}>
                        <p className='cursor-pointer'>Contribute to M&S</p>
                        <p className='cursor-pointer'>Affiliate Program</p>
                    </div>
                </div>
            </div>

        </div>
        
        
        <div className='footerInformation bg-[#004780] p-3.5 md:px-16 md:py-6'>
            <div className='max-w-[1300px] mx-auto items-center'>
                <p className='text-[#fefefe] text-center max-w-[800px] text-[18px]'>
                    © 2006-2023, Muscle & Strength, LLC. 1180 First Street South Ext, Columbia, SC, 29209. Phone: 1-800-537-9910

                    Terms of Use - Privacy Policy - Cookie Policy - Accessibility Statement - Tracking Preferences 
                </p>
            </div>
        </div>

        <div className='absolute right-0 bottom-0 hidden xl:block mr-5'>
            <Image className='w-72 h-72' width={4050} height={4050} alt='man&woman' src={"https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/brettandmeganfooter.png"} />
        </div>
    </div>
  )
}

export default Footer