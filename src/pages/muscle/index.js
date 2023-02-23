import React from 'react'
import Head from 'next/head';
import MusclePost from '@/components/LandingPage/MusclePost/MusclePost';
import { nanoid } from 'nanoid';
import { Open_Sans } from '@next/font/google'


const openSans = Open_Sans({ subsets: ['latin'] })


export default function MusclePage({muscle}){
  return (
    <>
      <Head>
        <title>Muscle</title>
      </Head>
      
        <div className='max-w-[1300px] mx-auto'>
            <div>
            <h1 className={`${openSans.className} my-8 uppercase text-[#005599] font-bold text-center text-[30px] md:text-[36px]`}>NEW AT MUSCLE & STRENGTH</h1>
            </div>
            <div className="productContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {muscle.map(post=>{
                return <MusclePost key={nanoid()} {...post}/>
                })}
            </div>
        </div>
    </>
   
  )
}



export async function getServerSideProps(){
    const {muscle} = await import("/data/data.json");
    if(muscle){
        return {
            props:{
                muscle
            }
        }
    }else{
        return {notFound:true}
    }
}