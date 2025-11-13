import React from 'react';
import { Window as WindowSvg } from '../../assets';
import { AnimatedPlanet } from '../animated-planet';
import { FadeIn } from '../fade-in';
import { ANIMATION_TIMING } from '../../compositions/mobile-scene/constants';

export const Window: React.FC = () => {
  return (
    <div className="relative">
      <WindowSvg />

      <FadeIn
        from="scale"
        delay={ANIMATION_TIMING.windowEntranceDelay + 10}
        className="absolute left-1/2 top-[150px] -translate-x-1/2"
      >
        <AnimatedPlanet />
      </FadeIn>
    </div>
  );
};

