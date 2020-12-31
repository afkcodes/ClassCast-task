/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/prop-types */
import React from 'react';
import './trainers.css';
import { BsChatDots } from 'react-icons/bs';
import john from '../../assets/john.png';

function Trainer({ trainerName, profession }) {
  return (
    <div className="trainer__container">
      <div className="trainer__avatar">
        <img src={john} alt="" />
      </div>
      <div className="trainer__info">
        <span className="trainer__name">{trainerName}</span>
        <span className="trainer__profession">{profession}</span>
      </div>
      <div className="chat__icon__container">
        <BsChatDots className="trainer_chat_icon" />
      </div>
    </div>
  );
}

export default Trainer;
