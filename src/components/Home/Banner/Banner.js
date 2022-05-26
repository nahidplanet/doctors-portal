import React from 'react';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
  return (
    <div id='banner' className='md:px-40 relative  ' style={{background:`md:url(${chair})`,backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <div id='banner-content'  className="hero md:min-h-screen" >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='md:w-6/12 flex justify-center items-center'>
            <img src={chair} alt="chair" className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className='md:w-6/12'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary bg-[#15D1C5] text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;