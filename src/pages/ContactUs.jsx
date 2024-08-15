import React from 'react'
import Navbars from './components/Navbars';
import Footers from './components/Footers';
import Scroll from './components/Scroll';
import emailjs from '@emailjs/browser';
const ContactUs = () => {

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     try{
    //       emailjs.sendForm('service_uod7h27','template_hh9dheb',event.target,'zwrbkbntMIq-U7_Wn');

    //       event.target.reset(); // Clear the form fields
    //       alert('Message sent successfully!');
    //     }catch(e){
    //       alert("Error: " + e.message);
    //     }
    //   };

  return (
    <>
    <Scroll />
      <Navbars />
      <div className='bg-[#ffffff] w-full max-w-screen-md 2xl:max-w-screen-lg mx-auto'>
        <div className="hero bg-[#1D2E5C] text-[#ffffff] md:translate-y-[-12%] backdrop-blur-[3px] bg-opacity-[.5] shadow-lg">
        <div className="hero-content grid">
            <div className="text-center lg:text-left" data-aos="fade-left">
                <h1 className="text-5xl font-bold">Contact Our</h1>
                <p className="py-6">
                    Please kindly key in the below information for us to best assist you. 
                </p>
            </div>
            <div data-aos="fade-up" className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name: </span>
                </label>
                <input type="text" placeholder="Your name" name='from_name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="text" placeholder="Phone Number" name='phone' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name='from_email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <input type="text" placeholder="Subject" name='subject' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your message (optional)</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='message' placeholder="Additional Message"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn bg-[#1D2E5C] text-[#ffffff] hover:bg-[#27396b]">Submit</button>
                </div>
            </form>
            </div>
        </div>
        </div>

        <div className='my-5' data-aos="fade-left">
          <ul className='flex gap-[1vw] font-["Tenor Sans"] text-[#1D2E5C] text-[20px]'>
            <li>
              <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 24 24" width="28" fill="currentColor"><path d="M12 7A5 5 0 1 0 2 7c0 1.726 1.66 5.031 5 9.653 3.34-4.622 5-7.927 5-9.653zM7 20C2.333 13.91 0 9.577 0 7a7 7 0 1 1 14 0c0 2.577-2.333 6.91-7 13zm0-9a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg></span>
            </li>
            <li>
              House No 37, Street 360, Phum 1, Sangkat Boeung Kengkang, Khan Boeung Kengkang, Phnom Penh 
            </li>
          </ul>
        </div>
      </div>
      <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3909.0464187261146!2d104.921833!3d11.548528!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDMyJzU0LjIiTiAxMDTCsDU1JzIzLjkiRQ!5e0!3m2!1sen!2skh!4v1723622324136!5m2!1sen!2skh" className='border-none w-full h-[50vh]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
      </div>
      <Footers />
    </>
  )
}

export default ContactUs