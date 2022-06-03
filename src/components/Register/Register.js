import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';



const Register = () => {
  const [passerror, setpassError] = useState(null);
  let showError;
  const navigate = useNavigate();
  let location = useLocation();

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const [updateProfile, updating, errorPro] = useUpdateProfile(auth)


  // let passwordMatching;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => {

    if (data.password === data.confirmPassword) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });

    } else {
      setpassError("Confirm password do not match");
    }
  }

  let from = location.state?.from?.pathname || "/";

  const [token] = useToken(user || userGoogle);


useEffect(()=>{
  if (token) {
    navigate(from, { replace: true });
  }
},[token])

  if (loadingGoogle || loading || updating) {
    return <Loading></Loading>
  }


  if (errorGoogle || error || errorPro) {
    showError = <small className='text-red-600'>{error?.message || errorGoogle?.message || errorPro?.message}</small>
  }


  return (
    <main>
      <section className="">
        <h1 className='text-center capitalize text-3xl font-bold'>Registration</h1>
        <div className="row flex justify-center items-center ">
          <div className="card w-96 mx-auto bg-base-100 shadow-md ">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full  "
                    {...register("name", { required: true })} />
                  <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">Name is required</span>}
                  </label>
                </div>

                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full  "
                    {...register("email", { required: true, min: 4, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
                  <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">Email is required</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">Provide valid email</span>}
                  </label>
                </div>

                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your Password"
                    className="input input-bordered w-full  "
                    {...register("password", { required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i })} />
                  <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">Password is Required</span>}
                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-600">must include lower, upper, number, and special chars</span>}

                  </label>
                </div>


                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered w-full  "
                    {...register("confirmPassword", { required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i })} />
                  <label className="label">
                    {errors.confirmPassword?.type === 'required' && <span className="label-text-alt text-red-600">Confirm confirmPassword is Required</span>}
                    {errors.confirmPassword?.type === 'pattern' && <span className="label-text-alt text-red-600">must include lower, upper, number, and special chars</span>}
                    {<span className="label-text-alt text-red-600 capitalize">{passerror}</span>}
                  </label>
                </div>
                <span><small>Already have an Account?<Link className='text-[#45C991]' to={"/login"}>please Signin</Link></small></span> <br />
                {showError && showError}
                <div className='mt-2'>
                  <input className='btn w-full text-white' value={"Registration"} type="submit" />
                </div>
              </form>

              <div className="divider">OR</div>
              <button type='button' className='btn w-full text-white'
                onClick={async () => {
                  await signInWithGoogle();
                  await sendEmailVerification();
                }
                }>With Google</button>
            </div>
          </div>
        </div>


      </section>
    </main >
  );
};

export default Register;

