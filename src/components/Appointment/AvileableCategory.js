import React from 'react';

const AvileableCategory = ({category}) => {

  return (
    <div className='border flex justify-center items-center shadow-lg cursor-pointer rounded-2xl h-24'>
      <h1 className='text-md font-semibold text-[#17D2B9] capitalize px-5 py-3'>{category.name}</h1>
    </div>
  );
};

export default AvileableCategory;