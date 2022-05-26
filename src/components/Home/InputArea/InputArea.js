import React from 'react';
import appointment from '../../../assets/images/appointment.png'
const InputArea = () => {
  return (
    <div className='mt-32'>
      <div className='' style={{ background: `url(${appointment})`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className='md:p-16 px-8 py-10'>
          <div className='text-center mb-10'>
            <h1 className='text-[#19D3AE] font-bold'>Testimonial</h1>
            <h1 className='text-2xl text-white'>What Our Patients Says</h1>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            <div></div>
            <form >
              <div className='mb-3  '>
                <input className='w-full px-2 py-3 rounded-md' type="email" name="email" id="email" placeholder='Email' />
              </div>
              <div className='mb-3  '>
                <input className='w-full px-2 py-3 rounded-md' type="text" name="subject" id="email" placeholder='Subject' />
              </div>
              <div className='mb-3 rounded-lg'>
                <textarea className='w-full px-2 py-3 h-full rounded-md' name="" id="" rows="5" placeholder='Comment'></textarea>
              </div>
              <div className='text-center '>
                <input className='text-white font-bold text-center border px-4 py-3 rounded-lg cursor-pointer bg-[#12D0DC] ' type="submit" value="SUBMIT" />

              </div>
            </form>
            <div></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default InputArea;