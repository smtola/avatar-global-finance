import React from 'react'
import logoBgWhy from '../../assets/images/bg_why_2.jpg';
import emailjs from '@emailjs/browser'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    alert('Form Maintenant');
    form.reset();
  };
  return (
    <>
      <div className='grid lg:grid-cols-2 items-center'>
        <div 
         className=" bg-white/20 text-[#1D2E5C] z-10">
          <div className="hero-content grid" data-aos="fade-up">
            <div className="text-center lg:text-left">
                <h1 className="text-2xl xl:text-5xl font-bold">Contact Us</h1>
                <p className="py-6">
                    Please kindly key in the below information for us to best assist you. 
                </p>
            </div>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={onSubmit}>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Name: </span>
                  </label>
                  <input type="text" placeholder="Your name" name='from_name' className="input input-bordered text-gray-500" autocomplete="off" required />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Phone Number</span>
                      </label>
                      <input type="text" placeholder="Phone Number" name='phone' className="input input-bordered text-gray-500" autocomplete="off" required />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="Email" name='from_email' className="input input-bordered text-gray-500" autocomplete="off" required />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Subject</span>
                      </label>
                      <input type="text" placeholder="Subject" name='subject' className="input input-bordered text-gray-500" autocomplete="off" required />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Your message (optional)</span>
                      </label>
                      <textarea className="textarea textarea-bordered text-gray-500" autocomplete="off" name='message' placeholder="Additional Message"></textarea>
                  </div>
                  <div className="form-control mt-6">
                      <button type='submit' className="btn bg-[#1D2E5C] text-[#ffffff] hover:bg-[#27396b]">Submit</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
        <div data-aos="fade-down">
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3909.0464187261146!2d104.921833!3d11.548528!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDMyJzU0LjIiTiAxMDTCsDU1JzIzLjkiRQ!5e0!3m2!1sen!2skh!4v1723622324136!5m2!1sen!2skh" className='border-none w-full h-[50vh]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <div
        className="hero bg-opacity-5"
        style={{
          backgroundImage: `url(${logoBgWhy})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment:'fixed'
        }}>
        <div className="hero-content py-0 text-neutral-content text-center">
          <div className="max-w-lg xl:max-w-2xl md:py-10 bg-white/30 backdrop-blur-[2px] bg-opacity-100 m-10 rounded-sm">
            <h1 data-aos="flip-up" className="text-xl md:text-3xl xl:text-4xl font-bold text-[#ffffff] py-5">Let us put Our Knowledge and Experience to Work For You</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact