import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import imgBanner from '../../assets/images/Welcome-banner.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Navbars = () => {
  AOS.init({
    duration: 1000,
  });
const  handleClickMenu =()=>{
    document.querySelector('.menu').classList.toggle('visible');
  }
  return (
    <>
      <div className='z-[10]'>
        <img src={imgBanner} className='contrast-[.8] brightness-[.9]' />
      </div>
      <div className='w-full max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-xl absolute top-0 translate-x-[-50%] left-[50%] lg:px-3 xl:px-0 '>
        <header className='flex justify-between z-[50] py-2 px-2'>
          <div>
            <img src={logo} alt="logo" className='w-[20vh] md:w-[30vh] lg:w-[16vh] xl:w-[25vh] 2xl:w-[40vh]'/>
          </div>
          <div className='lg:flex justify-center  items-center gap-4 hidden'>
            <div className='grid'>
              <div className='flex gap-2 items-center'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock-hour-3 w-[22px] h-[22px] xl:w-[24px] xl:h-[24px]" viewBox="0 0 24 24" stroke-width="1" stroke="#1D2E5C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M12 12h3.5" />
                      <path d="M12 7v5" />
                    </svg>
                </span>
                <b className='flex gap-1 font-["Inter"] text-[12px] lg:text-[18px] 2xl:text-[20px] text-[#1D2E5C]'><p>Monday-Friday</p> <p class="text-gray-200">8am-5pm</p></b>
              </div>    
            </div>
            <div className='grid'>
              <div className='flex justify-center items-center gap-2'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock-hour-3 w-[22px] h-[22px] xl:w-[24px] xl:h-[24px]" viewBox="0 0 24 24" stroke-width="1" stroke="#1D2E5C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </span>
                <b className='font-["inter"] text-[12px] lg:text-[18px] 2xl:text-[20px] text-[#1D2E5C]'>huy@avatar-gfaf.com.kh</b>
              </div>
              {/* <div className='flex gap-2 '>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#1D2E5C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                </span>
                <b className='font-["Inter"] text-[12px] 2xl:text-[14px] text-[#1D2E5C] text-wrap'>Villa No. 37, 2nd Floor, Street 360, Village 1,<br></br> Sangkat Boeung Keng Kang 1, 
                Khan Boeung Keng Kang,<br></br> Phnom Penh City, Kingdom of Cambodia 
                </b>
              </div> */}
            </div>
            <div className='grid'>
              <div className='flex gap-2 items-center '>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock-hour-3 w-[22px] h-[22px] xl:w-[24px] xl:h-[24px]" viewBox="0 0 24 24" stroke-width="1" stroke="#1D2E5C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                </span>
                <b className='font-["Inter"] text-[12px] lg:text-[18px] 2xl:text-[20px] text-[#1D2E5C]'>+855 (0) 12 772 771</b>
              </div>
            </div>
          </div>

          <label className="lg:hidden btn btn-circle swap swap-rotate text-[#1D2E5C] bg-transparent border-none shadow-none">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={handleClickMenu}/>

            {/* hamburger icon */}
            <svg
              id="hamburger"
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              id='close-icon'
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </header>

        <div className='hidden lg:block'>
          <nav className='w-full bg-[#ffffff] shadow-md'>
            <div className='p-5'>
                <ul className='flex justify-evenly font-medium text-[#1D2E5C] text-[23px] font-["tenorsans"]'>
                  <li className={`relative text-[#1f3676] nav-link`}>
                    <NavLink to="/" >
                      Home
                    </NavLink>
                  </li>
                  <li className='relative hover:text-[#1f3676] nav-link'>
                    <NavLink to="/about-us">About Us</NavLink>
                  </li>
                  <li className='relative hover:text-[#1f3676] nav-link'>
                    <NavLink to="/our-service">Our Services</NavLink>
                  </li>
                  <li className='relative hover:text-[#1f3676] nav-link'>
                    <NavLink to="/career">Career</NavLink>
                  </li>
                  <li className='relative hover:text-[#1f3676] nav-link'>
                    <NavLink to="/photo-gallery">Photo Gallery</NavLink>
                  </li>
                  <li className='relative hover:text-[#1f3676] nav-link'>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                  </li>
                </ul>
            </div>
          </nav>
        </div>

        <div className='my-0 xl:my-10'>
          <div className="text-center uppercase text-[#1D2E5C] font-['tenorsans']" data-aos="fade-right">
            <h1 className='text-[16px] md:pt-3 lg:pt-0 md:text-[30px] lg:text-[50px] 2xl:text-[120px]'>Welcome</h1>
            <h1 className='text-[13px] md:text-[23px] xl:text-[20px] 2xl:text-[40px]'>Avartar Global Finance & Accounting Firm</h1>
          </div>
        </div>
      </div>

      <div className='menu lg:hidded block shadow-xl rounded-xl'>
        <div className='bg-gray-200 w-full mx-auto max-w-[30px] p-1 rounded-full mb-5'></div>
        <ul className='grid font-medium text-[#1D2E5C] text-[23px] font-["tenorsans"]'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/our-service">Our Services</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
          <li>
            <NavLink to="/photo-gallery">Photo Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbars