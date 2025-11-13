import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Scene } from '../../components/scene';

export const MobileScene: React.FC = () => {
  return (
    <AbsoluteFill className="bg-[#4D25AA]">
      <Scene />
    </AbsoluteFill>
  );
};

