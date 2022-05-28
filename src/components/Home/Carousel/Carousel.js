import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import SingleCarousel from '../SingleCarousel/SingleCarousel'

const Carousel = () => {

  const desc1 = 'Lorem Ipsum is simply dummy text of the pri';
  const desc2 ='Brooklyn, NY 10036, United States' ;
  const desc3 ='+000 123 456789' ;
  const gradient = 'bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]';
  return (
    <div className="carousel carousel-center full md:p-4 px-8 mt-10 gap-5  rounded-box grid md:grid-cols-2 lg:grid-cols-3">
      <SingleCarousel desc={desc1} title='Opening Hours' img={clock} bC={gradient} ></SingleCarousel>
      <SingleCarousel desc={desc2} title='Visit our location' img={marker} bC={'#1E1E1E'} ></SingleCarousel>
      <SingleCarousel desc={desc3} title='Contact us now' img={phone} bC={gradient} ></SingleCarousel>
    </div>
  );
};

export default Carousel;