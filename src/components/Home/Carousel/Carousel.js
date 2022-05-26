import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel carousel-center full md:p-4 px-8 mt-10 gap-5  rounded-box grid md:grid-cols-3">
      <div className="carousel-item w-full h-48">
        <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2" className="rounded-box w-full h-full" />
      </div>
      <div className="carousel-item w-full h-48">
        <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB" className="rounded-box w-full h-full" />
      </div>
      <div className="carousel-item w-full h-48">
        <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6" className="rounded-box w-full h-full" />
      </div>
     
    </div>
  );
};

export default Carousel;