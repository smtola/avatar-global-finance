import React from 'react';
import { NavLink } from 'react-router-dom';
import logoWhite from '../../assets/images/logo/white_logo.png';
const Footers = () => {
  return (
    <>
      <footer className='bg-[#1D2E5C] w-full  mx-auto'>
        <div className='grid grid-cols-2 gap-2 md:grid-cols-3 items-center justify-evenly py-16 px-5'>
          <div className="grid justify-center" data-aos="zoom-in">
            <img src={logoWhite} alt="logo" className='w-[24vh] xl:w-[30vh]'/>
            <p className='text-[17px] text-[#ffffff] mt-5'>
              We actively share our knowledge and pass down years of experience to maintain excellence throughout the Notary Office.
            </p>
          </div>
          <div className="grid justify-center">
            <h1 className='text-[30px] font-["Tenor Sans"] font-medium text-white'>Quick Link</h1>
            <ul className='font-["Tenor Sans"] font-medium text-white'>
              <li data-aos="zoom-in"><NavLink to="/">Home</NavLink></li>
              <li data-aos="zoom-in"><NavLink to="/about-us">About Us</NavLink></li>
              <li data-aos="zoom-in"><NavLink to="/our-service">Our Service</NavLink></li>
              <li data-aos="zoom-in"><NavLink to="/career">Career</NavLink></li>
              <li data-aos="zoom-in"><NavLink to="/blog">Blog</NavLink></li>
            </ul>
          </div>
          <div className="grid md:justify-center">
            <h1 className='text-[30px] font-["Tenor Sans"] font-medium text-white'>Contact Us</h1>
            <ul className='font-["Tenor Sans"] font-medium text-white'>
              <li data-aos="zoom-in">+855 17 966 659</li>
              <li data-aos="zoom-in">+855 69 666 499</li>
            </ul>

            <h1 className='text-[30px] font-["Tenor Sans"] font-medium text-white mt-5'>Follow Us</h1>
            <ul className='flex justify-start gap-[3vw] items-center text-white'>
              <li data-aos="zoom-in">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="28" fill="currentColor"><path d="M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z"></path><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>
                </span>
              </li>
              <li data-aos="zoom-in">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="28" fill="currentColor"><path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path><path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path><circle cx="15.156" cy="4.858" r="1.237"></circle></svg>
                </span>
              </li>
              <li data-aos="zoom-in">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="28" fill="currentColor"><path d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M14.4415206,6 C14.060553,6.00676048 13.476055,6.20741135 10.663148,7.36249773 C9.67796175,7.7670526 7.70897661,8.60437935 4.75619264,9.87447795 C4.27670659,10.0627254 4.02553067,10.2468857 4.00266485,10.4269588 C3.95876487,10.7726802 4.46291296,10.8803081 5.09723696,11.0838761 C5.61440201,11.2498453 6.31007997,11.4440124 6.67173438,11.4517262 C6.99978943,11.4587234 7.36593635,11.3251987 7.77017511,11.051152 C10.5290529,9.21254679 11.9531977,8.28322679 12.0426094,8.26319203 C12.1056879,8.24905787 12.1930992,8.23128593 12.2523244,8.28325656 C12.3115496,8.33522719 12.3057275,8.43364956 12.299454,8.46005377 C12.2492926,8.67117474 9.65764825,10.998457 9.50849738,11.1513987 L9.43697409,11.2233057 C8.88741493,11.7661123 8.33196049,12.1205055 9.290333,12.7440164 C10.155665,13.3069957 10.6592923,13.6661378 11.5507686,14.2430701 C12.1204738,14.6117635 12.5671299,15.0489784 13.1553348,14.9955401 C13.4259939,14.9709508 13.705567,14.7196888 13.8475521,13.9703127 C14.1831052,12.1993135 14.8426779,8.36209709 14.9951103,6.78087197 C15.0084653,6.64233621 14.9916649,6.46503787 14.9781732,6.38720805 C14.9646815,6.30937823 14.9364876,6.19848702 14.8340164,6.11639754 C14.7126597,6.01917896 14.5253109,5.99867765 14.4415206,6 Z"></path></svg>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className='bg-[#ffffff] py-5'>
        <h1 className='text-[#1D2E5C] text-center font-["Tenor Sans"] font-medium'>&copy; {(new Date().getFullYear())} All right reserve by Avatar Finance and Accounting</h1>
      </div>
    </>
  )
}
export default Footers;