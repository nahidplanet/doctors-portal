import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import SocialSingin from '../Shared/SocialSingin/SocialSingin';



const Login = () => {
  const navigate = useNavigate();
  let showError;
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSingIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    showError = <p className='text-red-600'> {error.message}</p>
  }
  return (
    <>

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
                    <form onSubmit={handleSingIn}>
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
                          style={{ transition: "all .15s ease" }}
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
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="flex flex-wrap mt-6">
                        <div className="w-1/2">
                          <Link to={'/forget'}> <small>Forgot password?</small> </Link>
                          <small></small>
                        </div>
                        <div className="w-1/2 text-right">
                          <Link to={'/register'}> <small>Create new account</small> </Link>
                        </div>
                      </div>
                      {
                        showError && showError
                      }

                      <div className="text-center mt-6">
                        <input className="shadow-sm rounded-md px-3 py-3 border w-full bg-primary text-white font-bold cursor-pointer" type="submit" value="Login" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;