import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Open_Sans } from '@next/font/google'
import { Roboto_Flex } from '@next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })
const roboto = Roboto_Flex({subsets:['latin'] })

const Navbar = (props) => {
  const {setSideMenu}=props;
  return (
    <div>
    <nav className='bg-lightBlue p-3 flex flex-col gap-3 md:hidden'>
          
          <div className="flex flex-row items-center justify-between">
            <div className='flex flex-row items-center gap-6'>
                <i onClick={()=>setSideMenu(prevState=>!prevState)} className="bi cursor-pointer bi-list text-4xl text-white"></i>
                <div className='flex flex-col items-center'>
                  <Image className='w-8 h-8' alt='romanian-flag' width={4050} height={4050} src="https://www.muscleandstrength.com/sites/all/themes/mnsnew/images/flags/svg/ro.svg"/>
                  <small className='-m-1 text-white'>USD</small>
                </div>
            </div>
            <div className='logo hidden xxs:block'>
               <Link href={"/"}><Image className='w-[55px] h-[45px] object-cover' alt='logo' width={4050} height={4050} src="https://cdn.discordapp.com/attachments/724220064223592541/1077908865745702972/image.png"/></Link> 
            </div>
            <div className='flex flex-row items-center gap-6 text-white'>
              <div className="relative">
                  <i className="bi bi-cart-fill text-3xl z-0"></i>
                  <div className="z-10 flex items-center justify-center absolute rounded-full bg-lightBlue border border-white w-4 h-4 -top-1 -right-1">
                    <small>1</small>
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

        <nav className='bg-lightBlue p-3 flex-col gap-4 hidden md:flex lg:hidden'>
              <div className="flex flex-row items-center gap-4 max-w-[1300px]">
                <i onClick={()=>setSideMenu(prevState=>!prevState)} className="bi cursor-pointer bi-list text-4xl text-white"></i>
                <div className='flex gap-5 w-[100%]'>
                      <Link href={"/"}><Image className='logo w-[55px] h-[45px] object-cover' alt='logo' width={4050} height={4050} src="https://cdn.discordapp.com/attachments/724220064223592541/1077908865745702972/image.png"/></Link> 
                      <div className="searchBarContainer flex w-[100%] max-w-[500px] mx-auto">
                        <div className='w-[100%]'>
                          <input type={"text"} className="outline-none h-[100%] w-[100%] px-3 rounded-tl-sm rounded-bl-sm text-[14px]" placeholder="Search products,brands,workouts..."/>
                        </div>
                        <div className="bg-[#0577CB] flex items-center text-white text-[18px] cursor-pointer px-3">
                          <i className='bi bi-search mb-1'></i>
                        </div>
                      </div>
                </div>
                <div className='flex flex-col items-center'>
                      <Image className='w-8 h-8' alt='romanian-flag' width={4050} height={4050} src="https://www.muscleandstrength.com/sites/all/themes/mnsnew/images/flags/svg/ro.svg"/>
                      <small className='-m-1 text-white'>USD</small>
                </div>
                <div className='flex flex-row items-center gap-6 text-white'>
                  <div className="relative">
                      <i className="bi bi-cart-fill text-3xl z-0"></i>
                      <div className="z-10 flex items-center justify-center absolute rounded-full bg-lightBlue border border-white w-4 h-4 -top-1 -right-1">
                        <small>1</small>
                      </div>
                  </div>
                    <i className="bi bi-person-circle text-3xl"></i>
                </div>
              </div>
      
        </nav>
        <nav className='bg-lightBlue p-3 flex-col gap-4 hidden lg:flex ju'>
              <div className="flex flex-row items-center gap-4 max-w-[1300px] mx-auto">
                <div className='flex gap-5 w-[100%] items-center'>
                      <Link href={"/"}><Image className='logo w-[75px] h-[75px]' alt='logo' width={4050} height={4050} src="https://cdn.discordapp.com/attachments/724220064223592541/1077908865745702972/image.png"/></Link> 
                      <div className='flex flex-col gap-2'>
                        <div className="searchBarContainer flex w-[100%] max-w-[500px] mx-auto">
                          <div className='w-[100%]'>
                            <input type={"text"} className="outline-none h-[100%] w-[100%] px-3 py-2 rounded-tl-sm rounded-bl-sm text-[14px]" placeholder="Search products,brands,workouts..."/>
                          </div>
                          <div className="bg-[#0577CB] flex items-center text-white text-[18px] cursor-pointer px-3">
                            <i className='bi bi-search mb-1'></i>
                          </div>
                        </div>  
                        <div className={`flex gap-4 ${roboto.className} text-white font-semibold`}>
                            <small className='cursor-pointer'>Store</small>
                            <small className='cursor-pointer'>Workouts</small>
                            <small className='cursor-pointer'>Articles</small>
                            <small className='cursor-pointer'>Diet Plans</small>
                            <small className='cursor-pointer'>Exercices</small>
                            <small className='cursor-pointer'>Recipes</small>
                            <small className='cursor-pointer'>Tools</small>
                        </div>
                      </div>
                </div>
                <div className='ml-5 text-[#fefefe]'>
                  <p className='whitespace-nowrap text-center mb-1'>7 Day Customer Support</p>
                  <div className='flex items-center gap-5 bg-[#0063B3] rounded-full px-3'>
                      <div className='flex items-center gap-[3px] cursor-pointer'>
                        <i className="bi bi-chat-fill text-[12px]"></i>
                        <p className='whitespace-nowrap text-[14px]'>Live Chat</p>
                      </div>
                      <div className='flex items-center gap-[3px] cursor-pointer'>
                        <i className='bi bi-telephone-fill text-[12px]'></i>
                        <p className='whitespace-nowrap text-[14px]'>1-800-537-9910</p>
                      </div>
                  </div>

                </div>
                
                <div className='ml-5 flex flex-row items-center gap-12 text-white cursor-pointer'>
                  <div className='flex flex-col items-center cursor-pointer'>
                        <Image className='w-[22.5px] h-[22.5px]' alt='romanian-flag' width={4050} height={4050} src="https://www.muscleandstrength.com/sites/all/themes/mnsnew/images/flags/svg/ro.svg"/>
                        <small className='-m-1 text-white'>USD</small>
                  </div>
                  <div className="relative">
                      <i className="bi bi-cart-fill text-[1.4em] z-0"></i>
                      <p className='text-[14px]'>cart</p>
                      <div className="z-10 flex items-center justify-center absolute rounded-full bg-lightBlue border border-white w-4 h-4 -top-1 -right-1">
                        <small>1</small>
                      </div>
                  </div>
                  <div className='cursor-pointer'>
                    <i className="bi bi-person-circle text-[1.4em]"></i>
                    <p className='text-[14px]'>login</p>
                  </div>
                </div>
              </div>
      
        </nav>
    </div>
  )
}

export default Navbar