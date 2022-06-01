import { format } from 'date-fns';
import React from 'react';
import AvileableCategory from './AvileableCategory';

const AvilableService = ({date}) => {
  const categoryName = [
    { _id: 1, name: 'Teeth Orthodontics' },
    { _id: 2, name: 'Cosmetic Dentistry' },
    { _id: 3, name: 'Teeth Cleaning' },
    { _id: 4, name: 'Cavity Protection' },
    { _id: 5, name: 'Pediatric Dental' },
    { _id: 6, name: 'Oral Surgery' },
  ]
  return (
    <div>
      <div className="text-center py-10">

        <div className=' mb-10'>
          <h1 className='text-4xl mt-2 text-[#19D3AE] '>Available Services on {format(date, 'PP')}</h1>
          <h1 className='  text-textMain text-xl font-semibold'>Please select a service</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          categoryName.map(category => <AvileableCategory key={category._id} category={category}></AvileableCategory>)
        }
      </div>
    </div>
  );
};

export default AvilableService;