import Head from 'next/head'
import Ad from '@/components/LandingPage/Ad/Ad'
import Slider from '@/components/LandingPage/Silder/Silder'
import Hero from '@/components/LandingPage/Hero/Hero'
import SideMenu from '@/components/LandingPage/SideMenu/SideMenu'
import Type from '@/components/LandingPage/Type/Type'
import Muscle from '@/components/LandingPage/Muscle&Strength/Muscle'
import Navbar from '@/components/LandingPage/Navbar/Navbar'
import { useState } from 'react'

export default function Home({data}) {
  const [sideMenu,setSideMenu] = useState(false);
  const [outOfSide,setOutOfSide] = useState(false)
  return (
    <>
      <Head>
        <title>Muscle & Strength</title>
      </Head>
      <main className='relative overflow-x-hidden' onClick={()=>{
        if(sideMenu && outOfSide)
          setSideMenu(false)
      }}>
        <Ad />
        <Navbar setSideMenu={setSideMenu} />
        {sideMenu && <SideMenu setOutOfSide={setOutOfSide}/>}
        <Hero />
        <Type/>
        <div className='md:px-16 md:py-4'>
          <Slider/>
          <Muscle muscle={data.muscle} workouts={data.workouts} articles={data.articles}/>
        </div>
        {sideMenu && <div className="darker absolute z-40 top-0 bottom-0 left-0 right-0 backdrop-brightness-50">
                          
                      </div>
        }
      </main>
    </>

  )
}

export async function getServerSideProps(){
  const {default:data}=await import("/data/data.json");
  return {
    props:{
      data
    }
  }
}