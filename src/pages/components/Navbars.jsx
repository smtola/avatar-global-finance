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
      <div className='z-[10] '>
        <img src={imgBanner} className='contrast-[.8] brightness-[.9]' />
      </div>
      <div className='w-full max-w-screen-md 2xl:max-w-screen-lg absolute top-0 translate-x-[-50%] left-[50%]'>
        <header className='flex justify-between z-[50] py-2 px-2'>
          <div>
            <img src={logo} alt="logo" className='w-[18vh]'/>
          </div>
          <div className='lg:flex justify-center gap-4 hidden'>
            <div className='grid'>
              <div className='flex justify-center gap-2'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="#1D2E5C"><path d="M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z"></path><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>
                </span>
                <b className='font-["inter"] text-[12px] 2xl:text-[14px] text-[#1D2E5C]'>AVATAR ACCOUNTING & FINANCE</b>
              </div>
              <div className='flex gap-2'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="#1D2E5C"><path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path><path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path><circle cx="15.156" cy="4.858" r="1.237"></circle></svg>
                </span>
                <b className='font-["inter"] text-[12px] 2xl:text-[14px] text-[#1D2E5C]'>AVATAR Cambodia</b>
              </div>
            </div>
            <div className='flex gap-2'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="#1D2E5C"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path><path d="M13.644 9.404c.012-1.492-1.219-2.86-2.744-3.049L10.8 6.34a1.384 1.384 0 0 0-.232-.026c-.313 0-.396.226-.418.361a.43.43 0 0 0 .06.329c.104.145.286.17.432.192.043.006.084.011.117.02 1.371.315 1.833.812 2.058 2.215.006.035.008.077.01.122.01.167.031.516.395.516.03 0 .062-.002.096-.008.339-.053.328-.372.323-.525-.002-.043-.003-.084 0-.111a.154.154 0 0 0 .002-.02z"></path><path d="M10.48 5.807c.04.003.08.006.111.011 2.25.358 3.286 1.458 3.573 3.8.005.04.005.088.006.14.003.183.009.563.405.571h.012a.382.382 0 0 0 .294-.115c.123-.133.115-.33.108-.49-.002-.038-.004-.075-.003-.107.028-2.395-1.98-4.567-4.298-4.647l-.028.001a.188.188 0 0 1-.027.002c-.023 0-.052-.002-.082-.004-.036-.003-.078-.006-.12-.006-.369 0-.439.27-.448.432-.02.373.329.4.497.412zM14.055 12.644a7.197 7.197 0 0 1-.143-.115c-.246-.204-.508-.392-.76-.574a57.337 57.337 0 0 1-.158-.114c-.324-.234-.615-.349-.89-.349-.37 0-.693.212-.96.629-.118.184-.262.274-.438.274a.848.848 0 0 1-.353-.091c-1.045-.49-1.792-1.24-2.219-2.23-.206-.48-.14-.792.224-1.047.206-.144.59-.413.563-.928-.03-.585-1.281-2.345-1.808-2.545a.996.996 0 0 0-.698-.002c-.605.21-1.04.58-1.257 1.067-.21.472-.2 1.025.028 1.601.657 1.666 1.58 3.118 2.746 4.316 1.14 1.173 2.542 2.133 4.166 2.855.146.065.3.1.412.126l.095.024a.155.155 0 0 0 .04.006h.013c.764 0 1.681-.72 1.963-1.542.247-.72-.204-1.075-.566-1.36zM10.818 7.71c-.13.003-.403.01-.499.296-.044.134-.039.25.016.345.081.14.237.183.378.206.512.085.776.378.828.92.025.254.19.43.402.43a.383.383 0 0 0 .048-.002c.255-.032.378-.225.367-.575.004-.366-.181-.78-.496-1.11-.316-.332-.697-.519-1.044-.51z"></path></svg>
              </span>
              <b className='font-["inter"] text-[12px] 2xl:text-[14px] text-[#1D2E5C]'>+855 17 966 659 / +855 69 666 499</b>
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
                <ul className='flex justify-evenly font-medium text-[#1D2E5C] text-[23px] font-["TenorSans"]'>
                  <li className={`relative text-[#1f3676] nav-link`}>
                    <NavLink to="/" >
                      Home
                    </NavLink>
                  </li>
                  <li className='relative hover:text-[#1f3676] nav-link'>
                    <NavLink to="/about-us">About us</NavLink>
                  </li>
                  <li className='relative hover:text-[#1f3676] nav-link'>
                    <NavLink to="/our-service">Our Service</NavLink>
                  </li>
                  <li className='relative hover:text-[#1f3676] nav-link'>
                    <NavLink to="/career">Career</NavLink>
                  </li>
                  <li className='relative hover:text-[#1f3676] nav-link'>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li className='relative hover:text-[#1f3676] nav-link'>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                  </li>
                </ul>
            </div>
          </nav>
        </div>

        <div className='my-4 lg:my-10'>
          <div className="text-center uppercase text-[#1D2E5C] font-['tenorsans']" data-aos="fade-right">
            <h1 className='text-[30px] h-[30px] lg:text-[50px] xl:text-[70px] lg:h-[40px] xl:h-[50px]'>Welcome</h1>
            <h1 className='text-[50px] h-[52px] lg:text-[100px] xl:text-[144px] lg:h-[130px] xl:h-[160px]'>Avartar</h1>
            <h1 className='text-[20px] lg:text-[30px] xl:text-[50px] lg:h-[30px] xl:h-[50px]'>Global Finance</h1>
            <h1 className='text-[20px] lg:text-[30px] xl:text-[40px]'>& Accounting Firm</h1>
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
            <NavLink to="/about-us">About us</NavLink>
          </li>
          <li>
            <NavLink to="/our-service">Our Service</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
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