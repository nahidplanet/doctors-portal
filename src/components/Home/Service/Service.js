import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import caviti from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import SingleService from '../SingleService/SingleService';

const Service = () => {
  // const [singleService,setSingleService]=useState([]);
  const singleSevices = [
    {
      _id: 1,
      title: 'Fluoride Treatment',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: fluoride
    },
    {
      _id: 2,
      title: 'Cavity Filling',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: caviti
    },
    {
      _id: 3,
      title: 'Teeth Whitening',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: whitening
    },
  ]
  return (
    <div className='w-full'>
      <div className='md:px-14 px-8 my-16 '>
        <div className='text-center mb-16'>
          <h1 className='text-[#19D3AE] font-bold'>OUR SERVICES</h1>
          <h1 className='text-2xl text-textMain'>Services We Provide</h1>
        </div>
        <div className='grid md:grid-cols-3 gap-8  '>

          {
            singleSevices.map(singleService => <SingleService key={singleService._id} singleService={singleService}></SingleService>)
          }

        </div>
      </div>
    </div>
  );
};

export default Service;