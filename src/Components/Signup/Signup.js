import React from 'react';
import './Signup.css';
import signupAvatar from '../../assets/signup_avatar.png';

function Signup() {
  return (
    <div className="signup__outerbox">
      <div className="signup__innerbox">
        <div className="signup__avatar">
          <img src={signupAvatar} className="signup__avatar__img" alt="singup_image" />
        </div>
        <div className="signup__msg">
          <span className="msg__text">Sign up for a personal trianer to improve your results</span>
          <button className="signup__btn" type="submit">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
