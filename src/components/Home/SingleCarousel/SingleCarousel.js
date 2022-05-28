import React from 'react';

const SingleCarousel = ({img,title,desc,bC}) => {
  return (
    <div className={`card py-5 lg:py-0 lg:card-side shadow-xl border ${bC}`}>
        <figure className='pl-5'>
          <img src={img} alt="album" />
        </figure>
        <div className='card-body text-center lg:text-left text-white'>
          <h2 className='card-title justify-center lg:justify-start'>{title}</h2>
          <p className=''>{desc}</p>
        </div>
      </div>
  );
};

export default SingleCarousel;