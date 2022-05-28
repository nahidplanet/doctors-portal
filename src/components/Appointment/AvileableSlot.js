import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import SingleSlot from './SingleSlot';

const AvileableSlot = ({date}) => {
  const [slots, setSlots] = useState([]);
  const [slotDetails, setSlotDetails] = useState(null);
  useEffect(() => {
    const url = `http://localhost:5000/serviceSlot`;
    fetch(url)
      .then(res => res.json())
      .then(data => setSlots(data))
  }, []);

// console.log(date);
  return (
    <div className='mb-40'>
      <div className='text-center my-10'>
        <h1 className='text-[#19D3AE] text-textMain text-xl font-semibold my-20'>Available slots for Teeth Orthodontics.</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          slots.map(slot => <SingleSlot key={slot._id} slot={slot} openModal={setSlotDetails}></SingleSlot>)
        }
      </div>
      <div>
        {
          slotDetails && <BookingModal dateIs={date} slotDetails={slotDetails}></BookingModal>
        }
      </div>
    </div>
  );
};

export default AvileableSlot;