import React,{useState, useEffect} from 'react'
import Navbars from './components/Navbars';
import Footers from './components/Footers';

import Contact from './components/Contact';
import Scroll from './components/Scroll';
import { BlogService } from '../db/BlogServices';
import { Link, Outlet } from 'react-router-dom';
const Blog = () => {
  const items = BlogService();
  return (
    <>
    <Outlet/>
    <Scroll />
      <Navbars />
      <div className='bg-[#ffffff] w-full max-w-screen-lg xl:max-w-screen-xl mx-auto my-10'>
        <div className='grid grid-cols-12 justify-center items-center gap-[2vw] lg:gap-[1vw] px-5'>
          {items.map((blogs) => (
            <Link to={"/blog/blog-details"} data-aos="fade-up" key={blogs.id}
              className='relative col-span-12 md:col-span-6 lg:col-span-4 grid w-full mx-auto min-h-[30rem] items-end overflow-hidden rounded-md group'>
              <img src={blogs.image} className='absolute w-full h-full object-cover object-center inset-0 group-hover:scale-[1.2] duration-500' />
              <div className='absolute bg-black/50 inset-0'></div>
              <div className='relative flex flex-col justify-end p-5'>
                <h1 className='text-[#ffffff] font-bold text-2xl mb-2'>{blogs.title}</h1>
                <p className='text-[#ffffff] font-semibold text-md'>{blogs.content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Contact />
      <Footers />
    </>
  )
}

export default Blog