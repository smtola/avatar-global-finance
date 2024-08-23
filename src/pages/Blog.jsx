import React from 'react'
import Navbars from './components/Navbars';
import Footers from './components/Footers';
import imgCard from '../assets/images/blog_1.jpg';
import Contact from './components/Contact';
import Scroll from './components/Scroll';
const Blog = () => {
  return (
    <>
    <Scroll />
      <Navbars />
      <div className='bg-[#ffffff] w-full max-w-screen-lg xl:max-w-screen-xl mx-auto my-10'>
        <div className='grid grid-cols-12 justify-center items-center gap-[2vw] lg:gap-[1vw] px-5'>

          <a href='#' data-aos="fade-up"
            className='col-span-12 md:col-span-6 lg:col-span-4 relative grid min-h-[30rem] items-end overflow-hidden rounded-md group'>
            <img src={imgCard} className='absolute w-full h-full object-cover object-center inset-0 group-hover:scale-[1.2] duration-500' />
            <div className='absolute bg-black/50 inset-0'></div>
            <div className='relative flex flex-col justify-end p-5'>
              <h1 className='text-[#ffffff] font-bold text-2xl'>Lorem ipsum</h1>
              <p className='text-[#ffffff] font-semibold text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequatur molestias magnam assumenda quidem voluptates culpa iusto nemo distinctio, autem provident, dolorem, iste doloribus consectetur optio laborum officiis iure aperiam!</p>
            </div>
          </a>
          <a href='#' data-aos="fade-up"
            className='col-span-12 md:col-span-6 lg:col-span-4 relative grid min-h-[30rem] items-end overflow-hidden rounded-md group'>
            <img src={imgCard} className='absolute w-full h-full object-cover object-center inset-0 group-hover:scale-[1.2] duration-500' />
            <div className='absolute bg-black/50 inset-0'></div>
            <div className='relative flex flex-col justify-end p-5'>
              <h1 className='text-[#ffffff] font-bold text-2xl'>Lorem ipsum</h1>
              <p className='text-[#ffffff] font-semibold text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequatur molestias magnam assumenda quidem voluptates culpa iusto nemo distinctio, autem provident, dolorem, iste doloribus consectetur optio laborum officiis iure aperiam!</p>
            </div>
          </a>
          <a href='#' data-aos="fade-up"
            className='col-span-12 md:col-span-6 lg:col-span-4 relative grid min-h-[30rem] items-end overflow-hidden rounded-md group'>
            <img src={imgCard} className='absolute w-full h-full object-cover object-center inset-0 group-hover:scale-[1.2] duration-500' />
            <div className='absolute bg-black/50 inset-0'></div>
            <div className='relative flex flex-col justify-end p-5'>
              <h1 className='text-[#ffffff] font-bold text-2xl'>Lorem ipsum</h1>
              <p className='text-[#ffffff] font-semibold text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequatur molestias magnam assumenda quidem voluptates culpa iusto nemo distinctio, autem provident, dolorem, iste doloribus consectetur optio laborum officiis iure aperiam!</p>
            </div>
          </a>

        </div>
      </div>
      <Contact />
      <Footers />
    </>
  )
}

export default Blog