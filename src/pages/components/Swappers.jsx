import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerBlog from '../../assets/images/blog_1.jpg';
import bannerBlog_2 from '../../assets/images/blog_2.jpg';
import bannerBlog_3 from '../../assets/images/blog_3.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Swappers = () => {
    return (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper md:translate-y-[-12%]"
          >
            <SwiperSlide className='bg-[#1D2E5C] overflow-hidden grid grid-cols-1 lg:grid-cols-2'>
                <div data-aos="fade-right"  className='overflow-hidden'>
                  <img src={bannerBlog} className='w-full mx-auto max-w-lg object-cover brightness-[.8]' />
                </div>
                <div data-aos="fade-left"  className='p-6'>
                  <h1 className='text-[50px] text-center text-[#ffffff] mb-5'>Blog /FAQs</h1>
                  <div className="join join-vertical w-full text-[#ffffff]">
                    <div className="collapse collapse-arrow join-item bg-[#D9D9D9] backdrop-blur-[5px] bg-opacity-[.1]">
                      <input type="radio" name="my-accordion-4" defaultChecked />
                      <div className="collapse-title text-xl font-medium">Does my company call for an audit after three years of business operation ? </div>
                      <div className="collapse-content">
                        <p>What kind of questions will I be asked during external auditing?</p>
                      </div>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-[#1D2E5C] overflow-hidden grid grid-cols-1 lg:grid-cols-2'>
                <div data-aos="fade-right"  className='overflow-hidden'>
                  <img src={bannerBlog_2} className='w-full mx-auto max-w-lg object-cover brightness-[.8]' />
                </div>
                <div data-aos="fade-left"  className='p-6'>
                  <h1 className='text-[50px] text-center text-[#ffffff] mb-5'>Blog /FAQs</h1>
                  <div className="join join-vertical w-full text-[#ffffff]">
                    <div className="collapse collapse-arrow join-item bg-[#D9D9D9] backdrop-blur-[5px] bg-opacity-[.1]">
                      <input type="radio" name="my-accordion-4" defaultChecked />
                      <div className="collapse-title text-xl font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                      <div className="collapse-content">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-[#1D2E5C] overflow-hidden grid grid-cols-1 lg:grid-cols-2'>
                <div data-aos="fade-right"  className='overflow-hidden'>
                  <img src={bannerBlog_3} className='w-full mx-auto max-w-lg object-cover brightness-[.8]' />
                </div>
                <div data-aos="fade-left"  className='p-6'>
                  <h1 className='text-[50px] text-center text-[#ffffff] mb-5'>Blog /FAQs</h1>
                  <div className="join join-vertical w-full text-[#ffffff]">
                    <div className="collapse collapse-arrow join-item bg-[#D9D9D9] backdrop-blur-[5px] bg-opacity-[.1]">
                      <input type="radio" name="my-accordion-4" defaultChecked />
                      <div className="collapse-title text-xl font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                      <div className="collapse-content">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
          </Swiper>
        </>
    );
}

export default Swappers