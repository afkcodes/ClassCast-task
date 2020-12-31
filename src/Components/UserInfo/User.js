import React from 'react';
import './user.css';

import user from '../../assets/avatar.png';

function User() {
  return (
    <div className="user_container">
      <div className="user__picture">
        <img className="user__picture" src={user} alt="Userimage" />
      </div>
      <div className="user__detail">
        <p className="user__name">Floyd Miles</p>
        <p className="account_type">Free Account</p>
      </div>
    </div>
  );
}

export default User;
