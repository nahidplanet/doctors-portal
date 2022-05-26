import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import caviti from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const Service = () => {
  return (
    <div className='md:px-14 px-8 my-16'>
      <div className='text-center mb-16'>
        <h1 className='text-[#19D3AE] font-bold'>OUR SERVICES</h1>
        <h1 className='text-2xl text-textMain'>Services We Provide</h1>
      </div>

      <div className='grid md:grid-cols-3 gap-8  '>
        <div className=" rounded-lg shadow-xl">
          <figure className="w-full  px-10 pt-10">
            <img src={fluoride} alt="Shoes" className="mx-auto rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Fluoride Treatment</h2>
            <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
          </div>
        </div>
        <div className=" rounded-md bg-base-100 shadow-xl">
          <figure className="w-full  px-10 pt-10">
            <img src={caviti} alt="Shoes" className="mx-auto rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cavity Filling</h2>
            <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
          </div>
        </div>
        <div className=" rounded-md bg-base-100 shadow-xl">
          <figure className="w-full  px-10 pt-10">
            <img src={whitening} alt="Shoes" className="mx-auto rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Teeth Whitening</h2>
            <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Service;