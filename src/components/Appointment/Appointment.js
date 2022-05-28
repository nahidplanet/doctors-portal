import React, { useState } from 'react';
import ApoointmentBanner from './ApoointmentBanner';
import AvilableService from './AvilableService';
import AvileableSlot from './AvileableSlot';


const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <ApoointmentBanner date={date} setDate={setDate}></ApoointmentBanner>
      <div className='px-10'>
        <AvilableService date={date}></AvilableService>
        <AvileableSlot></AvileableSlot>
      </div>
    </div>
  );
};

export default Appointment;

