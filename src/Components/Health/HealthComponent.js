/* eslint-disable react/prop-types */
import React from 'react';
import './health.css';
import { RiHeartPulseFill, RiMoonClearFill } from 'react-icons/ri';
import { GiAppleSeeds } from 'react-icons/gi';

const styles = {
  iconStyle: {
    height: '28px',
    width: '28px',
  },
  iconContainerStyle: {
    height: '40px',
    width: '40px',
    background: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
  },
  innerHealthStyle: {
    height: '100%',
    width: '90%',
    borderRadius: '10px',
  },
};

function HealthComponent({
  iconFillStyle,
  background,
  sleepTime,
  unit,
  innerConatainerColor,
  type,
}) {
  let healthIcon = <RiMoonClearFill style={{ ...styles.iconStyle, ...iconFillStyle }} />;
  if (type === 'heart') {
    healthIcon = <RiHeartPulseFill style={{ ...styles.iconStyle, ...iconFillStyle }} />;
  }
  if (type === 'energy') {
    healthIcon = <GiAppleSeeds style={{ ...styles.iconStyle, ...iconFillStyle }} />;
  }
  return (
    <div className="health__component">
      <div className="health__timer">
        <span className="health__text">{sleepTime}</span>
      </div>
      <div className="health__prop">
        <div style={{ ...styles.iconContainerStyle, ...background }}>{healthIcon}</div>
        <span className="unit__text">{unit}</span>
      </div>
      <div className="health__progress_outer">
        <div style={{ ...styles.innerHealthStyle, ...innerConatainerColor }} />
      </div>
    </div>
  );
}

export default HealthComponent;
