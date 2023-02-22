import React from 'react'
import Image from 'next/image';

const Ad = () => {
  return (
    <div className='cursor-pointer'>
        <div className='block md:hidden'>
            <Image alt='ad' width={4050} height={4050} className="w-[100%] object-cover" src="https://cdn.muscleandstrength.com/sites/default/files/images/banners/2023/02/mobile_7.jpg"/>
        </div>
        <div className='hidden md:block'>
            <Image alt='ad' width={4050} height={4050} className="w-[100%] h-[40px]" src="https://cdn.muscleandstrength.com/sites/default/files/images/banners/2023/02/desktop_7.jpg"/>
        </div>
    </div>
  )
}

export default Ad
    