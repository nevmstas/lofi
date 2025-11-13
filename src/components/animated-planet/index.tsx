import React from 'react';
import { useCurrentFrame } from 'remotion';
import { glowAnimation } from '../../utils/animations';
import { ANIMATION_TIMING } from '../../compositions/mobile-scene/constants';

interface AnimatedPlanetProps {
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedPlanet: React.FC<AnimatedPlanetProps> = ({ className = '', style }) => {
  const frame = useCurrentFrame();

  const glowOpacity = glowAnimation({
    frame,
    duration: ANIMATION_TIMING.glowDuration,
    minOpacity: 0.2,
    maxOpacity: 0.6,
  });

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx="100" cy="99.9998" r="76.3441" fill="#FF52D1" />
      <circle cx="67.7419" cy="89.2475" r="20.4301" fill="#FFB6EB" />
      <circle cx="115.054" cy="99.9999" r="20.4301" fill="#FFB6EB" />
      <circle cx="101.075" cy="47.3119" r="12.9032" fill="#FFB6EB" />
      <circle cx="100" cy="100" r="100" fill="#FF52D1" fillOpacity={glowOpacity} />
      <circle cx="100" cy="100" r="87.0968" fill="#FF52D1" fillOpacity={glowOpacity} />
    </svg>
  );
};

