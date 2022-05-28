import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import './calendar.css'

const ApoointmentBanner = ({ date, setDate }) => {

  return (
    <div id='banner' className='relative  ' style={{ background: `url(${chair})`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div id='banner-content' className="hero md:min-h-screen" >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='md:w-6/12 flex justify-center items-center'>
            <img src={chair} alt="chair" className=" rounded-lg shadow-2xl" />
          </div>
          <div className='text-black font-bold px-8 md:w-6/12'>
            <div className=''>
              <DayPicker className='border bg-white rounded-2xl shadow-2xl p-5 max-w-xs'
                mode="single"
                selected={date}
                onSelect={setDate}
              />
            </div>
            <p>You picked {format(date, 'PP')}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApoointmentBanner;