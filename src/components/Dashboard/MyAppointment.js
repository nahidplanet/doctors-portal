
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase/firebase.init';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const patient = user?.email;
  const url = `http://localhost:5000/myappointment?patient=${patient}`


  const { isLoading, data } = useQuery("myAppointment", () => {
    return axios.post(url);
  })
  const myAppointmentDetails = data?.data;

  return (
    <div>
      <h1>Your Appointment </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>name</th>
              <th>Service</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              myAppointmentDetails?.map((a,index)=>  <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.userName}</td>
                <td>{a.serviceName}</td>
                <td>{a.slot}</td>
              </tr>)
            }
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;