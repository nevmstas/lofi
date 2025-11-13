import React from 'react';
import TableSvg from '../../assets/table.svg';
import { Person } from '../person';
import { Cat } from '../cat';
import { Window } from '../window';
import { FadeIn } from '../fade-in';
import { ANIMATION_TIMING, Z_INDEX } from '../../compositions/mobile-scene/constants';

interface SceneProps {
  backgroundColor?: string;
}

export const Scene: React.FC<SceneProps> = ({ backgroundColor = '#4D25AA' }) => {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ backgroundColor }}
    >
      <FadeIn
        from="top"
        delay={ANIMATION_TIMING.windowEntranceDelay}
        distance={150}
        className="absolute top-[400px] left-2"
        style={{ zIndex: Z_INDEX.window }}
      >
        <Window />
      </FadeIn>

      <FadeIn
        from="bottom"
        delay={ANIMATION_TIMING.tableEntranceDelay}
        distance={150}
        className="absolute bottom-0 -left-4 right-0 flex items-end justify-center"
        style={{ zIndex: Z_INDEX.table }}
      >
        <TableSvg />
      </FadeIn>

      <FadeIn
        from="right"
        delay={ANIMATION_TIMING.personEntranceDelay}
        distance={200}
        className="absolute bottom-[648px] left-190"
        style={{ zIndex: Z_INDEX.person }}
      >
        <Person
          eyeMovementDuration={ANIMATION_TIMING.eyeMovementDuration}
          blinkInterval={ANIMATION_TIMING.blinkInterval}
        />
      </FadeIn>

      <FadeIn
        from="left"
        delay={ANIMATION_TIMING.catEntranceDelay}
        distance={200}
        config={{
          damping: 80,
          mass: 0.8,
        }}
        className="absolute bottom-[648px] left-20"
        style={{ zIndex: Z_INDEX.cat }}
      >
        <Cat
          breathingDuration={ANIMATION_TIMING.breathingDuration}
          tailCurlDuration={ANIMATION_TIMING.tailCurlDuration}
        />
      </FadeIn>
    </div>
  );
};
