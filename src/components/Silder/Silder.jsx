import React from 'react'
import Image from 'next/image';


const Silder = () => {
  return (
    <div className="px-3 mt-3">
      <div className="sliderContainer overflow-hidden">
        <div className="slider w-[100%] flex">
          <Image alt='ad-1' width={4050} height={4050} className="cursor-pointer w-[100%] object-cover" src="https://cdn.muscleandstrength.com/store/media/wysiwyg/Home_Slider/2023/02/mt_slider_mobile.jpg"/>
          <Image alt='ad-2' width={4050} height={4050} className="cursor-pointer w-[100%] object-cover" src="https://cdn.muscleandstrength.com/store/media/wysiwyg/Home_Slider/2023/02/rcss_slider_mobile.jpg"/>
          <Image alt='ad-3' width={4050} height={4050} className="cursor-pointer w-[100%] object-cover" src="https://cdn.muscleandstrength.com/store/media/wysiwyg/Home_Slider/2023/02/now_slider_mobile.jpg"/>
        </div>
      </div>
    </div> 
  )
}

export default Silder
