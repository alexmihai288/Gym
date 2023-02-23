import React from 'react'
import Image from 'next/image';


const Silder = () => {
  return (
    <div className="px-3 mt-3">
      <div className="sliderContainer overflow-hidden md:max-h-[15em] lg:max-h-[25em] max-w-[100%] md:max-w-[1300px] md:mx-auto">
        <div className="slider w-[100%] flex h-[100%] md:hidden">
          <Image alt='ad-1' width={4050} height={4050} className="bg-cover cursor-pointer w-[100%] h-[100%] " src="https://cdn.muscleandstrength.com/store/media/wysiwyg/Home_Slider/2023/02/mt_slider_mobile.jpg"/>
          <Image alt='ad-2' width={4050} height={4050} className="bg-cover cursor-pointer w-[100%] h-[100%] " src="https://cdn.muscleandstrength.com/store/media/wysiwyg/Home_Slider/2023/02/rcss_slider_mobile.jpg"/>
          <Image alt='ad-3' width={4050} height={4050} className="bg-cover cursor-pointer w-[100%] h-[100%] " src="https://cdn.muscleandstrength.com/store/media/wysiwyg/Home_Slider/2023/02/now_slider_mobile.jpg"/>
        </div>
        <div className="slidermd w-[100%] h-[100%] hidden md:flex">
          <Image alt='ad-1' width={4050} height={4050} className="bg-cover cursor-pointer w-[100%] h-[100%] " src="https://cdn.muscleandstrength.com/store/media/wysiwyg/Home_Slider/2023/02/mt_slider_desktop.jpg"/>
          <Image alt='ad-2' width={4050} height={4050} className="bg-cover cursor-pointer w-[100%] h-[100%] " src="https://cdn.muscleandstrength.com/store/media/wysiwyg/Home_Slider/2023/02/rcss_slider_desktop.jpg"/>
          <Image alt='ad-3' width={4050} height={4050} className="bg-cover cursor-pointer w-[100%] h-[100%] " src="https://cdn.muscleandstrength.com/store/media/wysiwyg/Home_Slider/2023/02/now_slider_desktop.jpg"/>
        </div>
      </div>
    </div> 
  )
}

export default Silder
