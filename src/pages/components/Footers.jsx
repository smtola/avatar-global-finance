import React from 'react';
import { NavLink } from 'react-router-dom';
import logoWhite from '../../assets/images/logo/white_logo.png';
const Footers = () => {
  return (
    <>
      <footer className='bg-[#1D2E5C] w-full  mx-auto'>
        <div className='flex flex-wrap lg:flex-nowrap justify-evenly gap-[5vw] py-16 px-5'>
          <div className="w-full max-w-lg mx-auto" data-aos="zoom-in">
            <img src={logoWhite} alt="logo" className='w-[30vh] xl:w-[60vh] max-lg:mx-auto my-3'/>
          </div>
          <div className='grid grid-cols-12 gap-3'>
            <div className="col-span-12 lg:col-span-4 max-sm:flex max-sm:gap-[5vw]">
              <ul className='font-["tenorsans"] font-medium text-white'>
                <li><h1 className='text-[20px] xl:text-[30px] font-["tenorsans"] font-medium text-white my-4'>Office Contact</h1></li>
                <li>Mr. NGUON SO SOK HEANG </li>
                <li data-aos="zoom-in" className='flex gap-2'>
                  <a href='https://t.me/+855 17 600 499' className='hover:scale-[1.2] transition-all duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                    </svg>
                  </a>
                  <p>
                    +855 17 600 499
                  </p>
                </li>
                <li>Mr. HORM PHANNAK</li>
                <li data-aos="zoom-in" className='flex gap-2'>
                  <a href='https://t.me/+855 88 544 4905' className='hover:scale-[1.2] transition-all duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                    </svg>
                  </a>
                  <p>
                    +855 88 544 4905
                  </p>
                </li>
              </ul>
              <ul className='font-["tenorsans"] font-medium text-white'>
                <li><h1 className='text-[20px] text-center md:text-start xl:text-[30px] font-["tenorsans"] font-medium text-white my-4'>Follow Us</h1></li>
                <li data-aos="zoom-in" className='flex gap-2 md:justify-start'>
                  <a className='hover:scale-[1.2] transition-all duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                  </a>|
                  <a className='hover:scale-[1.2] transition-all duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                      <path d="M8 11l0 5" />
                      <path d="M8 8l0 .01" />
                      <path d="M12 16l0 -5" />
                      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                  </a>|
                  <a className='hover:scale-[1.2] transition-all duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-span-12 lg:col-span-8'>
              <h1 className='text-[20px] xl:text-[30px] font-["tenorsans"] font-medium text-white my-4'>Operation Contact</h1>
              <ul className='font-["tenorsans"] font-medium text-white'>
                <li data-aos="zoom-in" className='flex gap-2 my-1'>
                  <a href="tel:+855 12 772 771" className='hover:scale-[1.2] transition-all duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                  </a>
                  <p>+855 12 772 771</p>
                </li>
                <li data-aos="zoom-in" className='flex gap-2 my-1'>
                  <a href='mailto:huy@avatar-gfaf.com.kh' className='hover:scale-[1.2] transition-all duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                  </a>
                  <p>huy@avatar-gfaf.com.kh</p>
                </li>
                <li data-aos="zoom-in" className='flex gap-2 my-1'>
                  <a href='www.avatar-gfaf.com.kh' className='hover:scale-[1.2] transition-all duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M3.6 9h16.8" />
                      <path d="M3.6 15h16.8" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" />
                      <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                  </a>
                  <p>www.avatar-gfaf.com.kh</p>
                </li>
                <li data-aos="zoom-in" className='flex gap-2 my-1'>
                  <a href='https://maps.app.goo.gl/hp14CJubhwVpk5ScA' className='hover:scale-[1.2] transition-all duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                      </svg>
                  </a>
                  <p>Villa No. 37, 2nd Floor, Street 360, Village 1, Sangkat Boeung Keng Kang 1, Khan Boeung Keng Kang, Phnom Penh City, Kingdom of Cambodia</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className='bg-[#ffffff] py-5'>
        <h1 className='text-[#1D2E5C] text-center font-["tenorsans"] font-medium'>&copy; {(new Date().getFullYear())} All right reserve by Avatar Finance and Accounting</h1>
      </div>
    </>
  )
}
export default Footers;