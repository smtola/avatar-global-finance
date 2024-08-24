import React from 'react';
import {Link } from 'react-router-dom';
import Footers from './Footers';
import Contact from './Contact';
import Scroll from '../components/Scroll';
import { BlogService} from '../../db/BlogServices';
const BlogDetails = () => {
  const items = BlogService();
  // Use the id parameter to fetch and display blog details
  return (
      <>
        <Scroll/>
        <div className='w-full max-w-screen-lg xl:max-w-screen-xl max-lg:px-5 mx-auto overflow-y-scroll my-10'>
          <div className='m-10 group flex items-center justify-between'>
            <div>
              <h1 className='text-lg md:text-2xl xl:text-3xl font-bold'>Blog Details</h1>
            </div>
            <Link to={"/blog"}
              className='flex items-center group-hover:bg-black/20 group-hover:underline w-[6rem] p-3 backdrop-blur-[5px] bg-opacity-100 rounded-xl transition-all duration-500'>
              <span >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5 12l14 0" />
                  <path d="M5 12l4 4" />
                  <path d="M5 12l4 -4" />
                </svg> 
              </span>
              <p>Back</p>
            </Link>
          </div>
            <div className='grid grid-cols-12 justify-center items-center gap-[3vw]' data-aos="fade-up">
              {items.map((items,i)=>(
                <div  key={i}
                  className='col-span-12 lg:col-span-6'>
                  <img src={items.image} className='w-full h-full object-cover object-center' />
                  <h1 className='text-lg md:text-2xl xl:text-3xl my-2'>{items.title}</h1>
                  <p className='text-[16px]'>{items.content}</p>
                </div>
              ))}
            </div>
        </div>
        <Contact />
        <Footers />
      </>
    )
}

export default BlogDetails