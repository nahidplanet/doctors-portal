import React from 'react';
import chair from '../../../assets/images/chair.png'
import MainButton from '../../Shared/MainButton'

const Banner = () => {
  return (
    <div id='banner' className='relative  ' style={{background:`sm:url(${chair})`,backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <div id='banner-content'  className="hero md:min-h-screen" >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='md:w-6/12 flex justify-center items-center'>
            <img  src={chair} alt="chair" className=" rounded-lg shadow-2xl" />
          </div>
          <div className='px-8 md:w-6/12'>
            <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
            <p className="py-6 text-gray-500">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <MainButton> get start</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;