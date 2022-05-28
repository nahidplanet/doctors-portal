import React, { useEffect, useState } from 'react';
import SingleSlot from './SingleSlot';

const AvileableSlot = () => {
  const [slots, setSlots] = useState([]);
  useEffect(() => {
    fetch(`services.json`)
      .then(res => res.json())
      .then(data => setSlots(data))
  }, [])
  return (
    <div className='mb-40'>
      <div className='text-center my-10'>
        <h1 className='text-[#19D3AE] text-textMain text-xl font-semibold my-20'>Available slots for Teeth Orthodontics.</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          slots.map(slot => <SingleSlot key={slot._id} slot={slot}></SingleSlot>)
        }
      </div>
    </div>
  );
};

export default AvileableSlot;