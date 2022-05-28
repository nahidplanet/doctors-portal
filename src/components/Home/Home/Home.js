import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import Dental from '../Dental/Dental';
import InputArea from '../InputArea/InputArea';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div className='max-w-full'>
      <Banner></Banner>
      <Carousel></Carousel>
      <Service ></Service>
      <Dental></Dental>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <InputArea></InputArea>
    </div>
  );
};

export default Home;