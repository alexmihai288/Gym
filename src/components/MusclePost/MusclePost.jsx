import React from 'react'
import Image from 'next/image'

const MusclePost = ({img,title,description,posts,comments}) => {
  return (
    <div className='border-b-[5px] border-[#f5f5f5] mt-3.5'>
        <div className='postImageContainer'>
            <Image width={4050} className="cursor-pointer object-fit md:max-w-[380px]" height={4050} src={img} alt="post image"/>
        </div>
        <div className='postInformation text-[#33333]'>
            <div className='postText mb-3.5'>
                <h2 className='font-medium text-[22px] mt-2'>{title}</h2>
                <div className='postDescription'>
                    <p className='text-[19px] font-thin'>{description}</p>
                </div>
            </div>
            <div className='postView flex items-center gap-3'>
                <div className='readsContainer bg-[#f5f5f5] text-[16px] rounded-full px-2 py-1'>
                    <p className='font-thin'>{posts} Reads</p>
                </div>
                <div className='commentsContainer bg-[#f5f5f5] text-[16px] rounded-full px-2 py-1'>
                    <p className='font-thin'>{comments} Comments</p>
                </div>
            </div>
            <div className="accessPost text-center my-5">
                <button className='text-[22px] px-2 py-1 rounded-sm hover:bg-gradient-to-l bg-gradient-to-r from-lightBlue to-blue-800 text-[#e5e5e5]'>View Article</button>
            </div>
        </div>
    </div>
  )
}

export default MusclePost