import React from 'react'

const Type = () => {
  return (
        <div className="bg-[#f5f5f5] py-[5px] md:flex md:justify-center">
        <div className="typeContainer grid grid-cols-3 sm:grid-cols-6">
            <div className="cursor-pointer flex flex-col items-center hover:bg-gray-200 w-[100%] duration-100 md:px-6">
                <i className="bi bi-cup-straw text-[28px] text-[#005599] md:text-[35px]"></i>
                <p className="text-[#aaaaaa] text-[16px]">Store</p>
            </div>
            <div className="cursor-pointer flex flex-col items-center hover:bg-gray-200 w-[100%] duration-100 md:px-6">
                <i className="bi bi-activity text-[28px] md:text-[35px] text-[#005599]"></i>
                <p className="text-[#aaaaaa] text-[16px]">Workouts</p>
            </div>
            <div className="cursor-pointer flex flex-col items-center hover:bg-gray-200 w-[100%] duration-100 md:px-6">
                <i className="bi bi-heart-pulse-fill text-[28px] md:text-[35px] text-[#005599]"></i>
                <p className="text-[#aaaaaa] text-[16px]">Exercices</p>
            </div>
            <div className="cursor-pointer flex flex-col items-center hover:bg-gray-200 w-[100%] duration-100 md:px-6">
                <i className="bi bi-card-text text-[28px] md:text-[35px] text-[#005599]"></i>
                <p className="text-[#aaaaaa] text-[16px]">Articles</p>
            </div>
            <div className="cursor-pointer flex flex-col items-center hover:bg-gray-200 w-[100%] duration-100 md:px-6">
                <i className="bi bi-egg-fried text-[28px] md:text-[35px] text-[#005599]"></i>
                <p className="text-[#aaaaaa] text-[16px]">Diet Plans</p>
            </div>
            <div className="cursor-pointer flex flex-col items-center hover:bg-gray-200 w-[100%] duration-100 md:px-6">
                <i className="bi bi-gear text-[28px] text-[#005599] md:text-[35px]"></i>
                <p className="text-[#aaaaaa] text-[16px]">Tools</p>
            </div>
        </div>
    </div>
  )
}

export default Type