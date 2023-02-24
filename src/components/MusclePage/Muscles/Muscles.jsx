import React from 'react'
import MusclePost from '@/components/LandingPage/MusclePost/MusclePost'
import { Open_Sans } from '@next/font/google'
import { nanoid } from 'nanoid'
const openSans = Open_Sans({ subsets: ['latin'] })

const Muscles = ({task}) => {
  return (
    <div className='max-w-[1000px] mx-auto'>
            <div>
                <h1 className={`${openSans.className} my-8 uppercase text-[#005599] font-bold text-center text-[30px] md:text-[36px]`}>NEW AT MUSCLE & STRENGTH</h1>
            </div>
            <div className="productContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3">
                {task.map(post=>{
                     return <MusclePost key={nanoid()} {...post}/>
                })}
            </div>
    </div>
  )
}

export default Muscles