import React from 'react'
import Navbars from './components/Navbars';
import Footers from './components/Footers';
import Contact from './components/Contact';
import Scroll from './components/Scroll';
const Career = () => {
  return (
    <>
    <Scroll />
    <Navbars />
    <div className='bg-[#ffffff] w-full max-w-screen-md 2xl:max-w-screen-lg mx-auto'>
      <div className='translate-y-[-120%] absolute translate-x-[-50%] left-[50%]'>
        <h1 className='text-center text-[#ffffff] font-medium text-[10px] md:*:text-[30px] xl:text-[40px] font-["tenorsans"] px-0 md:px-[1rem]'>
          Work together to achieve optimal results and gain personal growth altogether.
        </h1>
      </div>
      <div data-aos="fade-right" className='py-5 md:py-10'>
        <h1 className='text-center text-[#1D2E5C] font-medium text-[30px] font-["tenorsans"]'>
          Open Position
        </h1>
        <h1 className='text-center text-[#1D2E5C] font-medium text-[20px] font-["tenorsans"]'>
          Accounting Executive
        </h1>
        <h1 className='text-center text-[#1D2E5C] font-medium text-[20px] font-["tenorsans"]'>
          Tax Manager
        </h1>
        <h1 className='text-center text-[#1D2E5C] font-medium text-[20px] font-["tenorsans"]'>
          Tax Executive
        </h1>
        <h1 className='text-center text-[#1D2E5C] font-medium text-[20px] font-["tenorsans"]'>
          Internship
        </h1>
      </div>
      <main>
        <div data-aos="fade-left" className='bg-[#ECF1F5] p-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:justify-center'>
            <div className='text-[#1D2E5C] font-medium font-["tenorsans"]'>
              <h1 className='font-medium text-[30px]'>
                Career Information
              </h1>
              <p className='text-[16px]'>
                We are open to accept any talents, please feel free to apply :<br/> 
                Enter your email and upload your CVs here
              </p>
            </div>
            <div>
              <form action="" className='grid gap-3 md:gap-[1vw] justify-center'>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered file-input-base-content w-full max-w-xs" />
                </div>
                <button className="btn">Send</button>
              </form>
            </div>
        </div>
      </main>
    </div>
    <Contact />
    <Footers />
</>
  )
}

export default Career