import React from 'react';
import { useForm } from 'react-hook-form';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init'
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import {  useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  const { register, handleSubmit, resetField, formState: { errors } } = useForm();
  const onSubmit = async data => {
    await sendPasswordResetEmail(data.email);
    await toast("Sent Email");
    await resetField("email");
  };
  if (sending) {
    return <Loading></Loading>;
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="card w-96 bg-base-100 p-10 shadow-lg ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" className="input input-bordered w-full  " placeholder="Your Email" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
            <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">Email is Required</span>}
              {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">Please Provide a valid email</span>}
            </label>
          </div>
          <div className='flex justify-between '>
            <input className='btn text-center' value={"Send"} type="submit" />
          </div>
        </form>
        <button className='btn mt-3 btn-primary text-center bg-secondary text-white' onClick={()=>navigate('/login')}  > Back to Login </button>

      </div>

    </div>
  );
};

export default ForgetPassword;