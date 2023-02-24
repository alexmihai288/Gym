import React from 'react'
import Image from 'next/image';
import Comment from '@/components/Comment/Comment';
const openSans = Open_Sans({ subsets: ['latin'] })
import { Open_Sans } from '@next/font/google'

const SinglePost = (props) => {
    const {img,title,description,posts,comments,data,date}=props.target;
    const res=props.res;
    console.log(res);
    const allComments=[];
    for(let i=0;i<comments;i++){
        allComments.push(<Comment key={res[i].id} com={res[i]}/>)
    }
  return (
    <div className='px-2 mt-5 max-w-[1000px] mx-auto'>

        <div className='flex flex-col gap-2.5 font-light mb-5'>
                <div className='flex gap-3 items-center'>
                    <Image className='rounded-full w-12 h-12' src="https://cdn.muscleandstrength.com/sites/default/files/styles/100x100/public/field/image/author/mns.jpg?itok=_9tNZRfe" alt='M&S Writers' width={4050} height={4050} />
                    <div>
                        <p>Written By: <span className='text-[#004984] cursor-pointer'>M&S Writers</span></p>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p>Categories: <span className='bg-[#f5f5f5] text-[16px] rounded-full px-2 py-1 font-thin text-center'>{data}</span></p>
                    <p>{posts} Reads</p>
                </div>
                <div className="socials flex item-center gap-2 text-xl text-white">
                    <div className='bg-[#738a8d] rounded-full px-1.5 py-0.5 hover:-translate-y-1 duration-150 cursor-pointer'> 
                        <i className="bi bi-printer"></i>
                    </div>
                    <div className='bg-[#3B5998] rounded-full flex items-center justify-center px-1.5 py-0.5 hover:-translate-y-1 duration-150 cursor-pointer'>
                        <i className="bi bi-facebook"></i>
                    </div>
                    <div className='bg-[#585858] rounded-full flex items-center justify-center px-1.5 py-0.5 hover:-translate-y-1 duration-150 cursor-pointer'>
                        <i className="bi bi-envelope-at"></i>
                    </div>
                    <div className='bg-[#4DC247] rounded-full flex items-center justify-center px-1.5 py-0.5 hover:-translate-y-1 duration-150 cursor-pointer'>
                        <i className="bi bi-whatsapp"></i>
                    </div>
                    <div className='bg-[#CB2027] rounded-full flex items-center justify-center px-1.5 py-0.5 hover:-translate-y-1 duration-150 cursor-pointer'>
                        <i className="bi bi-pinterest"></i>
                    </div> 
                    <div className='bg-[#1DA1F2] flex items-center justify-center rounded-full px-1.5 py-0.5 hover:-translate-y-1 duration-150 cursor-pointer'>
                        <i className="bi bi-twitter"></i>
                    </div>
                    <div className='bg-[#0084FF] flex items-center justify-center rounded-full px-1.5 py-0.5  hover:-translate-y-1 duration-150  cursor-pointer'>
                        <i class="bi bi-messenger"></i>
                    </div>
                </div>
         </div>

        <div className='postHeader'>
            <Image className='w-[100%] max-w-[100%] md:max-h-[650px]' src={img} width={4050} height={4050} alt="post image"/>
            <h1 className={`${openSans.className} text-[#005599] font-medium text-start text-[1.3em] mt-5`}>{title}</h1>
        </div>
        <div className='postContent'>
            <p>
                {description}
            </p>
            <div className='postOptions mt-4'>
                    <div className="typeContainer grid grid-cols-3 justify-center items-center">
                        <div className="cursor-pointer flex flex-col items-center hover:bg-gray-200 w-[100%] duration-100 md:px-12">
                            <i className="bi bi-arrow-up-square-fill text-[28px] text-[#005599] md:text-[35px]"></i>
                            <p className="text-[#aaaaaa] text-[16px]">Up Vote</p>
                        </div>
                        <div className="cursor-pointer flex flex-col items-center hover:bg-gray-200 w-[100%] duration-100 md:px-12">
                            <i className="bi bi-arrow-down-square-fill text-[28px] md:text-[35px] text-[#005599]"></i>
                            <p className="text-[#aaaaaa] text-[16px]">Down Vote</p>
                        </div>
                        <div className="cursor-pointer flex flex-col items-center hover:bg-gray-200 w-[100%] duration-100 md:px-12">
                            <i className="bi bi-chat-right-text text-[28px] md:text-[35px] text-[#005599]"></i>
                            <p className="text-[#aaaaaa] text-[16px]">Comment</p>
                        </div>
                </div>
            </div>
            <div className="commentsContainer mt-10">
                <div className='flex items-center gap-6'>
                    <div className='bg-gray-200 px-3 py-1 rounded-md readsContainer'>
                        <p>{posts} Reads</p>
                    </div>
                    <div className='bg-gray-200 px-3 py-1 rounded-md commentsWrapper'>
                        <p>{comments} comments</p>
                    </div>
                </div>
                <div className="rounded-sm bg-gray-100 p-3 comments grid grid-cols-1 gap-5 mt-10 max-h-[500px] overflow-y-scroll">
                    {allComments}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePost
