import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import MainButton from '../../Shared/MainButton';

const Dental = () => {
  return (
    <div className='md:px-40 w-full '>
      <div className="hero md:min-h-screen ">
        <div className="hero-content flex-col lg:flex-row ">
          <div className='md:w-6/12 w-10/12 flex justify-center items-center '>
            <img src={treatment} alt="treatment" className=" md:p-0 rounded-lg shadow-2xl" />
          </div>
          <div className='md:w-6/12 mt-2 md:m-0 md:px-0 lg:ml-40'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <MainButton> get start</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dental;