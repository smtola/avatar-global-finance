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
                Our Accounting Firm provides full range of tax, accounting & auditing services which the clients may need from their entry into Cambodia until their exit. We assist both local and international clients in the following practice areas and sectors:
              </p>
            </div>
            <main className='pb-0 md:pb-[10vh]'>
              <div data-aos="fade-left" className='w-full max-w-screen-lg mx-auto bg-[#1D2E5C] text-[#ffffff] p-6'>
                <div className='grid grid-cols-1 md:grid-cols-4 justify-center gap-[1vw]'>
                  <div className='p-3 2xl:p-5 border-b-2 border-[#0488FF] hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] transition-all duration-300'>
                    <img src={iconSv_1} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[14px] 2xl:text-[17px] text-center'>Tax Due Diligence</h1>
                  </div>

                  <div className='p-3 2xl:p-5 border-b-2 border-[#0488FF] hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] transition-all duration-300'>
                    <img src={iconSv_2} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[14px] 2xl:text-[17px] text-center'>
                     Legal & Tax Advice
                    </h1>
                  </div>

                  <div className='p-3 2xl:p-5 border-b-2 border-[#0488FF] hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] transition-all duration-300'>
                    <img src={iconSv_3} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[14px] 2xl:text-[17px] text-center'>
                    	Accounting Review 
                    </h1>
                  </div>

                  <div className='p-3 2xl:p-5 border-b-2 border-[#0488FF] hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] transition-all duration-300'>
                    <img src={iconSv_4} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[14px] 2xl:text-[17px] text-center'>
                    	Key Account & Bookkeeping Service
                    </h1>
                  </div>

                  <div className='p-3 2xl:p-5 border-[#0488FF] border-b-2 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_5} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[12px] 2xl:text-[17px] text-center pb-10'>
                    	ACAR & Annual Financial Report Service 
                    </h1>
                  </div>

                  <div className='p-3 2xl:p-5 border-[#0488FF] border-b-2 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_6} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[14px] 2xl:text-[17px] text-center pb-10'>
                    	Monthly Tax Filing
                    </h1>
                  </div>

                  <div className='p-3 2xl:p-5 border-[#0488FF] border-b-2 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_7} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[14px] 2xl:text-[17px] text-center pb-10'>
                    	Annual Tax Return & Annual Tax Compliance
                    </h1>
                  </div>

                  <div className='p-3 2xl:p-5 border-[#0488FF] border-b-2 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_8} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[14px] 2xl:text-[17px] text-center pb-10'>
                    	NSSF and Payroll Service
                    </h1>
                  </div>

                  <div className='p-3 2xl:p-5 border-[#0488FF] border-b-2 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_8} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[14px] 2xl:text-[17px] text-center pb-10'>
                    		Statutory Audit (Limited Audit or Comprehensive Audit)
                    </h1>
                  </div>

                  <div className='p-3 2xl:p-5 border-[#0488FF] border-b-2 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_8} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[14px] 2xl:text-[17px] text-center pb-10'>
                    		Transfer Pricing Application 
                    </h1>
                  </div>

                  <div className='p-3 2xl:p-5 border-[#0488FF] border-b-2 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_8} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[14px] 2xl:text-[17px] text-center pb-10'>
                    		Double Tax Application
                    </h1>
                  </div>

                  <div className='p-3 2xl:p-5 border-[#0488FF] border-b-2 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_8} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[14px] 2xl:text-[17px] text-center pb-10'>
                    	QIP Tax Exemption Service           
                    </h1>
                  </div>

                  <div className='p-3 2xl:p-5 border-[#0488FF] border-b-2 hover:bg-[#E7EFFE] hover:backdrop-blue-[5px] hover:bg-opacity-[.80] hover:shadow-lg  hover:text-[#182760] hover:scale-[1.2] hover:translate-y-[-12%] md:hover:translate-y-[12%] transition-all duration-300'>
                    <img src={iconSv_8} className='w-[6vh] md:w-[3vh] lg:w-[7vh] mx-auto mb-3' />
                    <h1 className='font-medium text-[14px] 2xl:text-[17px] text-center pb-10'>
                    	Tax Litigation            
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