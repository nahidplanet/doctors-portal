import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import github from "../../../assets/icons/github.svg";
import google from "../../../assets/icons/google.svg";
import auth from '../../../firebase/firebase.init';
const SocialSingin = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  let from = location.state?.from?.pathname || "/";
  const handleSininGoogle = () => {
    signInWithGoogle();
  }
  const handleSininGithub = () => {
    signInWithGithub();
  }
  if (userGit || userGoogle) {
    navigate(from, { replace: true });
  }
  return (
    <div className="rounded-t mb-0 px-6 py-6">
    <div className="text-center mb-3">
      <h6 className="text-gray-600 text-sm font-bold">
        Sign in with
      </h6>
    </div>
    <div className="btn-wrapper text-center">
      <button
      onClick={handleSininGithub}
        className="  px-4 py-2 rounded  mr-2 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs"
        type="button"
      >
        <img
          alt="..."
          className="w-5 mr-1"
          src={github}
        />
        Github
      </button>
      <button
        className="bg-white   px-4 py-2 rounded  mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs"
        type="button"
        onClick={handleSininGoogle}
      >
        <img
          alt="..."
          className="w-5 mr-1"
          src={google}
        />
        Google
      </button>
    </div>
    <hr className="mt-6 border-b-1 border-gray-400" />
  </div>
  );
};

export default SocialSingin;