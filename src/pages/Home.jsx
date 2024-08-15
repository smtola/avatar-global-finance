import './Home.css';
import imgMask from '../assets/images/mask.jpg';
import imgCeo from '../assets/images/ceo_and_manager/ceo.png';
import imgP_1 from '../assets/images/ceo_and_manager/p_1.png';
import imgP_2 from '../assets/images/ceo_and_manager/p_2.png';
import imgEmp_1 from '../assets/images/ceo_and_manager/emp_1.png';
import imgEmp_2 from '../assets/images/ceo_and_manager/emp_2.png';
import imgEmp_3 from '../assets/images/ceo_and_manager/emp_3.png';
import imgEmp_4 from '../assets/images/ceo_and_manager/emp_4.png';
import imgEmp_5 from '../assets/images/ceo_and_manager/emp_5.png';
import imgEmp_7 from '../assets/images/ceo_and_manager/emp_7.png';
import imgEmp_8 from '../assets/images/ceo_and_manager/emp_8.png';
import imgEmp_9 from '../assets/images/ceo_and_manager/emp_9.png';
import Footers from './components/Footers';
import Navbars from './components/Navbars';
import Contact from './components/Contact';
import Scroll from './components/Scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
  AOS.init({
    duration: 1000,
  });
  const handleclickMsg = ()=>{
      document.querySelector('.msg').classList.toggle('visible');
  }
  return (
    <>
    <Scroll />
      <Navbars/>

      <div className='container w-full max-w-screen-md xl:max-w-screen-lg mx-auto px-5 md:px-0'>
          <div className="text-center text-[#1D2E5C] font-['tenorsans'] my-10">
            <h1 className="text-[24px] md:text-[40px]" data-aos="fade-right" data-aos-anchor-placement="top-bottom">About Avartar Global</h1>
            <p className='text-[16px] md:text-[20px]' data-aos="fade-right" data-aos-anchor-placement="top-bottom">Finance and Accounting Firm</p>
            <p className='text-[12px] md:text-[16px]' data-aos="fade-left" data-aos-anchor-placement="top-bottom"><br/>
              Established on January 9, 2020, by Mr. Seng Bunhuy, Avarta Global Finance and Accounting Firm offers a variety of services, including consultation, business registration, tax exemption for Qualified Investment Projects (QIP), bookkeeping, and tax declaration. 
            </p>
            <p className='text-[12px] md:text-[16px]' data-aos="fade-left" data-aos-anchor-placement="top-bottom"><br/>
              Leveraging our combined expertise in legal, tax, and accounting, we strive to help our clients run their businesses in compliance with the tax, accounting, and legal landscape, thereby avoiding unnecessary penalties. To date, we have served numerous domestic and international clients in Cambodia.
            </p>
            <p className='text-[12px] md:text-[16px]' data-aos="fade-left" data-aos-anchor-placement="top-bottom"><br/>
            Our headquarters is located in the heart of the capital, in the Boeung Kengkong area.
            </p>
          </div>
      </div>
      
      <div className='relative flex w-full z-[999]' data-aos="zoom-in">
        <div className='relative w-full lg:max-w-[50rem] xl:max-w-[57.5rem] 2xl:max-w-[100rem] overflow-hidden'>
          <img src={imgMask} alt="mask" className='contrast-[.9] brightness-[.7]'/>
          <img src={imgCeo} alt="ceo" className='overflow-hidden absolute w-[24.5vh] md:w-[30.3vh] lg:w-[26vh] xl:w-[50.4vh] top-[-2%] translate-x-[-50%] left-[30%] md:left-[30%] lg:left-[18%]' />
        </div>
        <div className='block lg:hidden'>
          <button 
          onClick={handleclickMsg}
          className='absolute translate-x-[-50%] left-[70%] top-[40%] bottom-0 btn text-[#ffffff] backdrop-blur-[10px] bg-opacity-[.2] font-bold text-[16px] cursor-pointer'>Read More</button>
        </div>
        <div className='hidden lg:block'>
          <div className='p-10 mask mask-triangle-3 bg-gradient-to-r from-[#1D2E5C] to-[#002561] opacity-[0.85] absolute top-[20%] translate-x-[-50%] md:left-[40%] lg:left-[41.2%] 2xl:left-[42.4%]'></div>
          <div className='bg-gradient-to-r from-[#002561] to-[#1D2E5C] opacity-[0.85] w-full  md:max-w-[28rem] lg:max-w-[36rem] xl:max-w-[45rem] 2xl:max-w-[62rem] absolute top-20 md:top-8 lg:top-14 translate-x-[-50%] left-[50%] md:left-[71.9%]'>
            <div className='p-[35px] xl:p-[60px] text-[#ffffff] font-["tenorsans"] z-[10]'>
              <h1 className="text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-[64px]">Message From CEO</h1>  
              <p className='text-[11px] lg:text-[16px] 2xl:text-[26px]'>Dear Clients and Partners,
              <br/><br/>
              Thank you for choosing Avarta Global Finance and Accounting Firm. Since our inception on January 9, 2020, we have been dedicated to delivering top-quality services in consultation, business registration, tax exemption for Qualified Investment Projects (QIP), bookkeeping, and tax declaration. Our combined expertise in legal, tax, and accounting enables us to support your business effectively, ensuring compliance and minimizing risks.
              <br/><br/>
              We look forward to building a lasting partnership with you and contributing to your success.
              <br/><br/>
              Best Regards, 
              <br/><br/>
              Mr. Seng Bunhuy CEO,
              <br/>
              Avarta Global Finance and Accounting Firm
              </p>
            </div>
          </div>
        </div>

        <div className='lg:hidden block bg-gradient-to-r from-[#002561] to-[#1D2E5C] opacity-[0.85] w-full absolute top-44 md:top-[54%] scale-[.5] translate-x-[-100%] left-0 lg:left-[71.9%] msg transition-all duration-500'>
          <div className='p-[35px] xl:p-[60px] text-[#ffffff] font-["tenorsans"] z-[10]'>
            <h1 className="text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-[64px]">Message From CEO</h1>  
            <p className='text-[11px] lg:text-[16px] 2xl:text-[26px]'>Dear Clients and Partners,
            <br/><br/>
            Thank you for choosing Avarta Global Finance and Accounting Firm. Since our inception on January 9, 2020, we have been dedicated to delivering top-quality services in consultation, business registration, tax exemption for Qualified Investment Projects (QIP), bookkeeping, and tax declaration. Our combined expertise in legal, tax, and accounting enables us to support your business effectively, ensuring compliance and minimizing risks.
            <br/><br/>
            We look forward to building a lasting partnership with you and contributing to your success.
            <br/><br/>
            Best Regards, 
            <br/><br/>
            Mr. Seng Bunhuy CEO,
            <br/>
            Avarta Global Finance and Accounting Firm
            </p>
          </div>
        </div>
      </div>

      <div className='z-[10] px-2 lg:px-0 container w-full max-w-screen-md xl:max-w-screen-lg mx-auto my-[10vw] font-["tenorsans"]'>
          <div>
            <h1 className='text-[#1D2E5C] text-center text-[34px]'>Our People</h1>

            <div data-aos="fade-up"
              className='bg-[#ECF1F5] w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center rounded-xl lg:rounded-full gap-3 my-10 overflow-hidden px-12'>
              <div className='border-b-4 border-[#1D2E5C] lg:border-none'>
                <img src={imgP_1} alt="team" className='w-full max-w-sm mx-auto' />
              </div>
              <div className='py-5 lg:py-0'>
                <h1 className='text-[17px] xl:text-[20px] text-[#1D2E5C] font-medium'>H.E. SENG BUN HUY</h1>
                <p className='text-[14px] xl:text-[16px] text-[#1D2E5C]'>is a founder and plays his role as the President with the specialist in commercial practice, notary public profession, insolvency administrator and governmental mediator of the Ministry of Justice.      Education:  L.L.B from Royal University of Law and Economics – Faculty of Law in Cambodia.
                    L.L.M from Yokohama National University – Faculty of International Business Law in Japan.
                    Affiliation: Member at Bar of the Kingdom of Cambodia. 
                    Language: Khmer, English,  Chinese and Japanese
                </p>
              </div>
            </div>  
            <div data-aos="fade-down"
              className='bg-[#ECF1F5] w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center rounded-xl lg:rounded-full gap-3 my-10 overflow-hidden px-12'>
              <div className='lg:text-end py-5 lg:py-0'>
                <h1 className='text-[17px] xl:text-[20px] text-[#1D2E5C] font-medium'>Mr. SENG SARUM</h1>
                <p className='text-[14px] xl:text-[16px] text-[#1D2E5C]'>is our Partner with the specialist in accounting and finance practice.
                Education: BA in Accounting and Finance from National University of Management – Faculty of Accounting in Cambodia.
                Accreditation: He was also awarded by CamEd Business School as the Diploma in the IFRS for SMEs. He is also accredited by KICPAA and qualified as the Accounting and Finance Practice of the Accounting Regulator of the Ministry of Economics and Finance.
                Working Experiences: He is experienced in tax litigation, accounting and finance and audit. He has extensive experience in legal advice in the field of Tax Law and Accounting Practice across the Countries.
                Language: Khmer and English.
                </p>
              </div>
              <div className='order-first lg:order-last border-b-4 border-[#1D2E5C] lg:border-none'>
                <img src={imgP_2} alt="team" className='w-full max-w-[400px] mx-auto' />
              </div>
            </div>  
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-[4vw] pt-7'>
            <div data-aos="zoom-in" 
              className="w-full max-w-[174px] md:max-w-[248px] mx-auto text-start">
                <div className='w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full'>
                  <img src={imgEmp_8} className='mix-blend-darken pt-2' />
                </div>
                <h1 className='text-[#1D2E5C] text-[16px] md:text-[20px] mt-1'>Mrs. Uot Heang</h1>
                <p className='text-[#828386]'>Founder & President</p>
                <div className="border-b-2 border-[#1D2E5C]"></div>
            </div>

            <div data-aos="zoom-in" 
              className="w-full max-w-[174px] md:max-w-[240px] mx-auto text-start">
              <div className='w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full'>
                <img src={imgEmp_1} className='mix-blend-multiply pt-2' />
                </div>
                <h1 className='text-[#1D2E5C] text-[16px] md:text-[20px] mt-1'>Mrs. Vann Theara</h1>
                <p className='text-[#828386]'>Business Partner</p>
                <div className="border-b-2 border-[#1D2E5C]"></div>
            </div>

            <div data-aos="zoom-in" 
              className="w-full max-w-[174px] md:max-w-[240px] mx-auto text-start">
                <div className='w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full'>
                <img src={imgEmp_5} className='mix-blend-darken pt-2' />
                </div>
                <h1 className='text-[#1D2E5C] text-[16px] md:text-[20px] mt-1'>Mr. Chourn Chanthorn</h1>
                <p className='text-[#828386]'>Business Partner</p>
                <div className="border-b-2 border-[#1D2E5C]"></div>
            </div>

            <div data-aos="zoom-in" 
              className="w-full max-w-[174px] md:max-w-[240px] mx-auto text-start">
              <div className='w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full'>
                <img src={imgEmp_2} className='mix-blend-multiply pt-2' />
                </div>
                <h1 className='text-[#1D2E5C] text-[16px] md:text-[20px] mt-1'>Ms. Tang Mouykheang</h1>
                <p className='text-[#828386]'>Business Partner</p>
                <div className="border-b-2 border-[#1D2E5C]"></div>
            </div>

            <div data-aos="zoom-in" 
              className="w-full max-w-[174px] md:max-w-[240px] mx-auto text-start">
              <div className='w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full'>
                <img src={imgEmp_3} className='mix-blend-multiply pt-2' />
                </div>
                <h1 className='text-[#1D2E5C] text-[16px] md:text-[20px] mt-1'>Mrs. Phat Thoery</h1>
                <p className='text-[#828386]'>Business Partner</p>
                <div className="border-b-2 border-[#1D2E5C]"></div>
            </div>

            <div data-aos="zoom-in" 
              className="w-full max-w-[174px] md:max-w-[240px] mx-auto text-start">
              <div className='w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full'>
                <img src={imgEmp_4} className='mix-blend-multiply pt-2' />
                </div>
                <h1 className='text-[#1D2E5C] text-[16px] md:text-[20px] mt-1'>Ms. Pann Panit</h1>
                <p className='text-[#828386]'>Business Partner</p>
                <div className="border-b-2 border-[#1D2E5C]"></div>
            </div>

            <div data-aos="zoom-in" 
              className="w-full max-w-[174px] md:max-w-[240px] mx-auto text-start">
              <div className='w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full'>
                <img src={imgEmp_9} className='mix-blend-darken pt-2' />
                </div>
                <h1 className='text-[#1D2E5C] text-[16px] md:text-[20px] mt-1'>Ms. Cheng Daly</h1>
                <p className='text-[#828386]'>Business Partner</p>
                <div className="border-b-2 border-[#1D2E5C]"></div>
            </div>

            <div data-aos="zoom-in" 
              className="w-full max-w-[174px] md:max-w-[240px] mx-auto text-start">
              <div className='w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full'>
                <img src={imgEmp_7} className='mix-blend-darken pt-2' />
                </div>
                <h1 className='text-[#1D2E5C] text-[16px] md:text-[20px] mt-1'>Mrs. An Sreynich</h1>
                <p className='text-[#828386]'>Business Partner</p>
                <div className="border-b-2 border-[#1D2E5C]"></div>
            </div>
          </div>
      </div>

      <div className='background-filter bg-why-us'>
        <h1 className='text-[30px] lg:text-[50px] font-["tenorsans"] font-medium text-center py-5 text-[#1D2E5C]'>Why Us?</h1>

        <div className='w-full max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto '>
          <div data-aos="zoom-in"
            className='grid grid-cols-1 md:grid-cols-4 px-5 md:px-0 justify-center mx-[10px] mt-[10px] bg-[#1D2E5C] backdrop-blur-[1px] bg-opacity-50 rounded-md relative'>
            <div className='flex gap-2 text-start md:flex-col p-[5px] xl:p-[2vw] 2xl:p-[4vw] md:text-center text-[#ffffff] font-["tenorsans"] hover:bg-[#ffffff] hover:shadow-xl hover:scale-[1.1] hover:text-[#1D2E5C] hover:first-line:text-[#068BFF] transition-all duration-150 '>
              <h1 className='text-[30px] 2xl:text-[50px] h-[56px] me-2 md:me-0'>1</h1>
              <div className='mt-2 md:mt-0'>
                <h2 className='text-[13px] 2xl:text-[20px] md:px-[2vw] mb-2'>
                  Combined
                  Expertise
                </h2>
                <p className='text-[10px] lg:text-[11px] 2xl:text-[16px]'>
                  Our team excels not only in finance and accounting but also possesses extensive legal knowledge, allowing us to provide clients...
                </p>
              </div>
            </div>

            <div className='flex gap-2 text-start md:flex-col p-[5px] xl:p-[2vw] 2xl:p-[4vw] md:text-center text-[#ffffff] font-["tenorsans"] hover:bg-[#ffffff] hover:shadow-xl hover:scale-[1.1] hover:text-[#1D2E5C] hover:first-line:text-[#068BFF] transition-all duration-150'>
              <h1 className='text-[30px] 2xl:text-[50px] h-[56px]'>2</h1>
              <div className='mt-2 md:mt-0'>
                <h2 className='text-[13px] 2xl:text-[20px] md:px-[1vw] mb-2'>
                Nearly Half a
                Decade of Business 
                Experience
                </h2>
                <p className='text-[10px] lg:text-[11px] 2xl:text-[16px]'>
                  Since 2020, we have gone beyond mere service delivery by helping clients establish bookkeeping records, analyze profit and loss statements, and understand their financial figures to ensure comprehensive business performance. We also assist in making informed decisions for business growth and successfully closing companies at minimal cost.
                </p>
              </div>
            </div>

            <div className='flex gap-2 text-start md:flex-col p-[5px] xl:p-[2vw] 2xl:p-[4vw] md:text-center text-[#ffffff] font-["tenorsans"] hover:bg-[#ffffff] hover:shadow-xl hover:scale-[1.1] hover:text-[#1D2E5C] hover:first-line:text-[#068BFF] transition-all duration-150'>
              <h1 className='text-[30px] 2xl:text-[50px] h-[56px]'>3</h1>
              <div className='mt-2 md:mt-0'>
                <h2 className='text-[13px] 2xl:text-[20px] md:px-[2vw] mb-2'>
                Fully Qualified
                and Licensed
                </h2>
                <p className='text-[10px] lg:text-[11px] 2xl:text-[16px]'>
                Our team members are certified by KIPPA and hold tax agent licenses, ensuring professional handling of all client cases.
                </p>
              </div>
            </div>

            <div className='flex gap-2 text-start md:flex-col p-[5px] xl:p-[2vw] 2xl:p-[4vw] md:text-center text-[#ffffff] font-["tenorsans"] hover:bg-[#ffffff] hover:shadow-xl hover:scale-[1.1] hover:text-[#1D2E5C] hover:first-line:text-[#068BFF] transition-all duration-150'>
              <h1 className='text-[30px] 2xl:text-[50px] h-[56px]'>4</h1>
              <div className='mt-2 md:mt-0'>
                <h2 className='text-[13px] 2xl:text-[20px] md:px-[2vw] mb-2'>
                  Confidentiality and
                  Client Data
                  Management
                </h2>
                <p className='text-[10px] lg:text-[11px] 2xl:text-[16px]'>
                  We have invested in our own secure server storage to maintain the privacy of our clients' data. Each transaction record is meticulously
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Footers />
    </>
  )
}

export default Home