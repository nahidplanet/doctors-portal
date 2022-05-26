import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Dental = () => {
  return (
    <div className='md:px-40'>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className='md:w-6/12 w-full flex justify-center items-center '>
            <img src={treatment} alt="treatment" className=" md:p-0 rounded-lg shadow-2xl" />
          </div>
          <div className='md:w-6/12 mt-2 md:m-0 md:px-0'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary bg-[#15D1C5] text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dental;