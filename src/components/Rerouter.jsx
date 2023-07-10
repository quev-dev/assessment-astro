import React, { useEffect, useState } from 'react';

export default function Rerouter({
  href = '/',
  time = 10000,
  text = 'Rerouting you to the home page...',
}) {
  const [secondsLeft, setSecondsLeft] = useState(Math.ceil(time / 1000));

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      window.location.href = href;
    }, time);

    return () => clearInterval(countdownInterval);
  }, [href, time]);

  return (
    <aside className='flex flex-col items-center justify-center bg-c-dark p-4 rounded-sm m-12'>
      <p className='font-bold'>{secondsLeft}</p>
      <p className='text-sm'>{text}</p>
    </aside>
  );
}
