import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import CoffeeCupSvg from '../../assets/coffe-cup.svg';



export const CoffeeCup: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steamParticles = [0, 1, 2].map((index) => {
    const offset = index * 20; // Stagger the steam particles
    const steamFrame = (frame + offset) % 60;
    const steamProgress = steamFrame / 60;
    
    const opacity = steamProgress < 0.5 
      ? steamProgress * 2 
      : 2 - steamProgress * 2;
    
    const yOffset = -steamProgress * 30;
    const xOffset = Math.sin(steamProgress * Math.PI * 3) * 8;

    return {
      opacity: opacity * 0.4,
      transform: `translate(${20 + xOffset}px, ${-30 + yOffset}px)`,
    };
  });

  return (
    <div style={{ position: 'relative' }}>
      {steamParticles.map((style, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.6)',
            filter: 'blur(4px)',
            ...style,
          }}
        />
      ))}
      
      {/* Coffee cup with floating animation */}
      <div>
        <CoffeeCupSvg />
      </div>
    </div>
  );
};

