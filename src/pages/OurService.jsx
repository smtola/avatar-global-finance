import React from 'react'
import Navbars from './components/Navbars';
import Footers from './components/Footers';
import Contact from './components/Contact';

import iconSv_1 from '../assets/images/sv_icon_1.png';
import iconSv_2 from '../assets/images/sv_icon_2.png';
import iconSv_3 from '../assets/images/sv_icon_3.png';
import iconSv_4 from '../assets/images/sv_icon_4.png';
import iconSv_5 from '../assets/images/sv_icon_5.png';
import iconSv_6 from '../assets/images/sv_icon_6.png';
import iconSv_7 from '../assets/images/sv_icon_7.png';
import iconSv_8 from '../assets/images/sv_icon_8.png';
const OurService = () => {
  return (
    <>
        <Navbars />
          <div className='bg-[#ffffff] w-full max-w-screen-md 2xl:max-w-screen-lg mx-auto'>
            <div className='py-10' data-aos="fade-right">
              <h1 className='text-center font-medium text-[30px] font-["tenorsans"]'>
              Our Services
              </h1>
              <br/>
              <p className='text-center text-[20px] font-medium font-["tenorsans"]'>
              We offer a complete range of comprehensive services to our clients.
              </p>
            </div>
            <main className='pb-0 md:pb-[10vh]'>
              <div data-aos="fade-left" className='w-full max-w-screen-lg mx-auto bg-[#1D2E5C] text-[#ffffff] p-10'>
                <div className='grid grid-cols-1 md:grid-cols-4 justify-center gap-[1vw]'>
                  <div className='p-5 border-b-2 border-[#0488FF] hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] transition-all duration-300'>
                    <img src={iconSv_1} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[12px] 2xl:text-[20px] text-center'>Consultation</h1>
                  </div>

                  <div className='p-5 border-b-2 border-[#0488FF] hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] transition-all duration-300'>
                    <img src={iconSv_2} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[12px] 2xl:text-[20px] text-center'>
                      Business
                      Registration Service
                    </h1>
                    <p className='text-[11px] lg:text-[13px] text-center mt-3'>
                      Small Taxpayer
                      Medium Taxpayer
                      Large Taxpayer
                    </p>
                  </div>

                  <div className='p-5 border-b-2 border-[#0488FF] hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] transition-all duration-300'>
                    <img src={iconSv_3} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[12px] 2xl:text-[20px] text-center'>
                      Accounting and
                      Financing Service
                    </h1>
                    <p className='text-[11px] lg:text-[13px] text-center mt-3'>
                    Monthly Bookkeeping 
                    Financial Statement Preparation 
                    </p>
                  </div>

                  <div className='p-5 border-b-2 border-[#0488FF] hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] transition-all duration-300'>
                    <img src={iconSv_4} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[12px] 2xl:text-[20px] text-center'>
                      Tax Declaration
                      Service
                    </h1>
                    <p className='text-[11px] lg:text-[13px] text-center mt-3'>
                    Monthly Tax Declaration 
                    Yearly Tax Declaration
                    </p>
                  </div>

                  <div className='p-5 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_5} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[12px] 2xl:text-[20px] text-center pb-10'>
                      Tax/Audit
                      Resolution Service
                    </h1>
                  </div>

                  <div className='p-5 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_6} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[12px] 2xl:text-[20px] text-center pb-10'>
                    Tax Exemption
                    Request Service
                    </h1>
                  </div>

                  <div className='p-5 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_7} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[12px] 2xl:text-[20px] text-center pb-10'>
                    Company’s Update
                    Service
                    </h1>
                  </div>

                  <div className='p-5 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_8} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[12px] 2xl:text-[20px] text-center pb-10'>
                    Company’s Closure
                    Service
                    </h1>
                  </div>
                </div>
              </div>
            </main>
          </div>
        <Contact />
        <Footers />
    </>
  )
}

export default OurService