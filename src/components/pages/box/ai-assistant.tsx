'use client';

import React, { useEffect, useState } from 'react';
import Rive from '@rive-app/react-canvas';

const AiAssistant = () => {
  const [currentAnimation, setCurrentAnimation] = useState('close_trig');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set up visibility detection
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    const element = document.getElementById('ai-assistant');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setCurrentAnimation('bing_idle');
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div
      id="ai-assistant"
      style={{ height: '100%', width: '100%', maxWidth: '100%' }}
    >
      <Rive
        src="/assets/models/ball_ai_chat.riv"
        stateMachines="State Machine 1"
        animations={currentAnimation}
      />
    </div>
  );
};

export default AiAssistant;
