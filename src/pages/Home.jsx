import "./Home.css";
import imgMask from "../assets/images/mask.jpg";
import imgCeo from "../assets/images/ceo_and_manager/ceo.png";
import imgP_1 from "../assets/images/ceo_and_manager/p_1.png";
import imgP_2 from "../assets/images/ceo_and_manager/p_2.png";
import imgEmp_1 from "../assets/images/ceo_and_manager/emp_1.png";
import imgEmp_2 from "../assets/images/ceo_and_manager/emp_2.png";
import imgEmp_3 from "../assets/images/ceo_and_manager/emp_3.png";
import imgEmp_4 from "../assets/images/ceo_and_manager/emp_4.png";
import imgEmp_5 from "../assets/images/ceo_and_manager/emp_5.png";
import imgEmp_7 from "../assets/images/ceo_and_manager/emp_7.png";
import imgEmp_8 from "../assets/images/ceo_and_manager/emp_8.png";
import imgEmp_9 from "../assets/images/ceo_and_manager/emp_9.png";
import Footers from "./components/Footers";
import Navbars from "./components/Navbars";
import Contact from "./components/Contact";
import Scroll from "./components/Scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init({
    duration: 1000,
  });
  const handleclickMsg = () => {
    document.querySelector(".msg").classList.toggle("visible");
  };
  return (
    <>
      <Scroll />
      <Navbars />

      <div className="container w-full max-w-screen-md xl:max-w-screen-lg mx-auto px-5 md:px-0">
        <div className="text-center text-[#1D2E5C] font-['tenorsans'] my-10">
          <h1
            className="text-[24px] md:text-[40px]"
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
          >
            About Avartar Global
          </h1>
          <p
            className="text-[16px] md:text-[20px]"
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
          >
            FINANCE & ACCOUNTING FIRM | Head Office in Phnom Penh | Kingdom of
            Cambodia.
          </p>
          <p
            className="text-[12px] md:text-[16px]"
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
          >
            <br />
            The Accounting Firm was registered since 2018 under the laws of the
            Kingdom of Cambodia with a group of legal & tax professionals
            practicing and accredited accounting & auditing service
          </p>
          <p
            className="text-[12px] md:text-[16px]"
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
          >
            <br />
            We are an independent legal entity duly registered and accredited by
            KICPAA and Accounting & Auditing Regulator.
          </p>
        </div>
      </div>

      <div className='relative flex w-full z-[999]' data-aos="zoom-in">
        <div className='relative w-full lg:max-w-[50rem] xl:max-w-[57.5rem] 2xl:max-w-[100rem] overflow-hidden'>
          <img src={imgMask} alt="mask" className='contrast-[.9] brightness-[.7]'/>
          <img src={imgCeo} alt="ceo" className='overflow-hidden absolute w-[24.5vh] md:w-[30.3vh] lg:w-[26vh] xl:w-[50.4vh] top-[54%] translate-y-[-50%] translate-x-[-50%] left-[30%] md:left-[30%] lg:left-[30%] 2xl:left-[18%]'/>
        </div>
        <div className='block lg:hidden'>
          <button 
          onClick={handleclickMsg}
          className='absolute translate-x-[-50%] left-[70%] top-[40%] bottom-0 btn text-[#ffffff] backdrop-blur-[10px] bg-opacity-[.2] font-bold text-[16px] cursor-pointer'>Read More</button>
        </div>
        <div className='hidden lg:block'>
          <div className='bg-gradient-to-br from-[#002561] to-[#1D2E5C] backdrop-blur-[5px] opacity-[.85] w-full md:max-w-[28rem] lg:max-w-[36rem] xl:max-w-[45rem] 2xl:max-w-[70rem] absolute top-[60%] translate-x-[-50%] translate-y-[-50%] lg:left-[72%] 2xl:left-[68.9%]'>
            <div className='p-[35px] xl:p-[60px] 2xl:py-[10rem] text-[#ffffff] font-["tenorsans"] z-[10]'>
              <h1 className="text-[30px] 2xl:text-[35px]">Message From President</h1>  
              <p className='text-[16px] 2xl:text-[20px]'> Missing Message
              </p>
            </div>
          </div>
        </div>

        <div className='lg:hidden block bg-gradient-to-br from-[#002561] to-[#1D2E5C] backdrop-blur-[5px] opacity-[.85] w-full absolute top-44 md:top-[54%] scale-[.5] translate-x-[-100%] left-0 lg:left-[71.9%] msg transition-all duration-500'>
          <div className='p-[35px] xl:p-[60px] text-[#ffffff] font-["tenorsans"] z-[10]'>
            <h1 className="text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-[64px]">Message From President</h1>  
            <p className='text-[11px] lg:text-[16px] 2xl:text-[26px]'>Our Firm was formed by H.E. SENG BUN HUY and his role as the President with the specialist in commercial practice, notary public profession, insolvency administrator and governmental mediator of the Ministry of Justice.      

His Excellency held a L.L.B (Royal University of Law and Economics – Faculty of Law in Cambodia) and a L.L.M (Yokohama National University – Faculty of International Business Law in Japan). He was member of the Bar of the Kingdom of Cambodia. He was appointed as the member of Legal and Justice Council of the Ministry of Justice. He experienced in commercial contract law, Corporate Commercial, Mergers & Acquisition and Restructuring & Insolvency and a well-known law professor at various universities in the Kingdom. He has extensive experiences in legal advises in the field of Real Estate, Corporate & Tax, Trust Law and Mediation Dispute Resolution. He speaks Khmer, English, and Chinese.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="border-t-4 border-[#1D2E5C] w-1/3 mx-auto"></div> */}
      <div className='z-[10] px-2 lg:px-0 my-[10vw] font-["tenorsans"]'>
        <div className="w-full max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
          <h1 className="text-[#1D2E5C] text-center text-[34px]">Our People</h1>

          <div
            data-aos="fade-up"
            className="bg-[#ECF1F5] flex flex-wrap lg:flex-nowrap justify-center items-center rounded-xl lg:rounded-full my-10 overflow-hidden px-12"
          >
            <div className="border-b-4 border-[#1D2E5C] lg:border-none">
              <img
                src={imgP_1}
                alt="team"
                className="w-full  mx-auto ps-14 pe-0"
              />
            </div>

            <div className="py-5 lg:py-0 w-full max-w-2xl mx-auto">
              <h1 className="text-[17px] xl:text-[30px] 2xl:text-[36px] text-[#1D2E5C] font-medium">
                Mr. SENG VICHET 
              </h1>
              <p className="text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#1D2E5C]">
              is our Partner with the specialist in tax practice.
