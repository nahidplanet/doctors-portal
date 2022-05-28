import { format } from 'date-fns';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({ slotDetails, dateIs }) => {
  const { name, slots } = slotDetails;
  const date = format(dateIs, 'pp');

  const handleBooking = (e) => {
    e.preventDefault();
    const serviceName = e.target.serviceName.value;
    const date = e.target.date.value;
    const slot = e.target.slot.value;
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    const bookingInfo = {serviceName:serviceName, date:date, slot:slot, userName:userName, email:email, phone:phone}
    console.log(bookingInfo); 

    const url = `http://localhost:5000/booking`;
    fetch(url,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(bookingInfo)
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.acknowledged === true) {
        toast("Booking Successfull");
      }
    })

    e.target.reset()
  }

  return (

    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">{name}</h3>

          <form onSubmit={handleBooking}>
            <input required type="text" name='serviceName' readOnly value={name} className="input mt-2 input-bordered w-full " />
            <input required type="text" name='date' value={date} readOnly className="input mt-2 input-bordered w-full " />

            <select name="slot" className="select select-bordered w-full mt-2">
              {slots.map(item => <option value={item}>{item}</option>)}
            </select>
            <input required type="text" name='userName' placeholder="Your Name" className="input mt-2 input-bordered w-full " />
            <input required type="email" name='email' placeholder="Email" className="input mt-2 input-bordered w-full " />
            <input required type="number" name='phone' placeholder="Phone Number" className="input mt-2 input-bordered w-full " />


            <input type="submit" value="submit" className="input mt-4 capitalize input-bordered text-center btn btn-primary text-white font-bold w-full " />

          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;