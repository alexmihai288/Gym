import Head from 'next/head';
import React from 'react'
import MusclePost from '@/components/MusclePost/MusclePost';
import { nanoid } from 'nanoid';

const index = ({data}) => {
  const {muscle}=data;
  return (
    <>
        <Head>
            <title>Muscles</title>
        </Head>
        <div>
            {muscle.map(post=>{
                return <MusclePost key={nanoid()} {...post}/>
            })}
        </div>
    </>
  )
}

export default index


export async function getStaticProps(){
    const {default:data}=await import("/data/data.json");
    return {
      props:{
        data
      }
    }
  }