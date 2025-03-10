'use client';

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('ja-JP', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  const formattedDate = currentTime.toLocaleDateString('ja-JP', {
    weekday: 'long',
  });

  return (
    <div className="header">
      <h1>蟹江町お散歩バス</h1>
      <div className="current-time">
        {formattedTime} ({formattedDate})
      </div>
    </div>
  );
};

export default Header;
