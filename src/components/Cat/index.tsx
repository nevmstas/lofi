import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import {
  CatBody,
  CatFace,
  CatTail,
  CatFrontLeftPaw,
  CatFrontRightPaw,
  CatBackPaw,
} from '../../assets';
import { breathingAnimation } from '../../utils/animations';

interface CatProps {
  breathingDuration?: number;
  tailCurlDuration?: number;
}

export const Cat: React.FC<CatProps> = ({
  breathingDuration = 90,
  tailCurlDuration = 120,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const breathScale = breathingAnimation({
    frame,
    fps,
    scale: [1, 1.05],
    duration: breathingDuration,
  });

  return (
    <div className="relative">
      <div className="absolute bottom-0 -right-5">
        <CatFrontLeftPaw />
      </div>

      <div
        className="origin-bottom"
        style={{
          transform: `scale(${breathScale})`,
        }}
      >
        <CatBody />
      </div>

      <div className="absolute top-[65%] right-5">
        <CatFace />
      </div>

      <div className="absolute -bottom-40 -left-10">
        <CatTail />
      </div>

      <div className="absolute -bottom-10 right-[72px]">
        <CatFrontRightPaw />
      </div>

      <div className="absolute -bottom-10 left-0">
        <CatBackPaw />
      </div>
    </div>
  );
};
