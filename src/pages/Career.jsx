import React from 'react'
import Navbars from './components/Navbars';
import Footers from './components/Footers';
import Contact from './components/Contact';
import Scroll from './components/Scroll';
import swiper_1 from '../assets/images/swapper_1.jpg';
import swiper_2 from '../assets/images/swapper_2.jpg';
import swiper_3 from '../assets/images/swapper_3.jpg';
import swiper_4 from '../assets/images/swapper_4.jpg';
import swiper_5 from '../assets/images/swapper_5.jpg';
import swiper_6 from '../assets/images/swapper_6.jpg';
import swiper_7 from '../assets/images/swapper_7.jpg';
import swiper_8 from '../assets/images/swapper_8.jpg';
import swiper_9 from '../assets/images/swapper_9.jpg';
import swiper_10 from '../assets/images/swapper_10.jpg';
import swiper_11 from '../assets/images/swapper_11.jpg';
import swiper_12 from '../assets/images/swapper_12.jpg';
import swiper_13 from '../assets/images/swapper_13.jpg';
import swiper_14 from '../assets/images/swapper_14.jpg';
import swiper_15 from '../assets/images/swapper_15.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Career.css';

const Career = () => {
  return (
    <>
    <Scroll />
    <Navbars />
    <div className='bg-[#ffffff] w-full max-w-screen-md 2xl:max-w-screen-lg mx-auto'>
      <div className='translate-y-[-120%] absolute translate-x-[-50%] left-[50%]'>
        <h1 className='text-center text-[#ffffff] font-medium text-[10px] md:*:text-[30px] xl:text-[40px] font-["tenorsans"] px-0 md:px-[1rem]'>
          Work together to achieve optimal results and gain personal growth altogether.
        </h1>
      </div>
      <div data-aos="fade-right" className='py-5 md:py-10'>
        <h1 className='text-center text-[#1D2E5C] font-medium text-[30px] font-["tenorsans"]'>
          Open Positions
        </h1>
        <h1 className='text-center text-[#1D2E5C] font-medium text-[20px] font-["tenorsans"]'>
          Accounting Manager
        </h1>
        <h1 className='text-center text-[#1D2E5C] font-medium text-[20px] font-["tenorsans"]'>
          Accounting Executive
        </h1>
        <h1 className='text-center text-[#1D2E5C] font-medium text-[20px] font-["tenorsans"]'>
          Tax Executive
        </h1>
        <h1 className='text-center text-[#1D2E5C] font-medium text-[20px] font-["tenorsans"]'>
          Internship
        </h1>
      </div>
      <main>
        <div data-aos="fade-left" className='bg-[#ECF1F5] p-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:justify-center'>
            <div className='text-[#1D2E5C] font-medium font-["tenorsans"]'>
              <h1 className='font-medium text-[30px]'>
                Career Information
              </h1>
              <p className='text-[16px]'>
                We are open to accept any talents, please feel free to apply<br/> 
                Enter your email and upload your CVs here
              </p>
            </div>
            <div>
              <form action="" className='grid gap-3 md:gap-[1vw] justify-center'>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered file-input-base-content w-full max-w-xs" />
                </div>
                <button className="btn">Send</button>
              </form>
            </div>
        </div>
      </main>

    </div>

      <Swiper watchSlidesProgress={true} loop={true} grabCursor={true} slidesPerView={3} className="mySwiper"
      >
        <SwiperSlide>
          <img src={swiper_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_11} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_12} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_13} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_14} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_15} />
        </SwiperSlide>
      </Swiper>
    <Contact />
    <Footers />
</>
  )
}

export default Career