import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor-small.png'
import MainButton from '../../Shared/MainButton'

const Appointment = () => {
  return (
    <div className='appointment md:my-40 w-12/12 '>
      <div className='md:h-[636px] relative flex items-center'>
        <img id='appooitment-image' className='hidden md:block' src={doctor} alt="doctor" />
        <div id='appooitment-bg' className="w-full bg-banner md:absolute bottom-0 md:h-[533px]" style={{ background: `url(${appointment})`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
          <div className='grid md:grid-cols-2 p-8'>
            <div></div>
            <div className='flex justify-center items-center md:h-[533px] w-full'>
              <div className='md:w-6/12'>
                <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
                <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <MainButton> get start</MainButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;