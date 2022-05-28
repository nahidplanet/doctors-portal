import React from 'react';
import MainButton from '../Shared/MainButton'
const SingleSlot = ({slot}) => {
const {name,slots} = slot
  return (
    <div className='border rounded-xl shadow-md px-5 pt-10 pb-5'>
      <div className='text-center mb-3'>
        <h1 className='text-[#19D3AE] text-xl font-semibold'>{name}</h1>
        <h3>{slots[1]}</h3>
      </div>
      <div className='text-center mt-5'>
        <MainButton> book </MainButton>
      </div>
    </div>
  );
};

export default SingleSlot;