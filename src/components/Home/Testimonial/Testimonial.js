import React from 'react';
import client1 from '../../../assets/images/people1.png'
import client2 from '../../../assets/images/people2.png'
import client3 from '../../../assets/images/people3.png'
import quote from '../../../assets/icons/quote.svg'
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import SectionTitle from '../../Shared/SectionTitle';

const Testimonial = () => {
  const items = [
    {
      _id:1,
      name:'Winson Herry' ,
      img:client1,
      city: 'California',
      comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
    {
      _id:2,
      name:'Winson Herry' ,
      img:client2,
      city: 'California',
      comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
    {
      _id:3,
      name:'Winson Herry' ,
      img:client3,
      city: 'California',
      comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
  ]
  return (
    <div className='mt-10'>
      <div className="Testimonial-top flex justify-between md:px-10 px-8">
        <div className='left'>
          <SectionTitle 
          title ="Testimonial"
          subtitle="What Our Patients Says"
          />
        </div>
        <div className='right'>
          <img className='w-32 lg:w-40 mb-10' src={quote} alt="" />
        </div>
      </div>
      {/* card  */}
      <div className="Testimonial-bottom grid md:grid-cols-3 md:gap-8 px-10">
        {
          items.map(item=><SingleTestimonial key={item._id} item={item}></SingleTestimonial>)
        }
      </div>
    </div>
  );
};

export default Testimonial;