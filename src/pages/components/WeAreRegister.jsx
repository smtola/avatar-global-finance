import React from 'react'
import imgRgt_1 from '../../assets/images/rgt_1.jpg';
import imgRgt_2 from '../../assets/images/rgt_2.jpg';
import imgRgt_3 from '../../assets/images/rgt_3.jpg';
import imgRgt_4 from '../../assets/images/rgt_4.jpg';
import imgRgt_5 from '../../assets/images/rgt_5.jpg';
const WeAreRegister = () => {
  return (
    <>
    <div className='w-full max-w-screen-lg mx-auto text-[#1D2E5C] pb-0 md:pb-24 pt-5'>
      <div data-aos="fade-right">
        <h1 className='text-center font-medium text-[20px] md:text-[30px] font-["tenorsans"] px-[10px] md:px-[15vw]'>
          Our entity is completely registered,
          and we fully obtained
        </h1>
        <br/>
        <p className='text-center text-[16px] md:text-[20px] font-medium font-["tenorsans"] px-[8vw]'>
          Tax Agent License
          Accounting Level II Practice License from Accounting and Auditing Regulator 
          Certification from Kampuchea Institute of Certified Public Accountants and Auditors (KICPAA)
        </p>
      </div>

      <div className='overflow-hidden'>
          <img data-aos="fade-right" src={imgRgt_5} className='w-full' />
        </div>
      <div className='grid grid-cols-2 justify-center gap-[2vw] my-10'>
        <div className='overflow-hidden'>
          <img data-aos="fade-right" src={imgRgt_1} className='w-full' />
        </div>
        <div className='overflow-hidden'>
          <img data-aos="fade-left" src={imgRgt_2} className='w-full' />
        </div>
        <div className='overflow-hidden'>
          <img data-aos="fade-right" src={imgRgt_3} className='w-full' />
        </div>
        <div className='overflow-hidden'>
          <img data-aos="fade-left" src={imgRgt_4} className='w-full' />
        </div>

      </div>
    </div>
    </>
  )
}

export default WeAreRegister