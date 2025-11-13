import React from 'react';
import { useCurrentFrame } from 'remotion';
import { ManWithLaptop, ManEyes } from '../../assets';
import { AnimatedLaptopLogo } from '../animated-laptop-logo';
import { eyeMovement } from '../../utils/animations';

interface PersonProps {
  eyeMovementDuration?: number;
  blinkInterval?: number;
}

export const Person: React.FC<PersonProps> = ({
  eyeMovementDuration = 180,
  blinkInterval = 150,
}) => {
  const frame = useCurrentFrame();

  const eyeAnim = eyeMovement({
    frame,
    duration: eyeMovementDuration,
    blinkInterval,
  });

  return (
    <div className="relative -translate-x-1/2">
      <ManWithLaptop />

      <div className="absolute left-[260px] top-[400px] -translate-x-1/2">
        <AnimatedLaptopLogo />
      </div>

      <div
        className="absolute right-32 top-45 origin-center"
        style={{
          transform: `translate(calc(-50% + ${eyeAnim.x}px), ${eyeAnim.y}px) scaleY(${eyeAnim.scaleY})`,
        }}
      >
        <ManEyes />
      </div>
    </div>
  );
};
