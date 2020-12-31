import React from 'react';
import * as Icons from 'react-icons/ri';
import './usericons.css';

function UserIcons() {
  return (
    <div className="user__icon__container">
      <Icons.RiNotification4Line className="notification__icon" />
      <Icons.RiEqualizerLine className="settings_icon" />
    </div>
  );
}

export default UserIcons;
