import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialSingin from '../Shared/SocialSingin/SocialSingin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
const Register = () => {
  const [agree,setAgree] = useState(false); 
  const navigate =  useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const handleRegistration = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,email,password);
    createUserWithEmailAndPassword(email,password);
  }
  if (user) {
    navigate("/home")
  }

  return (
    <main>
      <section className=" w-full mt-5 h-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border">
                {
                  <SocialSingin></SocialSingin>
                }
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-gray-500 text-center mb-3 font-bold">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form onSubmit={handleRegistration}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name='name'
                        required
                        className=" shadow-sm rounded-md px-3 py-3 border w-full"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name='email'
                        required
                        className=" shadow-sm rounded-md px-3 py-3 border w-full"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        name='password'
                        required
                        type="password"
                        className="shadow-sm rounded-md px-3 py-3 border w-full"
                        placeholder="Password"
                      />
                    </div>

                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                        
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                        />
                        <span className="ml-2 text-sm font-semibold text-gray-700">
                          Agree with doctor portal?
                        </span>
                      </label>
                    </div>

                    <div className="flex flex-wrap mt-6">
                      <div className="w-1/2"><small>Already Account? </small>
                      </div>
                      <div className="w-1/2 text-right">
                          <Link to={'/login'}> <small className='text-primary'>Sing in</small> </Link>
                      </div>
                    </div>


                    <div className="text-center mt-6">
                      <input  className="shadow-sm rounded-md px-3 py-3 border w-full bg-primary text-white font-bold cursor-pointer" type="submit" value="Register" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;

