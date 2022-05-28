import React from 'react';

const SingleService = ({singleService}) => {
  const {title,img,desc} = singleService;
  return (
    <div className=" rounded-2xl shadow-xl border">
          <figure className="md:w-full  flex justify-center items-center  md:px-10 md:pt-10">
            <img src={img} alt="Shoes" className="mx-auto w-2/12 lg:w-3/12 rounded-xl pt-5" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
  );
};

export default SingleService;