import { AbsoluteFill } from 'remotion';
import { Scene } from '../../components/Scene';

export const MobileScene: React.FC = () => {
  return (
    <AbsoluteFill className="bg-[#E8DCC7]">
      <Scene />
    </AbsoluteFill>
  );
};

