import React from 'react';
import footerBgImg from '../../../assets/images/footer.png'
const Footer = () => {
  const getYear = new Date();
  const year = getYear.getFullYear();
  return (
    <div className='sm:mt-5 lg:mt-5 ' style={{ background: `url(${footerBgImg})`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className=''>
        <div className='md:flex md:justify-between grid grid-cols-2 px-10 py-10 gap-6'>
          <div className="service">
            <h1 className='text-lg uppercase font-bold text-gray-600'>Service</h1>
            <ul>
              <li>Emergency Checkup</li>
              <li>Monthly Checkup</li>
              <li>Weekly Checkup</li>
              <li>Deep Checkup</li>
            </ul>
          </div>
          <div className="service">
            <h1 className='text-lg uppercase font-bold text-gray-600'>oral health</h1>
            <ul>
              <li>Fluoride Treatment</li>
              <li>Cavity Filling</li>
              <li>Teath Whitening</li>
            </ul>
          </div>
          <div className="service">
            <h1 className='text-lg uppercase font-bold text-gray-600'>Our Address</h1>
            <ul>
              <li>New York - 101010 Hudson</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copyright-text'>
        <h1 className='text-center py-5 font-semibold capitalize'>Copyright &copy; {year} || All Rights Reserver</h1>

      </div>
    </div>
  );
};

export default Footer;