He held a BA in Accounting and Finance (Royal University of Law and Economics – Faculty of Accounting in Cambodia). He is also accredited by National Tax School and qualified as Tax Agent of the Ministry of Economics and Finance. He experienced in tax litigation. He has extensive experiences in legal advises in the field of Tax Law and Accounting Practice across the Countries. He speaks Khmer and English.

              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="bg-[#ECF1F5] w-full flex flex-wrap lg:flex-nowrap justify-center items-center rounded-xl lg:rounded-full my-10 overflow-hidden px-12"
          >
            <div className="lg:text-end py-5 lg:py-0  w-full max-w-2xl mx-auto">
              <h1 className="text-[17px] xl:text-[28px] 2xl:text-[30px] text-[#1D2E5C] font-medium">
                Mr. SENG SARUM
              </h1>
              <p className="text-[14px] xl:text-[16px] 2xl:text-[18px] text-[#1D2E5C]">
                is our Partner with the specialist in accounting and finance
                practice. He held a BA in Accounting and Finance (National
                University of Management – Faculty of Accounting in Cambodia).
                He was also awarded by CamEd Business School as the Diploma in
                the IFRS for SMEs. He is also accredited by KICPAA and qualified
                as Accounting and Finance Practice of the Accounting Regulator
                of the Ministry of Economics and Finance. He experienced in tax
                litigation, accounting and finance and audit. He has extensive
                experiences in legal advises in the field of Tax Law and
                Accounting Practice across the Countries. He speaks Khmer and
                English.
              </p>
            </div>
            <div className="order-first lg:order-last border-b-4 border-[#1D2E5C] lg:border-none">
              <img
                src={imgP_2}
                alt="team"
                className="w-full mx-auto ps-0 pe-24"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-[4vw] pt-7">
          <div
            data-aos="zoom-in"
            className="w-full max-w-[174px] md:max-w-[248px] mx-auto text-start"
          >
            <div className="w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full">
              <img src={imgEmp_8} className="mix-blend-darken pt-2" />
            </div>
            <h1 className="text-[#1D2E5C] text-[16px] md:text-[17px] mt-1">
              Mr. Chourn Chanthorn
            </h1>
            <p className="text-[#828386]">Supervisor Accounting & Tax</p>
            <div className="border-b-2 border-[#1D2E5C]"></div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full max-w-[174px] md:max-w-[248px] mx-auto text-start"
          >
            <div className="w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full">
              <img src={imgEmp_8} className="mix-blend-darken pt-2" />
            </div>
            <h1 className="text-[#1D2E5C] text-[16px] md:text-[17px] mt-1">
              Mr. SENG VICHET
            </h1>
            <p className="text-[#828386]">Partner</p>
            <div className="border-b-2 border-[#1D2E5C]"></div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full max-w-[174px] md:max-w-[248px] mx-auto text-start"
          >
            <div className="w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full">
              <img src={imgEmp_8} className="mix-blend-darken pt-2" />
            </div>
            <h1 className="text-[#1D2E5C] text-[16px] md:text-[17px]  mt-1">
              Vutha Manin
            </h1>
            <p className="text-[#828386] ">Senior Accountant</p>
            <div className="border-b-2 border-[#1D2E5C]"></div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full max-w-[174px] md:max-w-[248px] mx-auto text-start"
          >
            <div className="w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full">
              <img src={imgEmp_8} className="mix-blend-darken pt-2" />
            </div>
            <h1 className="text-[#1D2E5C] text-[16px] md:text-[17px]  mt-1">
              Mrs. Vann Theara
            </h1>
            <p className="text-[#828386] ">Accountant</p>
            <div className="border-b-2 border-[#1D2E5C]"></div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full max-w-[174px] md:max-w-[248px] mx-auto text-start"
          >
            <div className="w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full">
              <img src={imgEmp_8} className="mix-blend-darken pt-2" />
            </div>
            <h1 className="text-[#1D2E5C] text-[16px] md:text-[17px]  mt-1">
              Ms. Tang Mouykheang
            </h1>
            <p className="text-[#828386] ">Accountant</p>
            <div className="border-b-2 border-[#1D2E5C]"></div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full max-w-[174px] md:max-w-[248px] mx-auto text-start"
          >
            <div className="w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full">
              <img src={imgEmp_8} className="mix-blend-darken pt-2" />
            </div>
            <h1 className="text-[#1D2E5C] text-[16px] md:text-[17px]  mt-1">
              Mrs. Phat Thoery
            </h1>
            <p className="text-[#828386] ">Accountant</p>
            <div className="border-b-2 border-[#1D2E5C]"></div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full max-w-[174px] md:max-w-[248px] mx-auto text-start"
          >
            <div className="w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full">
              <img src={imgEmp_8} className="mix-blend-darken pt-2" />
            </div>
            <h1 className="text-[#1D2E5C] text-[16px] md:text-[17px]  mt-1">
              Mrs. An Sreynich
            </h1>
            <p className="text-[#828386] ">Accountant</p>
            <div className="border-b-2 border-[#1D2E5C]"></div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full max-w-[174px] md:max-w-[248px] mx-auto text-start"
          >
            <div className="w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full">
              <img src={imgEmp_8} className="mix-blend-darken pt-2" />
            </div>
            <h1 className="text-[#1D2E5C] text-[16px] md:text-[17px]  mt-1">
            Ms. Cheng Daly 
            </h1>
            <p className="text-[#828386] ">Accountant</p>
            <div className="border-b-2 border-[#1D2E5C]"></div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full max-w-[174px] md:max-w-[248px] mx-auto text-start"
          >
            <div className="w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full">
              <img src={imgEmp_8} className="mix-blend-darken pt-2" />
            </div>
            <h1 className="text-[#1D2E5C] text-[16px] md:text-[17px]  mt-1">
              Ms. Pann Panit
            </h1>
            <p className="text-[#828386] ">Assistant Account</p>
            <div className="border-b-2 border-[#1D2E5C]"></div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full max-w-[174px] md:max-w-[248px] mx-auto text-start"
          >
            <div className="w-[100px] h-[100px] mx-auto md:w-[184px] md:h-[184px] overflow-hidden bg-[#ECF1F5] p-2 rounded-full">
              <img src={imgEmp_8} className="mix-blend-darken pt-2" />
            </div>
            <h1 className="text-[#1D2E5C] text-[16px] md:text-[17px]  mt-1">
               RORN RYSA 
            </h1>
            <p className="text-[#828386] ">Admin</p>
            <div className="border-b-2 border-[#1D2E5C]"></div>
          </div>
        </div>
      </div>

      <div className="bg-why-us">
        <h1 className='text-[30px] lg:text-[50px] font-["tenorsans"] font-medium text-center py-5 text-[#ffffff]'>
          Why Us?
        </h1>

        <div className="w-full max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto ">
          <div
            data-aos="zoom-in"
            className="grid grid-cols-1 md:grid-cols-4 px-5 md:px-0 justify-center mx-[10px] mt-[10px] bg-[#1D2E5C] backdrop-blur-[1px] bg-opacity-50 rounded-md relative"
          >
            <div className='flex gap-2 z-[100] text-start md:flex-col p-[5px] xl:p-[2vw] 2xl:p-[4vw] md:text-center text-[#ffffff] font-["tenorsans"] hover:bg-[#ffffff] hover:shadow-xl hover:scale-[1.1] hover:text-[#1D2E5C] hover:first-line:text-[#068BFF] transition-all duration-150 '>
              <h1 className="text-[30px] 2xl:text-[50px] h-[56px] me-2 md:me-0">
                1
              </h1>
              <div className="mt-2 md:mt-0">
                <h2 className="text-[13px] 2xl:text-[20px] md:px-[2vw] mb-2">
                  Combined Expertise
                </h2>
                <p className="text-[10px] lg:text-[11px] 2xl:text-[16px]">
                  Our team excels not only in finance and accounting but also
                  possesses extensive legal knowledge, allowing us to provide
                  clients...
                </p>
              </div>
            </div>

            <div className='flex gap-2 z-[100] text-start md:flex-col p-[5px] xl:p-[2vw] 2xl:p-[4vw] md:text-center text-[#ffffff] font-["tenorsans"] hover:bg-[#ffffff] hover:shadow-xl hover:scale-[1.1] hover:text-[#1D2E5C] hover:first-line:text-[#068BFF] transition-all duration-150'>
              <h1 className="text-[30px] 2xl:text-[50px] h-[56px]">2</h1>
              <div className="mt-2 md:mt-0">
                <h2 className="text-[13px] 2xl:text-[20px] md:px-[1vw] mb-2">
                  Nearly Half a Decade of Business Experience
                </h2>
                <p className="text-[10px] lg:text-[11px] 2xl:text-[16px]">
                  Since 2020, we have gone beyond mere service delivery by
                  helping clients establish bookkeeping records,
                  <p className="truncate ... hover:whitespace-pre hover:overflow-visible hover:text-pretty cursor-pointer">
                    analyze profit and loss statements, and understand their
                    financial figures to ensure comprehensive business
                    performance. We also assist in making informed decisions for
                    business growth and successfully closing companies at
                    minimal cost.
                  </p>
                </p>
              </div>
            </div>

            <div className='flex gap-2 text-start md:flex-col p-[5px] xl:p-[2vw] 2xl:p-[4vw] md:text-center text-[#ffffff] font-["tenorsans"] hover:bg-[#ffffff] hover:shadow-xl hover:scale-[1.1] hover:text-[#1D2E5C] hover:first-line:text-[#068BFF] transition-all duration-150'>
              <h1 className="text-[30px] 2xl:text-[50px] h-[56px]">3</h1>
              <div className="mt-2 md:mt-0">
                <h2 className="text-[13px] 2xl:text-[20px] md:px-[2vw] mb-2">
                  Fully Qualified and Licensed
                </h2>
                <p className="text-[10px] lg:text-[11px] 2xl:text-[16px]">
                  Our team members are certified by KIPPA and hold tax agent
                  licenses, ensuring professional handling of all client cases.
                </p>
              </div>
            </div>

            <div className='flex gap-2 text-start md:flex-col p-[5px] xl:p-[2vw] 2xl:p-[4vw] md:text-center text-[#ffffff] font-["tenorsans"] hover:bg-[#ffffff] hover:shadow-xl hover:scale-[1.1] hover:text-[#1D2E5C] hover:first-line:text-[#068BFF] transition-all duration-150'>
              <h1 className="text-[30px] 2xl:text-[50px] h-[56px]">4</h1>
              <div className="mt-2 md:mt-0">
                <h2 className="text-[13px] 2xl:text-[20px] md:px-[2vw] mb-2">
                  Confidentiality and Client Data Management
                </h2>
                <p className="text-[10px] lg:text-[11px] 2xl:text-[16px]">
                  We have invested in our own secure server storage to maintain
                  the privacy of our clients' data. Each transaction record is
                  meticulously
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Footers />
    </>
  );
};

export default Home;
