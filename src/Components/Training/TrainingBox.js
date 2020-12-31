/* eslint-disable react/prop-types */
import React from 'react';
import './trainingbox.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

function TrainingBox({
  trainingType,
  trainingTime,
  warmUpDuration,
  trainingExcerciseTime,
  trainingExcercise,
  backGroundColor,
  fadedColor,
}) {
  return (
    <div style={{ ...fadedColor }} className="training__outerbox">
      <div style={{ ...backGroundColor }} className="training__innerbox">
        <div className="training__club">
          <span className="training__type">{trainingType}</span>
          <span className="training__type_club">Sport Club</span>
          <span className="training__type_time">{trainingTime}</span>
        </div>
        <div className="training_warmup">
          <span className="training_time">{warmUpDuration}</span>
          <span className="training_duration">min</span>
          <span className="training_type">Warm-up</span>
        </div>
        <div className="training__action_time">
          <span className="training_time">{trainingExcerciseTime}</span>
          <span className="training_duration">min</span>
          <span className="training_type">{trainingExcercise}</span>
        </div>
        <div className="more__training">
          <BsThreeDotsVertical size={35} />
        </div>
      </div>
    </div>
  );
}

export default TrainingBox;
