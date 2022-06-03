import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-10">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>
          <h1 className='text-3xl text-purple-600 font-bold capitalize' >Dashboard</h1>
          <Outlet></Outlet>
          

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48  text-base-content ">
            {/* <!-- Sidebar content here -->  */}
            <li className='text-purple-600 font-bold text-sm'><Link to={"/dashboard/myappointment"}>My Appointment</Link></li>
            <li className='text-purple-600 font-bold text-sm'><Link to={"/dashboard/myreview"}>My Review</Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;