import React from 'react'

const Comment = (props) => {
    const {email,body}=props.com
  return (
    <div className=''>
        <div className='comHeader bg-gray-400 px-2 py-2 rounded-t-md'>
            <p className='text-sm'>Email: <small className='ml-1'>{email}</small></p>
        </div>
        <div className='comBody bg-gray-200 px-5 py-2 rounded-b-md'>
            <p className='text-sm'>{body}</p>
        </div>
    </div>
  )
}

export default Comment
