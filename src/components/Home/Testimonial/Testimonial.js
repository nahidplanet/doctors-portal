import React from 'react';
import client1 from '../../../assets/images/people1.png'
import client2 from '../../../assets/images/people2.png'
import client3 from '../../../assets/images/people3.png'

const Testimonial = () => {
  return (
    <div className=''>
      <div className="Testimonial-top flex justify-between md:px-10 px-8">
        <div className='left'>
          <div className='text-left mb-10'>
            <h1 className='text-[#19D3AE] font-bold'>Testimonial</h1>
            <h1 className='text-2xl text-textMain'>What Our Patients Says</h1>
          </div>
        </div>
        <div className='right'>
          <h1 className='text-[#19d3ae4b] text-9xl font-bold font-mono'>&ldquo; </h1>
        </div>
      </div>
      {/* card  */}
      <div className="Testimonial-bottom grid md:grid-cols-3 gap-8 px-10">
        
        <div className='md:w-[385px] shadow-lg border p-7 rounded-lg'>
          <p className='client-feedback mb-6'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
          <div className='flex'>
            <div className=''>
              <div className="client-image w-20 h-20 border-[#37D9B8] border-2 rounded-full p-1">
                <img src={client1} className='w-full h-full' alt="client" />
              </div>
            </div>
            <div className="client-info ml-5 flex-col justify-center  flex">
              <h1 className='name md:text-xl font-bold'>Winson Herry</h1>
              <h5 className='city font-semibol'>California</h5>
            </div>
          </div>
        </div>
        <div className='md:w-[385px] shadow-lg border p-7 rounded-lg'>
          <p className='client-feedback mb-6'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
          <div className='flex'>
            <div className=''>
              <div className="client-image w-20 h-20 border-[#37D9B8] border-2 rounded-full p-1">
                <img src={client2} className='w-full h-full' alt="client" />
              </div>
            </div>
            <div className="client-info ml-5 flex-col justify-center  flex">
              <h1 className='name md:text-xl font-bold'>Winson Herry</h1>
              <h5 className='city font-semibol'>California</h5>
            </div>
          </div>
        </div>
        <div className='md:w-[385px] shadow-lg border p-7 rounded-lg'>
          <p className='client-feedback mb-6'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
          <div className='flex'>
            <div className=''>
              <div className="client-image w-20 h-20 border-[#37D9B8] border-2 rounded-full p-1">
                <img src={client3} className='w-full h-full' alt="client" />
              </div>
            </div>
            <div className="client-info ml-5 flex-col justify-center  flex">
              <h1 className='name md:text-xl font-bold'>Winson Herry</h1>
              <h5 className='city font-semibol'>California</h5>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;