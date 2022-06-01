import React, { useEffect } from 'react';
import { useSendEmailVerification, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {

  const navigate = useNavigate();
  let location = useLocation();
  let showError;
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [sendEmailVerification, emailVeryfysending, emailVeryfyError] = useSendEmailVerification(auth);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

    signInWithEmailAndPassword(data.email, data.password);
  };
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || userGoogle) {
      navigate(from, { replace: true });
    }
  }, [userGoogle, user, from, navigate]);


  if (loading || loadingGoogle || emailVeryfysending) {
    <Loading></Loading>
  }

  if (error || errorGoogle || emailVeryfyError) {
    showError = <small className='text-red-600'>{error?.message || errorGoogle?.message || emailVeryfyError?.message}</small>
  }


  return (
    <div className='container '>
      <h1 className='text-3xl text-center capitalize font-bold'>login</h1>
      <div className="row flex justify-center items-center">
        <div className="card w-96 rounded-lg bg-base-100 shadow-xl p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <input type="email" className='input input-bordered w-full max-w-xs' placeholder="Email" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
              <label className="label">

                {errors?.email?.type === "required" && <span className="label-text-alt text-red-600 capitalize">this field is require</span>}
                {errors?.email?.type === "pattern" && <span className="label-text-alt text-red-600 capitalize">Please Provide a valid mail</span>}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" className='input input-bordered w-full max-w-xs' placeholder="password" {...register("password", { required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i })} />
              <label className="label">
                {errors?.password?.type === "required" && <span className="label-text-alt text-red-600 capitalize">this field is required</span>}
                {errors?.password?.type === "pattern" && <span className="label-text-alt text-red-600 capitalize">uppercase lowercase,number and special type</span>}

                <span className='block'><small><Link className='text-[#45C991]' to={"/forget"}>Forget Password?</Link></small></span>
              </label>
            </div>
            {showError && showError}
            <input value={"Login"} className="btn w-full mt-2" type="submit" />
            <span><small>New To Doctor Portal.? <Link className='text-[#45C991]' to={"/register"}>please Registration</Link></small></span> <br />

          </form>
          <div className=' divider'>OR</div>
          <button type='button' className='btn w-full text-white'
            onClick={async () => {
              await signInWithGoogle();
              await sendEmailVerification();
            }
            }>With Google</button>
        </div>

      </div>
    </div>
  );
};

export default Login;