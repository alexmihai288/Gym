import React from 'react'
import MusclePost from '../MusclePost/MusclePost'
import { nanoid } from 'nanoid'
import { Open_Sans } from '@next/font/google'
import Link from 'next/link'

const openSans= Open_Sans({ subsets: ['latin']})

const Muscle = ({muscle, workouts, articles}) => {
  return (
    <div className="px-3 md:max-w-[1300px] md:mx-auto md:p-0">
        <div className="titleContainer flex justify-center">
            <Link href="/muscle"><h1 className={`${openSans.className} my-8 uppercase text-[#005599] font-bold text-center text-[30px] md:text-[36px]`}>NEW AT MUSCLE & STRENGTH</h1></Link>
        </div>
        <div className="productContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {muscle.map(post=>{
            return <MusclePost key={nanoid()} {...post}/>
          })}
        </div>
        
        <div className='trendingContainer flex justify-center'>
          <Link href="/workouts"><h1 className={`${openSans.className} my-8 uppercase text-[#005599] font-bold text-center text-[30px] md:text-[36px]`}>TRENDING IN WORKOUTS</h1></Link> 
        </div>
        <div className='workoutContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {workouts.map(post=>{
            return <MusclePost key={nanoid()} {...post}/>
          })}
        </div>

        <div className="trendingArticles flex justify-center">
          <Link href="/articles"><h1 className={`${openSans.className} my-8 uppercase text-[#005599] font-bold text-center text-[30px] md:text-[36px]`}>TRENDING IN ARTICLES</h1></Link>
        </div>
        <div className='articleContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {articles.map(post=>{
            return <MusclePost key={nanoid()} {...post}/>
          })}
        </div>
    </div>  
  )
}

export default Muscle

