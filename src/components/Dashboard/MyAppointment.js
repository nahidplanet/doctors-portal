import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase/firebase.init"


const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const [getAppointment, setAppointment] = useState([]);



  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/myappointment?email=${email}`;
    fetch(url, {
      method: "GET",
      headers: {
        'athorizetion': `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => setAppointment(data))
  }, [user]);
  console.log(getAppointment);

  return (
    <div>
      <h1 className='text-2xl mb-4 text-center'>My Appointment </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">

            <thead>
              <tr>
                <th></th>
                <th>Service</th>
                <th>Email</th>
                <th>Time Color</th>
              </tr>
            </thead>
            <tbody>
              {
                getAppointment.map((appointment,index)=><tr key={appointment._id}>
                  <th>{index+1}</th>
                  <td>{appointment.serviceName}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.slot}</td>
                </tr>
                )
              }


            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;