import React from 'react';

const SingleTestimonial = ({item}) => {
  const {comment,img,name,city} = item
  return (
      <div className='md:w-[385px] shadow-lg border p-7 rounded-2xl mb-8 md:mb-0'>
          <p className='client-feedback mb-6'>{comment}</p>
          <div className='flex'>
            <div className=''>
              <div className="client-image w-20 h-20 border-[#37D9B8] border-2 rounded-full ">
                <img src={img} className='w-full h-full' alt="client" />
              </div>
            </div>
            <div className="client-info ml-5 flex-col justify-center  flex">
              <h1 className='name md:text-xl font-bold'>{name}</h1>
              <h5 className='city font-semibol'>{city}</h5>
            </div>
          </div>
        </div>
  );
};

export default SingleTestimonial;