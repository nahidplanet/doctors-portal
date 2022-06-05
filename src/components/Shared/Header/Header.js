import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import { signOut } from "firebase/auth";


const Header = () => {
  const [user] = useAuthState(auth);

  const navitemsis = <>
    <li><CustomLink to={'/home'}>Home</CustomLink></li>
    <li><CustomLink to={'/about'}>About</CustomLink></li>
    <li><CustomLink to={'/appointment'}>Appointment</CustomLink></li>
    <li><CustomLink to={'/reviews'}>Reviews</CustomLink></li>
    <li><CustomLink to={'/contacts'}>Contact</CustomLink></li>
    {
      user ?
        <>
          <li><CustomLink to={'/dashboard'}>Dashboard</CustomLink></li>

          <li onClick={() => {
            signOut(auth)
            localStorage.removeItem("accessToken");
          }}> <a className=''> <small>{user.displayName}</small> Logout</a></li>
        </>
        :
        <li><CustomLink to={'/login'}>Login</CustomLink></li>
    }
  </>
  return (
    <div className="navbar ">
      {/* responsive start  */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
            {navitemsis}
          </ul>
        </div>
        <Link to={'/home'} className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
      </div>
      {/* responcive end  */}

      {/* desktop start  */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu lg:text-sm menu-horizontal p-0">
          {navitemsis}
        </ul>
      </div>
      

    </div>
  );
};

export default Header;


