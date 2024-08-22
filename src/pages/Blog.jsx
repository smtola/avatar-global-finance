import React from 'react'
import Navbars from './components/Navbars';
import Footers from './components/Footers';

import Contact from './components/Contact';
import Swappers from './components/Swappers';
import Scroll from './components/Scroll';
const Blog = () => {
  return (
    <>
    <Scroll />
      <Navbars />
      <div className='bg-[#ffffff] w-full max-w-screen-lg 2xl:max-w-screen-lg mx-auto'>
        <Swappers/>
      </div>
      <Contact />
      <Footers />
    </>
  )
}

export default Blog