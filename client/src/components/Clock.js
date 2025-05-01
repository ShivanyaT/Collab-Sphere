import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="clock">
      <p>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </p>
    </div>
  );
};

export default Clock;
