import React from 'react';

const SectionTitle = ({title,subtitle}) => {

  return (
    <div className=' mb-10'>
      <h1 className='text-[#19D3AE] text-xl font-bold'>{title}</h1>
      <h1 className='text-4xl mt-2 text-textMain'>{subtitle}</h1>
    </div>
  );
};

export default SectionTitle;