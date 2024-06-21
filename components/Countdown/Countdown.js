'use client'
// components/Countdown.js
import { useEffect, useState } from 'react';

const Countdown = ({ targetDate, className }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="transition duration-500 transform">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className={`font-montserrat h-screen bg-gray-900 text-mudGreen ${className}`}>
      <div className="text-6xl">
        {timerComponents.length ? 
        <div className='flex gap-x-[50px]'>
            <div className='flex flex-col items-center text-mudGreen'>
            <p className='font-bold text-[20px] tracking-[0.3em] pb-[3px]'>{timeLeft.days}</p>
            <p className='uppercase font-semibold text-[12px] tracking-[0.3em]'>días</p> 
            </div>
            <div className='flex flex-col items-center text-mudGreen'>
            <p className='font-bold text-[20px] tracking-[0.3em] pb-[3px]'>{timeLeft.hours}</p>
            <p className='uppercase font-semibold text-[12px] tracking-[0.3em]'>horas</p> 
            </div>
            <div className='flex flex-col items-center text-mudGreen'>
            <p className='font-bold text-[20px] tracking-[0.3em] pb-[3px]'>{timeLeft.minutes}</p>
            <p className='uppercase font-semibold text-[12px] tracking-[0.3em]'>minutos</p> 
            </div>
        </div> : <span>--</span>}
      </div>
    </div>
  );
};

export default Countdown;
