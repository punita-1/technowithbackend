import React, { useEffect, useRef } from 'react';
import './timer.css';
import { motion } from 'framer-motion';

const TextVariants = {
  initial: {
    x: -500,
    opacity:0,

  },
  animate: {
    x: '0',
    opacity:'1',
    transition:
    {
      delay:'0.5',
      duration: 1,
      staggeredChildren:0.1,


    }
  }
}
const Timer = () => {
  const daysRef = useRef(null);
  const hoursRef = useRef(null);
  const minutesRef = useRef(null);
  const secondsRef = useRef(null);

  useEffect(() => {
    function startTimer() {
      const eventDate = new Date("04/5/2024").getTime();

      const updateClock = () => {
        const currentTime = new Date().getTime();
        const distance = eventDate - currentTime;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysRef.current) daysRef.current.innerText = days;
        if (hoursRef.current) hoursRef.current.innerText = hours;
        if (minutesRef.current) minutesRef.current.innerText = minutes;
        if (secondsRef.current) secondsRef.current.innerText = seconds;
      };

      updateClock();
      setInterval(updateClock, 1000);
    }

    startTimer();
  }, []);

  return (
    <motion.div className="timer-container" variants={TextVariants}>
      <div className="timer">
        <div className="timer-item">
          <span id="days" ref={daysRef} className="timer-value"></span>
          <span className="timer-label">Days</span>
        </div>
        <div className="timer-item">
          <span id="hours" ref={hoursRef} className="timer-value"></span>
          <span className="timer-label">Hours</span>
        </div>
        <div className="timer-item">
          <span id="minutes" ref={minutesRef} className="timer-value"></span>
          <span className="timer-label">Minutes</span>
        </div>
        <div className="timer-item">
          <span id="seconds" ref={secondsRef} className="timer-value"></span>
          <span className="timer-label">Seconds</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Timer;