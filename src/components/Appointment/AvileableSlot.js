import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import SingleSlot from './SingleSlot';
import { useQuery } from 'react-query'
import Loading from "../Shared/Loading.js";
import { format } from 'date-fns';
import axios from 'axios';

const AvileableSlot = ({ date }) => {

  const [slotDetails, setSlotDetails] = useState(null);
  const [service, setService] = useState([]);

  const formateDate = format(date, "PP");
  const url = `http://localhost:5000/avilable?date=${formateDate}`;

  const { isLoading,  data, refetch} = useQuery(['balsal', formateDate], () => {
    return axios.get(url)
  });

  if (isLoading) {
    <Loading></Loading>
  }

  return (
    <div className='mb-40'>
      <div className='text-center my-10'>
        <h1 className='text-[#19D3AE] text-textMain text-xl font-semibold my-20'>Available slots for Teeth Orthodontics.</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          data?.data?.map(slot => <SingleSlot key={slot._id} slot={slot} openModal={setSlotDetails}></SingleSlot>)
        }
      </div>
      <div>
        {
          slotDetails && <BookingModal refetch={refetch} dateIs={date} slotDetails={slotDetails}></BookingModal>
        }
      </div>
    </div>
  );
};

export default AvileableSlot;