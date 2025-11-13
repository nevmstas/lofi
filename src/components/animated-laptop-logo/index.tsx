import React from 'react';
import { useCurrentFrame } from 'remotion';
import { glowAnimation } from '../../utils/animations';
import { ANIMATION_TIMING } from '../../compositions/mobile-scene/constants';

interface AnimatedLaptopLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedLaptopLogo: React.FC<AnimatedLaptopLogoProps> = ({ className = '', style }) => {
  const frame = useCurrentFrame();

  const glowOpacity = glowAnimation({
    frame,
    duration: ANIMATION_TIMING.glowDuration,
    minOpacity: 0.3,
    maxOpacity: 0.8,
  });

  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx="48.1118" cy="48.1444" r="27.3621" fill="white" />
      <circle cx="48" cy="48" r="37" fill="white" fillOpacity={glowOpacity} />
      <circle cx="48" cy="48" r="48" fill="white" fillOpacity={glowOpacity * 0.5} />
    </svg>
  );
};

