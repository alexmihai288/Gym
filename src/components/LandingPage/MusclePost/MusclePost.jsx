import React from 'react'
import Image from 'next/image'
import { Open_Sans } from '@next/font/google'
import { Roboto_Flex } from '@next/font/google'
import Link from 'next/link'

const openSans = Open_Sans({subsets:['latin']})
const roboto = Roboto_Flex({subsets:['latin']})

const MusclePost = ({img,title,description,posts,comments}) => {
  return (
    <Link href={`/muscle/${title}`} className='border-b-[5px] border-[#f5f5f5] mt-3.5 md:border-none'>
        <div className='postImageContainer md:max-w-[100%]'>
            <Image width={4050} className="cursor-pointer object-fit w-[100%]" height={4050} src={img} alt="post image"/>
        </div>
        <div className='postInformation text-[#33333]'>
            <div className='postText mb-3.5'>
                <h2 className={`${openSans.className} font-bold text-[22px] mt-3`}>{title}</h2>
                <div className='postDescription'>
                    <p className={`${roboto.className} text-[18px] mt-3 font-extralight`}>{description}</p>
                </div>
            </div>
            <div className='postView flex flex-col xs:flex-row items-start xs:items-center gap-3'>
                <div className='readsContainer bg-[#f5f5f5] text-[16px] rounded-full px-2 py-1'>
                    <p className='font-thin'>{posts} Reads</p>
                </div>
                <div className='commentsContainer bg-[#f5f5f5] text-[16px] rounded-full px-2 py-1'>
                    <p className='font-thin'>{comments} Comments</p>
                </div>
            </div>
            <div className="accessPost text-center my-5 md:hidden">
                <button className='text-[22px] px-2 py-1 rounded-sm hover:bg-gradient-to-l bg-gradient-to-r from-lightBlue to-blue-800 text-[#e5e5e5]'>View Article</button>
            </div>
        </div>
    </Link>
  )
}

export default MusclePost