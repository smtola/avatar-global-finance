import React from 'react'
import Navbars from './components/Navbars';
import Footers from './components/Footers';
import bannerBlog from '../assets/images/blog_banner.jpg';
import Contact from './components/Contact';
import Scroll from './components/Scroll';
const Blog = () => {
  return (
    <>
    <Scroll />
      <Navbars />
      <div className='bg-[#ffffff] w-full max-w-screen-lg 2xl:max-w-screen-lg mx-auto'>
        <div className='bg-[#1D2E5C] overflow-hidden grid grid-cols-1 lg:grid-cols-2 md:translate-y-[-12%]'>
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
              {/* <div className="collapse collapse-arrow join-item bg-[#D9D9D9] backdrop-blur-[5px] bg-opacity-[.1]">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Does my company call for an audit after three years of business operation ?</div>
                <div className="collapse-content">
                  <p>What kind of questions will I be asked during external auditing?</p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item bg-[#D9D9D9] backdrop-blur-[5px] bg-opacity-[.1]">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Does my company call for an audit after three years of business operation ?</div>
                <div className="collapse-content">
                  <p>What kind of questions will I be asked during external auditing?</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footers />
    </>
  )
}

export default Blog