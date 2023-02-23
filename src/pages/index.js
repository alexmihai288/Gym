import Head from 'next/head'
import Ad from '@/components/Ad/Ad'
import Navbar from '@/components/Navbar/Navbar'
import Slider from '@/components/Silder/Silder'
import Hero from '@/components/Hero/Hero'
import SideMenu from '@/components/SideMenu/SideMenu'
import Type from '@/components/Type/Type'
import Muscle from '@/components/Muscle&Strength/Muscle'
import { useState } from 'react'
import Footer from '@/components/Footer/Footer'

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
        <div className='md:px-16 md:py-6'>
          <Slider/>
          <Muscle muscle={data.muscle}  workouts={data.workouts} articles={data.articles}/>
        </div>
        <Footer />
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