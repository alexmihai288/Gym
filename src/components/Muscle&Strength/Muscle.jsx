import React from 'react'
import MusclePost from '../MusclePost/MusclePost'
import { nanoid } from 'nanoid'
import { Open_Sans } from '@next/font/google'

const openSans= Open_Sans({ subsets: ['latin']})

const Muscle = ({muscle, workouts, articles}) => {
  return (
    <div className="px-3">
        <div className="titleContainer">
            <h1 className={`${openSans.className} my-6 uppercase text-[#005599] font-bold text-center text-[30px]`}>NEW AT MUSCLE & STRENGTH</h1>
        </div>
        <div className="productContainer flex flex-col gap-2">
          {muscle.map(post=>{
            return <MusclePost key={nanoid()} {...post}/>
          })}
        </div>
        
        <div className='trendingContainer'>
          <h1 className={`${openSans.className} my-4 uppercase text-[#005599] font-bold text-center text-[30px]`}>TRENDING IN WORKOUTS</h1>
        </div>
        <div className='workoutContainer flex flex-col gap-2'>
          {workouts.map(post=>{
            return <MusclePost key={nanoid()} {...post}/>
          })}
        </div>

        <div className="trendingArticles">
        <h1 className={`${openSans.className} my-4 uppercase text-[#005599] font-bold text-center text-[30px]`}>TRENDING IN ARTICLES</h1>
        <div className='articleContainer flex flex-col gap-2'>
          {articles.map(post=>{
            return <MusclePost key={nanoid()} {...post}/>
          })}
        </div>
        </div>

      </div>
  )
}

export default Muscle

