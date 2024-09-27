'use client';

import React, { useEffect, useState } from 'react';
import Rive from '@rive-app/react-canvas';

const AiAssistant = () => {
  const [currentAnimation, setCurrentAnimation] = useState('close_trig');

  useEffect(() => {
    setTimeout(() => {
      setCurrentAnimation('bing_idle');
    }, 500);
  }, []);

  return (
    <div style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
      {[...Array(1)].map((_, index) => (
        <Rive
          key={index}
          src="/assets/models/ball_ai_chat.riv"
          stateMachines="State Machine 1"
          animations={currentAnimation}
          // Add the currentAnimation to control the animation state
        />
      ))}
    </div>
  );
};

export default AiAssistant;
