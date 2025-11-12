import { useCurrentFrame, useVideoConfig } from 'remotion';
import { ManWithLaptop, ManEyes } from '../../assets';
import { eyeMovement, springEntrance } from '../../utils/animations';

interface PersonProps {
  entranceDelay?: number;
  eyeMovementDuration?: number;
  blinkInterval?: number;
  className?: string;
}

export const Person: React.FC<PersonProps> = ({
  entranceDelay = 0,
  eyeMovementDuration = 180,
  blinkInterval = 150,
  className = '',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = springEntrance({
    frame,
    fps,
    delay: entranceDelay,
  });

  const eyeAnim = eyeMovement({
    frame,
    duration: eyeMovementDuration,
    blinkInterval,
  });

  return (
    <div
      className={`absolute ${className}`}
      style={{
        opacity: entrance,
        transform: `translateX(-50%) scale(${entrance})`,
      }}
    >
      <div className="relative" >
        {/* Man with laptop base */}
        <ManWithLaptop />

        {/* Animated eyes */}
        <div
          className="absolute left-85 top-45"
          style={{
            transform: `translate(calc(-50% + ${eyeAnim.x}px), ${eyeAnim.y}px) scaleY(${eyeAnim.scaleY})`,
            transformOrigin: 'center',
          }}
        >
          <ManEyes />
        </div>
      </div>
    </div>
  );
};

