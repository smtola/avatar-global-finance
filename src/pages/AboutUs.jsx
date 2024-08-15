import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AboutUs.css';

import iconVision from '../assets/images/vision_2.png';
import iconMission from '../assets/images/mission.png';
import iconCoreValue from '../assets/images/core_value.png';
import iconRegister from '../assets/images/registere.png';
import Navbars from './components/Navbars';
import Footers from './components/Footers';
import Contact from './components/Contact';

const AboutUs = () => {
  return (
    <>
        <Navbars />
          <div className='bg-[#ffffff] w-full max-w-screen-md 2xl:max-w-screen-lg mx-auto px-5 md:px-0'>
            <div className='translate-y-[-20%]'>
              <ul className='grid grid-cols-4 justify-center items-center bg-[#ffffff] shadow-lg text-[#1D2E5C]'>
                <li data-aos="fade-right"
                 className="nav-link-service">
                  <NavLink to="vision" className={`grid justify-center items-center px-1 py-5 md:px-10  md:py-16 border-e-2 border-gray-200 gap-[2vw] transition-all duration-500`}>
                    <span>
                        <img src={iconVision} className='w-[4vh] md:w-[8vh] mx-auto' />
                    </span>
                    <p className='text-[10px] md:text-[20px] text-center font-meduim font-["tenorsans"]'>Vision</p>
                  </NavLink>
                </li>
                <li data-aos="fade-right"
                 className="nav-link-service">
                  <NavLink to="mission" className='grid justify-center items-center px-1 py-5 md:px-10  md:py-16 border-e-2 border-gray-200 gap-[2vw] transition-all duration-500'>
                    <span>
                      <img src={iconMission} className='w-[3vh] md:w-[6vh] mx-auto' />
                    </span>
                    <p className='text-[10px] md:text-[20px] font-meduim font-["tenorsans"]'>Mission</p>
                  </NavLink>
                </li>
                <li data-aos="fade-right"
                 className="nav-link-service">
                  <NavLink to="core-value" className='grid justify-center items-center px-1 py-5 md:px-10  md:py-16 border-e-2 border-gray-200 gap-[2vw] transition-all duration-500'>
                    <span>
                      <img src={iconCoreValue} className='w-[4vh] md:w-[7vh] mx-auto' />
                    </span>
                    <p className='text-[10px] md:text-[20px] font-meduim font-["tenorsans"]'>Core Value</p>
                  </NavLink>
                </li>
                <li data-aos="fade-right"
                 className="nav-link-service">
                  <NavLink to="we-are-register" className='grid justify-center items-center px-1 py-5 md:px-10  md:py-16 gap-[2vw] transition-all duration-500'>
                    <span>
                    <img src={iconRegister} className='w-[3vh] md:w-[6vh] mx-auto' />
                    </span>
                    <p className='text-[10px] text-center md:text-[20px] font-meduim font-["tenorsans"]'>We are registered</p>
                  </NavLink>
                </li>
              </ul>
            </div>

            <main>
              <Outlet/>
            </main>
        </div>
        <Contact/>
        <Footers />
    </>
  )
}

export default AboutUs